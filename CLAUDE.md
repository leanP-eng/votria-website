# CLAUDE.md — Instructions Claude Code pour VotrIA Phase 1

**Chemin projet** : `E:\VotrIA\Site web\`
**Référence complète** : `BRIEF-VOTRIA.md` (ce document doit être dans la racine)

---

## PHASE 1 — SCAFFOLD COMPLET + ACCUEIL OPÉRATIONNEL

Durée estimée : 3-4 jours Claude Code (10h-12h travail effectif)

### Vue d'ensemble Phase 1

```
Phase 1A — Scaffold technique (jours 1-2)
├─ npm install + config files verrouillés
├─ Design system (Tailwind tokens + palette)
├─ 7 composants réutilisables
├─ BaseLayout.astro avec SEO/GA4/headers sécurité
└─ Structure locale testée (npm run dev)

Phase 1B — Page d'accueil (jour 3)
├─ src/pages/index.astro assemblée
├─ 4 cartes métier opérationnelles
├─ Formulaire contact → n8n webhook
└─ Accueil testé localement

Phase 1C — Pages légales minimales (jour 3)
├─ /mentions-legales.astro
└─ /politique-confidentialite.astro

Phase 1D — Déploiement Phase 1 (jour 4)
├─ netlify.toml + _redirects verrouillés
├─ .env configuré (N8N_WEBHOOK_URL + GA4_ID)
├─ npm run build → dist/ généré
├─ git push → Netlify déploie automatiquement
└─ votria-pro.fr en ligne
```

---

## PHASE 1A — SCAFFOLD TECHNIQUE

### Étape 1 : Initialisation du projet

```bash
# Windows PowerShell (dans E:\VotrIA\Site web\)
cd "E:\VotrIA\Site web"
git init
npm create astro@latest . -- --template minimal
npm install @astrojs/tailwind @astrojs/sitemap
npm install @fontsource/inter
```

**Résultat attendu** :
- `node_modules/` créé
- `src/pages/index.astro` existant (sera remplacé)
- Serveur local : `npm run dev` → http://localhost:3000 accessible

---

### Étape 2 : Configuration files (copier/coller du brief ou créer)

#### 2a. `astro.config.mjs`
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: 'static',
  site: 'https://votria-pro.fr',
});
```

#### 2b. `tailwind.config.mjs`
```javascript
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          800: '#1E293B',
          900: '#0F172A',
        },
        orange: {
          50:  '#FFF7ED',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

#### 2c. `package.json` (remplacer le contenu généré)
```json
{
  "name": "votria-website",
  "version": "1.0.0",
  "description": "Site vitrine VotrIA - Intégration IA pour TPE/PME",
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^4.4.0",
    "@astrojs/tailwind": "^0.3.0",
    "@astrojs/sitemap": "^3.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "@fontsource/inter": "^5.0.0"
  },
  "devDependencies": {}
}
```

#### 2d. `.env` (créer — local, pas en Git)
```
N8N_WEBHOOK_URL=https://lean-parform.app.n8n.cloud/webhook/votria-contact
GA4_ID=G-XXXXXXXXXX
CONTACT_EMAIL=contact@votria-pro.fr
SIRET=XXXXXXXXXXXXXXXX
```

**À remplir après :**
- `N8N_WEBHOOK_URL` : quand le workflow n8n sera créé
- `GA4_ID` : quand le property GA4 sera créé dans Google Analytics
- `SIRET` : numéro SIRET exact de Lean Perform

#### 2e. `.gitignore`
```
node_modules/
dist/
.env
.env.local
.DS_Store
*.log
.astro/
```

#### 2f. `netlify.toml`
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=(), payment=()"

[context.production.environment]
  NODE_ENV = "production"
```

#### 2g. `_redirects` (pour Netlify)
```
/  /index.html  200
```

---

### Étape 3 : Dossiers et fichiers statiques

