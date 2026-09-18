import Link from "next/link";
import { FOOTER_COLS } from "@/lib/nav";
import { BRAND } from "@/lib/content";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { BrandLogo } from "@/components/site/BrandLogo";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-leaf/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-wa/20 blur-3xl" />

      <Container className="relative py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo
              className="[&_span]:text-white"
              markClassName="rounded-xl"
              href="/"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {BRAND.tagline} POS + kitchen + WhatsApp guest loop — built for South density first.
            </p>
            <div className="mt-6">
              <ButtonLink href="/book-demo" className="!rounded-full">
                Book a South pilot
              </ButtonLink>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-leaf-soft/90">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto") ? (
                      <a
                        href={link.href}
                        className="text-sm text-white/65 transition hover:text-white"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition hover:text-white"
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

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/40 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} UNIT · {BRAND.city}
          </p>
          <p>Not a bolt-on CRM. Not a private-label app tax.</p>
        </div>
      </Container>
    </footer>
  );
}
