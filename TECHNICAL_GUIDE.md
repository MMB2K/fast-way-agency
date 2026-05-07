# Guide Technique - Fast Way Agency

Documentation technique détaillée pour les développeurs qui maintiendront ce projet.

## 🏗️ Architecture Technique

### Choix Architecturaux

**React 19.2** : Version stable avec améliorations de performances et Server Components optionnels  
**TanStack Router** : Alternative moderne à React Router, file-based routing, type-safe  
**Vite 7.3** : Build ultra-rapide, HMR instantané, configuration minimale  
**Tailwind CSS 4.2** : Utility-first CSS, tree-shaking automatique en production  

### Pourquoi TanStack Router ?

Contrairement à React Router, TanStack Router offre :
- **Type Safety** : Routes typées automatiquement
- **File-based routing** : Chaque fichier dans `/routes` = une route
- **Code splitting automatique** : Chaque route est un chunk séparé
- **Nested layouts** : Layouts imbriqués avec `<Outlet />`
- **Métadonnées par route** : SEO intégré dans chaque route

## 📁 Détails de la Structure

### src/routes/

#### `__root.tsx` - Route Racine
```tsx
// Layout global de toute l'application
export const Route = createRootRoute({
  head: () => ({ /* Métadonnées SEO */ }),
  component: RootComponent,  // Wrapper Header/Footer
  notFoundComponent: NotFoundComponent
});
```

Rôle :
- Définit la structure HTML de base
- Injecte les métadonnées SEO globales
- Wrap toutes les pages avec Header + Footer
- Gère la page 404

#### Routes de Pages
Chaque fichier = une page :
- `index.tsx` → `/`
- `contact.tsx` → `/contact`
- `etudes.tsx` → `/etudes`

Structure type d'une route :
```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/etudes')({
  component: EtudesPage,
  // Métadonnées optionnelles spécifiques
  head: () => ({
    meta: [
      { title: "Études Internationales - Fast Way Agency" }
    ]
  })
});

function EtudesPage() {
  return (
    <div>Contenu de la page</div>
  );
}
```

### src/components/

#### Composants Métier
- **Header.tsx** : Navigation principale avec menu desktop/mobile
- **Footer.tsx** : Pied de page avec liens et contact
- **WhatsAppFloat.tsx** : Bouton flottant pour contact WhatsApp
- **CTABanner.tsx** : Bannière d'appel à l'action réutilisable

#### Composants UI (ui/)
Composants shadcn/ui basés sur Radix UI :
- Tous les composants suivent les conventions shadcn
- Stylés avec Tailwind + variants (CVA)
- Accessible (ARIA, clavier)
- Thémables via CSS variables

### src/lib/

#### `utils.ts`
```tsx
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper pour merger les classes Tailwind
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

Utilisation :
```tsx
<div className={cn("base-classes", isActive && "active-classes")} />
```

### src/styles.css

Fichier de styles global Tailwind :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Variables CSS personnalisées */
    --color-navy-deep: #0A1D2E;
    --color-teal: #1FB8A8;
    /* ... */
  }
}
```

Les couleurs sont utilisées via Tailwind : `bg-navy-deep`, `text-teal`, etc.

## 🔧 Fichiers de Configuration

### vite.config.ts

Configuration Vite complète (post-nettoyage Lovable) :

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    TanStackRouterVite(),  // Génère routeTree.gen.ts
    react(),               // Support JSX/TSX
    tailwindcss(),         // Intégration Tailwind
    tsconfigPaths(),       // Alias @ vers src/
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['@tanstack/react-router'],
        },
      },
    },
  },
});
```

### tsconfig.json

Configuration TypeScript avec support des paths :

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 🎨 Système de Design

### Palette de Couleurs

```css
--color-navy-deep: #0A1D2E;    /* Bleu marine principal */
--color-navy-light: #2C3E50;   /* Bleu marine clair */
--color-teal: #1FB8A8;          /* Turquoise (accent) */
--color-orange: #FF6B35;        /* Orange (CTA) */
--color-cream: #FFF8F0;         /* Crème (backgrounds) */
```

Utilisation dans Tailwind :
```tsx
<button className="bg-orange hover:bg-orange/90 text-white">
  Action
