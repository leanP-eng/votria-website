# BRIEF-VOTRIA.md
# Document de spécification complet pour Claude Code
# VotrIA – Site vitrine 8 pages
# Version : 1.0 — Juin 2026

---

## INSTRUCTIONS POUR CLAUDE CODE

Ce document est la référence unique pour construire le site VotrIA.
Lire ce fichier en entier avant d'écrire la première ligne de code.
En cas de doute sur une décision : ce document prime sur toute autre source.

---

## 1. CONTEXTE ET OBJECTIFS

**Entité légale** : Lean Perform (auto-entrepreneur)
**Marque commerciale** : VotrIA
**Domaine** : votria-pro.fr
**Propriétaire** : JF — consultant IA métier

**Mission du site** :
Générer des leads qualifiés (formulaire diagnostic gratuit) auprès de
dirigeants de TPE/PME en Occitanie, tous secteurs, priorité BTP/industrie/négoce.

**Cible principale** :
Dirigeants et responsables de TPE/PME de 1 à 50 personnes, Occitanie.
Personas : Direction · Commercial · Marketing · Admin/RH

**Proposition de valeur** :
Intégration IA métier, formation opérationnelle, automatisation no-code,
conformité RGPD et adoption réelle — de l'audit au déploiement.

---

## 2. STACK TECHNIQUE

| Élément | Choix | Notes |
|---|---|---|
| Framework | Astro (static output) | `output: 'static'` dans astro.config |
| Styling | Tailwind CSS | `@astrojs/tailwind` officiel |
| Police | Inter | Self-hosted via `@fontsource/inter` — PAS Google Fonts CDN |
| Hébergement | Netlify | Build automatique depuis Git |
| Formulaire | Astro → n8n webhook → Google Sheets | Voir section 8 |
| Email confirmation | OVHcloud adresse dédiée | Réponse automatique post-soumission |
| Analytics | Google Analytics 4 | Consent Mode v2 obligatoire |
| Cookies | Bandeau consentement CNIL | GA4 chargé APRÈS consentement uniquement |
| RDV | Pas de Calendly | Formulaire seul |

### Structure projet Astro
```
src/
  pages/          ← routing par fichier (1 fichier = 1 page)
  components/     ← composants réutilisables
  layouts/        ← BaseLayout.astro (head, header, footer)
  styles/         ← global.css si nécessaire
public/           ← assets statiques (images, favicon)
```

### Layout maître : BaseLayout.astro
Contient : `<head>` avec title/meta/canonical/og/schema · Header · Footer · GA4 conditionnel · Bandeau cookies
Toutes les pages l'utilisent — aucune page ne redéfinit header ou footer.

---

## 3. DESIGN SYSTEM

### Palette de couleurs
```
Navy   : #0F172A  (fond principal, texte fort, header, footer)
Orange : #F97316  (accent, CTA, liens actifs, bordures accent)
Blanc  : #FFFFFF  (fonds clairs, surfaces)
Gris   : #64748B  (texte secondaire, bordures neutres)
```

### Nuances dérivées (tokens Tailwind custom)
```js
// tailwind.config.mjs
colors: {
  navy: {
    50:  '#F8FAFC',
    100: '#F1F5F9',
    800: '#1E293B',
    900: '#0F172A',   // = ton navy principal
  },
  orange: {
    50:  '#FFF7ED',
    400: '#FB923C',   // hover clair
    500: '#F97316',   // = ton orange principal
    600: '#EA580C',   // hover/active CTA
  }
}
```

### Règles d'accessibilité WCAG
- Navy sur Blanc = 16:1 → AAA ✅
- Blanc sur Navy = 16:1 → AAA ✅
- Orange sur Navy = 5.6:1 → AA ✅
- **INTERDIT** : texte orange petit sur fond blanc (ratio 3.3:1 insuffisant)
- **CTA orange** : texte navy (pas blanc) → ratio 4.9:1 ✅

### Typographie
```
Police : Inter (self-hosted)
Poids  : 400 (corps) · 500 (sous-titres) · 700 (titres H1/H2)
Échelle : H1 40-48px · H2 32px · H3 24px · body 16-18px
Line-height : 1.6 corps · 1.2 titres
font-display: swap
```

### Composants réutilisables (à créer dans src/components/)
```
Button.astro        ← 3 variants : primary · secondary · outline
Card.astro          ← carte métier et carte service
Section.astro       ← wrapper section avec variants : navy · light · white · cta
NavBar.astro        ← logo + menu + CTA burger mobile
Footer.astro        ← liens + mentions légales + copyright
FormContact.astro   ← formulaire 8 champs + submit → n8n
UsageCard.astro     ← carte cas d'usage avec hook orange
```

### Boutons
```
Primary   : bg-orange-500 text-navy-900 hover:bg-orange-600 px-6 py-3 rounded-lg font-bold
Secondary : border-2 border-navy-900 text-navy-900 hover:bg-navy-100 px-6 py-3 rounded-lg
Outline   : border border-navy-900 text-navy-900 transparent px-5 py-2.5 rounded-lg
```

### Sections
```
Hero      : bg-navy-900 text-white
Light     : bg-navy-50
White     : bg-white
CTA final : bg-navy-900 text-white (répétition hero)
```

---

## 4. MOBILE-FIRST — EXIGENCE NON-NÉGOCIABLE

Google indexe la version mobile en priorité (mobile-first indexing).

### Règles absolues
- CSS écrit mobile d'abord, enrichi avec `min-width` (jamais `max-width` en base)
- Contenu mobile = contenu desktop (parité totale, rien de caché)
- Balises `<title>` `<meta>` `<h1>` `schema.org` identiques sur tous les écrans
- Zones tactiles ≥ 44×44px (boutons, liens, cartes)
- Aucune interaction `hover`-only (pas de menu déroulant hover pur)
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Pas de scroll horizontal

### Breakpoints Tailwind
```
Mobile   : base (pas de préfixe)
Tablette : md: (≥ 768px)
Desktop  : lg: (≥ 1024px)
```

