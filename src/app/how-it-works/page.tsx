import type { Metadata } from "next";
import { FLOW_STEPS } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, PageIntro, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { MaskImage } from "@/components/motion/ParallaxImage";

export const metadata: Metadata = {
  title: "How UNIT works",
  description: "From table to WhatsApp to return visit — the UNIT operating loop.",
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <Section className="pb-10">
        <Container>
          <Reveal>
            <PageIntro
              eyebrow="How it works"
              title="From table to WhatsApp to return visit."
              body="Five beats. One OS. Consent at close bill — then the guest loop that competitors bolt on after the fact."
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="space-y-8">
            {FLOW_STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.04}>
                <article className="grid gap-6 overflow-hidden rounded-3xl border border-[color:var(--line)] bg-paper lg:grid-cols-2">
                  <div className="flex flex-col justify-center p-6 sm:p-10">
                    <span className="display text-4xl font-bold text-brass">{step.n}</span>
                    <h2 className="display mt-3 text-3xl font-bold text-ink">{step.title}</h2>
                    <p className="mt-3 text-ink-soft">{step.body}</p>
                  </div>
                  <MaskImage
                    src={i % 2 === 0 ? IMAGES.staff : IMAGES.kitchen}
                    alt={step.title}
                    className="min-h-[240px] lg:min-h-full"
                  />
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <ButtonLink href="/book-demo">Book a South pilot demo</ButtonLink>
            <ButtonLink href="/guest-loop" variant="secondary">
              Dive into the guest loop
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
