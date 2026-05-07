# Fast Way Agency - Site Vitrine

Site vitrine moderne pour Fast Way Agency, agence de voyage spécialisée dans :
- 🎓 Études internationales
- 🏥 Tourisme médical en Turquie
- 🏜️ Découverte de la Mauritanie

## 📋 Stack Technique

- **Framework** : React 19.2 + Vite 7.3
- **Routing** : TanStack Router 1.168
- **Styling** : Tailwind CSS 4.2
- **UI Components** : Radix UI + shadcn/ui
- **Forms** : React Hook Form + Zod
- **Icons** : Lucide React
- **Build Tool** : Vite avec optimisations de production

## 🗂️ Structure du Projet

```
fast-way-agency/
├── src/
│   ├── routes/              # Pages de l'application
│   │   ├── __root.tsx       # Layout principal + métadonnées SEO
│   │   ├── index.tsx        # Page d'accueil
│   │   ├── etudes.tsx       # Page études internationales
│   │   ├── tourisme-medical.tsx
│   │   ├── mauritanie.tsx
│   │   └── contact.tsx
│   ├── components/          # Composants React
│   │   ├── Header.tsx       # Navigation principale
│   │   ├── Footer.tsx       # Pied de page
│   │   ├── WhatsAppFloat.tsx # Bouton flottant WhatsApp
│   │   ├── CTABanner.tsx    # Bannière d'appel à l'action
│   │   └── ui/              # Composants UI réutilisables (shadcn)
│   ├── assets/              # Images et ressources statiques
│   ├── lib/                 # Utilitaires (cn helper pour Tailwind)
│   ├── hooks/               # Custom React hooks
│   ├── styles.css           # Styles globaux Tailwind
│   ├── router.tsx           # Configuration du routeur
│   └── routeTree.gen.ts     # Arbre de routes (auto-généré)
├── public/                  # Fichiers statiques
├── dist/                    # Build de production (généré)
├── package.json             # Dépendances
├── vite.config.ts           # Configuration Vite
├── tsconfig.json            # Configuration TypeScript
└── tailwind.config.js       # Configuration Tailwind (optionnelle)
```

## 🔄 Fonctionnement du Routage

Le projet utilise **TanStack Router** avec un système de routage basé sur les fichiers :

### Routes Principales
- `/` → `src/routes/index.tsx` (Accueil)
- `/etudes` → `src/routes/etudes.tsx`
- `/tourisme-medical` → `src/routes/tourisme-medical.tsx`
- `/mauritanie` → `src/routes/mauritanie.tsx`
- `/contact` → `src/routes/contact.tsx`

### Layout Global
Le fichier `__root.tsx` contient :
- Métadonnées SEO (title, description, Open Graph)
- Structure HTML de base
- Composants partagés (Header, Footer, WhatsAppFloat)

### Navigation
La navigation se fait via le composant `Link` de TanStack Router :
```tsx
import { Link } from "@tanstack/react-router";
<Link to="/etudes">Études</Link>
```

## 🚀 Installation & Développement

### Prérequis
- Node.js 18+ et npm (ou yarn/pnpm)

### Installation des dépendances
```bash
npm install
```

### Lancement en mode développement
```bash
npm run dev
```
→ Le site sera accessible sur `http://localhost:5173`

### Vérification du code
```bash
npm run lint          # Vérification ESLint
npm run format        # Formatage avec Prettier
```

## 📦 Build de Production

### Génération du build
```bash
npm run build
```

Cette commande :
1. Compile le TypeScript
2. Optimise les assets (minification, tree-shaking)
3. Génère les fichiers statiques dans `/dist`
4. Crée des chunks optimisés (React, Router)

### Aperçu du build local
```bash
npm run preview
```
→ Teste le build de production sur `http://localhost:4173`

## 🌐 Déploiement

### Option 1 : Serveur Nginx (Recommandé)

#### 1. Générer le build
```bash
npm run build
```

#### 2. Copier les fichiers sur le serveur
```bash
scp -r dist/* user@votreserveur:/var/www/fastwayagency
```

#### 3. Configuration Nginx
Créer `/etc/nginx/sites-available/fastwayagency` :

```nginx
server {
    listen 80;
    server_name votredomaine.com www.votredomaine.com;
    root /var/www/fastwayagency;
    index index.html;

    # Gestion du routage SPA
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache des assets statiques
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compression gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_comp_level 6;
}
```

#### 4. Activer le site
```bash
sudo ln -s /etc/nginx/sites-available/fastwayagency /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 5. SSL avec Let's Encrypt (optionnel mais recommandé)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d votredomaine.com -d www.votredomaine.com
```

### Option 2 : Serveur Apache

#### Configuration Apache
Créer `/etc/apache2/sites-available/fastwayagency.conf` :

```apache
<VirtualHost *:80>
    ServerName votredomaine.com
    DocumentRoot /var/www/fastwayagency

    <Directory /var/www/fastwayagency>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # Routage SPA
        RewriteEngine On
        RewriteBase /
        RewriteRule ^index\.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]
    </Directory>

    # Cache des assets
    <FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$">
        Header set Cache-Control "max-age=31536000, public"
    </FilesMatch>
</VirtualHost>
```

Activer les modules et le site :
```bash
sudo a2enmod rewrite headers
sudo a2ensite fastwayagency
sudo systemctl reload apache2
```

### Option 3 : Services Cloud (Alternatives)

- **Netlify** : `npm run build` puis drag & drop du dossier `/dist`
- **Vercel** : Connexion GitHub + déploiement automatique
- **Cloudflare Pages** : Upload manuel du dossier `/dist`

## 🔧 Personnalisation

### Modifier les couleurs
Éditer `src/styles.css` (variables CSS personnalisées) :
```css
@layer base {
  :root {
    --color-navy-deep: #0A1D2E;
    --color-teal: #1FB8A8;
    --color-orange: #FF6B35;
    /* ... */
  }
}
```

### Ajouter une nouvelle page
1. Créer `src/routes/nouvelle-page.tsx`
2. Ajouter le lien dans `Header.tsx`
3. Le routeur détectera automatiquement la route

### Modifier le contenu
Tous les textes sont en dur dans les composants. Éditer directement :
- `src/routes/index.tsx` pour l'accueil
- `src/routes/etudes.tsx` pour la page études
- etc.

### Modifier les informations de contact
Éditer `src/components/Footer.tsx` et `src/components/WhatsAppFloat.tsx`

## 📧 Contact & Support

- **Email** : fastwayagency97@gmail.com
- **Téléphone** : +222 37 44 89 97
- **Localisation** : Nouakchott, Mauritanie

## 📝 Notes de Maintenance

### Mises à jour des dépendances
```bash
npm outdated              # Vérifier les mises à jour
npm update                # Mise à jour mineures
npm install package@latest  # Mise à jour majeure spécifique
```

### Analyse du bundle
```bash
npm run build -- --mode analyze
```

### Problèmes courants

**Port 5173 déjà utilisé**
```bash
npm run dev -- --port 3000
```

**Erreurs de build**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

**Projet déployé avec ❤️ par Fast Way Agency**
