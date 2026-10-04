import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";
import { company } from "@/lib/content";

// Runs as a Node.js serverless function on Vercel.
export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

// Sends the contact form through Gmail SMTP (preferred, see GMAIL_* below) or
// Resend. The Resend notes follow; Gmail needs GMAIL_USER and a 16-character
// Google App Password in GMAIL_APP_PASSWORD.
//
// Resend (https://resend.com) — the email
// provider Vercel's own Next.js examples use, and the fastest path to a
// working "from Vercel" contact form. To turn this on:
//
//   1. Sign up at resend.com and create an API key.
//   2. Add RESEND_API_KEY as an environment variable in the Vercel project
//      (Project Settings -> Environment Variables), and locally in .env.local.
//   3. Optionally set CONTACT_TO_EMAIL to override where messages land
//      (defaults to company.email from lib/content.ts).
//
// Without a verified sending domain, Resend's shared "onboarding@resend.dev"
// sender only delivers to the email address you signed up to Resend with —
// fine for testing, not for a live inbox. Verify a domain (Resend dashboard
// -> Domains) and set CONTACT_FROM_EMAIL to an address on it before relying
// on this for real inquiries.
//
// If RESEND_API_KEY isn't set at all (e.g. running this template locally
// with no keys yet), submissions are logged instead of sent so the form
// still works end-to-end during development.
export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = payload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL || company.email;
  const subject = `New inquiry from ${name}`;
  const text = `${message}

—
${name} <${email}>`;

  // Option 1: Gmail SMTP (GMAIL_USER + GMAIL_APP_PASSWORD).
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  if (gmailUser && gmailPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user: gmailUser, pass: gmailPass },
      });
      await transporter.sendMail({
        from: `"Creatpixl Website" <${gmailUser}>`,
        to,
        replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
        subject,
        text,
      });
      return NextResponse.json({ ok: true, sent: true });
    } catch (err) {
      console.error("[contact] Gmail SMTP error", err);
      return NextResponse.json({ error: "Something went wrong sending your message." }, { status: 500 });
    }
  }

  // Option 2: Resend.
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL || "Creatpixl Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.log("[contact] No GMAIL_APP_PASSWORD or RESEND_API_KEY set — logging instead of sending", {
      name,
      email,
      message,
    });
    return NextResponse.json({ ok: true, sent: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New inquiry from ${name}`,
      text: `${message}\n\n—\n${name} <${email}>`,
    });

    if (error) {
      console.error("[contact] Resend error", error);
      return NextResponse.json(
        { error: "The email service rejected this message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, sent: true });
  } catch (err) {
    console.error("[contact] unexpected error sending email", err);
    return NextResponse.json({ error: "Something went wrong sending your message." }, { status: 500 });
  }
}