```bash
# Créer les répertoires
mkdir -p src/layouts
mkdir -p src/components
mkdir -p src/styles
mkdir -p src/utils
mkdir -p public/fonts
mkdir -p public/images
```

#### 3a. `public/fonts/` — Inter self-hosted
```
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-400.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-500.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-700.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```
**Note** : Télécharger les fichiers woff2 d'Inter depuis `@fontsource/inter/files/` et les placer dans `public/fonts/`

#### 3b. `public/favicon.ico` et `public/favicon.svg`
(Placeholder — utiliser temporairement un favicon générique ou le logo VotrIA)

#### 3c. `public/robots.txt`
```
User-agent: *
Allow: /
Sitemap: https://votria-pro.fr/sitemap-index.xml
```

#### 3d. `src/styles/global.css`
```css
@import url('@fontsource/inter/400.css');
@import url('@fontsource/inter/500.css');
@import url('@fontsource/inter/700.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #0F172A;
  line-height: 1.6;
}

h1, h2, h3 {
  font-weight: 700;
  line-height: 1.2;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.5rem; }
  h3 { font-size: 1.25rem; }
}
```

---

### Étape 4 : Composants réutilisables (src/components/)

Créer les 7 fichiers suivants. **Format** : `Component.astro`

#### 4a. `Button.astro`
```astro
---
interface Props {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  class?: string;
}

const { href, variant = 'primary', class: className } = Astro.props;

const variantStyles = {
  primary: 'bg-orange-500 text-navy-900 hover:bg-orange-600',
  secondary: 'bg-navy-900 text-white hover:bg-navy-800',
  outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-50',
};

const baseStyles = 'px-6 py-3 rounded-lg font-bold inline-block transition-colors';
const styles = `${baseStyles} ${variantStyles[variant]}`;
---

{href ? (
  <a href={href} class={`${styles} ${className}`}>
    <slot />
  </a>
) : (
  <button class={`${styles} ${className}`}>
    <slot />
  </button>
)}
```

#### 4b. `Card.astro`
```astro
---
interface Props {
  title: string;
  description?: string;
  class?: string;
}

const { title, description, class: className } = Astro.props;
---

<div class={`bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow ${className}`}>
  <h3 class="text-xl font-bold mb-2 text-navy-900">{title}</h3>
  {description && <p class="text-gray-700 text-sm">{description}</p>}
  <slot />
</div>
```

#### 4c. `Section.astro`
```astro
---
interface Props {
  variant?: 'navy' | 'light' | 'white' | 'cta';
  class?: string;
}

const { variant = 'white', class: className } = Astro.props;

const variantStyles = {
  navy: 'bg-navy-900 text-white',
  light: 'bg-navy-50 text-navy-900',
  white: 'bg-white text-navy-900',
  cta: 'bg-navy-900 text-white py-16',
};
---

<section class={`${variantStyles[variant]} py-12 px-6 md:px-12 lg:px-20 ${className}`}>
  <div class="max-w-6xl mx-auto">
    <slot />
  </div>
</section>
```

#### 4d. `NavBar.astro`
```astro
---
import Button from './Button.astro';
---

<nav class="bg-navy-900 text-white sticky top-0 z-50">
  <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <div class="text-xl font-bold">VotrIA</div>
    <div class="hidden md:flex gap-8">
      <a href="/" class="hover:text-orange-500">Accueil</a>
      <a href="/methode-integration-ia" class="hover:text-orange-500">Méthode</a>
      <a href="/a-propos-consultant-ia" class="hover:text-orange-500">À propos</a>
    </div>
    <Button href="/contact-diagnostic-ia" variant="primary">Diagnostic gratuit</Button>
  </div>
</nav>
```

