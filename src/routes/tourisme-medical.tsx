import { createFileRoute } from "@tanstack/react-router";
import {
  Smile, Scissors, Eye, HeartPulse, Sparkles, Activity,
  Plane, Hotel, Languages, Stethoscope, ShieldCheck, PhoneCall
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/tourisme-medical")({
  head: () => ({
    meta: [
      { title: "Tourisme médical en Turquie — Fast Way Agency" },
      {
        name: "description",
        content:
          "Soins de qualité en Turquie : esthétique, dentaire, capillaire, ophtalmologie. Cliniques accréditées et accompagnement complet.",
      },
      { property: "og:title", content: "Tourisme médical en Turquie — Fast Way Agency" },
      { property: "og:description", content: "Cliniques accréditées et accompagnement clé en main." },
    ],
  }),
  component: MedicalPage,
});

const specialtyIcons = [Sparkles, Smile, Scissors, Eye, HeartPulse, Activity];
const careIcons = [Plane, Hotel, Languages, Stethoscope, ShieldCheck, PhoneCall];

function MedicalPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=2000&q=80')",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-deep/90 via-navy/75 to-teal/30" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 py-24 text-white sm:px-6 sm:py-32">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            {t.medical.badge}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
            {t.medical.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {t.medical.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow={t.medical.specialtiesEyebrow}
          title={t.medical.specialtiesTitle}
          description={t.medical.specialtiesDescription}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.medical.specialties.map((s, i) => {
            const Icon = specialtyIcons[i];
            return (
              <div key={s.title} className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm transition-all hover:border-orange/40 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/30 to-orange/15 text-navy-deep">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-gradient-soft">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow={t.medical.careEyebrow}
            title={t.medical.careTitle}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.medical.care.map((c, i) => {
              const Icon = careIcons[i];
              return (
                <div key={c.title} className="rounded-3xl bg-card p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-10 w-10 shrink-0 text-teal" />
            <div>
              <h3 className="font-display text-2xl font-bold">{t.medical.qualityTitle}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {t.medical.qualityText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={t.medical.ctaTitle}
        subtitle={t.medical.ctaSubtitle}
        ctaLabel={t.medical.ctaLabel}
      />
    </>
  );
}
