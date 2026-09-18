import type { Metadata } from "next";
import { PageShell } from "@/components/site/PageShell";
import { DemoForm } from "@/components/site/DemoForm";
import { Container, PageIntro, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Book a demo",
  description: "Talk to UNIT — South pilot onboarding for dine-in restaurants.",
};

export default function BookDemoPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <PageIntro
                eyebrow="Talk to UNIT"
                title="Book a South pilot demo."
                body="Tell us your outlets, peak covers, and current POS. We onboard — you don’t fight a self-serve maze."
              />
              <ol className="mt-10 space-y-4">
                {[
                  "Callback from a UNIT supervisor",
                  "Module map for your floor + guest loop",
                  "WhatsApp template go-live checklist",
                ].map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="display grid h-9 w-9 shrink-0 place-items-center rounded-full bg-leaf text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="pt-1.5 font-medium text-ink">{step}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-ink-soft">
                Trust line: no public self-serve signup — UNIT onboards you.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <DemoForm />
            </Reveal>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