#### 4e. `Footer.astro`
```astro
---
---

<footer class="bg-navy-900 text-white py-12 px-6 md:px-12">
  <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
    <div>
      <h4 class="font-bold mb-4">VotrIA</h4>
      <p class="text-sm text-gray-300">Intégration IA pour TPE/PME</p>
    </div>
    <div>
      <h4 class="font-bold mb-4">Entreprise</h4>
      <ul class="text-sm space-y-2 text-gray-300">
        <li><a href="/a-propos-consultant-ia" class="hover:text-orange-500">À propos</a></li>
        <li><a href="/mentions-legales" class="hover:text-orange-500">Mentions légales</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold mb-4">Légal</h4>
      <ul class="text-sm space-y-2 text-gray-300">
        <li><a href="/politique-confidentialite" class="hover:text-orange-500">Confidentialité</a></li>
        <li><a href="/conditions-utilisation" class="hover:text-orange-500">Conditions</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold mb-4">Contact</h4>
      <p class="text-sm text-gray-300">contact@votria-pro.fr</p>
    </div>
  </div>
  <div class="border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
    © 2026 Lean Perform. Tous droits réservés.
  </div>
</footer>
```

#### 4f. `FormContact.astro`
```astro
---
const n8nUrl = import.meta.env.N8N_WEBHOOK_URL || 'https://placeholder.n8n.cloud/webhook/contact';
---

<form id="contact-form" class="max-w-2xl mx-auto bg-white p-8 rounded-lg border border-gray-200">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <input type="text" name="prenom" placeholder="Prénom" required class="px-4 py-3 border border-gray-300 rounded-lg" />
    <input type="text" name="nom" placeholder="Nom" required class="px-4 py-3 border border-gray-300 rounded-lg" />
  </div>
  
  <div class="mb-6">
    <input type="text" name="entreprise" placeholder="Entreprise" required class="w-full px-4 py-3 border border-gray-300 rounded-lg" />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <select name="secteur" required class="px-4 py-3 border border-gray-300 rounded-lg">
      <option value="">Secteur d'activité</option>
      <option>BTP</option>
      <option>Industrie</option>
      <option>Commerce</option>
      <option>Services</option>
      <option>Autre</option>
    </select>
    <select name="effectif" required class="px-4 py-3 border border-gray-300 rounded-lg">
      <option value="">Effectif</option>
      <option>1-5</option>
      <option>6-20</option>
      <option>21-50</option>
      <option>+50</option>
    </select>
  </div>

  <div class="mb-6">
    <label class="flex items-center gap-2">
      <input type="checkbox" name="rgpd" required class="w-4 h-4" />
      <span class="text-sm">J'accepte les conditions de confidentialité</span>
    </label>
  </div>

  <button type="submit" class="w-full bg-orange-500 text-navy-900 font-bold py-3 rounded-lg hover:bg-orange-600">
    Envoyer ma demande
  </button>

  <div id="success-message" class="hidden mt-6 p-4 bg-green-50 border border-green-300 rounded-lg text-green-800">
    Votre demande a bien été envoyée. Un email de confirmation vous a été transmis. Nous vous répondons sous 24h ouvrées.
  </div>
</form>

<script define:vars={{ n8nUrl }}>
document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  try {
    const response = await fetch(n8nUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      document.getElementById('contact-form').style.display = 'none';
      document.getElementById('success-message').classList.remove('hidden');
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Une erreur est survenue. Veuillez réessayer.');
  }
});
</script>
```

#### 4g. `UsageCard.astro`
```astro
---
interface Props {
  title: string;
  hook: string;
  description: string;
}

const { title, hook, description } = Astro.props;
---

<div class="bg-white border-l-4 border-orange-500 rounded-lg p-6 mb-6">
  <h3 class="text-lg font-bold text-navy-900 mb-2">{title}</h3>
  <p class="text-orange-500 italic text-sm mb-3">"{hook}"</p>
  <p class="text-gray-600 text-sm">{description}</p>
</div>
```

---

### Étape 5 : BaseLayout.astro (src/layouts/)

C'est le template maître pour toutes les pages.

