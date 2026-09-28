# B&B brand website

Public marketing site for **B&B** — South-first restaurant OS (POS + KDS + WhatsApp guest loop).

Separate repo from the product app (`restaurant_os` / `B&B-restaurant-os`). Design references live in `../design/stitch_brand_website/` but this build uses an original **Monsoon Brass** visual system with Framer Motion (Jitter-inspired reveals, parallax, mask wipes).

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/how-it-works` | How B&B works |
| `/floor-kitchen` | Floor & kitchen |
| `/guest-loop` | WhatsApp guest loop |
| `/features` | Features inventory |
| `/pricing` | Pricing + ROI + FAQ |
| `/add-ons` | Add-ons |
| `/integrations` | Integrations |
| `/why-B&B` | Why B&B vs categories |
| `/south` | South-first story |
| `/book-demo` | Book demo / contact |

## Stack

- Next.js 15 (App Router) + Tailwind CSS 4
- Framer Motion
- Syne + Figtree

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Pricing (locked)

Starter ₹2,999 · Growth ₹4,999 · Pro ₹6,999 per outlet / month.
