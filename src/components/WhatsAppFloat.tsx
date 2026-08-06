import { useLanguage } from "@/i18n/LanguageContext";

export function WhatsAppFloat() {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/22237448997"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.label}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/20 transition-transform hover:scale-110 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16 print:hidden"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-30" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 sm:h-8 sm:w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.27c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM16.02 4C9.39 4 4 9.39 4 16.02c0 2.12.55 4.19 1.6 6.02L4 28l6.13-1.6a11.94 11.94 0 0 0 5.89 1.5h.01c6.62 0 12.01-5.39 12.01-12.02C28.04 9.39 22.65 4 16.02 4zm0 21.93h-.01a9.94 9.94 0 0 1-5.06-1.39l-.36-.21-3.64.95.97-3.55-.24-.37a9.91 9.91 0 0 1-1.52-5.34c0-5.49 4.47-9.95 9.96-9.95 2.66 0 5.16 1.04 7.04 2.92a9.89 9.89 0 0 1 2.91 7.04c-.01 5.49-4.48 9.95-9.96 9.95z" />
      </svg>
    </a>
  );
}
