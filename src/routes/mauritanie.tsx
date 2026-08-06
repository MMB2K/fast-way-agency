import { createFileRoute } from "@tanstack/react-router";
import { Mountain, Bird, Tent, Camera, Sun, Calendar, Package } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { useLanguage } from "@/i18n/LanguageContext";
import imgChinguetti from "@/assets/mauritanie-main.jpg";
import imgBancArguin from "@/assets/mauritanie-banc-d-arguin.jpg";
import imgOuadane from "@/assets/mauritanie-ouadane.jpg";
import imgTerjit from "@/assets/mauritanie-terjit.jpg";
import imgTrain from "@/assets/mauritanie-train.jpg";
import imgAdrar from "@/assets/mauritanie-adrar.jpg";

export const Route = createFileRoute("/mauritanie")({
  head: () => ({
    meta: [
      { title: "Découverte de la Mauritanie — Fast Way Agency" },
      {
        name: "description",
        content:
          "Chinguetti, Banc d'Arguin, désert de l'Adrar, train du désert. Vivez l'aventure mauritanienne authentique avec Fast Way Agency.",
      },
      { property: "og:title", content: "Découverte de la Mauritanie — Fast Way Agency" },
      { property: "og:description", content: "Aventure, nature et patrimoine au cœur du Sahara." },
    ],
  }),
  component: MauritaniePage,
});

// Ordre aligné avec t.mauritanie.destinations dans translations.ts
const destinationImages = [imgChinguetti, imgBancArguin, imgOuadane, imgTerjit, imgTrain, imgAdrar];
const experienceIcons = [Tent, Mountain, Camera, Bird];
const practicalIcons = [Sun, Calendar, Package];

function MauritaniePage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imgAdrar}')`,
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-deep/85 via-orange/30 to-navy/40" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 py-24 text-white sm:px-6 sm:py-32">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            {t.mauritanie.badge}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
            {t.mauritanie.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t.mauritanie.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow={t.mauritanie.discoverEyebrow}
          title={t.mauritanie.discoverTitle}
          description={t.mauritanie.discoverDescription}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.mauritanie.destinations.map((d, i) => (
            <article
              key={d.name}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={destinationImages[i]}
                  alt={d.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-gradient-soft">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow={t.mauritanie.experiencesEyebrow} title={t.mauritanie.experiencesTitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.mauritanie.experiences.map((e, i) => {
              const Icon = experienceIcons[i];
              return (
                <div key={e.title} className="rounded-3xl bg-card p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{e.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow={t.mauritanie.practicalEyebrow} title={t.mauritanie.practicalTitle} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.mauritanie.practical.map((p, i) => {
            const Icon = practicalIcons[i];
            return (
              <div key={p.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/20 text-navy-deep">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CTABanner
        title={t.mauritanie.ctaTitle}
        subtitle={t.mauritanie.ctaSubtitle}
        ctaLabel={t.mauritanie.ctaLabel}
      />
    </>
  );
}
