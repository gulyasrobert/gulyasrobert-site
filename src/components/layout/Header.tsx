"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Menu, X, Globe } from "lucide-react";

const navItems = [
  { href: "#about", key: "about" },
  { href: "#career", key: "career" },
  { href: "#expertise", key: "expertise" },
  { href: "#speaking", key: "speaking" },
  { href: "#newsletter", key: "newsletter" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const otherLocale = locale === "hu" ? "en" : "hu";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    router.replace(pathname, { locale: otherLocale });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-dark/95 backdrop-blur-xl shadow-[0_1px_20px_-4px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-xl font-bold tracking-tight text-cream transition-colors hover:text-accent-glow"
        >
          GR<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-muted-light transition-all hover:bg-white/5 hover:text-cream"
            >
              {t(item.key)}
            </a>
          ))}

          <div className="mx-2 h-4 w-px bg-border-dark" />

          <button
            onClick={switchLocale}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted transition-all hover:bg-white/5 hover:text-cream"
          >
            <Globe size={13} />
            {otherLocale}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-muted-light transition-colors hover:bg-white/5 hover:text-cream md:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border-dark bg-dark/98 backdrop-blur-xl px-6 py-6 md:hidden">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-light transition-colors hover:bg-white/5 hover:text-cream"
              >
                {t(item.key)}
              </a>
            ))}
          </div>
          <div className="mt-4 border-t border-border-dark pt-4">
            <button
              onClick={() => {
                switchLocale();
                setMobileOpen(false);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted transition-colors hover:text-cream"
            >
              <Globe size={13} />
              {otherLocale}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
