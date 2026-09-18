import type { Metadata } from "next";
import Image from "next/image";
import { SOUTH_FESTIVALS } from "@/lib/content";
import { IMAGES } from "@/lib/images";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, Eyebrow, Section } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { MaskImage } from "@/components/motion/ParallaxImage";

export const metadata: Metadata = {
  title: "South-first",
  description: "Built for South density — Bengaluru pilots, festival packs, Jain/veg DNA.",
};

export default function SouthPage() {
  return (
    <PageShell>
      <section className="relative min-h-[70svh] overflow-hidden">
        <Image
          src={IMAGES.dosa}
          alt="Crisp dosa — South Indian service"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1612]/92 via-[#0b1612]/7 to-transparent" />
        <Container className="relative z-10 flex min-h-[70svh] flex-col justify-end pb-16 pt-28">
          <Reveal>
            <p className="display text-5xl font-extrabold tracking-[-0.06em] text-white sm:text-7xl">
              UNIT
            </p>
            <h1 className="display mt-3 max-w-3xl text-[clamp(2rem,5vw,3.8rem)] font-bold text-brass">
              Built for South density first.
            </h1>
            <p className="mt-4 max-w-xl text-white/75">
              Bengaluru / Chennai / Hyderabad dine-in peaks. Festival packs that taste local. Then
              North with case studies — not the other way around.
            </p>
            <div className="mt-8">
              <ButtonLink href="/book-demo" variant="brass">
                Apply for Bengaluru pilot
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Menu DNA</Eyebrow>
              <h2 className="display text-3xl font-bold">Jain · veg · nameLocal.</h2>
              <p className="mt-4 text-ink-soft">
                Flags and modifiers that match how South kitchens actually plate — not a Northern
                template with chili oil swapped in.
              </p>
            </Reveal>
            <MaskImage
              src={IMAGES.idli}
              alt="Idli platter"
              className="aspect-[16/10] rounded-3xl"
            />
          </div>

          <Reveal className="mt-16">
            <Eyebrow>Festival packs</Eyebrow>
            <h2 className="display text-3xl font-bold">Campaigns that know the calendar.</h2>
          </Reveal>
          <Stagger className="mt-8 flex flex-wrap gap-3">
            {SOUTH_FESTIVALS.map((f) => (
              <StaggerItem key={f}>
                <span className="inline-flex rounded-full border border-leaf/25 bg-leaf-soft px-4 py-2 text-sm font-semibold text-leaf">
                  {f}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-16 grid gap-6 overflow-hidden rounded-3xl bg-ink text-white lg:grid-cols-2">
            <div className="p-8 sm:p-10">
              <Eyebrow>Pilot offer</Eyebrow>
              <h2 className="display text-3xl font-bold">10 Bengaluru dine-in pilots.</h2>
              <p className="mt-4 text-white/65">
                UNIT onboards modules, WhatsApp templates, and floor training. No public self-serve
                chaos — a supervisor sits with your shift leads.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/book-demo" variant="brass">
                  Apply now
                </ButtonLink>
                <ButtonLink href="/pricing" variant="ghost">
                  See plans
                </ButtonLink>
              </div>
            </div>
            <div className="relative min-h-[240px]">
              <Image
                src={IMAGES.spices}
                alt="South spice market color"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
