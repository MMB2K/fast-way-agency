import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Fast Way Agency" },
      {
        name: "description",
        content:
          "Fast Way Agency, agence spécialisée dans l'orientation et la mobilité éducative internationale, basée à Nouakchott, en Mauritanie, depuis 2023.",
      },
      { property: "og:title", content: "À propos — Fast Way Agency" },
      { property: "og:description", content: "Votre projet d'études, notre accompagnement." },
    ],
  }),
  component: AProposPage,
});

function AProposPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-deep/92 via-navy/80 to-teal/35" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 py-24 text-white sm:px-6 sm:py-32">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-orange" />
            {t.apropos.badge} · {t.apropos.since}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
            {t.apropos.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="space-y-6">
          {t.apropos.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground/90 sm:text-lg">
              {p}
            </p>
          ))}
        </div>

        <p className="mt-10 border-l-4 border-orange pl-5 font-display text-lg font-semibold italic text-navy-deep sm:text-xl">
          {t.apropos.signature}
        </p>
      </section>

      <section className="bg-brand-gradient-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-display text-2xl font-bold sm:text-3xl">
            {t.apropos.destinationsTitle}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {t.apropos.destinations.map((d) => (
              <span
                key={d}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-navy-deep shadow-sm"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-brand-gradient p-8 text-center text-white shadow-xl sm:p-14">
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">{t.apropos.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{t.apropos.ctaSubtitle}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-orange px-8 py-3.5 text-base font-semibold text-white hover:bg-orange/90"
          >
            {t.apropos.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
