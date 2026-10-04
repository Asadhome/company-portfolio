# Creatpixl

A company portfolio/marketing site built with Next.js (App Router) + TypeScript for fast load times, deployed on Vercel.

## Editing content

All copy — company name, tagline, services, stack, case studies, contact text — lives in one file:

```
lib/content.ts
```

Update that file and every section (Hero, Services, Stack, Work, Contact) picks up the change automatically. You shouldn't need to touch component files just to update text. The header logo mark and titlebar text also derive from `company.name`, so renaming the brand is a one-line change.

## Before you launch

A couple of things in this build are placeholders and should be swapped for real values:

- **Contact email** — `company.email` in `lib/content.ts` (currently `createpixl55@gmail.com`; the contact form delivers there via Resend).
- **Case studies** — the `projects` array in `lib/content.ts` lists real past client work (Konmari, PlayMonster, Fashionphile, etc.) pulled from the team's résumés. Confirm you're clear to publicly reference each client as a case study before this goes live — some client relationships may be confidential or require permission to name publicly.
- **`/og-image.png`** in `public/` — a screenshot-based social-preview image. Regenerate it any time the hero content changes (a full-page screenshot of the live site works).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Contact form

`app/api/contact/route.ts` sends submissions through [Resend](https://resend.com). Without `RESEND_API_KEY` set, it logs submissions instead of sending them, so the form still works end-to-end with zero setup in local dev.

To make it actually deliver to your inbox:

1. Sign up at [resend.com](https://resend.com) and create an API key.
2. Set `RESEND_API_KEY` — locally in `.env.local`, and in Vercel under Project Settings → Environment Variables.
3. Without a verified domain, Resend's shared sender only delivers to the email address you signed up to Resend with (fine for testing the form works). To receive messages at a real inbox, verify a domain in the Resend dashboard and set `CONTACT_FROM_EMAIL` to an address on it.

See `.env.example` for all the variables this route reads, including `CONTACT_TO_EMAIL` if messages should land somewhere other than `company.email`.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In the [Vercel dashboard](https://vercel.com/new), import the repository — Vercel auto-detects Next.js, no config needed.
3. Add `RESEND_API_KEY` (and any other variables from `.env.example` you're using) under Project Settings → Environment Variables before deploying, so the contact form sends real email from the first deploy.

Alternatively, from this folder with the [Vercel CLI](https://vercel.com/docs/cli) installed:

```bash
npm i -g vercel
vercel
```

## Structure

```
app/            routes (page.tsx, layout.tsx, api/contact)
components/     UI components, each with a co-located .module.css
lib/content.ts  all site copy — edit this to update content
public/         static assets, incl. og-image.png (social preview)
```