```astro
---
import NavBar from '../components/NavBar.astro';
import Footer from '../components/Footer.astro';
import '../styles/global.css';

interface Props {
  title: string;
  description: string;
  canonical?: string;
}

const { title, description, canonical } = Astro.props;
const gaId = import.meta.env.GA4_ID || 'G-PLACEHOLDER';
---

<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical || `https://votria-pro.fr${Astro.url.pathname}`} />
    
    <!-- Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`https://votria-pro.fr${Astro.url.pathname}`} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="VotrIA" />
    <meta property="og:locale" content="fr_FR" />

    <!-- Schema.org -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "VotrIA",
      "description": "Intégration IA métier pour TPE/PME",
      "url": "https://votria-pro.fr",
      "areaServed": "Occitanie"
    }
    </script>

    <!-- GA4 — chargé après consentement -->
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    </script>
  </head>
  <body class="bg-white text-navy-900">
    <NavBar />
    <main>
      <slot />
    </main>
    <Footer />

    <!-- Bandeau cookies (GA4 Consent Mode) -->
    <div id="cookie-banner" class="fixed bottom-0 left-0 right-0 bg-navy-900 text-white p-4 z-40">
      <div class="max-w-6xl mx-auto flex justify-between items-center gap-4">
        <p class="text-sm">Nous utilisons Google Analytics pour améliorer votre expérience.</p>
        <div class="flex gap-2">
          <button id="accept-cookies" class="bg-orange-500 text-navy-900 px-4 py-2 rounded font-bold">Accepter</button>
          <button id="reject-cookies" class="border border-white px-4 py-2 rounded">Refuser</button>
        </div>
      </div>
    </div>

    <script define:vars={{ gaId }}>
      // GA4 Consent Mode v2
      const acceptBtn = document.getElementById('accept-cookies');
      const rejectBtn = document.getElementById('reject-cookies');
      const banner = document.getElementById('cookie-banner');

      function hideBanner() {
        banner.style.display = 'none';
      }

      function allowAnalytics() {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
        
        // Charger GA4
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = gtag;
        gtag('config', gaId);

        localStorage.setItem('votria_ga_consent', 'true');
        hideBanner();
      }

      acceptBtn.addEventListener('click', allowAnalytics);
      rejectBtn.addEventListener('click', hideBanner);

      // Si déjà accepté, charger GA4 silencieusement
      if (localStorage.getItem('votria_ga_consent') === 'true') {
        allowAnalytics();
      }
    </script>
  </body>
