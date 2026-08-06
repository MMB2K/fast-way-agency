import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Stethoscope, Compass, ShieldCheck, Sparkles, HeartHandshake, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fast Way Agency — Explorez le monde, nous gérons le reste" },
      {
        name: "description",
        content:
          "Agence de voyage et de conseil : études à l'étranger, tourisme médical en Turquie, circuits en Mauritanie. Accompagnement complet par Fast Way Agency.",
      },
      { property: "og:title", content: "Fast Way Agency" },
      { property: "og:description", content: "Explorez le monde, nous gérons le reste." },
    ],
  }),
  component: HomePage,
});

const serviceIcons = [GraduationCap, Stethoscope, Compass];
const serviceLinks = ["/etudes", "/tourisme-medical", "/mauritanie"] as const;
const advantageIcons = [ShieldCheck, HeartHandshake, Sparkles, Globe2];

function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=80')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-deep/85 via-navy/70 to-teal/40"
          aria-hidden="true"
        />
        <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-4 py-20 text-white sm:px-6 sm:py-28">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-orange" />
            {t.home.badge}
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
            {t.home.title1}
            <span className="block bg-gradient-to-r from-orange to-orange-soft bg-clip-text text-transparent">
              {t.home.title2}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t.home.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-orange px-8 text-base font-semibold text-white hover:bg-orange/90"
            >
              <Link to="/contact">
                {t.home.ctaContact} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur hover:bg-white/20 hover:text-white"
            >
              <Link to="/etudes">{t.home.ctaServices}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-cream/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {t.home.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-navy-deep sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow={t.home.servicesEyebrow}
          title={t.home.servicesTitle}
          description={t.home.servicesDescription}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.home.services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Link
                key={s.title}
                to={serviceLinks[i]}
                className="group flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-orange/40 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/30 to-navy/10 text-navy-deep">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                  {t.home.learnMore}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-brand-gradient-soft">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow={t.home.whyEyebrow}
            title={t.home.whyTitle}
            description={t.home.whyDescription}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.advantages.map((a, i) => {
              const Icon = advantageIcons[i];
              return (
                <div key={a.title} className="rounded-3xl bg-card p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title={t.home.ctaTitle}
        subtitle={t.home.ctaSubtitle}
        ctaLabel={t.home.ctaLabel}
      />
    </>
  );
}
