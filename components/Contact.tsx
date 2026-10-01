"use client";

import { useState, type FormEvent } from "react";
import { company, contact } from "@/lib/content";
import { contactSnippets } from "@/lib/codeSnippets";
import SectionBackground from "./SectionBackground";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(body?.error || "Request failed");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(company.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the address is shown as selectable text.
    }
  }

  return (
    <section id="contact" className={`section ${styles.bg}`}>
      <SectionBackground snippets={contactSnippets} />
      <div className="container">
        <p className="section-label">
          <span className="idx mono">04</span>
          <span className="mono">contact.sh</span>
        </p>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.heading}>{contact.heading}</h2>
            <p className={styles.body}>{contact.body}</p>
            <button type="button" className={`mono ${styles.emailBtn}`} onClick={handleCopyEmail}>
              {company.email}
              <span className={styles.copyState}>{copied ? "copied" : "copy"}</span>
            </button>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span className="mono">name</span>
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label className={styles.field}>
              <span className="mono">email</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label className={styles.field}>
              <span className="mono">message</span>
              <textarea name="message" rows={4} required />
            </label>
            <button type="submit" className={`mono ${styles.submit}`} disabled={status === "sending"}>
              {status === "sending" ? "sending..." : "send message"}
            </button>
            {status === "sent" && (
              <p className={`mono ${styles.status}`} role="status">
                message received — we&apos;ll reply by email shortly.
              </p>
            )}
            {status === "error" && (
              <p className={`mono ${styles.statusError}`} role="status">
                {errorMessage || "something went wrong"} — email us directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
