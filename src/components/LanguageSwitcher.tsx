import { useLanguage } from "@/i18n/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-muted/60 p-0.5 text-xs font-semibold ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          language === "fr"
            ? "bg-orange text-white shadow-sm"
            : "text-foreground/60 hover:text-foreground"
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          language === "en"
            ? "bg-orange text-white shadow-sm"
            : "text-foreground/60 hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}
