import { createFileRoute } from "@tanstack/react-router";
import {
  Smile, Scissors, Eye, HeartPulse, Sparkles, Activity,
  Plane, Hotel, Languages, Stethoscope, ShieldCheck, PhoneCall
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";

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

const specialties = [
  { icon: Sparkles, title: "Chirurgie esthétique" },
  { icon: Smile, title: "Soins dentaires" },
  { icon: Scissors, title: "Greffe capillaire" },
  { icon: Eye, title: "Ophtalmologie" },
  { icon: HeartPulse, title: "Chirurgie bariatrique" },
  { icon: Activity, title: "Bilans de santé" },
];

const care = [
  { icon: Plane, title: "Transferts aéroport", text: "Prise en charge à l'arrivée et au départ." },
  { icon: Hotel, title: "Hébergement", text: "Hôtels partenaires confortables et bien situés." },
  { icon: Languages, title: "Traduction", text: "Interprète francophone à chaque rendez-vous." },
  { icon: Stethoscope, title: "Suivi médical", text: "Consultations pré et post-opératoires planifiées." },
  { icon: ShieldCheck, title: "Cliniques certifiées", text: "Établissements accrédités JCI et médecins reconnus." },
  { icon: PhoneCall, title: "Assistance 24/7", text: "Un contact dédié, joignable à tout moment." },
];

function MedicalPage() {
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
            Tourisme médical
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
            La Turquie, référence mondiale du soin
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Profitez d'une expertise médicale de haut niveau, à des tarifs accessibles, dans un cadre
            confortable. Tout est organisé : voyage, soins, hébergement et suivi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Spécialités"
          title="Des soins pour chaque besoin"
          description="Nos partenaires couvrent l'ensemble des principales spécialités médicales et esthétiques."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((s) => (
            <div key={s.title} className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-sm transition-all hover:border-orange/40 hover:shadow-lg">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal/30 to-orange/15 text-navy-deep">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-gradient-soft">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Notre prise en charge"
            title="Vous vous reposez, nous organisons tout"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {care.map((c) => (
              <div key={c.title} className="rounded-3xl bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <div className="flex items-start gap-4">
            <ShieldCheck className="h-10 w-10 shrink-0 text-teal" />
            <div>
              <h3 className="font-display text-2xl font-bold">Qualité et sécurité, sans compromis</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Nous ne travaillons qu'avec des cliniques accréditées internationalement et des
                médecins certifiés, dont les résultats sont vérifiés. Votre sécurité passe avant tout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Recevez un devis personnalisé"
        subtitle="Décrivez-nous votre besoin, nous revenons vers vous avec un programme complet et un devis transparent."
        ctaLabel="Demander un devis"
      />
    </>
  );
}
