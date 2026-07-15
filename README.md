# Basecrew — Marketing Site

A production-ready marketing website for Basecrew, rental management software
for independent ski, snowboard, and bike rental shops. Built to run entirely
on Vercel's free Hobby plan — no database, no auth, no paid infrastructure.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (custom "alpine night" design system, no component library dependency)
- Framer Motion for subtle motion
- Lucide icons
- `next/font` (Bricolage Grotesque, Inter, IBM Plex Mono)
- Vercel Analytics + Speed Insights
- Web3Forms for the contact form (free tier, no backend required)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: `next/font` fetches Google Fonts at build time, so the machine
> running `npm run build` needs normal internet access. This isn't required
> at runtime — fonts are self-hosted by Next.js after the build.

## Wiring up the contact form (optional, free)

The form at the bottom of the page posts directly to Web3Forms, a free
service that emails you submissions with no backend code.

**Important:** Web3Forms routes email based on the access key itself — the
destination address is set when you *generate* the key, not by anything in
this codebase. To send demo requests to `lucashayesmiller@gmail.com`:

1. Go to https://web3forms.com and generate a free access key **using
   `lucashayesmiller@gmail.com`** (verify that inbox when they email you —
   the key won't activate until you do).
2. Copy `.env.example` to `.env.local` and paste the key:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. Add the same environment variable in your Vercel project settings
   (Project → Settings → Environment Variables) before deploying.

If you skip this step, the form still renders and validates correctly, it
just won't send anywhere — useful for previewing before you're ready to
collect real leads. If a submission ever fails client-side, the form shows a
"email us directly" link that opens a `mailto:` to the same address as a
fallback, so a bad network moment doesn't lose a lead.

## Deploying to Vercel (free Hobby plan)

1. Push this project to a GitHub repository.
2. In Vercel, click **Add New → Project** and import the repo.
3. Framework preset: Next.js (auto-detected). No build config changes needed.
4. Add the `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable if using the contact form.
5. Deploy. The whole site is statically generated — it costs $0/month on Hobby.

## Before you launch

A few things are intentionally left as placeholders and marked `TODO` in the
code — replace these before going live:

- **Trust bar stats** (`components/trust-bar.tsx`) — uptime and support
  response time are placeholders; replace with your real numbers once you
  have them. (Years-in-business, equipment-managed, and rentals-processed
  stats were intentionally removed until there are real figures to back them.)
- **Testimonials** (`components/testimonials.tsx`) — swap in real,
  permission-cleared customer quotes and headshots (currently initials).
- **Trusted-by logos** (`components/trusted-by.tsx`) — currently text
  wordmarks; swap for real shop logos (with permission) if available.
- **Privacy Policy / Terms of Service** (`app/privacy`, `app/terms`) —
  structural placeholders only; have these reviewed by counsel.
- **Domain** — the canonical URL is currently set to `https://www.getbasecrew.com`
  in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`. This is an
  **unverified placeholder** — confirm actual availability of getbasecrew.com
  (or your preferred domain) with a registrar, and run a trademark search on
  "Basecrew," before locking this in. See the rebrand section below for what
  was and wasn't checked.
- **Social links** — the footer links to a placeholder Instagram URL.
- **Product demo video** (`components/product-demo.tsx`) — currently an
  animated placeholder, not a real video. Record a 90-second walkthrough and
  wire it up (embed or self-hosted) before relying on this section to convert.

## Project structure

```
app/
  layout.tsx        Root layout: fonts, metadata, JSON-LD, analytics
  page.tsx           Homepage — assembles all sections
  privacy/page.tsx    Privacy policy placeholder
  terms/page.tsx      Terms of service placeholder
  opengraph-image.tsx Dynamically generated OG image (no image asset needed)
  robots.ts / sitemap.ts
components/
  ui/                 Button, Card, and the trail-rating badge (signature element)
  nav.tsx, footer.tsx, hero.tsx, ...one file per marketing section
  mockups.tsx         CSS-built dashboard/phone/tablet product mockups (no screenshots needed)
  trail-divider.tsx   Scroll-drawn elevation-line divider used between sections
lib/utils.ts          `cn()` class-merging helper
```

## Design notes

The visual system borrows directly from ski trail signage: a deep alpine-navy
background, a signal-orange accent (like a piste marker flag), and a
recurring green-circle / blue-square / black-diamond badge used to rate
feature complexity instead of a generic tag. No stock photography or image
assets are required — all product "screenshots" are built from CSS/SVG so the
whole site works before you have real product photography.

## Responsive audit (latest update)

No headless browser was available in the environment this was built in
(Chromium is snap-only on this base image, and snap doesn't run in
containers), so this was a careful manual audit of every breakpoint in the
Tailwind classes rather than a visual/screenshot pass. Worth a real
device/DevTools check before launch, especially at the ~640–767px tablet
range and on a genuinely small phone (iPhone SE-class, ~375px).

**One real bug, not just a responsive nit:** `components/ui/button.tsx`
used `h-13` for the `lg` button size. Tailwind's default spacing scale
skips 13 (it jumps 12 → 14), so that class silently generated nothing —
every `lg` button on the site (both hero CTAs, every pricing card CTA, the
product demo CTA, the contact form submit button) had no explicit height,
just whatever the text and horizontal padding produced. Fixed to
`h-[3.25rem]`. This affected every screen size, but matters most on mobile
where it's also a touch-target size issue.

Other fixes, roughly in order of how likely they were to actually break
something:

- **Dashboard mockup stat strip** (`components/mockups.tsx`) — the
  5-column Out/Total/Setup/Overdue/Done strip was cramped into ~50px
  columns on phones. Now wraps to 3 columns below `sm`, 5 above it.
- **Solution-section tablet mockups** — an unprefixed `grid-cols-2` meant
  two mockup cards per row on phones, each too narrow for rows like "Edge
  chip · Ski #114" without overflowing. Now stacks to one column below `sm`.
- **Pricing's "Multi-location or resort?" card** — text and a
  non-shrinking button were forced into one row at every screen size
  (`shrink-0` button + no `min-w-0` on the text block is a classic
  flexbox overflow trap). Now stacks vertically below `sm`.
- **Footer's 4-column layout** switched to a row at `sm` (640px), which is
  tight for a brand block + 3 nav columns. Pushed to `md` (768px) and
  added `flex-wrap` as a safety net.
- **Benefits and TrustBar stat grids** were `grid-cols-2` on phones with
  multi-word labels ("Unlimited staff logins, every plan") that would wrap
  to 3+ lines in a half-width column. Both now go 1 → 2 → 4 columns instead
  of jumping straight to 2.
- **Hero's overlapping phone mockup** was `hidden sm:block`, but the
  absolute-positioned overlap only makes visual sense once the two-column
  desktop grid is active — between `sm` and `lg` it could clip against the
  section's `overflow-hidden`. Changed to `hidden lg:block`.
- **Mobile menu button** had a 22×22px hit area with no padding, under the
  ~44px touch-target guideline. Added `p-2 -m-2` (bigger tap target,
  unchanged visual size).
- **Dashboard mockup order rows and fake URL bar** got `flex-wrap` /
  `truncate` + `min-w-0` safety nets so long content degrades gracefully
  instead of overflowing.
- **Phone mockup** got a `max-w-[80vw]` cap on its fixed 230px width for
  extremely narrow viewports.

## Real product screens, copy cleanup, and 1-week guarantee

- **Mockups rebuilt from real screenshots.** The dashboard, phone, and
  workflow tiles in `components/mockups.tsx` and `components/product-screens.tsx`
  are now modeled on actual screens from the production app (Today's Rentals
  queue, the Out/Total/Setup/Overdue/Done stat strip, status pills like
  "Needs Setup" / "No Waiver" / "Minor", the Setup/Date/Return action row,
  and the DIN-setting calculator on the equipment setup screen). Still
  built from CSS/SVG with placeholder names, not literal screenshots or
  real customer data.
- **Em dashes removed** from all user-visible copy across the site
  (components, pages, metadata) and rewritten as periods, colons, commas,
  or parentheses depending on context. Code comments were left as-is since
  they aren't rendered on the site.
- **"Live within 1 week, guaranteed"** replaces the previous "about 3
  weeks" claim in the hero. To avoid the page contradicting itself, the
  Implementation Timeline section and the "How long does setup take?" FAQ
  answer were both updated to describe a 1-week (Days 1–2 / 3–4 / 5–7)
  process instead of the old 3-week one.
  **This is a real operational commitment, not just copy** — confirm a
  guaranteed 1-week turnaround is something you can actually deliver
  before this goes live; a missed "guaranteed" claim is worse for trust
  than the vaguer wording it replaced.

## Pricing update

Prices changed from $99 / $199 / $349 to **$79 / $179 / $299** (CAD/month),
after researching a real competitor's public pricing (Rentrax, a general
multi-vertical rental platform). That research found:

- Rentrax uses **usage-based pricing with per-transaction overage fees**
  ($29–$999/mo depending on transaction volume, plus $0.80+ per transaction
  over your plan's included amount, plus a one-time $395 setup fee on every
  plan).
- A shop with genuinely busy weekends would blow past Rentrax's lower tiers
  almost immediately and land closer to $250–450+/mo once overage is
  included — its advertised "starting at $29" isn't representative of what
  a real busy shop pays.
- Reviews repeatedly flag Rentrax's setup process as complex.

That shaped the new pricing: **flat monthly rates with unlimited checkouts
and no per-transaction fees**, priced to comfortably undercut what a real
shop would actually pay a usage-based competitor — not by racing to the
bottom on the misleading entry-level number, but by being honestly cheaper
at realistic volume. This is now called out explicitly in
`components/pricing.tsx` (a new "No overage fees, ever" callout) and in
each tier's feature list. `app/layout.tsx`'s structured data (`lowPrice`/
`highPrice`) was updated to match.

This is a competitive judgment call based on public pricing pages and
review sites, not a guarantee — validate against your actual costs and
margins before treating these as final.

## Rebrand: PisteOps → Basecrew

Following a naming evaluation, the product has been renamed from PisteOps to
**Basecrew**. Colors, typography, layout, and the trail-rating badge system
are unchanged — this was a name change, not a redesign.

- **New logo mark** (`components/ui/logo-mark.tsx`) — three dots in a tight
  cluster, reusing the existing green/blue/orange palette from the
  trail-rating badges. Reads as "a crew, gathered at a base," and
  deliberately foregrounds people over gear, unlike the old single-dot mark.
- **Every "PisteOps" reference** across copy, metadata, structured data,
  the footer tagline, FAQ answers, and the fake product URLs in the mockups
  has been updated to Basecrew.
- **Domain placeholder** changed from `pisteops.com` to `getbasecrew.com`.
  This is *not* a confirmed available domain — `basecrew.app` is already
  taken by an unrelated outdoor-community app, and "Base Crew" is used as a
  registered business name by a few unrelated small companies (general
  contracting, mostly). No direct SaaS or rental-software competitor was
  found under this name, but run a real registrar + trademark search before
  you commit to `getbasecrew.com` or any variant.
- **Footer tagline** updated to "The operating system for your ski,
  snowboard, and bike rental crew" to tie the new name back to the
  positioning.

## Premium positioning pass

Layout, colors, and typography are still unchanged. This pass focused on
premium visual polish and sharper brand positioning:

- **Hero** now uses the exact headline/subhead requested ("The Fastest Way
  to Run Your Ski Rental Shop"), with CTAs "Book a Demo" and "Watch
  90-Second Demo".
- **New: "Built for Saturday Morning Chaos"** (`components/rush-hour.tsx`)
  — a signature differentiator section on how the product handles long
  lines, fast equipment assignment, returns, live inventory, staff
  coordination, and peak traffic.
- **New: Product demo section** (`components/product-demo.tsx`) — a video
  placeholder with an animated play button and "See the Software in Action"
  CTA. No real video is wired up yet — see the `TODO` in that file.
- **Mockups** got a glass/gradient treatment (backdrop blur, soft glow,
  staggered row entrance animation) instead of flat cards, closer to the
  Stripe/Linear-style reference.
- **Industries** now have a unique icon per category.
- **Feature titles** rewritten as outcome statements (e.g. "Always Know
  What's Available" instead of "Real-time inventory").
- **Pricing** no longer shows specific implementation/onboarding dollar
  figures — replaced with "Professional onboarding available. Contact us
  for implementation pricing."
- **Testimonials** section is now explicitly titled "Trusted by Independent
  Ski Shops".
- **FAQ** expanded with damage-handling and barcode-scanner questions.
- **SEO**: added "ski rental POS" and "rental management software" to
  target keywords; OG/Twitter copy and the generated OG image now match the
  new hero headline.

## Conversion & trust pass

The visual identity, layout, and colors are unchanged from the original
build. This pass focused on copy, credibility, and structure:

- **Hero** now states what/who/why up front, with animated trust stats and a
  softened "no credit card" line under the CTAs.
- **New: Trust bar** (`components/trust-bar.tsx`) — uptime, support
  response time, and two qualitative trust markers (Canadian-built &amp;
  supported, unlimited staff logins), with animated counters on the numeric
  stats.
- **New: Implementation timeline** (`components/implementation-timeline.tsx`)
  — a 3-week "what happens after you sign up" section to reduce switching risk.
- **Testimonials** now include avatar placeholders (initials) — swap for real
  headshots when available.
- **Product Screens** expanded to six named workflows (create a rental, check
  in equipment, inventory, reservations, reporting, customer management).
- **Feature cards** now lead with a measurable outcome line, plus a subtle
  hover lift/border-glow (CSS only, no added JS cost).
- **Industries** expanded to five categories, including Nordic centres and
  outdoor adventure companies.
- **Pricing** reframed around booking a personalized demo rather than a hard
  commitment, plus an explicit multi-location/enterprise contact card.
- **Contact form** now only requires name + email (shop name and message are
  optional) and explains what happens after submission, both on the page and
  in the form's confirmation state.
- **SEO**: added `FAQPage` and `Organization` structured data (in
  `app/layout.tsx`, sourced from `lib/content.ts` so the FAQ section and the
  schema can't drift out of sync), `aria-labelledby` section landmarks, and
  additional internal links in the footer.
- **Accessibility**: skip-to-content link, semantic `<main>` landmark on
  every page, FAQ converted to a proper disclosure pattern with
  `aria-expanded`/`aria-controls`, `aria-live` status on the contact form.
- **Performance**: scroll animations are consolidated into one `Reveal`
  wrapper per section (not per card) to keep concurrent animation/JS work
  low; card hover effects use CSS transitions instead of Framer Motion.
