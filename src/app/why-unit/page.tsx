import type { Metadata } from "next";
import { COMPARE_ROWS } from "@/lib/content";
import { PageShell } from "@/components/site/PageShell";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container, PageIntro, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Why UNIT",
  description: "They help you message guests. UNIT runs the restaurant.",
};

function Cell({ value }: { value: boolean | "partial" }) {
  if (value === true) return <span className="font-bold text-leaf">Yes</span>;
  if (value === "partial") return <span className="text-brass">Partial</span>;
  return <span className="text-ink-soft/50">—</span>;
}

export default function WhyUnitPage() {
  return (
    <PageShell>
      <Section>
        <Container>
          <Reveal>
            <PageIntro
              eyebrow="Why UNIT"
              title="They help you message guests. UNIT runs the restaurant."
              body="Fair comparison by category — loyalty CRM bolt-ons, ordering apps, and UNIT. We don’t clone 5,000 templates or forever-free CRM toys."
            />
          </Reveal>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-[color:var(--line)] bg-paper">
            <table className="min-w-[720px] w-full text-left text-sm">
              <thead className="bg-mist-deep/70">
                <tr>
                  <th className="px-4 py-4 font-semibold">Capability</th>
                  <th className="px-4 py-4 font-semibold">Loyalty CRM bolt-ons</th>
                  <th className="px-4 py-4 font-semibold">Ordering apps</th>
                  <th className="px-4 py-4 font-semibold text-leaf">UNIT</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.feature} className="border-t border-[color:var(--line)]">
                    <td className="px-4 py-3.5 font-medium text-ink">{row.feature}</td>
                    <td className="px-4 py-3.5">
                      <Cell value={row.crm} />
                    </td>
                    <td className="px-4 py-3.5">
                      <Cell value={row.apps} />
                    </td>
                    <td className="px-4 py-3.5">
                      <Cell value={row.unit} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-2xl text-sm text-ink-soft">
            Inspired by how{" "}
            <a href="https://reelo.io/" className="text-leaf underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
              Reelo
            </a>
            ,{" "}
            <a href="https://www.uengage.io/" className="text-leaf underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
              uEngage
            </a>
            , and{" "}
            <a href="https://business.fudr.in/" className="text-leaf underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
              Fudr
            </a>{" "}
            market loyalty — then deliberately different: UNIT owns POS + KDS + the WhatsApp loop.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/book-demo">Book a demo</ButtonLink>
            <ButtonLink href="/south" variant="secondary">
              South-first story
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </PageShell>
  );
}
