"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import RevealSection from "@/components/ui/RevealSection";
import { Mail, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

const schema = z.object({
  email: z.email(),
  name: z.string().optional(),
  consent: z.literal(true),
});

type FormData = z.infer<typeof schema>;

export default function Newsletter() {
  const t = useTranslations("newsletter");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          name: data.name || null,
          locale,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="newsletter" className="grain relative overflow-hidden bg-dark py-28 text-cream">
        <div className="relative z-10 mx-auto max-w-lg px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-success/30 bg-success/10">
            <CheckCircle size={32} className="text-success" />
          </div>
          <h3 className="mt-6 font-display text-3xl font-bold">
            {t("successTitle")}
          </h3>
          <p className="mt-3 text-muted-light">{t("successMessage")}</p>
        </div>
      </section>
    );
  }

  return (
    <RevealSection id="newsletter" className="grain relative overflow-hidden bg-dark py-28 lg:py-36">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-accent/5 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-lg px-6">
        <div className="reveal text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            {t("heading")}
          </p>
          <div className="mx-auto mt-3 h-px w-12 bg-accent/40" />
        </div>

        <h2 className="reveal mt-8 text-center font-display text-3xl font-bold text-cream sm:text-4xl">
          {t("heading")}
        </h2>
        <p className="reveal mt-4 text-center text-muted-light">
          {t("description")}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="stagger mt-10 space-y-4"
        >
          <div>
            <div className="group relative">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted transition-colors group-focus-within:text-accent"
              />
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                {...register("email")}
                className="w-full rounded-xl border border-border-dark bg-dark-warm py-3.5 pl-11 pr-4 text-cream placeholder-muted transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 focus:shadow-[0_0_20px_-4px_rgba(180,83,9,0.2)]"
              />
            </div>
            {errors.email && (
              <p className="mt-1.5 flex items-center gap-1 text-sm text-error">
                <AlertCircle size={13} />
                {errors.email.message}
              </p>
            )}
          </div>

          <input
            type="text"
            placeholder={t("namePlaceholder")}
            {...register("name")}
            className="w-full rounded-xl border border-border-dark bg-dark-warm py-3.5 px-4 text-cream placeholder-muted transition-all focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 focus:shadow-[0_0_20px_-4px_rgba(180,83,9,0.2)]"
          />

          <label className="flex items-start gap-3 text-sm text-muted-light">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-0.5 h-4 w-4 rounded border-border-dark accent-accent"
            />
            <span>
              {t("consent")}{" "}
              <Link
                href="/adatvedelem"
                className="text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:text-accent-light hover:decoration-accent"
              >
                {t("consentLink")}
              </Link>{" "}
              {t("consentEnd")}
            </span>
          </label>
          {errors.consent && (
            <p className="flex items-center gap-1 text-sm text-error">
              <AlertCircle size={13} />
              {errors.consent.message}
            </p>
          )}

          {status === "error" && (
            <p className="flex items-center gap-1 text-sm text-error">
              <AlertCircle size={13} />
              {t("errorMessage")}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex w-full items-center justify-center gap-2 rounded-xl border border-accent bg-accent/10 py-3.5 text-sm font-semibold tracking-wide text-accent-glow transition-all hover:bg-accent hover:text-white hover:shadow-[0_0_40px_-8px_rgba(180,83,9,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t("submitting") : t("submit")}
            {!isSubmitting && (
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            )}
          </button>
        </form>
      </div>
    </RevealSection>
  );
}
