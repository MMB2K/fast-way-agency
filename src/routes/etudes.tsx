import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, FileText, Plane, GraduationCap, Home } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/etudes")({
  head: () => ({
    meta: [
      { title: "Études internationales — Fast Way Agency" },
      {
        name: "description",
        content:
          "Étudiez en Turquie, au Canada, en Espagne et bien plus. Fast Way Agency vous accompagne sur le dossier, le visa, l'inscription et le logement.",
      },
      { property: "og:title", content: "Études internationales — Fast Way Agency" },
      {
        property: "og:description",
        content: "Accompagnement complet pour vos études à l'étranger.",
      },
    ],
  }),
  component: EtudesPage,
});

const destinations = [
  { flag: "🇹🇷", name: "Turquie", points: ["Universités reconnues", "Bourses disponibles", "Coût accessible"] },
  { flag: "🇨🇦", name: "Canada", points: ["Diplômes mondialement reconnus", "Permis de travail post-études", "Anglais & français"] },
  { flag: "🇪🇸", name: "Espagne", points: ["Espace européen", "Cadre de vie agréable", "Espagnol & anglais"] },
  { flag: "🇫🇷", name: "France", points: ["Universités prestigieuses", "Études en français", "Système d'aide étudiant"] },
  { flag: "🇩🇪", name: "Allemagne", points: ["Frais réduits voire gratuits", "Universités techniques de pointe", "Forte employabilité"] },
  { flag: "🇲🇾", name: "Malaisie", points: ["Programmes en anglais", "Coût de la vie bas", "Diplômes internationaux"] },
];

const steps = [
  { icon: FileText, title: "Étude du dossier", text: "Évaluation de votre profil et choix de la destination idéale." },
  { icon: GraduationCap, title: "Inscription", text: "Sélection des établissements et soumission des candidatures." },
  { icon: Plane, title: "Visa & voyage", text: "Préparation complète du dossier visa et logistique du départ." },
  { icon: Home, title: "Installation", text: "Logement, ouverture de compte, accompagnement à l'arrivée." },
];

function EtudesPage() {
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
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-deep/90 via-navy/75 to-teal/30" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 py-24 text-white sm:px-6 sm:py-32">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            Études internationales
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
            Construisez votre avenir académique à l'étranger
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            De la sélection de l'université au jour de l'installation, nous prenons en charge chaque
            étape pour que vous puissiez vous concentrer sur l'essentiel : réussir.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Destinations"
          title="Choisissez votre pays d'études"
          description="Nous travaillons avec un réseau d'universités partenaires sur trois continents."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <div
              key={d.name}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-orange/40 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-4xl" aria-hidden="true">{d.flag}</span>
                <h3 className="font-display text-xl font-bold">{d.name}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {d.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-gradient-soft">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading eyebrow="Notre processus" title="4 étapes simples vers votre départ" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-3xl bg-card p-6 shadow-sm">
                <div className="absolute -top-4 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-orange font-display text-lg font-bold text-white shadow-md">
                  {i + 1}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/20 text-navy-deep">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Votre projet d'études commence ici"
        subtitle="Recevez une évaluation gratuite de votre dossier et la liste des universités adaptées à votre profil."
        ctaLabel="Évaluer mon dossier"
      />
    </>
  );
}