### Ordre de construction pour chaque page
1. HTML sémantique (contenu d'abord)
2. Styles mobile (base Tailwind sans préfixe)
3. Enrichissement md: (tablette)
4. Enrichissement lg: (desktop)
5. Vérifier Core Web Vitals mobile (LCP < 2.5s · INP < 200ms · CLS < 0.1)

### Navigation mobile
- Menu burger accessible au tap (pas hover)
- Dropdown "IA par métier" = sous-menu tactile dans le burger
- CTA "Diagnostic gratuit" toujours visible dans la navbar

---

## 5. ARCHITECTURE DES 8 PAGES

### Arborescence et URLs
```
/                          ← Accueil (hub)
/methode-integration-ia    ← Méthode (Audit → Prototype → Déploiement)
/ia-direction-pme          ← IA pour la direction
/ia-commercial-entreprise  ← IA pour le commercial
/ia-marketing-pme          ← IA pour le marketing
/ia-administratif-rh       ← IA pour l'admin et les RH
/a-propos-consultant-ia    ← À propos
/contact-diagnostic-ia     ← Contact / Formulaire
```

### Maillage interne
```
Accueil → toutes les pages (rôle de hub)
Méthode → 4 pages métier + Contact
Chaque page métier → Méthode + Contact + 3 autres pages métier ("Voir aussi")
À propos → Contact
Contact → aucun lien sortant (page de conversion)
```

### Navigation (NavBar)
```
Logo VotrIA | Méthode | IA par métier ▾ | À propos | [Diagnostic gratuit]
                           └─ Direction
                           └─ Commercial
                           └─ Marketing
                           └─ Admin / RH
```

### Zéro cannibalisme — requêtes cibles distinctes
```
/                         → "intégration IA métier TPE PME"
/methode-integration-ia   → "méthode intégration IA entreprise"
/ia-direction-pme         → "IA pour dirigeants PME"
/ia-commercial-entreprise → "IA équipes commerciales"
/ia-marketing-pme         → "IA pour le marketing PME"
/ia-administratif-rh      → "IA administratif RH"
/a-propos-consultant-ia   → "consultant IA entreprise Toulouse"
/contact-diagnostic-ia    → "diagnostic IA gratuit"
```

---

## 6. SPÉCIFICATIONS SEO PAR PAGE

### Page 1 — Accueil `/`
```
Title    : Intégration IA métier pour TPE/PME | VotrIA
Meta     : Accompagnement IA pour dirigeants de TPE/PME : audit, intégration
           métier, automatisation no-code et adoption opérationnelle.
           Basé en Occitanie. (152 car.)
H1       : L'IA qui travaille dans vos métiers, pas à côté
Sous-H1  : Nous aidons les entreprises à former leurs équipes, intégrer l'IA
           dans leurs processus, automatiser les tâches répétitives et
           sécuriser leurs usages pour passer de l'expérimentation
           à l'adoption réelle.
```
Structure H2/H3 :
```
H2 — Ce que vous gagnez concrètement
  H3 — Moins de tâches répétitives
  H3 — Des équipes qui utilisent vraiment l'IA
  H3 — Une conformité RGPD maîtrisée
H2 — Notre méthode en 3 étapes
  H3 — Audit : comprendre vos vrais besoins
  H3 — Prototype : construire la solution adaptée
  H3 — Déploiement : former et faire adopter
H2 — Pour quel type d'équipe ?
  [4 cartes : Direction · Commercial · Marketing · Admin/RH]
H2 — Pourquoi VotrIA ?
  H3 — Approche métier, pas catalogue d'outils
  H3 — RGPD intégré dès le début
  H3 — Adoption réelle, pas juste une formation
H2 — Prêt à démarrer ?
  [Bloc CTA final]
```
CTA :
```
Hero principal  : "Réserver un diagnostic gratuit" → /contact-diagnostic-ia
Hero secondaire : "Découvrir la méthode"           → /methode-integration-ia
Section méthode : "Voir la méthode complète →"     → /methode-integration-ia
Carte Direction : "Voir les usages pour la direction"   → /ia-direction-pme
Carte Commercial: "Voir les usages pour le commercial"  → /ia-commercial-entreprise
Carte Marketing : "Voir les usages pour le marketing"   → /ia-marketing-pme
Carte Admin/RH  : "Voir les usages pour l'admin et les RH" → /ia-administratif-rh
Section À propos: "En savoir plus sur notre approche →" → /a-propos-consultant-ia
CTA final 1     : "Réserver un diagnostic gratuit"  → /contact-diagnostic-ia
CTA final 2     : "Nous écrire"                     → /contact-diagnostic-ia
```

---

### Page 2 — Méthode `/methode-integration-ia`
```
Title    : Méthode d'intégration IA en entreprise | VotrIA (56 car.)
Meta     : Audit, prototype, déploiement : une méthode en 3 étapes pour
           intégrer l'IA dans vos processus, former vos équipes et
           mesurer des résultats réels. (155 car.)
H1       : Notre méthode pour intégrer l'IA dans vos métiers
Sous-H1  : Pas de formation générique. Un parcours structuré en 3 étapes,
           adapté à vos processus, vos équipes et vos contraintes.
```
Structure H2/H3 :
```
H2 — Pourquoi la méthode compte autant que les outils
H2 — Étape 1 : Audit IA
  H3 — Analyser vos processus et vos tâches
  H3 — Identifier les usages à fort impact
  H3 — Évaluer les points de vigilance RGPD
  H3 [livrable] — Cartographie des opportunités + feuille de route
H2 — Étape 2 : Prototype
  H3 — Concevoir la solution adaptée à votre contexte
  H3 — Intégrer les outils et automatisations no-code
  H3 — Tester avant de déployer
  H3 [livrable] — Prototype opérationnel + documentation
H2 — Étape 3 : Déploiement et adoption
  H3 — Former vos équipes sur vos vrais cas d'usage
  H3 — Accompagner l'adoption terrain
  H3 — Mesurer les résultats et ajuster
  H3 [livrable] — Équipes formées + usages actifs + rapport ROI
H2 — Ce qui fait la différence
  H3 — Approche métier, pas catalogue d'outils
  H3 — RGPD intégré à chaque étape
  H3 — Progressivité et transfert de compétences
H2 — Pour quel type d'équipe ?
  [4 cartes métier avec liens]
H2 — Commençons par votre diagnostic
```
CTA :
```
Principal  : "Réserver un diagnostic gratuit" → /contact-diagnostic-ia
Secondaire : "Voir les usages par métier →"   → ancre #metiers (même page)
```
Note : H3 "livrables" ont un style visuel distinct (fond orange-50, texte orange).

---

### Page 3 — IA Direction `/ia-direction-pme`
```
Title    : IA pour dirigeants de PME | VotrIA (38 car.)
Meta     : Découvrez comment l'IA aide les dirigeants de PME à synthétiser
           l'information, préparer leurs décisions et gagner du temps
           sur les tâches chronophages. (159 car.)
H1       : IA pour dirigeants de PME : décider, synthétiser, gagner du temps
Sous-H1  : L'IA ne remplace pas votre jugement. Elle vous libère du temps
           pour l'exercer là où ça compte vraiment.
```
Structure H2/H3 + cas d'usage :
```
H2 — Ce que l'IA change pour un dirigeant
H2 — Vos 4 usages prioritaires
  H3 — Synthétiser l'information rapidement
       Hook : "Transformez 30 pages en 5 points clés en 2 minutes"
       Desc : Rapports, CR de réunion, articles de veille.
  H3 — Préparer vos décisions et arbitrages
       Hook : "Arrivez en réunion avec un cadre clair, pas des intuitions"
       Desc : Arbitrages, comparaisons d'options, préparation CODIR.
  H3 — Mieux prioriser votre agenda et vos équipes
       Hook : "Savoir sur quoi concentrer l'énergie cette semaine"
       Desc : Classer urgents/importants, identifier les quick wins.
  H3 — Rédiger et communiquer plus vite
       Hook : "Gagner 1h par jour sur les tâches de communication"
       Desc : Mails stratégiques, briefs équipe, discours, CR de décision.
H2 — Ce que vous gagnez concrètement
  H3 [gain] — Temps récupéré chaque semaine
  H3 [gain] — Qualité de décision améliorée
  H3 [gain] — Moins de réunions de recalage, plus de clarté
H2 — Ce qu'il faut maîtriser
  H3 [rgpd] — Quelles données ne pas exposer à un LLM public
  H3 [rgpd] — Bonnes pratiques pour rester en conformité
H2 — Comment on met ça en place avec vous
H2 — Commençons par identifier vos gains rapides
```
CTA :
```
Principal  : "Identifier mes gains rapides" → /contact-diagnostic-ia
Secondaire : "Voir notre méthode →"         → /methode-integration-ia
```
Vocabulaire exclusif : pilotage · décision · synthèse · priorisation · CODIR
Interdit sur cette page : prospection · contenus marketing · documents RH

---

### Page 4 — IA Commercial `/ia-commercial-entreprise`
```
Title    : IA pour équipes commerciales | VotrIA (38 car.)
Meta     : Découvrez comment l'IA aide vos commerciaux à mieux préparer
           leurs RDV, automatiser les relances et améliorer leur
           taux de transformation. (152 car.)
H1       : IA pour équipes commerciales : mieux préparer, relancer et répondre
Sous-H1  : Pas un robot de vente. Un assistant qui gère les tâches à faible
           valeur pour que vos commerciaux se concentrent sur la relation
           et le closing.
```
Structure H2/H3 + cas d'usage :
```
H2 — Ce que l'IA apporte réellement au commercial
H2 — Vos 4 usages prioritaires
  H3 — Préparer chaque rendez-vous en profondeur
       Hook : "Arrivez à chaque RDV avec le bon contexte, pas des généralités"
       Desc : Contexte prospect, anticipation objections, angle personnalisé.
  H3 — Rédiger propositions et réponses plus vite
       Hook : "Une proposition commerciale en 20 minutes au lieu de 2h"
       Desc : Adapter le pitch, reformuler une offre, répondre à un AO.
  H3 — Automatiser vos relances sans perdre en qualité
       Hook : "Ne laissez plus un prospect tomber dans l'oubli"
       Desc : Séquences personnalisées, relances post-RDV, follow-up.
  H3 — Qualifier et prioriser vos leads entrants
       Hook : "Concentrez votre énergie sur les prospects qui ont
               vraiment l'intention d'acheter"
       Desc : Trier et scorer les leads, identifier signaux d'achat.
H2 — Ce que vous gagnez concrètement
  H3 [gain] — Plus de RDV préparés, moins d'improvisation
  H3 [gain] — Taux de transformation amélioré
  H3 [gain] — Zéro prospect oublié dans le pipeline
H2 — Ce qu'il faut maîtriser
  H3 [rgpd] — Données prospects et clients : les règles RGPD
  H3 [rgpd] — Comment utiliser l'IA sans exposer votre CRM
H2 — Comment on met ça en place avec vous
H2 — Commençons par analyser votre cycle de vente
```
CTA :
```
Principal  : "Analyser mon cycle de vente" → /contact-diagnostic-ia
Secondaire : "Voir notre méthode →"        → /methode-integration-ia
```
Vocabulaire exclusif : pipeline · prospect · RDV · relance · closing · leads
Interdit : CODIR · contenus éditoriaux · fiches de poste

---

### Page 5 — IA Marketing `/ia-marketing-pme`
```
Title    : IA pour le marketing en PME | VotrIA (37 car.)
Meta     : Découvrez comment l'IA aide vos équipes marketing à produire
           plus de contenus, maintenir la cohérence de marque et
           accélérer vos workflows éditoriaux. (158 car.)
H1       : IA pour le marketing : produire, structurer et réutiliser vos contenus
Sous-H1  : Produire plus, rester cohérent, sans multiplier les ressources.
           L'IA s'intègre à votre workflow sans remplacer votre créativité.
```
Structure H2/H3 + cas d'usage :
```
H2 — Ce que l'IA change dans un workflow marketing
H2 — Vos 4 usages prioritaires
  H3 — Trouver des idées et structurer votre ligne éditoriale
       Hook : "Ne plus rester face à la page blanche"
       Desc : Angles, calendrier éditorial, sujets à fort potentiel SEO.
  H3 — Rédiger et réécrire plus vite
       Hook : "Produire 3x plus de contenus sans recruter"
       Desc : Articles, posts LinkedIn, newsletters, fiches produit.
  H3 — Décliner un contenu sur tous vos formats
       Hook : "Un article devient 5 formats en 20 minutes"
       Desc : Long → résumé · post LinkedIn · newsletter · FAQ · script.
  H3 — Transformer votre veille en contenu utile
       Hook : "La veille en insights actionnables sans y passer la journée"
       Desc : Synthétiser sources, analyser tendances, extraire angles.
H2 — Ce que vous gagnez concrètement
  H3 [gain] — Volume de contenus multiplié
  H3 [gain] — Cohérence de marque maintenue sur tous les canaux
  H3 [gain] — Temps de production divisé par deux
H2 — Ce qu'il faut maîtriser
  H3 [rgpd] — Droits et propriété des contenus générés par IA
  H3 [rgpd] — Données analytics et consentement utilisateurs
H2 — Comment on met ça en place avec vous
H2 — Commençons par cartographier votre production actuelle
```
CTA :
```
Principal  : "Cartographier ma production"  → /contact-diagnostic-ia
Secondaire : "Voir notre méthode →"         → /methode-integration-ia
```
Vocabulaire exclusif : contenu · éditorial · formats · ton de marque · workflows
Frontière : "rédiger un article" = marketing ✓ · "adapter en pitch client" = commercial ✗

---

### Page 6 — IA Admin/RH `/ia-administratif-rh`
```
Title    : IA pour l'administratif et les RH | VotrIA (43 car.)
Meta     : Découvrez comment l'IA aide les fonctions support à traiter
           les documents, automatiser les tâches répétitives et
           sécuriser les données RH. (149 car.)
H1       : IA pour l'administratif et les RH : réduire les tâches répétitives
Sous-H1  : Les fonctions support portent une charge invisible mais réelle.
           L'IA s'occupe du volume pour que vous vous consacriez à ce qui
           demande vraiment votre expertise.
```
Structure H2/H3 + cas d'usage :
```
H2 — Ce que l'IA peut faire pour les fonctions support
H2 — Vos 4 usages prioritaires
  H3 — Synthétiser et traiter vos documents plus vite
       Hook : "Traitez 10 documents en le temps qu'il en faut pour 2"
       Desc : Contrats, PV, rapports, dossiers fournisseurs.
  H3 — Rédiger vos supports internes sans partir de zéro
       Hook : "Une fiche de poste en 15 minutes, pas en 2 heures"
       Desc : Fiches de poste, notes internes, courriers, procédures.
  H3 — Automatiser les réponses aux demandes fréquentes
       Hook : "Ne plus répondre 10 fois à la même question"
       Desc : FAQ interne, réponses types, premier niveau traitement RH.
  H3 — Ne plus rater une échéance réglementaire
       Hook : "Zéro oubli sur les échéances qui engagent la responsabilité"
       Desc : Rappels automatiques, suivi délais réglementaires.
H2 — Ce que vous gagnez concrètement
  H3 [gain] — Charge administrative allégée
  H3 [gain] — Zéro oubli sur les échéances réglementaires
  H3 [gain] — Plus de temps pour les missions à valeur ajoutée
H2 — Ce qu'il faut absolument maîtriser
  ⚠️ PAGE LA PLUS SENSIBLE RGPD — section plus développée que les autres
  H3 [rgpd] — Données RH : ce qu'on ne met jamais dans un LLM public
  H3 [rgpd] — Quels outils sont conformes pour quels usages
  H3 [rgpd] — Mettre en place un cadre interne d'utilisation
  Note contenu : données nominatives RH interdites dans LLM public ·
  paie/santé/disciplinaire = catégories sensibles · DPA requis ·
  cadre : quels outils · quelles données · qui y accède · traçabilité
H2 — Comment on met ça en place avec vous
H2 — Commençons par identifier vos tâches les plus chronophages
```
CTA :
```
Principal  : "Identifier mes tâches chronophages" → /contact-diagnostic-ia
Secondaire : "Voir notre méthode →"               → /methode-integration-ia
```
Vocabulaire exclusif : dossier · procédure · contrat · onboarding · paie · échéance

---

### Page 7 — À propos `/a-propos-consultant-ia`
```
Title    : Consultant IA entreprise Toulouse | VotrIA (43 car.)
Meta     : Découvrez l'approche VotrIA : intégration IA métier, conformité
           RGPD et adoption opérationnelle pour les TPE et PME
           d'Occitanie. (142 car.)
H1       : Une approche terrain pour intégrer l'IA dans les PME
Sous-H1  : Pas de discours théorique. Une méthode construite sur le terrain,
           avec des dirigeants et des équipes réelles.
```
Structure H2/H3 :
```
H2 — Qui sommes-nous
  [Contenu rédigé — voir section 7 ci-dessous]
H2 — Notre vision de l'IA en entreprise
  H3 — L'IA utile, pas l'IA impressionnante
  H3 — L'adoption avant la technologie
  H3 — La conformité comme condition, pas comme frein
H2 — Ce qui nous distingue
  H3 — Expertise métier, pas catalogue d'outils
  H3 — RGPD intégré à chaque intervention
  H3 — Accompagnement jusqu'à l'adoption réelle
  H3 — Taille adaptée : TPE et PME de 1 à 50 personnes
H2 — Les entreprises que nous accompagnons
  TPE/PME 1-50 personnes · Occitanie · BTP · industrie · services · RH
H2 — Nos principes de travail
  H3 — Simplicité : pas de sur-ingénierie
  H3 — Progressivité : par étapes validées ensemble
  H3 — Transfert : vos équipes deviennent autonomes
  H3 — Clarté : on vous dit ce qui fonctionne et ce qui ne fonctionne pas
H2 — Parlons de votre contexte
```
CTA :
```
Principal  : "Parlons de votre projet"          → /contact-diagnostic-ia
Secondaire : "Réserver un diagnostic gratuit →" → /contact-diagnostic-ia
```

---

## 7. CONTENU RÉDIGÉ — SECTION "QUI SOMMES-NOUS"

À intégrer verbatim dans la page `/a-propos-consultant-ia`, section H2 "Qui sommes-nous".

---

J'aide les dirigeants de TPE et PME à passer de l'expérimentation IA
à l'usage réel — avec une méthode concrète, des résultats mesurables
et un cadre conforme au RGPD.

J'ai passé plus d'une vingtaine d'années dans des postes de terrain :
DAF d'un groupe du gros œuvre du BTP, gérant, chef des ventes pour un
industriel de la menuiserie, chef de marché régional dans un négoce de
matériaux. Je connais la réalité des petites structures — les marges
serrées, les équipes réduites, les outils qui doublonnent et le temps
perdu sur des tâches qui ne rapportent rien. C'est en cherchant à
résoudre ces problèmes que j'ai découvert l'IA. Pas comme une curiosité
technologique — comme un levier opérationnel concret.

La plupart des dirigeants ne savent pas par où commencer avec l'IA,
trop souvent cannibalisés par des tâches répétitives et sans réelle
valeur, et surtout par l'absence de cas d'usage métier clairement
identifiés. Mon rôle est de transformer cette incertitude en premières
actions concrètes, adaptées à votre contexte, vos équipes et vos
priorités.

J'interviens auprès de TPE et PME de 1 à 50 personnes en Occitanie,
dans tous les secteurs — commerce, services, RH, administration, BTP,
industrie. Ce qui ne change pas d'un secteur à l'autre : les mêmes
problèmes de fond. Des équipes qui manquent de temps, des tâches
répétitives qui s'accumulent, et une IA qu'on ne sait pas par où
aborder. Mon expérience de terrain dans le BTP, l'industrie et le
négoce de matériaux me donne un ancrage concret — mais la méthode
s'applique à toute structure qui veut passer de l'intention à l'action.

---

## 8. PAGE CONTACT ET FORMULAIRE

### Page 8 — Contact `/contact-diagnostic-ia`
```
Title    : Diagnostic IA gratuit pour TPE/PME | VotrIA (45 car.)
Meta     : Réservez votre diagnostic IA gratuit : 30 minutes pour
           identifier vos priorités, vos cas d'usage et vos
           premières actions concrètes. (148 car.)
H1       : Parlons de vos usages IA, de vos équipes et de vos priorités
```
Structure H2/H3 :
```
H2 — Ce que comprend le diagnostic gratuit
  H3 — 30 minutes pour comprendre votre contexte
  H3 — Identification de vos 2-3 priorités IA
  H3 — Recommandation d'une première étape concrète
  Note : préciser explicitement "pas un rendez-vous commercial"
H2 — Décrivez votre besoin
  [Formulaire — voir champs ci-dessous]
H2 — Ce que vous pouvez attendre de nous
  H3 — Réponse sous 24h ouvrées
  H3 — Échange sans engagement ni pitch commercial
  H3 — Confidentialité garantie
H2 — Données personnelles
  [Mention RGPD — voir ci-dessous]
```
CTA :
```
Submit formulaire : "Envoyer ma demande"
```

### Champs du formulaire
```
1. Prénom + Nom       text      Requis
2. Entreprise         text      Requis
3. Secteur activité   select    Requis
4. Effectif           select    Requis    (1-5 · 6-20 · 21-50 · +50)
5. Sujet principal    checkbox  Requis    (Formation · Automatisation ·
                                           Intégration · RGPD · Autre)
6. Message libre      textarea  Optionnel
7. Email              email     Requis
8. Consentement RGPD  checkbox  Requis
```

### Flux technique formulaire
```
Submit → POST /api/contact (ou endpoint Netlify function)
       → n8n webhook (URL à configurer dans .env)
       → Google Sheets (lead qualifié)
       → Email notification → contact@votria-pro.fr (OVHcloud)
       → Email confirmation automatique → adresse du visiteur (OVHcloud)
```

### Message post-soumission (affiché sur la même page)
```
"Votre demande a bien été envoyée.
Un email de confirmation vous a été transmis.
Nous vous répondons sous 24h ouvrées."
```
Ne pas rediriger vers une autre URL — afficher en place (pas d'impact CWV).

### Mention RGPD formulaire (contenu à intégrer)
```
Responsable de traitement : Lean Perform
Finalité : traitement de votre demande de diagnostic IA
Durée de conservation : 12 mois
Droits : accès · rectification · suppression → contact@votria-pro.fr
Base légale : consentement (case à cocher obligatoire)
```

---

## 9. SEO TECHNIQUE

### Balises à inclure dans BaseLayout.astro
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content={description}>
<link rel="canonical" href={canonicalURL}>

<!-- Open Graph -->
<meta property="og:title" content={title}>
<meta property="og:description" content={description}>
<meta property="og:url" content={canonicalURL}>
<meta property="og:type" content="website">
<meta property="og:site_name" content="VotrIA">
<meta property="og:locale" content="fr_FR">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content={title}>
<meta name="twitter:description" content={description}>
```

### Schema.org (JSON-LD dans BaseLayout.astro)
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "VotrIA",
  "description": "Intégration IA métier pour TPE/PME",
  "url": "https://votria-pro.fr",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toulouse",
    "addressRegion": "Occitanie",
    "addressCountry": "FR"
  },
  "areaServed": "Occitanie",
  "serviceType": "Conseil et intégration IA en entreprise"
}
```

### Sitemap
Générer automatiquement avec `@astrojs/sitemap` dans astro.config.mjs.
Toutes les 8 pages incluses, changefreq weekly, priority 0.8 pour l'accueil.

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://votria-pro.fr/sitemap.xml
```

### Performance
- Images : format WebP, attributs `width` et `height`, `loading="lazy"` sous la ligne de flottaison
- Police Inter : précharger le woff2 principal avec `<link rel="preload">`
- CSS Tailwind : purge automatique au build (seul le CSS utilisé est livré)
- Pas de JS inutile : Astro = 0 JS par défaut sauf îles interactives

---

## 10. RGPD ET CONFORMITÉ

### Bandeau cookies (GA4)
- GA4 ne se charge PAS avant consentement explicite
- Implémenter Consent Mode v2 de Google
- Bandeau : solution légère custom (Astro island) ou tarteaucitron
- Boutons : "Accepter" · "Refuser" · "Personnaliser"
- Ne pas bloquer le rendu de la page (bandeau en position fixe bas)

### Pages légales obligatoires (à créer en plus des 8 pages)
```
/mentions-legales       ← Éditeur · hébergeur · SIRET Lean Perform
/politique-confidentialite ← Traitements · GA4 · formulaire · droits
```
Ces pages apparaissent dans le footer uniquement, pas dans la navigation principale.

### Emails OVHcloud
```
contact@votria-pro.fr   ← réception des leads formulaire + réponse automatique
```
Configurer la réponse automatique OVHcloud avec le message de confirmation.

---

## 11. COMPOSANTS VISUELS SPÉCIFIQUES

### UsageCard (pages métier)
Chaque cas d'usage métier est rendu avec :
```
┌─────────────────────────────────────┐
│ Titre du cas d'usage (H3, 500)      │
│ Hook en orange italique             │
│ Description courte (text-secondary) │
│ Bordure gauche orange 3px           │
└─────────────────────────────────────┘
```

### H3 livrables (page Méthode)
Style distinct des H3 classiques :
```
Fond   : orange-50 (#FFF7ED)
Texte  : orange-800 (#C2410C)
Icône  : ti-package ou ti-check
```

### H3 RGPD (toutes pages métier)
Style distinct :
```
Fond   : red-50 (#FEF2F2)
Texte  : red-800 (#B91C1C)
Icône  : ti-shield
```
Sur `/ia-administratif-rh` : 3 H3 RGPD au lieu de 2 (section plus développée).

### H3 gains (toutes pages métier)
Style distinct :
```
Fond   : green-50 (#F0FDF4)
Texte  : green-800 (#15803D)
Icône  : ti-trending-up
```

### Liens "Voir aussi" (bas de chaque page métier)
```
Section discrète en bas de page
Texte : "Ces sujets pourraient aussi vous intéresser"
3 liens vers les autres pages métier
Style : cards légères, pas de CTA orange (ne pas concurrencer le CTA principal)
```

---

## 12. CHECKLIST AVANT MISE EN LIGNE

```
[ ] Toutes les balises title/meta/canonical renseignées
[ ] H1 unique par page
[ ] Schema.org valide (tester sur schema.org/validator)
[ ] Sitemap généré et soumis à Google Search Console
[ ] Robots.txt en place
[ ] Bandeau cookies fonctionnel (GA4 conditionnel)
[ ] Formulaire testé end-to-end (soumission → n8n → Sheets → email)
[ ] Email de confirmation OVHcloud fonctionnel
[ ] Message post-soumission affiché en place
[ ] Mentions légales et politique de confidentialité en ligne
[ ] Core Web Vitals mobile dans le vert (PageSpeed Insights)
[ ] Test sur mobile réel (pas seulement DevTools)
[ ] Pas de scroll horizontal sur mobile
[ ] Zones tactiles ≥ 44px vérifiées
[ ] Images WebP avec width/height déclarés
[ ] Police Inter self-hosted (pas CDN Google Fonts)
[ ] Netlify build sans erreur
[ ] Déploiement sur votria-pro.fr vérifié
```

---

*BRIEF-VOTRIA.md — Version 1.0*
*Préparé dans claude.ai — À implémenter avec Claude Code*
*Toute modification structurelle doit être validée avant implémentation*


---

## 13. SÉCURITÉ

### Headers de sécurité (à configurer dans _redirects ou netlify.toml)
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' fonts.googleapis.com; connect-src 'self' https://www.google-analytics.com https://*.n8n.io
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=()
```

### HTTPS
- Domaine votria-pro.fr OBLIGATOIREMENT en HTTPS
- Certificat SSL/TLS fourni automatiquement par Netlify (Let's Encrypt gratuit)
- Redirection automatique HTTP → HTTPS
- Vérifier dans Netlify Settings → Domain Management → HTTPS

### Formulaire contact — validation
```
Front (JavaScript) :
- Tous les champs requis remplis (Prénom, Entreprise, Email, Secteur, Sujet, RGPD)
- Email valide (regex simple ou validation HTML5)
- Message optionnel : max 1000 caractères
- Feedback utilisateur clair en cas d'erreur

Back (n8n webhook) :
- Vérifier que l'email est un format valide
- Vérifier que les sélects (Secteur, Effectif, Sujet) ne contiennent que les valeurs attendues
- Rate limiting : max 10 soumissions par IP par heure (n8n peut configurer)
- Nettoyer les données avant insertion en Google Sheets (pas de caractères spéciaux dangereux)
```

### Protection contre les injections
```
Formulaire contact :
- Input sanitization stricte avant envoi à n8n
- Pas d'exécution de code dans les champs texte
- Utiliser Astro's built-in escaping pour affichage HTML

Google Sheets :
- Les données du formulaire sont des TEXT, pas des formules
- N8n doit envoyer comme texte brut, pas comme formule (échapper = )
```

### Protection CSRF
- Astro génère nativement des jetons CSRF sur les formulaires
- Vérifier que le formulaire inclut le token implicite Astro
- Pas de configuration supplémentaire si Astro gère le formulaire nativement

### Rate limiting formulaire
- N8n : configurer un limit de 1 requête/seconde par IP
- Netlify : configurer les limites de fonction si utilisation de Netlify Functions
- Message utilisateur si rate limitée : "Trop de soumissions, veuillez réessayer dans 5 minutes"

### Logs et monitoring
```
N8n :
- Logger les erreurs de soumission (webhook failures)
- Monitorer les tentatives répétées de soumission depuis une même IP

Google Sheets :
- Backup quotidien des leads (Google Drive offre le versioning)
- Colonne "date_soumission" automatique pour audit trail

Netlify :
- Activer les logs (Settings → Logs)
- Monitorer les erreurs 5xx
```

### Dépendances (npm audit)
```
Avant déploiement :
$ npm audit
$ npm audit fix
Corriger toutes les vulnérabilités críticas et hautes
Checker régulièrement : npm audit dans CI/CD si possible
```

### Secrets et configuration
```
.env (local) :
N8N_WEBHOOK_URL = https://[instance-id].app.n8n.cloud/webhook/...

.env.production (Netlify) :
Configurer la variable d'environnement dans Netlify Settings → Environment
Ne JAMAIS commiter .env en Git
Utiliser un .gitignore strict
```

### Accessibilité WCAG 2.1 AA
Vérifier lors du build :
```
$ npm run build
```
puis tester avec axe DevTools ou WAVE en local.

Points clés :
- Alt text sur TOUTES les images
- Contraste >= 4.5:1 pour texte normal (respecté par palette)
- Sous-titres si vidéo (non prévu actuellement)
- Navigation au clavier complète (Tab, Entrée, Échap)
- Éviter les mouvements brusques (animations < 2s)

---

## 14. CONFORMITÉS RÉGLEMENTAIRES FRANÇAISES

### Cadre légal applicable

**RGPD (Règlement Général Protection Données) — Applicabilité France**
- Texte : Règlement (UE) 2016/679
- Autorité de contrôle : CNIL (Commission Nationale Informatique et Libertés)
- S'applique à VotrIA car traitement de données personnelles de résidents de l'UE
- Amendes : jusqu'à 20 millions € ou 4% du chiffre d'affaires mondial
- VotrIA doit être RGPD-compliant dès le lancement

**CNIL — Obligations spécifiques**
- Registre des traitements de données → maintenir un inventaire
- Evaluation d'impact (DPIA) pour tout traitement nouveau
- Notification des violations de données sous 72h
- Respect des droits : accès, rectification, suppression (oubli), portabilité

**Code du Commerce Français**
- Mentions légales obligatoires (nom, SIRET, adresse)
- Conditions d'utilisation du site
- Politique commerciale claire

**Loi Informatique et Libertés (LIL) — Article 82**
- Texte : Loi du 6 janvier 1978 modifiée
- Droits des personnes sur leurs données
- Droit à l'oubli

### Pages légales obligatoires

#### 1. Mentions légales (page `/mentions-legales` obligatoire)
```
Éditeur du site :
- Nom : JF / Lean Perform
- Numéro SIRET : [à remplir avec le vrai SIRET]
- Adresse : [adresse professionnelle Toulouse/Occitanie]
- Email : contact@votria-pro.fr
- Téléphone : [si applicable]
- Responsable de la publication : JF

Hébergeur :
- Nom : Netlify
- Adresse : Netlify, Inc., 2325 3rd Street, San Francisco, CA 94107, USA

Droits d'auteur :
- Le contenu du site est protégé par droits d'auteur © Lean Perform 2026
- Reproduction interdite sans autorisation explicite
```

#### 2. Politique de Confidentialité (page `/politique-confidentialite` obligatoire)
```
1. Responsable de traitement
   Lean Perform, JF
   Adresse : [à remplir]
   Email : contact@votria-pro.fr

2. Traitements de données personnelles

   a) Formulaire contact (diagnostic gratuit)
      Données collectées : Prénom, Nom, Entreprise, Secteur, Effectif,
                         Sujet, Message optionnel, Email, Consentement RGPD
      Finalité : traiter la demande de diagnostic IA
      Base légale : Consentement explicite (case à cocher obligatoire)
      Destinataires : JF, équipe n8n Cloud, Google Sheets
      Durée de conservation : 12 mois après dernier contact
      Droits : accès, rectification, suppression, portabilité
      Demande : contact@votria-pro.fr

   b) Google Analytics 4
      Données collectées : IP anonymisée, pages visitées, durée, référent,
                         appareil, navigateur, langue, ville approximative
      Finalité : analyser le trafic et l'utilisation du site
      Base légale : Consentement (Consent Mode v2, bandeau cookies)
      Destinataire : Google LLC (serveurs USA)
      Transfert de données : accord Privacy Shield / Standard Contractual Clauses
      Durée : 14 mois par défaut (configurable dans GA4)
      Droits : accès possible via GA4 dashboard
      Opt-out : installer Google Analytics Opt-out Browser Add-on

   c) Email OVHcloud
      Données collectées : Email du visiteur au moment de la soumission
      Finalité : envoyer email de confirmation de réception
      Base légale : Consentement (formulaire)
      Destinataire : OVHcloud (serveurs France)
      Durée : jusqu'à réponse du diagnostic (max 24h) + archivage 1 an
      Droits : suppression sur demande

3. Cookies
   - GA4 analytics : tiers, tracé uniquement après consentement
   - Cookies de session : propriétaire, nécessaire au fonctionnement du site
   - Pas de publicités, pas de tracking transversal

4. Droits de la personne
   - Droit d'accès : recevoir copie de vos données
   - Droit de rectification : corriger vos données
   - Droit à l'oubli/suppression : demander suppression complète
   - Droit à la portabilité : exporter vos données en format ouvert
   - Droit d'opposition : refuser tout traitement
   - Droit de retirer le consentement : pas de pénalité
   Demande : contact@votria-pro.fr ou Lean Perform, [adresse]

5. Délai de réponse
   Toute demande de droits sera traitée sous 30 jours (délai CNIL standard)

6. Données sensibles
   VotrIA ne collecte PAS de données sensibles (santé, affiliation politique, etc.)
   Les données RH des clients relèvent de leur propre conformité RGPD

7. Plainte CNIL
   Vous avez le droit de déposer plainte auprès de la CNIL :
   https://www.cnil.fr/fr/plaintes

8. Modifications de cette politique
   Cette politique peut être modifiée. La version en vigueur date du [DATE]
   Vous serez notifiés de tout changement matériel.
```

#### 3. Conditions d'utilisation (page `/conditions-utilisation` recommandée)
```
1. Acceptation des conditions
   L'accès au site implique l'acceptation complète de ces conditions.
   Si vous n'acceptez pas, veuillez quitter le site.

2. Licence d'utilisation
   Le contenu du site (textes, images, mises en page) est protégé par
   droit d'auteur. Vous pouvez le consulter pour usage personnel uniquement.
   Toute reproduction, distribution, modification sans autorisation est interdite.

3. Limitation de responsabilité
   Le site est fourni "tel quel" sans garantie implicite.
   VotrIA n'est pas responsable de :
   - Interruptions de service, erreurs techniques
   - Dommages indirects (perte de données, manque à gagner)
   - Contenus de tiers (liens externes)
   - Virus ou malwares transmis via le site

4. Limitation des usages
   Vous vous engagez à NE PAS :
   - Usurper l'identité d'une autre personne
   - Transmettre des contenus offensants, illégaux, frauduleux
   - Accéder au site par brute-force, scraping non autorisé
   - Stocker des données personnelles sans consentement RGPD
   - Relancer les leads du formulaire sans accord préalable

5. Propriété intellectuelle
   Tous les droits d'auteur, marques, logos appartiennent à Lean Perform.
   "VotrIA", "Lean Perform" sont des marques protégées.

6. Loi applicable et juridiction
   Ces conditions sont régies par la loi française.
   Tout litige relève des tribunaux compétents du ressort de la Cour d'Appel
   de Toulouse (Occitanie).

7. Contact
   Pour toute question : contact@votria-pro.fr
```

#### 4. Déclaration d'Accessibilité (page `/accessibilite` obligatoire en France)
```
Conformité WCAG 2.1 Niveau AA

VotrIA s'engage à rendre son site accessible à tous.

État de conformité :
- Pages principales (accueil, méthode, contact) : 100% conforme WCAG 2.1 AA
- Pages métier : 100% conforme WCAG 2.1 AA
- À propos : 100% conforme WCAG 2.1 AA

Points d'accès :
- Navigation complète au clavier
- Alt text sur toutes les images
- Contraste couleur >= 4.5:1
- Sous-titres si vidéo [non applicable, pas de vidéo]
- Lecteur d'écran compatible (NVDA, JAWS, VoiceOver)

Test d'accessibilité :
Audit WCAG réalisé avec axe DevTools et WAVE le [DATE]

Problèmes connus et correction :
Aucun problème d'accessibilité critique identifié.
Les formulaires sont pleinement accessibles au clavier et lecteur d'écran.

Amélioration continue :
Nous testons régulièrement l'accessibilité et acceptons les rapports de bugs.
Contactez-nous : contact@votria-pro.fr

Ressources :
- WCAG 2.1 : https://www.w3.org/WAI/WCAG21/quickref/
- ARIA practices : https://www.w3.org/WAI/ARIA/apg/
```

### Conformité CNIL — Sécurité des données

**Mesures techniques obligatoires en place :**
- Chiffrement TLS/HTTPS
- Validation des formulaires côté serveur
- Pas de stockage de mots de passe en clair
- Logs d'audit des accès
- Sauvegarde régulière (Google Sheets versioning)
- Rate limiting des soumissions

**Responsabilité du sous-traitant n8n :**
- VotrIA signe un Data Processing Agreement (DPA) avec n8n Cloud
- n8n assure la sécurité des données en transit
- Certification SOC2 ou ISO27001 exigée de n8n

**Responsabilité du sous-traitant OVHcloud :**
- Email hébergé en France (serveurs OVH)
- VotrIA signe DPA avec OVHcloud si nécessaire
- Respect du RGPD par OVHcloud contractuellement garanti

### Durée de conservation (RGPD Article 5)

| Type de données | Durée | Raison légale |
|---|---|---|
| Leads formulaire (contact qualifié) | 12 mois après dernier contact | Prospection commerciale |
| Emails de confirmation | 24 heures | Proof of delivery |
| Logs serveur (Netlify) | 30 jours | Débogage technique |
| Google Analytics | 14 mois | Analyse trafic (configurable) |
| Soumissions sans suite | 6 mois | Prévention fraude |

Après expiration : suppression automatique ou manuelle selon le système.

### Droit à l'oubli — Processus

Un utilisateur demande suppression de ses données :
```
Email reçu → Vérification identité (email + entreprise)
         → Suppression de Google Sheets
         → Suppression des archives (si possibles)
         → Confirmation par email
         Délai : 30 jours maximum
```

### Audit CNIL — Préparation

Au cas où la CNIL contrôlerait VotrIA :
```
Documents à avoir prêts :
- Registre des traitements (DPIA réalisée)
- Contrats avec n8n et OVHcloud (DPA signés)
- Politique de confidentialité à jour
- Formulaires avec consentement explicite
- Logs d'accès aux données
- Evidence de formations équipes (si applicable)
- Procédure de réponse aux droits CNIL
- Incident log (violations de données, le cas échéant)
```

### Violation de données — Protocole

Si une fuite est découverte :
```
1. Vérifier l'ampleur et les données exposées
2. Arrêter la source de la fuite
3. Notifier la CNIL sous 72h (contact@cnil.fr)
4. Notifier les personnes affectées si risque haut
5. Documenter tout (dates, actions, impact)
6. Analyser la cause racine
7. Corriger la vulnérabilité
```

---

