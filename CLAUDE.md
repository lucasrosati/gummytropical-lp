# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for "Gummy Hair Tropical" product launch — a lead-capture page in Brazilian Portuguese (`pt-BR`). Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint (extends `next/core-web-vitals` + `next/typescript`)

## Architecture

**Single-page landing page** composed of section components rendered sequentially in `src/app/page.tsx`:
Header → Hero → Countdown → Lifestyle → ProductShowcase → Benefits → FinalCta → Footer

**Lead capture flow:**
- `src/components/LeadForm.tsx` — client component with form state (idle/loading/success/error), posts to `/api/leads`
- `src/app/api/leads/route.ts` — API route that validates `{ nome, email, telefone }` and inserts into Supabase. Error messages are in Portuguese.
- `src/lib/db.ts` — Supabase client (`@supabase/supabase-js`) with `insertLead`, `getAllLeads`, `deleteAllLeads` functions. Requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` env vars. Table: `leads` (id, nome, email, telefone, created_at).

**Fonts:** Plus Jakarta Sans (`font-heading`, var `--font-jakarta`) and Poppins (`font-body`, var `--font-poppins`), loaded via `next/font/google` in `layout.tsx`. Referenced in Tailwind config as CSS variables.

**Design tokens:** Brand colors, shadows, and border-radius defined in `tailwind.config.ts` under `theme.extend`. Key namespace is `brand-*` (e.g., `bg-brand-bg`, `text-brand-cta`). Notable gradients use inline styles (pink `#FE008E` to orange `#FFA200`).

**Path alias:** `@/*` maps to `./src/*`.

## Figma Reference

`figma-ref/` contains exported Figma screenshots and assets organized by section (header, hero, countdown, etc.). Use these as visual reference when implementing or adjusting UI. Production assets go in `public/images/`.
