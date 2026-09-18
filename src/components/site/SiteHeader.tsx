'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/site/BrandLogo';

const links = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Floor & kitchen', href: '/floor-kitchen' },
  { label: 'Guest loop', href: '/guest-loop' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const darkRoutes = ['/', '/how-it-works', '/floor-kitchen', '/guest-loop', '/features', '/pricing'];
  const isDark = darkRoutes.includes(pathname ?? '') && !scrolled;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : 'bg-transparent'}`}
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <BrandLogo variant={isDark ? "light" : "dark"} />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  isDark ? 'text-white/80 hover:text-white' : 'text-ink-soft hover:text-ink'
                } ${pathname === l.href ? (isDark ? 'text-white' : 'text-teal') : ''}`}
                style={{ color: pathname === l.href && !isDark ? '#00A3A0' : undefined }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/book-demo"
              className="hidden sm:flex items-center px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg active:scale-95"
              style={{ background: '#F07C33', boxShadow: '0 4px 14px rgba(240,124,51,0.35)' }}
            >
              Request demo
            </Link>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-mist'}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l10 10M16 6l-10 10"/>
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 7h14M4 12h14M4 17h14"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          style={{ background: '#001F25' }}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <BrandLogo variant="light" />
            <button className="text-white p-2" onClick={() => setMenuOpen(false)}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l10 10M16 6l-10 10"/>
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white text-xl font-medium py-3 border-b border-white/10 transition-colors"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/pricing"
              className="text-white/80 hover:text-white text-xl font-medium py-3 border-b border-white/10 transition-colors"
            >
              Pricing
            </Link>
          </div>
          <div className="px-6 py-6">
            <Link
              href="/book-demo"
              className="flex items-center justify-center w-full py-4 rounded-full text-white font-semibold text-base"
              style={{ background: '#F07C33' }}
            >
              Request demo â†’
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

