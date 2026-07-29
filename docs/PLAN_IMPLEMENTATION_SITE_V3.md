> **OBSOLÈTE — plan fondé sur une version antérieure de l'offre.**
> **La référence active est `PLAN_IMPLEMENTATION_SITE_V3_1.md`.**
> Conservé uniquement pour l'historique (architecture à 4 familles du Document Maître v3.0, remplacée par l'architecture par briques du v3.1).

---

# PLAN D'IMPLÉMENTATION — SITE VOTRIA V3

**Worktree :** `E:\VotrIA\web-site-votria-refonte-v3` (branche `refonte-site-v3`, base `origin/main` @ `feb3392`)
**Source de vérité :** `docs/VOTRIA_DOCUMENT_MAITRE_V3.md` (copié à l'identique, puis mis à jour uniquement sur le statut juridique/fiscal du BLOC 1 — voir ci-dessous)
**Statut :** planification uniquement — aucune page n'a été développée pendant cette session.

**Décisions figées prises en compte** (voir demande de validation) : statique HTML/CSS/JS, `netlify.toml` et `cookie-consent.js` conservés/adaptés, formulaire + webhook n8n conservés et adaptés, pas de page Méthode/Offres générale/Solutions générale, section « Qui intervient » courte sur l'accueil, À propos et Guide BTP retirés de la navigation principale, `votria-deploy-ia.pdf` archivé sans usage, fichiers `*-corrige-sans-refonte.html` non appliqués, `cas-concrets` conservée hors navigation.

**Corrections prises en compte** : Laurent/Nadia/Philippe sont des personas internes — **aucune occurrence de ces noms dans le code livré au public**, ils ne servent qu'à orienter en interne le choix des mots et des exemples. Les 3 questions techniques du BLOC 4.2 (export logiciel, disponibilité export hebdo, prestataire IT) appartiennent à l'entretien payant de 1h30 — **elles ne figurent pas dans le formulaire public du site**. Le prototype `E:\VotrIA\Site web` n'a fourni aucun code, texte ou configuration à ce plan.

**Statut juridique et fiscal tranché** : toute mention de « Lean Perform SARL-U », « SARL-U » ou « EURL » est remplacée par — Jean-François Martin, entrepreneur individuel soumis au régime de la micro-entreprise, nom commercial VotrIA, SIREN 498 982 990, SIRET 498 982 990 00059, TVA intracommunautaire FR71 498 982 990, entité qui contracte/facture/signe : **Jean-François Martin EI**. Cette identité correspond déjà exactement à celle publiée sur `site/mentions-legales/index.html` et `site/cgv/index.html` du dépôt actuel — **aucune correction n'est donc nécessaire sur les pages légales existantes pour ce point**. Régime de TVA : franchise en base, aucune TVA facturée à ce jour, prix publics en euros HT, ne jamais afficher « HT = TTC », mention légale de franchise à jour de la date de publication sur CGV et factures, TVA légalement applicable réservée à un futur changement de régime. Aucun seuil de chiffre d'affaires n'apparaît sur les pages commerciales (relève de la gestion fiscale interne).

---

## 1. Arborescence finale des fichiers

```
site/
├── index.html                         (Accueil — remplacé)
├── cap-cash/index.html                (nouveau)
├── cap-chantier/index.html            (nouveau)
├── diagnostic/index.html              (remplace la logique de estimation/)
├── mentions-legales/index.html        (adapté)
├── confidentialite/index.html         (adapté)
├── cookies/index.html                 (adapté si le texte cite CAP IA/ACTION/SOLUTION/SUIVI)
├── cgv/index.html                     (adapté — nouvelle grille tarifaire)
├── a-propos/index.html                (conservé tel quel, retiré de la nav — cf. §2)
├── guide-btp/index.html               (conservé tel quel, retiré de la nav — cf. §2)
├── cas-concrets/index.html            (conservé tel quel, hors navigation)
├── 404.html                           (inchangé)
├── robots.txt, sitemap.xml            (régénérés — cf. §14)
└── assets/
    ├── cookie-consent.js              (inchangé)
    ├── css/
    │   └── v3.css                     (nouveau — cf. §6)
    ├── js/
    │   └── v3.js                      (nouveau — cf. §7)
    ├── og-image.jpg                   (réutilisé ou remplacé si le visuel change)
    └── portraits/                     (inchangé, non utilisé tant qu'aucun témoignage réel n'existe)

netlify.toml                            (adapté — cf. §13)
documents/                              (inchangé ; votria-deploy-ia.pdf y reste, non lié depuis le site)
```

**Pages retirées de la navigation mais non supprimées du dépôt** : `a-propos/`, `guide-btp/`, `cas-concrets/`, `solutions/`, `offres/`, `methode/`, `eligibilite-cap-ia*/`, `estimation/`. Ces trois derniers dossiers (offre CAP IA actuelle) ne font pas partie du plan cible ; leur devenir (redirection ou conservation en l'état) est traité en §13, sans suppression pendant cette phase de planification.

---

## 2. Navigation desktop et mobile

**Navigation principale (desktop et mobile, identique)** :

```
VotrIA          Accueil   CAP CASH   CAP CHANTIER   [Diagnostic — 490€ HT]
```

- 3 liens de contenu + 1 CTA visuellement distinct (bouton plein, pas un lien de texte) vers `/diagnostic/`.
- Pas d'entrée « À propos », « Méthode », « Offres », « Solutions » ni « Guide BTP » dans cette barre — conformément aux décisions figées. Le besoin de légitimité (« qui êtes-vous ») est couvert par la section « Qui intervient » de l'accueil (§4).
- **Mobile** : menu burger reprenant les 3 liens + le CTA, sur le modèle déjà en place dans les pages actuelles (`site/mentions-legales/index.html:33-39`) — bouton hamburger, panneau plein écran, pas de sous-menu à gérer puisqu'il n'y a que 3 entrées.
- **Pied de page** : conserve les liens légaux (`mentions-legales`, `confidentialite`, `cookies`, `cgv`) et ajoute discrètement les pages hors-navigation qui restent accessibles par lien direct si besoin (`a-propos`, `guide-btp`) — décision à confirmer avec vous au moment de la rédaction (aucune obligation de les lister, cf. §17 point de validation).

---

## 3. Wireframe détaillé de chaque page

### 3.1 Accueil (`/`)
1. **Header** (nav §2)
2. **Hero** : accroche BLOC 2 (« Des devis qui dorment... ») + sous-titre + CTA principal vers `/diagnostic/`
3. **Deux blocs visuels CAP CASH / CAP CHANTIER** (cartes cliquables vers les pages dédiées, BLOC 5.2)
4. **Widget « Relance devis, automatisée »** (démonstrateur principal — cf. §8)
5. **Parcours en 3 étapes** : On regarde → On teste → On étend (BLOC 4.9)
6. **Section « Qui intervient »** (courte, remplace À propos) : quelques lignes sur l'ancrage local et l'expérience terrain, sans se substituer à une page dédiée
7. **Bloc preuve sociale** (emplacement prêt, message d'attente BLOC 5.4, aucun contenu fictif)
8. **CTA final** → `/diagnostic/`
9. **Footer**

### 3.2 CAP CASH (`/cap-cash/`)
1. Header
2. Hero court (titre du domaine + accroche courte spécifique cash/trésorerie)
3. Famille 1 — Relance commerciale (tableau des 5 automatisations, RÉSULTAT TYPE, ligne de réassurance BLOC 4.3)
4. Famille 2 — Trésorerie & encaissements (idem, BLOC 4.4)
5. Maquette « Résumé du lundi » (cf. §9)
6. Maquette « Vue assistante » (cf. §10)
7. Visuel « 5 étapes — VOUS au milieu » (BLOC 4.13)
8. CTA → `/diagnostic/`
9. Footer

### 3.3 CAP CHANTIER (`/cap-chantier/`)
Structure identique à CAP CASH, avec :
3. Famille 3 — Chantier → Bureau (BLOC 4.5)
4. Famille 4 — Dossier & documents chantier (BLOC 4.6)
5. Maquette CR structuré (illustration du compte rendu vocal → texte, format encart, pas de composant interactif complexe)
6. Illustration dossier Drive (arborescence simplifiée, statique)
7. Visuel « 5 étapes »
8. CTA → `/diagnostic/`

### 3.4 Diagnostic (`/diagnostic/`)
1. Header
2. Hero : prix 490€ HT affiché, durée 1h30, livrable (rapport 48h) — BLOC 4.2
3. Bloc « Ce que le diagnostic couvre / ne couvre pas », incluant explicitement « Le diagnostic peut conclure de ne pas automatiser »
4. Formulaire de qualification (cf. §11) — **sans les 3 questions techniques**
5. Réassurance (validation humaine, aucune donnée transmise à un tiers hors n8n)
6. Footer

### 3.5 Pages légales
Structure existante conservée (`legal-hero` + sommaire `.toc` + `.legal-card`), seul le contenu change (cf. §12).

---

## 4. Contenu attendu section par section

| Section | Source du contenu | Contrainte |
|---|---|---|
| Hero Accueil | BLOC 2 (positionnement, accroche) | Pas de mot « intelligence artificielle » en avant, pas de jargon (BLOC 5.5) |
| Blocs CAP CASH/CAP CHANTIER (accueil) | Titres et une phrase de synthèse par domaine (BLOC 2) | Pas de chiffre non présent dans le Document Maître |
| Familles 1 à 4 | Tableaux d'automatisations + RÉSULTAT TYPE + réassurance, BLOC 4.3 à 4.6 | Reprendre le texte des RÉSULTAT TYPE tel quel (déjà validé, pas de reformulation qui ajouterait un chiffre) |
| Parcours 3 étapes | BLOC 4.9 | — |
| Qui intervient | Formulation courte inspirée de `a-propos/index.html` actuel (ancrage local, expérience), sans reprendre les certifications ou partenariats non mentionnés dans le Document Maître | Aucune certification ni partenariat non cité au Document Maître |
| Preuve sociale | Message d'attente BLOC 5.4 tel quel | Aucun témoignage, logo ou chiffre avant l'obtention d'un vrai client |
| Diagnostic | BLOC 4.2 | Pas de mention des 3 questions techniques |
| Pages légales | Mise à jour des offres citées (CAP CASH/CAP CHANTIER au lieu de CAP IA/ACTION/SOLUTION/SUIVI) | Identité juridique, SIRET, adresse : **inchangés** |

---

## 5. Composants visuels réutilisables

| Composant | Rôle | Base de départ |
|---|---|---|
| `.family-block` | Bloc Famille (tableau 5 automatisations + RÉSULTAT TYPE + réassurance) | Nouveau, mais reprend le langage visuel déjà en place (`--navy`, `--orange`, cartes `border-radius:20-22px`, `box-shadow` doux) observé dans `mentions-legales/index.html`, `cgv/index.html` |
| `.result-type` | Encart RÉSULTAT TYPE | Nouveau, petit composant texte souligné orange |
| `.five-steps` | Visuel « IA Récupère → Trie → Prépare → VOUS Validez → IA Envoie » | Nouveau, HTML/CSS uniquement (pas de JS obligatoire) |
| `.monday-report-mock` | Maquette résumé du lundi | Nouveau, gabarit d'email statique (cf. §9) |
| `.assistant-view-mock` | Maquette vue assistante | Nouveau, tableau HTML statique (cf. §10) |
| `.workflow-widget` | Widget « Relance devis, automatisée » | Nouveau, cf. §8 |
| `.price-block` | Bloc prix « 490€ HT » / « à partir de Xk€ » | Inspiré de `.price-container` déjà présent dans `offres/index.html` (non committé) — **réécrit à neuf** dans `v3.css`, pas copié tel quel car lié à l'ancienne offre |
| `.social-proof-placeholder` | Bloc preuve sociale en attente | Nouveau |
| `.nav`, `.topbar`, `.mobile-menu`, `.footer` | Navigation et pied de page | Repris du gabarit visuel déjà en place sur les pages légales actuelles (variables CSS, structure sticky, burger menu), avec les liens mis à jour |
| `.cookie-banner` (JS) | Bandeau RGPD | `site/assets/cookie-consent.js`, inchangé |

---

## 6. Structure de `site/assets/css/v3.css`

Fichier CSS partagé, extrait des blocs `<style>` actuellement dupliqués par page, organisé en sections commentées :

```
1. :root                — jetons de design (--navy, --orange, --paper, --line, --shadow-sm, --max, --radius)
2. reset                — *, box-sizing, html, body, a, button, ul
3. typography            — h1-h3 (Manrope), p, .eyebrow
4. layout                — .container, section, grid utilitaires
5. nav                   — .topbar, .nav, .brand, .nav-links, .mobile-menu, .menu-btn
6. buttons               — .btn, .btn-primary, .btn-secondary
7. hero                  — .hero, .hero-grid, .hero-copy, .hero-actions
8. family-block          — .family-block, .family-table, .result-type, .reassurance-line
9. five-steps            — .five-steps, .five-steps-item
10. monday-report-mock   — .monday-report-mock
11. assistant-view-mock  — .assistant-view-mock, .assistant-view-row, .assistant-view-actions
12. workflow-widget      — .workflow-widget, .workflow-step, .workflow-badge
13. price-block          — .price-block
14. social-proof         — .social-proof-placeholder
15. diagnostic-form      — .diagnostic-form, .form-group, .form-error, .form-success
16. legal                — .legal-hero, .legal-layout, .toc, .legal-card (repris tel quel des pages légales actuelles)
17. footer               — .footer-grid, .footer-brand, .footer-links
18. responsive           — media queries regroupées par breakpoint (1050px, 720px, 520px), sur le modèle déjà en place
```

Chaque page ne garde dans son `<head>` qu'un `<link rel="stylesheet" href="/assets/css/v3.css">` (+ éventuellement quelques règles très spécifiques à la page, minimisées). Objectif : éliminer la duplication actuelle (CSS ré-écrit dans chaque fichier HTML) sans changer de technologie.

---

## 7. Structure de `site/assets/js/v3.js`

```
1. mobileMenu()          — ouverture/fermeture du burger menu (repris du comportement actuel)
2. workflowWidget()      — anime/étape le widget "Relance devis" au scroll ou au clic (cf. §8), pas d'auto-play permanent
3. diagnosticForm()       — validation + honeypot + envoi vers le webhook n8n (cf. §11), sur le modèle de la logique déjà existante dans site/estimation/index.html (honeypot "website", regex email, blocage domaines jetables, fetch POST JSON)
4. init()                 — attache les écouteurs au DOMContentLoaded, dans le même style que site/assets/cookie-consent.js (IIFE, 'use strict', pas de dépendance externe)
```

`cookie-consent.js` reste un fichier séparé, chargé indépendamment (inchangé). Aucune nouvelle dépendance npm/CDN : JavaScript natif uniquement, comme aujourd'hui.

---

## 8. Fonctionnement du widget « Relance devis »

- Reprend l'intention du BLOC 5.3 (« widget workflow animé type ExplorIA : 'Relance devis, automatisée' → 5 étapes → badge 'en production' ») **sans reprendre le contenu du site de référence**, uniquement sa logique structurelle observée (voir audit précédent : étapes séquencées + badge de statut).
- **Contenu** : 5 étapes fixes tirées du BLOC 4.13 (« IA Récupère → IA Trie → IA Prépare → VOUS Validez → IA Envoie et suit »), affichées en ligne (desktop) ou empilées (mobile).
- **Interaction** : au chargement, l'étape 1 est active ; un clic ou un défilement dans la vue avance la mise en évidence à l'étape suivante (classe CSS `.is-active` déplacée par `v3.js`) ; pas de lecture automatique en boucle, pas de vidéo, pas de 3D — animation CSS de transition simple (`transition: opacity/transform`).
- **Badge** : un badge statique « en cours de déploiement » ou équivalent neutre (à ne pas confondre avec « en production », qui impliquerait un client déployé — à valider avec vous selon l'état réel du déploiement au moment de la mise en ligne).
- Reste le **seul élément interactif/animé du site**, conformément à la contrainte de limiter l'interactivité au démonstrateur principal.

---

## 9. Fonctionnement de la maquette « Résumé du lundi »

- Composant purement statique (pas de JS), présenté comme un gabarit d'email, encadré visuellement (bordure, en-tête « Lundi 7h »).
- **Contenu** : reprend la description générique du BLOC 4.8 (« email de 5-8 lignes au dirigeant avec les dossiers à traiter ») sous forme d'exemple anonymisé et générique — placeholders explicites du type « Dossier A », « Dossier B », pas de nom de client réel, pas de montant chiffré non présent dans le Document Maître.
- Objectif : montrer le **format**, pas prouver un résultat. Étiqueté visuellement « Exemple de format » pour éviter toute confusion avec une preuve sociale.

---

## 10. Fonctionnement de la vue assistante

- Tableau HTML statique reproduisant la description du BLOC 4.8 : colonnes Dossier / Action proposée / [Valider] [Modifier] [Reporter].
- Les 3 boutons sont **non fonctionnels** dans cette maquette (pas de logique métier réelle sur le site public) — `type="button"` avec `disabled` ou `aria-disabled="true"`, et une légende explicite « Aperçu de l'interface » pour ne pas laisser croire à un outil opérationnel.
- Données de lignes : génériques et anonymisées (« Dossier X », « Relance email »), jamais un chiffre ou un nom non présent dans le Document Maître.

---

## 11. Formulaire du diagnostic et intégration n8n

- **Champs** (BLOC 5.2, strictement) : nom, entreprise, effectif, métier, logiciel de gestion utilisé, irritant principal (champ libre court). **Aucune des 3 questions techniques du BLOC 4.2** — celles-ci restent posées oralement pendant l'entretien payant de 1h30, jamais dans le formulaire public.
- **Mécanique technique** : reprise à l'identique du mécanisme déjà en production sur `site/estimation/index.html` :
  - champ honeypot invisible `website` (`aria-hidden`, `tabindex="-1"`, `autocomplete="off"`) ;
  - validation JS légère (champs requis, regex email, blocage des domaines email jetables déjà listés dans le code actuel) ;
  - envoi par `fetch()` en `POST` JSON vers l'URL du webhook n8n existant (même variable `N8N_WEBHOOK_URL`, à réutiliser sans changer d'infrastructure).
- **Différence avec le formulaire actuel** : suppression de la logique de calcul d'auto-estimation (secteurs, temps hebdo, coût horaire) présente dans `estimation/index.html`, remplacée par la simple qualification BLOC 5.2 — le diagnostic payant n'a pas besoin d'un pré-calcul de ROI côté visiteur (cohérent avec l'interdiction des chiffres non prouvés).
- **RGPD** : case de consentement explicite, lien vers `/confidentialite/`, cohérent avec le texte déjà en place sur les autres formulaires du site.

---

## 12. Mise à jour des pages légales

| Page | Changement | Ce qui ne change pas |
|---|---|---|
| `/cgv/` | Remplacer la section « Prestations et tarifs » (CAP IA/ACTION/SOLUTION/SUIVI) par Diagnostic 490€ HT + Famille dès 2200€/1000€ HT (BLOC 4.10) ; adapter les clauses de paiement et de déduction en conséquence ; ajouter la mention légale de franchise en base de TVA (à jour de la date de publication) partout où un prix est affiché ; désigner **Jean-François Martin EI** comme entité qui contracte, facture et signe | Identité du prestataire, forme juridique, SIRET, adresse, TVA intracommunautaire — déjà correctes, inchangées |
| `/confidentialite/` | Mettre à jour la liste des données collectées si les champs du formulaire changent (§11) | Base légale, durée de conservation, sous-traitants, droits |
| `/cookies/` | Vérifier qu'aucune mention résiduelle de l'ancienne offre ne subsiste dans les exemples ; sinon inchangé | Mécanique de consentement (déjà conforme) |
| `/mentions-legales/` | Aucun changement de contenu prévu — l'identité juridique (Jean-François Martin, EI, micro-entreprise, SIREN/SIRET/TVA) correspond déjà exactement au statut désormais tranché | Tout |

**Statut juridique et fiscal (tranché) :** Jean-François Martin, entrepreneur individuel soumis au régime de la micro-entreprise, nom commercial VotrIA, SIREN 498 982 990, SIRET 498 982 990 00059, TVA intracommunautaire FR71 498 982 990. Entité qui contracte, facture et signe : **Jean-François Martin EI**. Franchise en base de TVA : aucune TVA facturée à ce jour, prix publics en euros HT, ne jamais afficher « HT = TTC », mention légale de franchise à faire figurer sur les CGV et les factures (formulée à la date de publication), la TVA légalement applicable étant réservée à un futur changement de régime fiscal. Aucun seuil de chiffre d'affaires n'est mentionné sur les pages commerciales — cette information relève de la gestion fiscale interne. Cette identité étant déjà celle publiée sur le site actuel, **aucune modification des champs d'identité (nom, statut, SIRET, adresse) n'est nécessaire** ; seule l'ajout de la mention de franchise en base sur `/cgv/` et sur les futures factures constitue un changement de contenu.

---

## 13. Redirections Netlify

À ajouter dans `netlify.toml` (en conservant les redirections et en-têtes de sécurité déjà en place) :

| Ancienne URL | Redirection | Statut |
|---|---|---|
| `/offres` | `/cap-cash/` | 301 |
| `/solutions` | `/cap-cash/` (contenu FLUX le plus proche) — **mapping à confirmer avec vous, notamment pour PILOT qui touche au suivi commercial hors périmètre CAP CASH/CAP CHANTIER** | 301 |
| `/methode` | `/` | 301 |
| `/estimation` | `/diagnostic/` | 301 |
| `/eligibilite-cap-ia` | `/diagnostic/` | 301 |
| `/eligibilite-cap-ia-btp` | `/diagnostic/` | 301 |
| `/eligibilite-cap-ia-autres-secteurs` | `/diagnostic/` | 301 |

**Non redirigées (conservées accessibles telles quelles, hors navigation)** : `/a-propos/`, `/guide-btp/`, `/cas-concrets/` — conformément aux décisions figées de les conserver sans les mettre en avant. Les redirections existantes (`/cas-usage`, `/conformite-ia-rgpd`, `/diagnostic`, `/contact`, `/exemple-cap-ia`, `/demonstrateur-cap-ia-btp`, `/btp`, `/industrie`, `/logistique`, `/services`) sont réexaminées une à une pour pointer vers les nouvelles pages plutôt que d'être supprimées, afin de ne perdre aucun lien externe déjà indexé.

Les en-têtes de sécurité actuels (`netlify.toml:63-73`) sont conservés à l'identique ; seul le `connect-src` de la CSP est revérifié une fois le domaine du webhook n8n confirmé (point déjà signalé dans l'audit précédent, non modifié ici).

---

## 14. Mise à jour sitemap et robots.txt

- `robots.txt` : inchangé dans sa structure (`User-agent: *`, `Allow: /`, ligne `Sitemap:`).
- `sitemap.xml` : régénéré avec les 8 URLs de l'architecture V3 (`/`, `/cap-cash/`, `/cap-chantier/`, `/diagnostic/`, `/mentions-legales/`, `/confidentialite/`, `/cookies/`, `/cgv/`) et une `lastmod` mise à jour à la date de mise en ligne. Les pages hors navigation (`a-propos`, `guide-btp`, `cas-concrets`) restent au choix incluses avec une priorité basse ou exclues — décision à prendre au moment de la génération (non bloquante).

---

## 15. Contrôles responsive, accessibilité, sécurité et SEO

- **Responsive** : reprendre les breakpoints déjà utilisés sur les pages légales (1050px, 720px, 520px) pour la nouvelle grille CSS partagée ; tester chaque nouvelle page à ces trois largeurs avant mise en ligne.
- **Accessibilité** : conserver les pratiques déjà en place (labels explicites, `aria-hidden` sur le honeypot, `aria-expanded`/`aria-label` sur le menu burger) ; vérifier le contraste des nouveaux blocs (`.family-block`, `.workflow-widget`) sur fond blanc et fond navy ; boutons de la vue assistante marqués `aria-disabled`.
- **Sécurité** : ne pas élargir la CSP au-delà de ce qui existe déjà (`script-src`, `connect-src` limités à Google Tag Manager/Analytics et au webhook n8n) ; pas de nouvelle ressource externe (pas de police ou script tiers supplémentaire).
- **SEO** : chaque nouvelle page conserve `<title>`, `<meta description>`, `<link rel="canonical">` sur le modèle déjà en place ; vérifier l'absence de lien interne cassé après retrait des pages de la navigation (contrôle déjà pratiqué dans `documents/AUDIT_GLOBAL.md`, à reproduire sur la V3).
- **Contrôle de contenu final** : grep systématique sur le code livré pour vérifier l'absence de « Laurent », « Nadia », « Philippe », « CAP ACTION », « CAP SOLUTION », « CAP SUIVI », des mots interdits du BLOC 5.5 (n8n, API, LLM, no-code, workflow, OCR, transformation digitale), et de tout chiffre absent du Document Maître.

---

## 16. Ordre exact de développement par lots

1. **Lot 0 — Fondations** : créer `site/assets/css/v3.css` et `site/assets/js/v3.js` (structures §6-7), sans contenu de page.
2. **Lot 1 — Layout partagé** : bloc nav/footer commun (HTML dupliqué mais cohérent, pas de moteur de template disponible en HTML statique pur) intégré dans une page de test isolée avant duplication.
3. **Lot 2 — Accueil** (`/`) : hero, blocs CAP CASH/CAP CHANTIER, widget Relance devis, parcours 3 étapes, section Qui intervient, preuve sociale placeholder.
4. **Lot 3 — CAP CASH** (`/cap-cash/`) : Familles 1 et 2, maquette résumé du lundi, maquette vue assistante, visuel 5 étapes.
5. **Lot 4 — CAP CHANTIER** (`/cap-chantier/`) : Familles 3 et 4, maquette CR structuré, illustration dossier Drive, visuel 5 étapes.
6. **Lot 5 — Diagnostic** (`/diagnostic/`) : contenu + formulaire + intégration webhook n8n (réutilisation du mécanisme existant).
7. **Lot 6 — Pages légales** : CGV (nouvelle grille tarifaire), confidentialité (champs de formulaire), vérification cookies.
8. **Lot 7 — Netlify & SEO** : `netlify.toml` (redirections §13), `sitemap.xml`, `robots.txt`.
9. **Lot 8 — QA finale** : contrôles §15, revue croisée avec le Document Maître v3 section par section, validation humaine avant mise en ligne.

Chaque lot est développé et vérifié avant de passer au suivant ; aucun lot ne démarre sans validation du précédent.

---

## 17. Critères de validation avant mise en ligne

- [ ] Aucune occurrence de « Laurent », « Nadia », « Philippe » dans le code livré au public.
- [ ] Aucune des 3 questions techniques du BLOC 4.2 dans le formulaire public.
- [ ] Aucune mention de CAP IA, CAP ACTION, CAP SOLUTION, CAP SUIVI, FLUX ou PILOT sur les nouvelles pages (sauf, si nécessaire, une redirection technique invisible pour l'utilisateur).
- [ ] Aucun chiffre, témoignage, logo partenaire ou certification absent du Document Maître v3.
- [ ] Aucun jargon technique visible (n8n, API, LLM, no-code, workflow, OCR, IA en avant d'accroche).
- [ ] Formulaire de diagnostic fonctionnel de bout en bout avec le webhook n8n existant (test réel, données fictives).
- [ ] Bandeau cookies opérationnel sur toutes les nouvelles pages (`cookie-consent.js` chargé partout).
- [ ] En-têtes de sécurité et redirections Netlify vérifiés après déploiement (CSP testée en conditions réelles, comme déjà recommandé dans `documents/AUDIT_GLOBAL.md`).
- [ ] Sitemap et robots.txt à jour, aucun lien interne cassé.
- [ ] Contrôle responsive aux 3 breakpoints (1050px, 720px, 520px) sur chaque nouvelle page.
- [ ] Aucune animation hors widget « Relance devis » ; aucune vidéo, aucun élément 3D.
- [ ] Aucune modification du dépôt principal `E:\VotrIA\web-site-votria` détectée (`git status` propre en dehors du worktree).
- [ ] Identité juridique des pages légales conforme au statut tranché (Jean-François Martin, EI, micro-entreprise, SIREN/SIRET/TVA ci-dessus) — aucune mention résiduelle de « SARL-U », « EURL » ou « Lean Perform SARL-U ».
- [ ] Mention légale de franchise en base de TVA présente sur `/cgv/` et prévue sur les futures factures, formulée à la date de publication ; aucune occurrence de « HT = TTC » nulle part sur le site.
- [ ] Aucun seuil de chiffre d'affaires mentionné sur une page commerciale.
- [ ] Validation humaine finale par vous avant bascule DNS/déploiement production.
