import Link from "next/link";
import { FOOTER_COLS } from "@/lib/nav";
import { BRAND } from "@/lib/content";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--line)] bg-ink text-white">
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-leaf/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-brass/20 blur-3xl" />

      <Container className="relative py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="display text-3xl font-bold tracking-[-0.06em]">
              UNIT
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              {BRAND.tagline} The restaurant OS for South density — floor, kitchen, WhatsApp guest
              loop.
            </p>
            <div className="mt-6">
              <ButtonLink href="/book-demo" variant="brass">
                Book a South pilot
              </ButtonLink>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="display text-xs font-bold uppercase tracking-[0.16em] text-brass">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto") ? (
                      <a
                        href={link.href}
                        className="text-sm text-white/70 transition hover:text-white"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 transition hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} UNIT · {BRAND.city}
          </p>
          <p>Not a bolt-on CRM. Not a private-label consumer app.</p>
        </div>
      </Container>
    </footer>
  );
}
