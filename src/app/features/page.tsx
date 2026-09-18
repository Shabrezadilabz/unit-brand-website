import type { Metadata } from "next";
import { FEATURE_BANDS } from "@/lib/content";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, PageIntro, Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Features",
  description: "Full UNIT inventory — floor, bills, WhatsApp, campaigns, modules, AI, ops board.",
};

export default function FeaturesPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <Reveal>
            <PageIntro
              eyebrow="Features"
              title="Everything that runs the restaurant — not a template zoo."
              body="Scannable bands. Toggle modules. UNIT supervises the campaigns that would otherwise become spam."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {FEATURE_BANDS.map((band) => (
              <StaggerItem key={band.title}>
                <div className="h-full rounded-2xl border border-[color:var(--line)] bg-paper p-6 sm:p-7">
                  <h2 className="display text-xl font-bold text-leaf">{band.title}</h2>
                  <ul className="mt-4 space-y-2">
                    {band.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-ink-soft">
                        <span className="text-brass">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/pricing">See pricing</ButtonLink>
            <ButtonLink href="/integrations" variant="secondary">
              Integrations
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