</html>
```

---

### Étape 6 : Test local Phase 1A

```bash
npm run dev
```

Accéder à http://localhost:3000 et vérifier :
- ✓ NavBar affichée (logo + lien Accueil + bouton Diagnostic)
- ✓ Footer affiché en bas
- ✓ Pas d'erreurs console
- ✓ CSS Tailwind fonctionne (couleurs navy/orange appliquées)
- ✓ Police Inter s'affiche

**Si erreurs** : vérifier les imports et les chemins de fichiers.

---

## PHASE 1B — PAGE D'ACCUEIL

### Étape 7 : Créer `src/pages/index.astro`

**Référence** : BRIEF-VOTRIA.md section 6, Page 1

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Section from '../components/Section.astro';
import Button from '../components/Button.astro';
import Card from '../components/Card.astro';
import UsageCard from '../components/UsageCard.astro';

const title = 'Intégration IA métier pour TPE/PME | VotrIA';
const description = 'Accompagnement IA pour dirigeants de TPE/PME : audit, intégration métier, automatisation no-code et adoption opérationnelle. Basé en Occitanie.';
---

<BaseLayout title={title} description={description}>
  <!-- Hero Section -->
  <Section variant="navy" class="py-20">
    <div class="text-white">
      <h1 class="text-4xl md:text-5xl font-bold mb-6">L'IA qui travaille dans vos métiers, pas à côté</h1>
      <p class="text-lg text-gray-200 max-w-3xl mb-8">
        Nous aidons les entreprises à former leurs équipes, intégrer l'IA dans leurs processus, 
        automatiser les tâches répétitives et sécuriser leurs usages pour passer de 
        l'expérimentation à l'adoption réelle.
      </p>
      <div class="flex gap-4 flex-wrap">
        <Button href="/contact-diagnostic-ia" variant="primary">Réserver un diagnostic gratuit</Button>
        <Button href="/methode-integration-ia" variant="secondary">Découvrir la méthode</Button>
      </div>
    </div>
  </Section>

  <!-- Ce que vous gagnez -->
  <Section variant="white" class="py-16">
    <h2 class="text-3xl font-bold mb-12 text-center">Ce que vous gagnez concrètement</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card title="Moins de tâches répétitives" description="L'IA s'occupe du volume pour que vos équipes se concentrent sur ce qui compte réellement." />
      <Card title="Des équipes qui utilisent vraiment l'IA" description="Formation opérationnelle, pas juste théorique. Vos équipes maîtrisent les outils." />
      <Card title="Une conformité RGPD maîtrisée" description="Sécurité des données, cadre légal clair, zéro risque réglementaire." />
    </div>
  </Section>

  <!-- Notre méthode -->
  <Section variant="light" class="py-16">
    <h2 class="text-3xl font-bold mb-12">Notre méthode en 3 étapes</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <div class="text-center">
        <h3 class="text-xl font-bold mb-4">Audit</h3>
        <p class="text-gray-600">Comprendre vos vrais besoins, identifier les usages à fort impact, évaluer les risques.</p>
      </div>
      <div class="text-center">
        <h3 class="text-xl font-bold mb-4">Prototype</h3>
        <p class="text-gray-600">Construire la solution adaptée, intégrer les outils, tester avant de déployer.</p>
      </div>
      <div class="text-center">
        <h3 class="text-xl font-bold mb-4">Déploiement</h3>
        <p class="text-gray-600">Former vos équipes, accompagner l'adoption réelle, mesurer les résultats.</p>
      </div>
    </div>
    <div class="text-center">
      <Button href="/methode-integration-ia" variant="primary">Voir la méthode complète →</Button>
    </div>
  </Section>

  <!-- Pour quel type d'équipe ? -->
  <Section variant="white" class="py-16">
    <h2 class="text-3xl font-bold mb-12">Pour quel type d'équipe ?</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card title="Direction" description="Synthétiser l'information, préparer vos décisions, prioriser l'agenda.">
        <Button href="/ia-direction-pme" variant="outline" class="mt-4 w-full">Voir les usages →</Button>
      </Card>
      <Card title="Commercial" description="Préparer vos RDV, automatiser les relances, qualifier les leads.">
        <Button href="/ia-commercial-entreprise" variant="outline" class="mt-4 w-full">Voir les usages →</Button>
      </Card>
      <Card title="Marketing" description="Produire plus de contenus, maintenir la cohérence de marque.">
        <Button href="/ia-marketing-pme" variant="outline" class="mt-4 w-full">Voir les usages →</Button>
      </Card>
      <Card title="Admin / RH" description="Traiter les documents, automatiser les tâches répétitives, sécuriser les données.">
        <Button href="/ia-administratif-rh" variant="outline" class="mt-4 w-full">Voir les usages →</Button>
      </Card>
    </div>
  </Section>

  <!-- Pourquoi VotrIA ? -->
  <Section variant="light" class="py-16">
    <h2 class="text-3xl font-bold mb-12">Pourquoi VotrIA ?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-lg font-bold mb-3">Approche métier, pas catalogue d'outils</h3>
        <p class="text-gray-600">On s'intéresse à VOS problèmes réels, pas à promouvoir des logiciels.</p>
      </div>
      <div>
        <h3 class="text-lg font-bold mb-3">RGPD intégré dès le début</h3>
        <p class="text-gray-600">Conformité, sécurité des données, cadre légal — ce n'est pas une option.</p>
      </div>
      <div>
        <h3 class="text-lg font-bold mb-3">Adoption réelle, pas juste une formation</h3>
        <p class="text-gray-600">Nous vous accompagnons jusqu'à ce que l'IA soit réellement utilisée.</p>
      </div>
    </div>
  </Section>

  <!-- CTA Final -->
  <Section variant="cta" class="py-20">
    <div class="text-center text-white">
      <h2 class="text-3xl font-bold mb-6">Prêt à démarrer ?</h2>
      <p class="text-lg mb-8 max-w-2xl mx-auto">
        30 minutes pour comprendre votre contexte, identifier vos priorités et définir les premières actions concrètes.
      </p>
      <div class="flex gap-4 justify-center flex-wrap">
        <Button href="/contact-diagnostic-ia" variant="primary">Réserver un diagnostic gratuit</Button>
        <Button href="mailto:contact@votria-pro.fr" variant="secondary">Nous écrire</Button>
      </div>
    </div>
  </Section>
</BaseLayout>
```

