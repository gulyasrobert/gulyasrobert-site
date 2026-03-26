import { useTranslations, useLocale } from "next-intl";
import RevealSection from "@/components/ui/RevealSection";
import { careerData } from "@/data/career";

export default function Career() {
  const t = useTranslations("career");
  const locale = useLocale() as "hu" | "en";

  return (
    <RevealSection
      id="career"
      className="grain relative overflow-hidden bg-dark py-28 lg:py-36"
    >
      <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-4xl px-6">
        <div className="reveal mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {t("heading")}
          </p>
          <div className="mt-3 h-px w-12 bg-accent/40" />
        </div>

        <h2 className="reveal font-display text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
          {t("heading")}
        </h2>

        <div className="stagger mt-16 space-y-0">
          {careerData.map((entry) => (
            <div
              key={entry.id}
              className="group relative border-l border-border-dark py-10 pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-10 h-2.5 w-2.5 rounded-full border-2 border-accent bg-dark transition-colors group-hover:bg-accent" />

              {/* Period & Scope */}
              <p className="text-sm font-medium tabular-nums text-accent">
                {entry.period.start} – {entry.period.end ?? t("present")}
              </p>
              <p className="mt-1 text-xs text-muted">{entry.scope[locale]}</p>

              {/* Role & Company */}
              <h3 className="mt-3 text-lg font-bold text-cream transition-colors group-hover:text-accent-glow">
                {entry.role[locale]}
              </h3>
              <p className="text-sm font-medium text-muted-light">
                {entry.company[locale]}
              </p>

              {/* Achievements */}
              <ul className="mt-4 space-y-2">
                {entry.achievements[locale].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-muted-light/80 leading-relaxed"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent/60" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Strategic Impact */}
              <div className="mt-4 rounded-lg border border-border-dark/50 bg-dark-card/50 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent/70">
                  {t("impactLabel")}
                </p>
                <p className="mt-1 text-sm text-muted-light/70 leading-relaxed">
                  {entry.impact[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
