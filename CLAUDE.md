# Gulyás Róbert – Personal Brand Website

## Project Overview

Personal brand website for Gulyás Róbert, built with Next.js 16 (App Router), Tailwind CSS v4, and Supabase. Bilingual (HU/EN) with newsletter subscription.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **i18n:** next-intl v4 (routing via `[locale]` dynamic segment)
- **Database:** Supabase (newsletter subscribers)
- **Hosting:** Vercel
- **Forms:** React Hook Form + Zod v4

## Important: Next.js 16 Breaking Changes

- `params` and `searchParams` are **Promises** — always `await` them
- Middleware file is `proxy.ts` (not `middleware.ts`)
- `fetch()` is NOT cached by default
- Use `zod/v4` import path (not `zod`)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout (passthrough)
│   ├── [locale]/
│   │   ├── layout.tsx             # Locale layout (fonts, metadata, Header/Footer)
│   │   ├── page.tsx               # Homepage (sections assembly)
│   │   └── adatvedelem/page.tsx   # Privacy policy
│   └── api/newsletter/route.ts   # Newsletter signup API
├── components/
│   ├── layout/ (Header, Footer)
│   ├── sections/ (Hero, About, Career, Speaking, Newsletter)
│   └── ui/ (Button, Card, SectionHeading, TimelineItem)
├── data/ (career.ts, speaking.ts, site.ts)
├── i18n/ (routing.ts, request.ts, navigation.ts)
├── lib/ (supabase.ts, validators.ts)
└── proxy.ts                       # next-intl middleware
messages/
├── hu.json
└── en.json
```

## Content Editing

- **Career entries:** Edit `src/data/career.ts`
- **Speaking entries:** Edit `src/data/speaking.ts`
- **Site constants:** Edit `src/data/site.ts`
- **Translations:** Edit `messages/hu.json` and `messages/en.json`

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run start` — Start production server

## Environment Variables

Required in `.env.local` (and Vercel dashboard):
- `NEXT_PUBLIC_SUPABASE_URL` — Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` — Supabase service role key (server-side only)

## Supabase Setup

Run this SQL in Supabase SQL Editor to create the subscribers table:

```sql
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  subscribed_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  confirmed BOOLEAN DEFAULT false NOT NULL,
  gdpr_consent BOOLEAN DEFAULT true NOT NULL,
  gdpr_consent_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  unsubscribed_at TIMESTAMPTZ,
  source TEXT DEFAULT 'website',
  locale TEXT DEFAULT 'hu'
);

CREATE INDEX idx_subscribers_email ON subscribers (email);
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON subscribers FOR INSERT TO anon WITH CHECK (true);
```

## Future Extensions

- `/szolgaltatasok` — Services page (add `services.ts` data file)
- `/blog` — Blog with MDX files in `src/content/blog/`
- Stripe Checkout for payments
- Resend/Mailgun for newsletter sending
