import { useTranslations, useLocale } from "next-intl";
import RevealSection from "@/components/ui/RevealSection";
import {
  educationData,
  certificationData,
  competences,
} from "@/data/education";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Expertise() {
  const t = useTranslations("expertise");
  const locale = useLocale() as "hu" | "en";

  return (
    <RevealSection
      id="expertise"
      className="grain relative overflow-hidden bg-dark py-28 lg:py-36"
    >
      <div className="absolute right-0 top-0 h-px w-1/3 bg-gradient-to-l from-accent/20 to-transparent" />

      <div className="mx-auto max-w-5xl px-6">
        {/* Section label */}
        <div className="reveal mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {t("heading")}
          </p>
          <div className="mt-3 h-px w-12 bg-accent/40" />
        </div>

        {/* Competence tags */}
        <div className="reveal">
          <div className="flex flex-wrap gap-3">
            {competences.map((c) => (
              <span
                key={c.en}
                className="rounded-full border border-border-dark bg-dark-card px-4 py-2 text-sm text-muted-light transition-all hover:border-accent/40 hover:text-cream"
              >
                {c[locale]}
              </span>
            ))}
          </div>
        </div>

        {/* Education & Certifications grid */}
        <div className="stagger mt-20 grid gap-12 lg:grid-cols-2">
          {/* Education */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                <GraduationCap size={16} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-cream">
                {t("educationTitle")}
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((entry) => (
                <div
                  key={entry.id}
                  className="border-l border-border-dark pl-6"
                >
                  <p className="text-sm font-medium text-accent">
                    {entry.period}
                    {entry.ongoing && (
                      <span className="ml-2 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs">
                        {t("ongoing")}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 font-semibold text-cream">
                    {entry.degree[locale]}
                  </p>
                  <p className="text-sm text-muted">{entry.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                <Award size={16} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-cream">
                {t("certTitle")}
              </h3>
            </div>

            <div className="space-y-6">
              {certificationData.map((entry) => (
                <div
                  key={entry.id}
                  className="border-l border-border-dark pl-6"
                >
                  <p className="text-sm font-medium text-accent">
                    {entry.period}
                    {entry.ongoing && (
                      <span className="ml-2 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs">
                        {t("ongoing")}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 font-semibold text-cream">
                    {entry.name[locale]}
                  </p>
                  <p className="text-sm text-muted">{entry.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
