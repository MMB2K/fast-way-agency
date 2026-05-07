import { createFileRoute } from "@tanstack/react-router";
import { Mountain, Bird, Tent, Camera, Sun, Calendar, Package } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
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

const destinations = [
  {
    name: "Chinguetti",
    desc: "Cité millénaire classée UNESCO, ses bibliothèques anciennes abritent des manuscrits inestimables.",
    img: imgChinguetti,
  },
  {
    name: "Banc d'Arguin",
    desc: "Parc national UNESCO, paradis ornithologique et site de pêche traditionnelle imrâguen.",
    img: imgBancArguin,
  },
  {
    name: "Ouadane",
    desc: "Ancienne ville caravanière perchée, vue spectaculaire sur le plateau de l'Adrar.",
    img: imgOuadane,
  },
  {
    name: "Oasis de Terjit",
    desc: "Refuge de palmiers et sources d'eau cristalline, niché entre les falaises.",
    img: imgTerjit,
  },
  {
    name: "Train du désert",
    desc: "L'un des plus longs trains au monde, traversée mythique du Sahara mauritanien.",
    img: imgTrain,
  },
  {
    name: "Désert de l'Adrar",
    desc: "Mer de dunes, ergs dorés et nuits étoilées sous la tente nomade.",
    img: imgAdrar,
  },
];

const experiences = [
  { icon: Tent, title: "Circuits désert", text: "Bivouacs, méharées et nuits sous les étoiles." },
  { icon: Mountain, title: "Treks & randonnées", text: "Sur les plateaux et canyons de l'Adrar." },
  { icon: Camera, title: "Voyages culturels", text: "Rencontres, artisanat, sites historiques." },
  { icon: Bird, title: "Ornithologie", text: "Observation des oiseaux migrateurs au Banc d'Arguin." },
];

const practical = [
  { icon: Sun, title: "Meilleure saison", text: "D'octobre à avril, climat sec et températures agréables." },
  { icon: Calendar, title: "Durée idéale", text: "De 5 à 12 jours selon le circuit choisi." },
  { icon: Package, title: "Inclus", text: "Transport, guides, hébergement, repas et activités." },
];

function MauritaniePage() {
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
            Mauritanie
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-balance sm:text-5xl lg:text-6xl">
            Le Sahara, à l'état pur.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Cités millénaires, dunes infinies, oasis cachées et hospitalité légendaire. La Mauritanie
            vous attend pour une aventure rare, hors des sentiers battus.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="À découvrir"
          title="Les incontournables"
          description="Sites classés UNESCO, paysages désertiques et trésors de patrimoine."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <article
              key={d.name}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d.img}
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
          <SectionHeading eyebrow="Expériences" title="Choisissez votre aventure" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((e) => (
              <div key={e.title} className="rounded-3xl bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/10 text-orange">
                  <e.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{e.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Infos pratiques" title="Bon à savoir avant le départ" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {practical.map((p) => (
            <div key={p.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/20 text-navy-deep">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Vivez la Mauritanie autrement"
        subtitle="Circuits sur-mesure ou départs en petit groupe : parlons de votre voyage idéal."
        ctaLabel="Réserver mon aventure"
      />
    </>
  );
}
