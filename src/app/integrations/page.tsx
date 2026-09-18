import type { Metadata } from "next";
import { INTEGRATIONS } from "@/lib/content";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, PageIntro, Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Integrations",
  description: "WhatsApp BSP, Razorpay, Petpooja, Swiggy, Zomato — UNIT stays source of truth.",
};

export default function IntegrationsPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <Reveal>
            <PageIntro
              eyebrow="Integrations"
              title="The operational mesh."
              body="UNIT is source of truth for floor and guest loop. Bridges stay optional — live with keys or mock until go-live."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INTEGRATIONS.map((item) => (
              <StaggerItem key={item.name}>
                <div className="rounded-2xl border border-[color:var(--line)] bg-paper p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="display text-lg font-bold">{item.name}</h2>
                    <span className="rounded-full bg-leaf-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-leaf">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">{item.note}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-12">
            <ButtonLink href="/book-demo">Book technical onboarding</ButtonLink>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
