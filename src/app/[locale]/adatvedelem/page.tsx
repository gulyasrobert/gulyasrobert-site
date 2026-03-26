import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { siteConfig } from "@/data/site";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PrivacyContent />;
}

function PrivacyContent() {
  const t = useTranslations("privacy");

  const sections = [
    { title: t("controllerTitle"), text: t("controllerText") },
    { title: t("dataTitle"), text: t("dataText") },
    { title: t("purposeTitle"), text: t("purposeText") },
    { title: t("legalTitle"), text: t("legalText") },
    { title: t("retentionTitle"), text: t("retentionText") },
    { title: t("rightsTitle"), text: t("rightsText") },
    { title: t("sharingTitle"), text: t("sharingText") },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-700"
        >
          <ArrowLeft size={16} />
          {"\u2190"}
        </Link>

        <h1 className="text-3xl font-bold text-gray-900">{t("heading")}</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">{t("intro")}</p>

        <div className="mt-10 space-y-8">
          {sections.map(({ title, text }) => (
            <div key={title}>
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {t("contactTitle")}
            </h2>
            <p className="mt-2 text-gray-700">
              {t("contactText")}{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent hover:underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
