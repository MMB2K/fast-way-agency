# Site vitrine — Fast Way Agency

Site professionnel multi-pages, en français, fidèle à l'identité du logo (orange éclair + bleu marine + dégradé turquoise→vert), typographie Outfit/Figtree, design épuré et arrondi, parfaitement responsive.

## Logo & identité visuelle

- **Logo fourni** intégré dans le header (gauche) et le footer. Copié dans `src/assets/fast-way-logo.png` et importé en module ES6.
- **Couleurs** dérivées du logo :
  - Marine `#0B2A4A` (texte, fond contrasté)
  - Bleu profond `#1E5F8C`
  - Turquoise `#2DD4BF` + vert d'eau `#5EEAD4` (dégradés en arrière-plan, comme le fond du logo)
  - Orange éclair `#F97316` (CTA, accents, énergie)
  - Blanc cassé `#FAFAF7` pour respiration
- **Typo** : titres **Outfit** (semi-bold/bold), corps **Figtree** (Google Fonts via `__root.tsx`).
- **Style** : grands espaces blancs, cartes `rounded-2xl`/`rounded-3xl`, ombres douces, dégradés subtils marine→turquoise rappelant le fond du logo, micro-animations au survol.
- **Imagerie** : photos voyage haute qualité (Unsplash) — paysages, campus, cliniques modernes, désert mauritanien.

## Structure des pages

```text
/                  Accueil (hero + aperçu services + CTA)
/etudes            Études internationales
/tourisme-medical  Tourisme médical en Turquie
/mauritanie        Découverte de la Mauritanie
/contact           Contact (mail, téléphone, formulaire)
```

Header partagé (logo + nav) et Footer partagé via `__root.tsx`. Chaque page a son propre `head()` (title, description, og:title, og:description) pour le SEO.

### Accueil (`/`)
- **Hero** plein écran : grande photo voyage, overlay dégradé marine→turquoise (clin d'œil au logo), titre **« Explorez le monde, nous gérons le reste »**, sous-titre court, bouton orange **« Nous contacter »** + bouton secondaire **« Découvrir nos services »**.
- **Bandeau confiance** : 3-4 chiffres clés (destinations, clients, années d'expérience, partenaires).
- **Aperçu des 3 services** en cartes arrondies cliquables vers leur page.
- **Section « Pourquoi nous »** : 3-4 atouts avec icônes Lucide.
- **CTA final** : bandeau orange « Prêt à partir ? ».

### Études internationales (`/etudes`)
- Hero court avec image étudiants/campus.
- Intro sur l'accompagnement (dossier, visa, inscription, logement).
- **Grille de destinations** avec drapeaux emoji (🇹🇷 Turquie, 🇨🇦 Canada, 🇪🇸 Espagne, 🇫🇷 France, 🇩🇪 Allemagne, 🇲🇾 Malaisie) — chaque carte : drapeau, pays, 2-3 bullets (universités, langue, coût indicatif).
- Section « Notre processus » en 4 étapes numérotées.
- CTA contact.

### Tourisme médical en Turquie (`/tourisme-medical`)
- Hero avec visuel clinique moderne / Istanbul, accent qualité & sérénité.
- Intro sur l'expertise turque et l'accompagnement clé en main.
- **Grille de spécialités** (esthétique, dentaire, capillaire, ophtalmologie, bariatrique, etc.) en cartes icônes.
- **« Notre prise en charge »** : transferts, hébergement, traduction, suivi pré/post-op — 6 points avec icônes.
- Bloc rassurance : cliniques accréditées, médecins certifiés.
- CTA devis personnalisé.

### Découverte de la Mauritanie (`/mauritanie`)
- Hero immersif aventure/nature (dunes, désert), ambiance plus chaude.
- Intro évoquant patrimoine et nature préservée.
- **Cartes destinations** : Chinguetti (ville sainte, bibliothèques anciennes), Banc d'Arguin (parc UNESCO, oiseaux), Ouadane, Terjit, Train du désert — image + description courte.
- **Types d'expériences** : circuits désert, treks, culturel, ornithologie.
- Section pratique : meilleure saison, durée type, ce qui est inclus.
- CTA réservation.

### Contact (`/contact`)
- Titre + intro chaleureuse.
- **Bloc coordonnées** bien visible (cartes arrondies) :
  - 📧 **fastwayagency97@gmail.com** (lien `mailto:`)
  - 📞 **+222 37 44 89 97** (lien `tel:`)
  - 💬 Bouton WhatsApp direct
- Formulaire simple (nom, email, téléphone, service concerné, message) — soumission ouvre `mailto:` pré-rempli (pas de backend).
- Horaires / zone d'intervention.

## Fonctionnalités transverses

- **Bouton WhatsApp flottant** en bas à droite sur toutes les pages : icône WhatsApp dans un cercle vert `#25D366`, ombre, animation pulse douce, lien `https://wa.me/22237448997`, ouverture nouvel onglet, `aria-label`, masqué à l'impression.
- **Header sticky** translucide (backdrop-blur), logo Fast Way à gauche, nav à droite, menu burger sur mobile (Sheet shadcn).
- **Footer** : logo, coordonnées, liens rapides, mention copyright.
- **Responsive mobile-first** : tous les composants testés au viewport étroit, navigation burger, CTA pleine largeur sur mobile, typographie fluide.
- **SEO** : meta uniques par page, `lang="fr"`, balises Open Graph.

## Détails techniques

- TanStack Start, routes séparées sous `src/routes/` (pas de hash anchors entre sections majeures).
- Tailwind v4 — extension du thème dans `src/styles.css` avec tokens Fast Way (`--color-fastway-orange`, `--color-fastway-navy`, `--color-fastway-teal`).
- Polices Outfit + Figtree chargées via Google Fonts dans `__root.tsx`.
- Composants partagés : `Header.tsx`, `Footer.tsx`, `WhatsAppFloat.tsx`, `ServiceCard.tsx`, `SectionHeading.tsx`, `CTABanner.tsx`.
- Logo importé depuis `src/assets/fast-way-logo.png`.
- Icônes via `lucide-react`, drapeaux en emoji.
- Aucune base de données ni auth — site statique côté contenu.
