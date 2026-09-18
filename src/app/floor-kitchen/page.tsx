import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, PageIntro, Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskImage } from "@/components/motion/ParallaxImage";

export const metadata: Metadata = {
  title: "Floor & kitchen",
  description: "The OS for the floor — waiter POS, chef KDS, aggregator punch notes.",
};

const bands = [
  {
    title: "Waiter",
    body: "Table map, soft lock, close bill with name + phone + consent. Built for dense South casual dining.",
  },
  {
    title: "Chef",
    body: "KDS lanes: New / Cooking / Ready. Eighty-six without a war on the pass.",
  },
  {
    title: "Aggregator",
    body: "Swiggy / Zomato punch notes — no guest WhatsApp bill for platform orders.",
  },
  {
    title: "Hardware",
    body: "WhatsApp-first receipt. Optional ESC/POS thermal backup when the floor needs paper.",
  },
];

export default function FloorKitchenPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <PageIntro
                eyebrow="Floor & kitchen"
                title="Not another CRM bolted onto someone else’s POS."
                body="UNIT is the operating system for the floor — then the guest loop starts at the bill."
              />
              <div className="mt-8">
                <ButtonLink href="/book-demo">Book demo</ButtonLink>
              </div>
            </Reveal>
            <MaskImage
              src={IMAGES.kitchen}
              alt="Kitchen operations"
              className="aspect-[5/4] rounded-3xl"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-mist-deep/50 pt-0">
        <Container>
          <Stagger className="grid gap-4 md:grid-cols-2">
            {bands.map((b) => (
              <StaggerItem key={b.title}>
                <div className="h-full rounded-2xl border border-[color:var(--line)] bg-paper p-6 sm:p-8">
                  <h2 className="display text-2xl font-bold text-leaf">{b.title}</h2>
                  <p className="mt-3 text-ink-soft">{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/guest-loop">WhatsApp guest loop</ButtonLink>
            <ButtonLink href="/features" variant="secondary">
              Full feature inventory
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
