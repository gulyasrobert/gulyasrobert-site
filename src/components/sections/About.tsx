import { useTranslations } from "next-intl";
import Image from "next/image";
import RevealSection from "@/components/ui/RevealSection";
import { Briefcase, Target, GraduationCap } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  const highlights = [
    {
      icon: Briefcase,
      label: t("highlight1Label"),
      value: t("highlight1Value"),
    },
    { icon: Target, label: t("highlight2Label"), value: t("highlight2Value") },
    {
      icon: GraduationCap,
      label: t("highlight3Label"),
      value: t("highlight3Value"),
    },
  ];

  return (
    <RevealSection id="about" className="relative overflow-hidden bg-cream py-28 lg:py-36">
      {/* Subtle corner accent */}
      <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-bl from-accent/5 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <div className="reveal mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {t("heading")}
          </p>
          <div className="mt-3 h-px w-12 bg-accent/40" />
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-12">
          {/* Photo - overlapping frame effect */}
          <div className="reveal lg:col-span-5">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-accent/20" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-dark-warm shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Gulyás Róbert"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-7 lg:pl-4">
            <h2 className="reveal font-display text-3xl font-bold text-dark sm:text-4xl lg:text-5xl leading-tight">
              {t("heading")}
            </h2>

            <p className="reveal mt-8 text-lg text-dark-warm/80 leading-[1.8]">
              {t("bio")}
            </p>

            {/* Highlight cards */}
            <div className="stagger mt-12 grid gap-4 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="hover-lift group rounded-xl border border-border bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon size={18} />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                    {label}
                  </p>
                  <p className="mt-1.5 text-sm font-bold text-dark">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
