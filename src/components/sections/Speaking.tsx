import { useTranslations, useLocale } from "next-intl";
import RevealSection from "@/components/ui/RevealSection";
import { speakingData } from "@/data/speaking";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";

export default function Speaking() {
  const t = useTranslations("speaking");
  const locale = useLocale() as "hu" | "en";

  return (
    <RevealSection id="speaking" className="relative overflow-hidden bg-cream py-28 lg:py-36">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="reveal mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {t("heading")}
          </p>
          <div className="mt-3 h-px w-12 bg-accent/40" />
        </div>

        <h2 className="reveal font-display text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
          {t("heading")}
        </h2>

        <div className="stagger mt-16 grid gap-6 sm:grid-cols-2">
          {speakingData.map((entry) => (
            <div
              key={entry.id}
              className="hover-lift group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm"
            >
              {/* Corner accent */}
              <div className="absolute right-0 top-0 h-24 w-24 bg-gradient-to-bl from-accent/5 to-transparent transition-all group-hover:from-accent/10" />

              <div className="relative">
                {/* Event badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3 py-1">
                  <span className="text-xs font-bold text-accent">
                    {entry.event[locale]}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-dark leading-snug">
                  {entry.title[locale]}
                </h3>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-accent/60" />
                    {entry.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} className="text-accent/60" />
                    {entry.date}
                  </span>
                </div>

                <p className="mt-5 text-sm text-dark-warm/70 leading-relaxed">
                  {entry.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
