export type NavItem = {
  href: string;
  label: string;
  short?: string;
};

export const NAV_PRIMARY: NavItem[] = [
  { href: "/how-it-works", label: "How it works", short: "How" },
  { href: "/floor-kitchen", label: "Floor & kitchen", short: "Floor" },
  { href: "/guest-loop", label: "Guest loop", short: "Loop" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/integrations", label: "Integrations" },
];

export const NAV_MORE: NavItem[] = [
  { href: "/add-ons", label: "Add-ons" },
  { href: "/why-unit", label: "Why UNIT" },
  { href: "/book-demo", label: "Book a demo" },
];

export const NAV_ALL: NavItem[] = [
  { href: "/", label: "Home" },
  ...NAV_PRIMARY,
  ...NAV_MORE,
];

export const FOOTER_COLS = [
  {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/floor-kitchen", label: "Floor & kitchen" },
      { href: "/guest-loop", label: "WhatsApp guest loop" },
      { href: "/features", label: "Features" },
      { href: "/integrations", label: "Integrations" },
    ],
  },
  {
    title: "Grow",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/add-ons", label: "Add-ons" },
      { href: "/why-unit", label: "Why UNIT" },
    ],
  },
  {
    title: "Talk",
    links: [
      { href: "/book-demo", label: "Book a demo" },
      { href: "mailto:hello@unit.restaurant", label: "hello@unit.restaurant" },
      { href: "https://wa.me/919999999999", label: "WhatsApp UNIT" },
    ],
  },
] as const;
