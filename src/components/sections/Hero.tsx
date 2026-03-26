"use client";

import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const t = useTranslations("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="grain relative flex min-h-screen items-center justify-center overflow-hidden bg-dark"
    >
      {/* Ambient gradient orbs */}
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent-light/8 blur-[100px]" />

      {/* Diagonal line accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-0 h-px w-[60%] origin-right rotate-[25deg] bg-gradient-to-l from-accent/30 to-transparent" />
        <div className="absolute -left-20 bottom-0 h-px w-[40%] origin-left rotate-[25deg] bg-gradient-to-r from-accent/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Greeting - staggers in */}
        <p
          className={`mb-6 text-sm font-medium uppercase tracking-[0.3em] transition-all duration-700 ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
          style={{ color: "#D97706" }}
        >
          {t("greeting")}
        </p>

        {/* Name - large serif */}
        <h1
          className={`font-display text-5xl font-bold tracking-tight text-cream sm:text-6xl lg:text-8xl transition-all duration-700 delay-150 ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {t("name")}
        </h1>

        {/* Gold separator line */}
        <div
          className={`mx-auto mt-6 h-px w-24 transition-all duration-700 delay-300 ${
            mounted ? "w-24 opacity-100" : "w-0 opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(90deg, transparent, #B45309, #D97706, #B45309, transparent)",
          }}
        />

        {/* Title */}
        <p
          className={`mt-6 text-lg font-medium tracking-wide text-muted-light sm:text-xl transition-all duration-700 delay-[400ms] ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          {t("title")}
        </p>

        {/* Description */}
        <p
          className={`mx-auto mt-6 max-w-2xl text-base text-muted leading-relaxed sm:text-lg transition-all duration-700 delay-500 ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          {t("description")}
        </p>

        {/* CTA */}
        <a
          href="#newsletter"
          className={`group mt-10 inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-8 py-4 text-sm font-semibold tracking-wide text-accent-glow transition-all duration-500 delay-[600ms] hover:border-accent hover:bg-accent/20 hover:shadow-[0_0_40px_-8px_rgba(180,83,9,0.3)] ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          {t("cta")}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-muted transition-all duration-700 delay-[800ms] hover:text-cream ${
          mounted
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        }`}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
