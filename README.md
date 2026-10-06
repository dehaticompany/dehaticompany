# Dehati Comapny — multi-service property company website

A production-ready marketing site for a company that does electrical, plumbing, construction,
interior, furniture, carpentry, painting and maintenance work. Built with Next.js (App Router),
TypeScript and Tailwind CSS v4. All business content lives in JSON; all colours live in one place.

No shop, database, auth or payments — the structure leaves room for them (see *Adding the shop* below).

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run typecheck
```

Requires Node 18.18+ (Node 20+ recommended). The first `npm run dev` downloads the two Google fonts
used by `next/font`, so run it once with an internet connection.

## Rebranding in three files

1. **`data/site.json`** — company name, tagline, description, founding year, live URL, stats,
   service areas, credentials, the "why choose us" points and the five process steps.
2. **`data/contact.json`** — phone, WhatsApp number, email, address, map link, business hours,
   social links. Nothing is hard-coded in components; `WhatsAppButton` and every `tel:` link read
   from here.
3. **`app/globals.css`** — the `:root` block. Change `--primary` and the whole site follows:
   header, buttons, footer, icons, focus rings.

`config/theme.ts` mirrors those CSS variables for the rare case where a colour is needed in
JavaScript. Keep the two in sync.

## Content

| File | Holds |
| --- | --- |
| `data/site.json` | Company identity, stats, service areas, value props, process steps |
| `data/services.json` | The eight trades: slug, title, descriptions, image, icon, feature list |
| `data/portfolio.json` | Completed projects: title, category, location, year, duration, image |
| `data/testimonials.json` | Client quotes with rating, role and location |
| `data/contact.json` | Phone, WhatsApp, email, address, hours, social |

Components never import a JSON file directly — they import from `lib/content.ts`, which types the
data and exposes helpers (`getService`, `getFeaturedServices`, `getRecentProjects`). When this
content moves to a CMS or database, `lib/content.ts` is the only file that changes.

Icon names in JSON (`"icon": "Zap"`) are resolved by `components/common/Icon.tsx`, which keeps an
explicit registry of lucide icons. Add an icon to that registry before using its name in data.

## Routes

```
/                    Home
/about               About
/services            All eight trades in detail
/services/[slug]     One trade per page, statically generated
/portfolio           Filterable project grid
/contact             Enquiry form and contact details
/sitemap.xml         Generated from data (app/sitemap.ts)
/robots.txt          app/robots.ts
```

## Images

`public/images/` ships with generated placeholders so the site renders on first run. Replace them
with real photographs at the same paths and keep the aspect ratios:

- `hero/hero.jpg` — 4:5 portrait, `hero/team.jpg` — 5:4, `hero/hero-og.jpg` — 1200×630 (social card)
- `services/*.jpg` — 4:3, one per service slug in `services.json`
- `portfolio/project-*.jpg` — 4:3

All are served through `next/image`, so sizes and lazy loading are already handled. The only image
loaded eagerly is the hero.

## The contact form

`components/common/ContactForm.tsx` is a client component that validates in the browser and posts
nothing yet. It already builds the `EnquiryPayload` shape (`types/index.ts`) that a backend will
expect. To connect one, create `app/api/enquiry/route.ts` and replace the marked block in
`handleSubmit` with the `fetch("/api/enquiry", …)` call that is commented out there.

## SEO

- Per-page `metadata` exports with titles, descriptions and canonicals; a title template in
  `app/layout.tsx`.
- Open Graph and Twitter cards driven by `site.json`.
- `HomeAndConstructionBusiness` JSON-LD in the root layout, built from the same JSON.
- One `h1` per page, semantic sections, breadcrumbs, descriptive alt text, SVG favicon.
- Set `site.json` → `url` to the real domain before deploying; `metadataBase` and the sitemap use it.

## Adding the shop later

Nothing here needs restructuring:

```
app/shop/page.tsx              new route
app/shop/[slug]/page.tsx       product detail
components/shop/               ProductCard, Cart, …
data/products.json             product content
lib/content.ts                 export products alongside services
```

Add `{ label: "Shop", href: "/shop" }` to `navLinks` in `lib/content.ts` and it appears in both the
desktop nav, the mobile menu and the footer. Auth, orders and payments belong in `app/api/*` and a
`lib/db.ts`; the presentation layer above does not change.

## Conventions

- Components are small, typed and reusable: `Button`, `Container`, `SectionTitle`, `ServiceCard`,
  `ProjectCard`, `WhatsAppButton`, `Icon`, `PageHeader`.
- Only three components are client components (`Navbar`, `ProjectGrid`, `ContactForm`); everything
  else renders on the server.
- Page files compose sections and hold no markup of their own beyond layout.
- Tailwind utilities reference the theme tokens (`bg-primary`, `text-muted`, `border-hairline`)
  rather than raw hex values.