---

## PHASE 1C — PAGES LÉGALES MINIMALES

### Étape 8 : Créer `/mentions-legales.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Section from '../components/Section.astro';
---

<BaseLayout 
  title="Mentions légales | VotrIA"
  description="Mentions légales du site VotrIA."
>
  <Section variant="white" class="py-20">
    <h1 class="text-4xl font-bold mb-8">Mentions légales</h1>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Éditeur du site</h2>
    <p><strong>Entreprise :</strong> Lean Perform (auto-entrepreneur)</p>
    <p><strong>Marque commerciale :</strong> VotrIA</p>
    <p><strong>Responsable :</strong> JF</p>
    <p><strong>Email :</strong> contact@votria-pro.fr</p>
    <p><strong>SIRET :</strong> [À remplir]</p>
    <p><strong>Adresse :</strong> [À remplir — Toulouse, Occitanie]</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Hébergeur</h2>
    <p><strong>Nom :</strong> Netlify, Inc.</p>
    <p><strong>Adresse :</strong> 2325 3rd Street, San Francisco, CA 94107, USA</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">Propriété intellectuelle</h2>
    <p>Le contenu du site est protégé par droit d'auteur © Lean Perform 2026.</p>
    <p>Reproduction sans autorisation explicite interdite.</p>
  </Section>
</BaseLayout>
```

### Étape 9 : Créer `/politique-confidentialite.astro`

(Utiliser la version complète du brief section 14, page "Politique de Confidentialité")

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Section from '../components/Section.astro';
---

<BaseLayout 
  title="Politique de confidentialité | VotrIA"
  description="Politique de confidentialité et protection des données."
>
  <Section variant="white" class="py-20">
    <h1 class="text-4xl font-bold mb-8">Politique de confidentialité</h1>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">1. Responsable de traitement</h2>
    <p><strong>Lean Perform</strong> (JF)</p>
    <p>Email : contact@votria-pro.fr</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">2. Traitements de données</h2>
    
    <h3 class="text-xl font-bold mt-6 mb-3">a) Formulaire contact</h3>
    <p><strong>Données :</strong> Prénom, Nom, Entreprise, Secteur, Effectif, Sujet, Message, Email</p>
    <p><strong>Finalité :</strong> Traiter votre demande de diagnostic IA</p>
    <p><strong>Durée :</strong> 12 mois après dernier contact</p>
    <p><strong>Droits :</strong> Accès, rectification, suppression, portabilité</p>

    <h3 class="text-xl font-bold mt-6 mb-3">b) Google Analytics 4</h3>
    <p><strong>Données :</strong> Pages visitées, durée, appareil, navigateur, ville approximative</p>
    <p><strong>Finalité :</strong> Analyser le trafic du site</p>
    <p><strong>Base légale :</strong> Consentement (bandeau cookies)</p>
    <p><strong>Durée :</strong> 14 mois</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">3. Cookies</h2>
    <p>GA4 analytics : tiers, tracé UNIQUEMENT après consentement.</p>
    <p>Pas de cookies publicitaires ou de tracking transversal.</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">4. Vos droits CNIL</h2>
    <ul class="list-disc list-inside space-y-2 mt-4">
      <li>Droit d'accès : recevoir copie de vos données</li>
      <li>Droit de rectification : corriger vos données</li>
      <li>Droit à l'oubli : demander suppression complète</li>
      <li>Droit de portabilité : exporter vos données</li>
      <li>Droit d'opposition : refuser tout traitement</li>
    </ul>
    <p class="mt-4"><strong>Demande :</strong> contact@votria-pro.fr</p>
    <p><strong>Délai de réponse :</strong> 30 jours</p>

    <h2 class="text-2xl font-bold mt-8 mb-4">5. Plainte CNIL</h2>
    <p>Vous pouvez déposer plainte auprès de la CNIL : <a href="https://www.cnil.fr/fr/plaintes" class="text-orange-500 hover:underline">https://www.cnil.fr/fr/plaintes</a></p>

    <h2 class="text-2xl font-bold mt-8 mb-4">6. Modifications</h2>
    <p>Cette politique peut être modifiée. Vous serez notifiés de tout changement matériel.</p>
  </Section>
</BaseLayout>
```

