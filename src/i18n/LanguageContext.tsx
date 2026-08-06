import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Language, type Translations } from "./translations";

const STORAGE_KEY = "fwa-language";

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "fr";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "fr" || stored === "en") return stored;

  // Fallback: browser language (useful for the American collaborators)
  const browserLang = window.navigator.language?.toLowerCase() ?? "";
  if (browserLang.startsWith("en")) return "en";

  return "fr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => detectInitialLanguage());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => setLanguageState(lang);
  const toggleLanguage = () => setLanguageState((prev) => (prev === "fr" ? "en" : "fr"));

  const value: LanguageContextValue = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