</button>
```

### Typographie

**Fonts Google** chargées dans `__root.tsx` :
- **Outfit** : Titres (display) - weights 500-800
- **Figtree** : Corps de texte - weights 400-700

Classes Tailwind :
```tsx
<h1 className="font-display text-4xl font-bold">Titre</h1>
<p className="font-sans text-base">Paragraphe</p>
```

### Composants Réutilisables

Tous les composants UI suivent le pattern shadcn :
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Cliquer
</Button>
```

Variants disponibles (configurés via CVA) :
- **variant** : default, destructive, outline, secondary, ghost, link
- **size** : default, sm, lg, icon

## 🔄 Workflow de Développement

### 1. Ajouter une Nouvelle Page

```bash
# Créer le fichier de route
touch src/routes/nouvelle-page.tsx
```

```tsx
// src/routes/nouvelle-page.tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/nouvelle-page')({
  component: NouvellePage,
});

function NouvellePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="font-display text-4xl">Nouvelle Page</h1>
    </div>
  );
}
```

Ajouter le lien dans `Header.tsx` :
```tsx
<Link to="/nouvelle-page">Nouvelle Page</Link>
```

Le routeur détectera automatiquement la nouvelle route au redémarrage.

### 2. Modifier le Design d'un Composant

Exemple : Modifier le Footer

```bash
# Éditer le composant
nano src/components/Footer.tsx
```

Les changements sont reflétés instantanément grâce au HMR de Vite.

### 3. Ajouter une Dépendance

```bash
npm install nom-package
```

Exemple : Ajouter Framer Motion
```bash
npm install framer-motion
```

Puis utiliser :
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Contenu animé
</motion.div>
```

## 🚀 Optimisations de Performance

### Code Splitting

TanStack Router split automatiquement chaque route :
```
dist/
├── assets/
│   ├── index-abc123.js      # Code commun
│   ├── etudes-def456.js     # Page études
│   ├── contact-ghi789.js    # Page contact
│   └── ...
```

Chaque page charge uniquement son code nécessaire.

### Tree Shaking

Vite élimine automatiquement le code non utilisé :
- Imports Radix UI : seuls les composants utilisés sont inclus
- Lucide React : icônes tree-shakées individuellement
- Tailwind : seules les classes utilisées dans le HTML final

### Lazy Loading des Images

Utiliser le loading natif :
```tsx
<img 
  src="/path/to/image.jpg" 
  loading="lazy" 
  alt="Description"
/>
```

### Compression

En production, Nginx compresse (gzip/brotli) :
- JS/CSS : ~70% de réduction
- HTML : ~60% de réduction

## 🧪 Testing (Optionnel)

Pour ajouter des tests :

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Configuration `vite.config.ts` :
```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
```

Exemple de test :
```tsx
// src/components/Header.test.tsx
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('affiche le logo', () => {
  render(<Header />);
  expect(screen.getByAltText('Fast Way Agency')).toBeInTheDocument();
});
```

## 📊 Analyse du Bundle

Installer l'analyseur :
```bash
npm install -D rollup-plugin-visualizer
```

Dans `vite.config.ts` :
```typescript
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    // ... autres plugins
    visualizer({ open: true }),
  ],
});
```

Puis :
```bash
npm run build
# Ouvre automatiquement stats.html avec la visualisation
```

## 🔒 Sécurité

### Headers HTTP (configurés dans Nginx)
```nginx
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
```

### Validation des Formulaires

Utiliser Zod pour la validation :
```tsx
import { z } from "zod";

const contactSchema = z.object({
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Message trop court"),
});

// Dans le composant
const onSubmit = (data) => {
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    // Gérer les erreurs
  }
};
```

## 🐛 Debugging

### Mode Développement

```bash
npm run dev
```

- Console navigateur : Logs, erreurs, warnings
- React DevTools : Inspecter la hiérarchie des composants
- Vite HMR : Overlay d'erreur en plein écran

### Logs de Build

```bash
npm run build 2>&1 | tee build.log
```

### Vérifier le Build Localement

```bash
npm run build
npm run preview
# Ouvrir http://localhost:4173
```

## 📚 Ressources

- [TanStack Router Docs](https://tanstack.com/router)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [shadcn/ui Components](https://ui.shadcn.com/)

---

**Maintenu avec ❤️ pour Fast Way Agency**
