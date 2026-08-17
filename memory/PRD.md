# Susan Tumuhairwe — Personal Brand Website (PRD)

## Original Problem Statement
Premium, high-converting personal brand website for Susan Tumuhairwe, operating across three
distinct sub-brands under one personal umbrella. Four-page framework: a Master Hub that routes
to three dedicated tracks — Nourish & Thrive (health), Women Prosper (finance/entrepreneurship),
and Speaking & Workshops (corporate B2B). Unified master identity with distinct sub-brand moods.
Responsive, award-worthy motion and craft.

## User Choices
- Placeholder copy + professional stock photos (swappable later).
- Purely informational except the Speaking & Workshops booking/inquiry form (functional).
- Dedicated corporate inquiry form (org name, event date, audience size, etc.).
- Design judgment left to the builder; no fixed brand colors/fonts.

## Architecture
- Frontend: React 19 + React Router (4 routes), Tailwind, framer-motion (reveals/parallax),
  lenis (smooth scroll), react-fast-marquee. Shadcn UI for the form.
- Backend: FastAPI + MongoDB (motor). Inquiries persisted.
- Design system: warm linen base (#F9F6F0), Cormorant Garamond + Manrope + Playfair Display.
  Sub-brand accents — Sage #6B7F60 (health), Gold #D49A3E (business), Navy #1E2B3C (workshops).

## Core Requirements (static)
- Master Hub: kinetic masked hero, bio + stats, editorial marquee, 3-card Crossroads router.
- Nourish & Thrive: split hero, specialties bento, supplementation, coaching packages.
- Women Prosper: overlapping parallax hero, numbered manifesto, programs, testimonials.
- Speaking & Workshops: dark executive hero, topics grid, formats, working inquiry form.

## Implemented (2026-08-17)
- All 4 pages built with premium motion and per-track theming.
- Working inquiry API: POST/GET /api/inquiries (MongoDB). Success/error toasts, validation.
- Shared glass Navbar (theme-aware) + Footer. Responsive + mobile menu.
- E2E tested: backend 100%, frontend 100% (iteration_1.json).

## Backlog / Remaining
- P1: Admin-gated view for submitted inquiries (currently public GET).
- P2: Replace native date input with shadcn Calendar+Popover for design consistency.
- P2: Swap placeholder copy/photos with Susan's real content when provided.
- P2: Email notification to Susan on new inquiry (Resend).

## Next Tasks
- Await Susan's real bio/photos/testimonials for content swap.
