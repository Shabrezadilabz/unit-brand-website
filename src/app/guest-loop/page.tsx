import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, PageIntro, Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskImage } from "@/components/motion/ParallaxImage";

export const metadata: Metadata = {
  title: "WhatsApp guest loop",
  description: "Bill on WhatsApp → review → loyalty → redeem. Consent-first, anti-spam.",
};

const loops = [
  {
    title: "Bill on WhatsApp",
    body: "Branded GST receipt image with UPI / cash / card. Guests keep the bill in the chat they already open.",
  },
  {
    title: "Review invite",
    body: "~15 minutes after paid — Google path for happy guests, private alerts for friction.",
  },
  {
    title: "Loyalty stars",
    body: "Milestones that redeem in the waiter app — not a forever-free points toy.",
  },
  {
    title: "Bags & takeaway",
    body: "Dual QR: HI on WhatsApp + commission-free takeaway web link. Not a chat bot.",
  },
];

export default function GuestLoopPage() {
  return (
    <PageShell>
      <Section className="overflow-hidden">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <PageIntro
                eyebrow="Guest loop"
                title="The loop that starts at the bill."
                body="Competitors message guests after the fact. UNIT captures consent where settlement already happens — then earns the right to talk."
              />
              <p className="mt-4 rounded-xl border border-ember/25 bg-[#fff4ef] px-4 py-3 text-sm text-ink-soft">
                Consent + STOP + anti-spam are product rules. Owner mass campaigns are UNIT-run —
                not a blast console.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/pricing">See Growth plan campaigns</ButtonLink>
                <ButtonLink href="/book-demo" variant="secondary">
                  Book demo
                </ButtonLink>
              </div>
            </Reveal>
            <div className="relative">
              <MaskImage
                src={IMAGES.filterCoffee}
                alt="Filter coffee — South guest ritual"
                className="aspect-[4/5] rounded-[2rem]"
              />
              <div className="absolute -bottom-6 -left-2 right-6 rounded-2xl border border-[color:var(--line)] bg-paper p-4 shadow-[var(--shadow)] sm:left-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-wa">WhatsApp</p>
                <p className="mt-1 text-sm font-semibold text-ink">Spice Garden — Indiranagar</p>
                <p className="mt-1 text-xs text-ink-soft">GST bill · Pay with UPI · ★★★★★ review</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {loops.map((l) => (
              <StaggerItem key={l.title}>
                <div className="h-full rounded-2xl border border-[color:var(--line)] bg-paper p-6">
                  <h2 className="display text-xl font-bold">{l.title}</h2>
                  <p className="mt-2 text-sm text-ink-soft sm:text-base">{l.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
    </PageShell>
  );
}
