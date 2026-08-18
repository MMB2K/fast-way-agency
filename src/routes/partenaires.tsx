import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";

import logoWsb from "@/assets/partners/wsb.png";
import logoCbs from "@/assets/partners/cbs.png";
import logoProyecto from "@/assets/partners/proyecto-espanol.webp";
import logoInmsol from "@/assets/partners/inmsol.png";
import logoIlsc from "@/assets/partners/ilsc.webp";
import logoWoosong from "@/assets/partners/woosong.jpg";
import logoLincoln from "@/assets/partners/lincoln.webp";
import logoExpatrio from "@/assets/partners/expatrio.png";
import logoFintiba from "@/assets/partners/fintiba.png";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Nos partenaires — Fast Way Agency" },
      {
        name: "description",
        content:
          "Universités, écoles et organismes partenaires de Fast Way Agency à travers le monde : Pologne, Allemagne, Espagne, Corée du Sud, Malaisie et plus.",
      },
      { property: "og:title", content: "Nos partenaires — Fast Way Agency" },
      { property: "og:description", content: "Notre réseau d'établissements et d'organismes partenaires." },
    ],
  }),
  component: PartenairesPage,
});

// Logos officiels fournis par le client, associés par domaine (clé stable, indépendante de la langue)
const logoByDomain: Record<string, string> = {
  "wsb.edu.pl": logoWsb,
  "cbs.de": logoCbs,
  "proyectoespanol.com": logoProyecto,
  "inmsol.com": logoInmsol,
  "ilsc.com": logoIlsc,
  "wsu.ac.kr": logoWoosong,
  "lincoln.edu.my": logoLincoln,
  "expatrio.com": logoExpatrio,
  "fintiba.com": logoFintiba,
};

function PartenairesPage() {
  const { t } = useLanguage();

  const schools = t.partenaires.list.filter((p) => p.type === "school");
  const services = t.partenaires.list.filter((p) => p.type === "service");

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-gradient text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            {t.partenaires.badge}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-balance sm:text-5xl">
            {t.partenaires.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            {t.partenaires.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow={t.partenaires.schoolsEyebrow}
          title={t.partenaires.schoolsTitle}
          description={t.partenaires.schoolsDescription}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {schools.map((p) => (
            <a
              key={p.name}
              href={`https://${p.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-orange/40 hover:shadow-lg"
            >
              <div className="flex h-20 w-full items-center justify-center rounded-2xl bg-white p-3 shadow-inner">
                <img
                  src={logoByDomain[p.domain]}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-4 font-display text-base font-bold leading-tight">{p.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {p.country}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-brand-gradient-soft">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow={t.partenaires.servicesEyebrow}
            title={t.partenaires.servicesTitle}
            description={t.partenaires.servicesDescription}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {services.map((p) => (
              <a
                key={p.name}
                href={`https://${p.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center rounded-3xl bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-20 w-full items-center justify-center rounded-2xl bg-white p-3 shadow-inner">
                  <img
                    src={logoByDomain[p.domain]}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <h3 className="mt-4 font-display text-base font-bold leading-tight">{p.name}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {p.country}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-brand-gradient p-8 text-center text-white shadow-xl sm:p-14">
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">{t.partenaires.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{t.partenaires.ctaSubtitle}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-orange px-8 py-3.5 text-base font-semibold text-white hover:bg-orange/90"
          >
            {t.partenaires.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
