export const BRAND = {
  name: "UNIT",
  tagline: "Run the floor. Own the guest.",
  support:
    "POS + kitchen + WhatsApp bill, review, loyalty — built for Indian dine-in. Bengaluru first.",
  city: "Bengaluru",
  email: "hello@unit.restaurant",
  sampleOutlet: "Spice Garden — Indiranagar",
} as const;

export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 2999,
    blurb: "Own the floor and close the loop.",
    popular: false,
    points: [
      "POS + KDS + WhatsApp GST bill",
      "Review invite + loyalty redeem",
      "CSV guest CRM · capped WA",
      "100 free bags / cards",
    ],
    cta: "Start Starter pilot",
  },
  {
    id: "growth",
    name: "Growth",
    price: 4999,
    blurb: "Campaigns, RFM, posters — still operator-owned.",
    popular: true,
    points: [
      "Everything in Starter",
      "Win-back · birthday · festival packs",
      "RFM / ROI · email & IG briefs",
      "AI restaurant insights + posters",
    ],
    cta: "Start Growth pilot",
  },
  {
    id: "pro",
    name: "Pro",
    price: 6999,
    blurb: "Multi-outlet density with a UNIT supervisor.",
    popular: false,
    points: [
      "Everything in Growth",
      "Multi-outlet geo campaigns",
      "Higher message & AI caps",
      "Priority UNIT supervisor",
    ],
    cta: "Talk Pro onboarding",
  },
] as const;

export const FLOW_STEPS = [
  {
    n: "01",
    title: "Waiter runs the floor",
    body: "Table map, soft lock, live tickets — Spice Garden style density without chaos.",
  },
  {
    n: "02",
    title: "Chef cooks on KDS",
    body: "New → Cooking → Ready. Eighty-six without shouting across the pass.",
  },
  {
    n: "03",
    title: "Close bill with consent",
    body: "Name + phone + opt-in at settlement. Consent is the product, not an afterthought.",
  },
  {
    n: "04",
    title: "WhatsApp GST bill + pay",
    body: "Branded receipt image, UPI / card / cash — no Play Store tax for a private-label app.",
  },
  {
    n: "05",
    title: "Review → loyalty → return",
    body: "Timed review invite, stars that redeem in the waiter app, guests who come back.",
  },
] as const;

export const COMPARE_ROWS = [
  { feature: "Own POS + KDS", crm: false, apps: false, unit: true },
  { feature: "Phone + consent at close bill", crm: "partial", apps: false, unit: true },
  { feature: "Branded WhatsApp GST receipt", crm: "partial", apps: "partial", unit: true },
  { feature: "Review → redeem in waiter app", crm: false, apps: false, unit: true },
  { feature: "Takeaway web (not chat bot)", crm: false, apps: true, unit: true },
  { feature: "Branded PWA (no Play Store tax)", crm: false, apps: false, unit: true },
  { feature: "Campaigns + RFM-lite", crm: true, apps: "partial", unit: true },
  { feature: "South festival packs", crm: "partial", apps: false, unit: true },
  { feature: "Supervisor-connected marketing", crm: false, apps: false, unit: true },
] as const;

export const FEATURE_BANDS = [
  {
    title: "Floor & kitchen",
    items: ["Table map & soft lock", "KDS lanes", "Eighty-six", "Aggregator punch notes"],
  },
  {
    title: "Bills & payments",
    items: ["WhatsApp GST bill", "UPI / Razorpay", "Thermal backup", "Split & transfer"],
  },
  {
    title: "WhatsApp & loyalty",
    items: ["Consent + STOP", "Review invites", "Stars & redeem", "Dual-QR bags"],
  },
  {
    title: "Campaigns",
    items: ["Win-back", "Birthday", "Festivals", "Occasions — UNIT-run packs"],
  },
  {
    title: "Marketing handoff",
    items: ["Email briefs", "Instagram", "Influencer gigs", "Digital — UNIT connects"],
  },
  {
    title: "Modules & CRM",
    items: ["Toggle what you need", "UNIT native CRM", "CSV import", "Petpooja sync"],
  },
  {
    title: "AI insights",
    items: ["Restaurant-only chat", "Plan token budgets", "Poster caps", "No spam blasts"],
  },
  {
    title: "UNIT ops board",
    items: ["Onboarding", "Module requests", "Unlocks", "South pilot desk"],
  },
] as const;

export const ADDONS = [
  {
    title: "Branded bags & loyalty cards",
    detail: "100 free with plan · then ₹18–25/bag · ₹8–12/card · packs 100 / 250 / 500",
  },
  {
    title: "Nearby influencer gigs",
    detail: "Creator at cost + UNIT 20–25% fee · min ₹5,000 · hyperlocal only",
  },
  {
    title: "Message packs",
    detail: "WhatsApp & email overages when you outgrow plan caps",
  },
  {
    title: "Managed IG / digital",
    detail: "Quoted campaigns — UNIT supervisor connects, you stay spam-safe",
  },
  {
    title: "Hardware kit",
    detail: "ESC/POS thermal + optional UPI soundbox partners · WA-first by default",
  },
  {
    title: "Onsite training",
    detail: "₹4,999–9,999 · floor + kitchen go-live with your shift leads",
  },
] as const;

export const INTEGRATIONS = [
  { name: "WhatsApp BSP", status: "Live with keys", note: "Gupshup · AiSensy · Meta" },
  { name: "Razorpay", status: "Live with keys", note: "Links + webhooks" },
  { name: "UPI soundbox", status: "Partner", note: "Optional hardware" },
  { name: "Petpooja", status: "Bridge", note: "CRM sync mode" },
  { name: "Dotpe", status: "Bridge", note: "On request" },
  { name: "Swiggy", status: "Webhook", note: "Aggregator tickets" },
  { name: "Zomato", status: "Webhook", note: "Aggregator tickets" },
  { name: "Resend", status: "Live with keys", note: "Email packs" },
  { name: "OpenAI", status: "Insights", note: "Restaurant-only AI" },
] as const;

export const SOUTH_FESTIVALS = [
  "Ugadi",
  "Onam",
  "Pongal",
  "Vishu",
  "Diwali",
  "Sankranti",
] as const;
