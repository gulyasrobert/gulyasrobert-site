"use client";

import { useTranslations } from "next-intl";
import { useReveal } from "@/lib/useReveal";

export default function Impact() {
  const t = useTranslations("impact");
  const ref = useReveal();

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="impact"
      className="relative overflow-hidden border-y border-accent/10 bg-dark-warm py-20"
    >
      {/* Shimmer line at top */}
      <div className="absolute inset-x-0 top-0 h-px shimmer-line" />

      <div className="mx-auto max-w-5xl px-6">
        <p className="reveal mb-10 text-center text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {t("heading")}
        </p>

        <div className="stagger grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl font-bold text-cream sm:text-5xl lg:text-6xl">
                {value}
              </p>
              <p className="mt-2 text-sm text-muted-light">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
