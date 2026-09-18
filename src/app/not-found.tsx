import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 pt-[68px]">
      <div className="max-w-md text-center">
        <p className="display text-6xl font-extrabold text-leaf">404</p>
        <h1 className="display mt-4 text-3xl font-bold text-ink">Page not plated.</h1>
        <p className="mt-3 text-ink-soft">That route isn’t on the UNIT menu.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <Link href="/book-demo" className="inline-flex items-center text-sm font-semibold text-leaf">
            Book a demo →
          </Link>
        </div>
      </div>
    </main>
  );
}
