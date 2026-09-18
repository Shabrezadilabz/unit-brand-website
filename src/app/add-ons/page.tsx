import type { Metadata } from "next";
import { ADDONS } from "@/lib/content";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, PageIntro, Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Add-ons",
  description: "Print kit, influencer gigs, message packs, hardware — power when you need it.",
};

export default function AddOnsPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <Reveal>
            <PageIntro
              eyebrow="Add-ons"
              title="Power when you need it — not stuffed into SaaS."
              body="Transparent operator rates. Keep the core lean; unlock bags, gigs, and packs when peak season demands it."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ADDONS.map((a) => (
              <StaggerItem key={a.title}>
                <article className="flex h-full flex-col rounded-2xl border border-[color:var(--line)] bg-paper p-6">
                  <h2 className="display text-lg font-bold text-ink">{a.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{a.detail}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/book-demo">Request print kit</ButtonLink>
            <ButtonLink href="/book-demo" variant="secondary">
              Ask UNIT for a gig
            </ButtonLink>
            <ButtonLink href="/pricing" variant="secondary">
              Back to pricing
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
