import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-bold text-dark">
            GR<span className="text-accent">.</span>
          </span>
          <span className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/adatvedelem"
            className="text-sm text-muted transition-colors hover:text-dark"
          >
            {t("privacy")}
          </Link>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-muted transition-all hover:bg-accent/10 hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