---

## PHASE 1D — DÉPLOIEMENT

### Étape 10 : Construire et tester localement

```bash
npm run build
```

Vérifier :
- ✓ `dist/` généré (dossier avec pages statiques HTML)
- ✓ Pas d'erreurs de build
- ✓ sitemap.xml généré dans dist/

```bash
npm run preview
# Teste la version finale en local (http://localhost:3000)
```

---

### Étape 11 : Configurer Netlify

1. Créer un compte sur netlify.com (ou utiliser celui existant si déjà utilisé)
2. Connecter votria-pro.fr comme domaine (si déjà acheté) ou acheter le domaine via Netlify
3. Configurer les variables d'environnement dans Netlify Settings → Environment :
   ```
   N8N_WEBHOOK_URL = https://lean-parform.app.n8n.cloud/webhook/votria-contact
   GA4_ID = G-XXXXXXXXXX
   ```

---

### Étape 12 : Déployer

```bash
git init
git add .
git commit -m "Phase 1: Scaffold + Accueil + pages légales"
git remote add origin https://github.com/[utilisateur]/votria-website.git
git push -u origin main
```

Netlify détecte automatiquement le push et déploie.

Vérifier :
- ✓ votria-pro.fr accessible en HTTPS
- ✓ Pages chargent sans erreurs
- ✓ Formulaire visible et valide
- ✓ Bandeau cookies affiché

---

## POST-PHASE 1 : CHECKLIST AVANT PHASE 2

- [ ] Site en ligne et accessible
- [ ] Formulaire contact fonctionnel (à confirmer avec n8n)
- [ ] Google Analytics 4 property créée (récupérer GA4_ID)
- [ ] N8n workflow configuré pour le formulaire (récupérer URL webhook)
- [ ] Email OVHcloud contact@votria-pro.fr opérationnel
- [ ] .env mis à jour avec les valeurs réelles
- [ ] Mentions légales et politique complétées avec SIRET exact
- [ ] Test fonctionnel sur mobile (smartphone réel)

---

## PHASE 2 SERA (après Phase 1) :

- Créer les 7 pages restantes (Méthode + 5 métier + À propos)
- Pages légales complètes (conditions + accessibilité)
- Optimisations SEO fine-tuning
- Monitoring production

---

**IMPORTANT** : Lire BRIEF-VOTRIA.md en entier avant de commencer. C'est la spec complète et définitive.

**Chemin projet** : `E:\VotrIA\Site web\`
**Durée estimée Phase 1** : 3-4 jours (10-12h travail effectif)

