# PLAN D'IMPLÉMENTATION — SITE VOTRIA V3.1

**Worktree :** `E:\VotrIA\web-site-votria-refonte-v3` (branche `refonte-site-v3`, base `origin/main` @ `feb3392`)
**Source de vérité :** `docs/VOTRIA_DOCUMENT_MAITRE_V3_1.md` — remplace `PLAN_IMPLEMENTATION_SITE_V3.md` (marqué obsolète), qui reposait sur l'architecture à 4 familles du v3.0.
**Statut :** planification uniquement — aucune page n'a été développée.

**Changement commercial majeur par rapport au plan précédent** : l'offre n'est plus organisée en 4 « Familles » égales derrière un diagnostic payant unique. Elle est désormais organisée en **briques progressives, avec un périmètre standard et des tarifs publiés**, avec **deux parcours d'entrée distincts** :

- **Parcours A (besoin standard)** : qualification courte **gratuite** (15-20 min) → brique à tarif publié → installation → mesure à J+30 → extension éventuelle. **Le diagnostic payant n'est pas obligatoire ici.**
- **Parcours B (besoin complexe)** : Diagnostic payant **490 € HT** → proposition adaptée → déploiement → mesure → extension.

Le mot « diagnostic » ne doit plus être utilisé comme point d'entrée universel du site : c'est une option réservée aux besoins complexes, présentée à égalité avec la qualification courte gratuite, jamais comme une étape imposée.

**Corrections et interdictions reconduites** : Laurent/Nadia/Philippe et les 3 personas transversaux (Assistante/ADV, Chef d'équipe/Conducteur, Prestataire informatique) restent des personas internes — **aucun nom de persona sur le site public**. Le prototype `E:\VotrIA\Site web` ne fournit toujours aucun code, texte ou configuration. Aucune modification du dépôt principal `E:\VotrIA\web-site-votria`.

**Statut juridique et fiscal (tranché, inchangé par rapport à la correction validée)** : Jean-François Martin, entrepreneur individuel, régime micro-entreprise, nom commercial VotrIA, SIREN 498 982 990, SIRET 498 982 990 00059, TVA intracommunautaire FR71 498 982 990, entité contractante/signataire **Jean-François Martin EI**, franchise en base de TVA avec mention obligatoire **« TVA non applicable, article 293 B du CGI »** sur devis et factures, prix publics en euros HT, jamais « HT = TTC », aucun seuil de chiffre d'affaires sur les pages commerciales.

**Règle de surveillance technique et de maintien opérationnel (identique dans les trois documents actifs)** :
- flux ponctuel ou local : abonnement facultatif ;
- email automatisé, WhatsApp ou connexion automatisée : surveillance technique minimale obligatoire ;
- réunion chantier déposée ponctuellement : aucun abonnement VotrIA obligatoire ;
- la surveillance ou le maintien opérationnel est facturé par environnement client et couvre jusqu'à trois flux standard actifs ; au-delà, le périmètre et le tarif sont adaptés avant engagement.

---

## 1. Arborescence finale des fichiers

```
site/
├── index.html                    (Accueil — remplacé, structure BLOC 10.3)
├── cap-cash/index.html           (nouveau — 3 briques BLOC 5)
├── cap-chantier/index.html       (nouveau — 3 briques BLOC 6 + brique 7.2 rattachée)
├── diagnostic/index.html         (nouveau — 2 parcours BLOC 4.2 / 10.6)
├── mentions-legales/index.html   (inchangé sur l'identité, vérifié)
├── confidentialite/index.html    (adapté si champs de formulaire modifiés)
├── cookies/index.html            (vérifié, inchangé a priori)
├── cgv/index.html                (réécrit — grille de prix par briques + mention TVA)
├── a-propos/index.html           (conservé, hors navigation)
├── guide-btp/index.html          (conservé, hors navigation)
├── cas-concrets/index.html       (conservé, hors navigation)
├── 404.html
├── robots.txt, sitemap.xml       (régénérés — cf. §14)
└── assets/
    ├── cookie-consent.js         (inchangé)
    ├── css/v3.css                (nouveau — cf. §6)
    ├── js/v3.js                  (nouveau — cf. §7)
    └── og-image.jpg

netlify.toml                      (adapté — cf. §13)
documents/                        (inchangé ; votria-deploy-ia.pdf y reste, non lié depuis le site)
```

**Offres transverses sans page dédiée** (conformément à BLOC 10.2 : « les petites offres n'obtiennent pas chacune une entrée de menu principale ») :
- **Revue des emails prioritaires** (990 € HT) : section secondaire de l'Accueil, ancre `#revue-emails`, pas de page ni d'entrée de nav.
- **Réunion chantier → compte rendu** (790 € HT) : section de la page `/cap-chantier/`, ancre `#reunion-chantier` — c'est la première brique commerciale de CAP SUIVI CHANTIER (Y2), donc rattachée à CAP CHANTIER plutôt qu'isolée. **Point à confirmer avec vous** (§17 point 1).

---

## 2. Navigation desktop et mobile

Conforme à BLOC 10.2, sans changement de principe par rapport au plan précédent :

```
VotrIA          Accueil   CAP CASH   CAP CHANTIER   [Diagnostic]
```

- Le CTA de droite mène à `/diagnostic/`, qui présente lui-même les deux parcours (qualification courte gratuite / diagnostic 490€) — le bouton de nav ne doit donc plus être libellé « Diagnostic — 490€ HT » comme dans le plan précédent, car cela laisserait croire que le diagnostic payant est le seul point d'entrée. Libellé recommandé : **« Démarrer »** ou **« Être qualifié »**, à trancher en rédaction.
- Mobile : menu burger identique, 3 liens + CTA, sur le modèle déjà en place dans les pages légales actuelles.
- Footer : liens légaux (`mentions-legales`, `confidentialite`, `cookies`, `cgv`) ; pages hors navigation (`a-propos`, `guide-btp`) accessibles par lien direct si vous le souhaitez, non obligatoire.

---

## 3. Wireframe détaillé de chaque page

### 3.1 Accueil (`/`) — ordre BLOC 10.3

1. Header
2. Accroche + cible (BLOC 2.3 : « Vos demandes de devis restent suivies... » + sous-titre second œuvre 10-25 sal.)
3. Deux blocs CAP CASH / CAP CHANTIER (cartes vers les pages dédiées)
4. **Trois portes d'entrée** mises en avant : WhatsApp → compte rendu chantier (1 490 € HT), Demandes de devis à traiter (990 € HT), Réunion chantier → compte rendu (790 € HT) — chacune avec prix affiché, lien vers la brique correspondante
5. Progression par briques (schéma simple : petite brique → mesure → extension, BLOC 4.1)
6. Validation humaine (visuel BLOC 10.7)
7. Bloc dirigeant / bureau / terrain (synthèse des 3 personas transversaux, **sans les nommer** — décrire les rôles : dirigeant, assistante/ADV, chef d'équipe/conducteur)
8. Bloc environnement et coûts tiers (texte de référence BLOC 10.8)
9. Preuve sociale réelle (emplacement prêt, aucun contenu fictif — message d'attente à rédiger, aucune reprise du gabarit v3.0 sans vérification qu'il reste pertinent)
10. Section secondaire « Revue des emails prioritaires » (ancre `#revue-emails`)
11. CTA final double : qualification courte gratuite **ou** diagnostic 490€ → `/diagnostic/`
12. Footer

### 3.2 CAP CASH (`/cap-cash/`) — BLOC 10.4

1. Header
2. Hero court (positionnement CAP CASH, BLOC 2.6.1)
3. **Brique 1 — Demandes de devis à traiter** (990€ HT + 99/149€ mois) : Promesse, Inclus, Périmètre standard, Prix, Ce que ça prépare
4. **Brique 2 — Suivi et relance des devis** (à partir de 2 200€ HT autonome / 1 800€ HT en extension) : Promesse, Inclus standard, Options non comprises, Prix
5. **Brique 3 — Factures et encaissements** (à partir de 2 200€ HT autonome / 1 600€ HT en extension) : Promesse, Inclus standard, Prix
6. Budget indicatif CAP CASH complet (~4 390€ HT, hors tiers/MCO — BLOC 5.4)
7. À montrer (BLOC 10.4) : une demande reçue, une liste de suivi, un brouillon, une validation, un résumé hebdomadaire → maquettes statiques (cf. §9-10)
8. CTA → qualification courte (briques 1 seule) ou diagnostic (combinaison complexe)
9. Footer

### 3.3 CAP CHANTIER (`/cap-chantier/`) — BLOC 10.5

1. Header
2. Hero court (positionnement CAP CHANTIER, BLOC 2.6.2)
3. **Brique 1 — WhatsApp → compte rendu chantier** (1 490€ HT + 99/149€ mois, prix affiché sans qualificatif)
4. **Brique 2 — Dossier chantier incomplet** (version standard à partir de 1 490€ HT / version avec lecture et classement à partir de 1 990€ HT)
5. **Brique 3 — Travaux supplémentaires et avenants** (à partir de 1 200€ HT en extension)
6. Section « Réunion chantier → compte rendu » (790€ HT, ancre `#reunion-chantier`, mention qu'elle prépare CAP SUIVI CHANTIER Y2)
7. Budget indicatif CAP CHANTIER complet (~4 180 à 4 680€ HT — BLOC 6.4)
8. À montrer (BLOC 10.5) : capture WhatsApp réaliste, compte rendu structuré, file d'exceptions, vue bureau, mention explicite qu'aucune nouvelle application n'est demandée au terrain
9. CTA → qualification courte ou diagnostic
10. Footer

### 3.4 Diagnostic (`/diagnostic/`) — BLOC 10.6

1. Header
2. Hero : présentation neutre des **deux choix**, sans hiérarchie de valeur entre les deux :
   - **Besoin standard** → qualification courte, 15-20 min, **gratuite**
   - **Situation complexe** → diagnostic, 490€ HT, ce qu'il couvre (douleur prioritaire, fonctionnement actuel, personne référente, vérification logiciel/données, solution recommandée, ordre de grandeur budget, décision automatiser/attendre/ne pas automatiser)
3. Précision : « Aucun fichier n'est exigé pour réserver » + méthode d'extraction en partage d'écran si besoin
4. Formulaire unique de qualification (cf. §11), avec un sélecteur explicite du parcours souhaité (standard / complexe) qui n'affecte que le message de suite, pas les champs collectés
5. Réassurance (validation humaine, environnement client, aucune promesse absolue)
6. Footer

### 3.5 Pages légales
Structure existante conservée ; contenu de `/cgv/` réécrit (§12), autres pages vérifiées.

---

## 4. Contenu attendu section par section

| Section | Source | Contrainte |
|---|---|---|
| Accroche Accueil | BLOC 2.3 | Pas de « qui décide » ambigu : le résultat métier avant l'explication technique |
| Trois portes d'entrée | BLOC 10.3 | Prix exacts (990€/1490€/790€ HT), sans qualificatif de tarif provisoire ou d'essai |
| Briques CAP CASH / CAP CHANTIER | BLOC 5 et 6 | Reprendre les clauses « Inclus » et « Non compris » telles quelles — elles définissent le périmètre contractuel |
| Bloc environnement | BLOC 10.8 | Texte de référence à reprendre tel quel |
| Promesses | BLOC 10.9 | Utiliser exclusivement les formulations autorisées ; bannir la liste des promesses interdites |
| Éléments à ne pas afficher | BLOC 10.10 | n8n, OCR, LLM, Docker, webhook, no-code, architecture détaillée, ROI non prouvé, stats de marché non vérifiées, comparaison agressive, fonctionnalité future présentée comme disponible, « premiers déploiements en cours » si faux, « aucune donnée ne quitte jamais l'entreprise », diagnostic présenté comme obligatoire |
| Formulaire Diagnostic | BLOC 10.6 | Champs exacts : nom, entreprise, effectif, métier, logiciel de gestion, irritant principal, utilisateur principal, prestataire informatique (oui/non/ne sait pas) |
| Pages légales | BLOC 1.1 + BLOC 8.4-8.5 | Identité juridique inchangée ; ajouter la mention de franchise en base et le détail des coûts tiers non inclus |

---

## 5. Composants visuels réutilisables

| Composant | Rôle | Remplace / base |
|---|---|---|
| `.brick-block` | Bloc « brique » (Promesse, Inclus, Périmètre standard, Prix, Ce que ça prépare) | Remplace `.family-block` du plan v3.0 (structure similaire, champs différents : plus de « RÉSULTAT TYPE » chiffré, remplacé par une promesse qualitative + liste Inclus/Non compris) |
| `.entry-offer-card` | Carte « offre d'entrée » (3 sur l'Accueil) | Nouveau |
| `.human-validation` | Visuel BLOC 10.7 (Récupère → Trie → Prépare → VOUS VALIDEZ → Exécuté) | Remplace `.five-steps` ; texte final different (« L'action est exécutée » au lieu de « IA Envoie et suit ») |
| `.environment-block` | Bloc environnement/abonnements tiers (BLOC 10.8) | Nouveau — absent du plan v3.0 |
| `.whatsapp-mockup` | Capture WhatsApp réaliste + compte rendu structuré | Remplace le « widget Relance devis » du plan v3.0 (le v3.1 ne demande plus de widget animé type ExplorIA — remplacé par des maquettes statiques) |
| `.weekly-summary-mock` | Maquette résumé hebdomadaire (CAP CASH) | Reprend l'intention de `.monday-report-mock`, renommé car le v3.1 ne fixe plus « le lundi » comme moment unique |
| `.validation-view-mock` | Tableau de validation / vue bureau (CAP CASH et CAP CHANTIER) | Reprend l'intention de `.assistant-view-mock` |
| `.price-block` | Bloc prix fixe par brique | Nouveau, plus simple que le `.price-block` v3.0 (un seul prix affiché, pas de fourchette persona) |
| `.social-proof-placeholder` | Bloc preuve sociale en attente | Inchangé |
| `.nav`, `.topbar`, `.mobile-menu`, `.footer` | Navigation et pied de page | Inchangés dans leur structure |
| `.cookie-banner` (JS) | Bandeau RGPD | `site/assets/cookie-consent.js`, inchangé |

---

## 6. Structure de `site/assets/css/v3.css`

```
1. :root                — jetons de design (--navy, --orange, --paper, --line, --shadow-sm, --max, --radius)
2. reset / typography / layout / nav / buttons / hero   — inchangés par rapport au plan v3.0 (§6)
3. brick-block           — .brick-block, .brick-table, .brick-promise, .brick-price
4. entry-offer-card      — .entry-offer-card
5. human-validation      — .human-validation, .human-validation-step
6. environment-block     — .environment-block
7. whatsapp-mockup       — .whatsapp-mockup, .whatsapp-bubble
8. weekly-summary-mock   — .weekly-summary-mock
9. validation-view-mock  — .validation-view-mock, .validation-view-row
10. price-block          — .price-block
11. social-proof         — .social-proof-placeholder
12. diagnostic-form      — .diagnostic-form, .parcours-selector, .form-group, .form-error, .form-success
13. legal                — .legal-hero, .legal-layout, .toc, .legal-card (repris tel quel)
14. footer               — .footer-grid, .footer-brand, .footer-links
15. responsive           — breakpoints 1050px / 720px / 520px, sur le modèle déjà en place
```

---

## 7. Structure de `site/assets/js/v3.js`

```
1. mobileMenu()           — ouverture/fermeture du burger menu
2. parcoursSelector()      — bascule visuelle entre « qualification courte » et « diagnostic » sur /diagnostic/, sans changer les champs du formulaire
3. diagnosticForm()        — validation + honeypot + envoi vers le webhook n8n (cf. §11), sur le modèle déjà existant dans site/estimation/index.html (honeypot "website", regex email, blocage domaines jetables, fetch POST JSON)
4. init()                  — attache les écouteurs au DOMContentLoaded, IIFE, 'use strict', pas de dépendance externe
```

Aucune animation en boucle, aucune vidéo, aucun élément 3D — le v3.1 ne demande plus de widget animé, ce qui simplifie `v3.js` par rapport au plan précédent.

---

## 8. Fonctionnement de la maquette « WhatsApp → compte rendu chantier »

*(remplace la section « widget Relance devis » du plan v3.0, qui n'a pas d'équivalent dans le Document Maître v3.1)*

- Composant statique en deux volets : à gauche une **capture WhatsApp réaliste** (bulle vocale + photos, anonymisée, sans nom de client réel) ; à droite le **compte rendu structuré** qui en résulte (lieu, décisions, travaux supplémentaires potentiels signalés).
- Aucune animation obligatoire — une simple mise en regard statique suffit à illustrer la promesse (BLOC 6.1). Si une transition est ajoutée, elle reste discrète (fondu, pas de lecture en boucle).
- Légende explicite « Aperçu — le compte rendu est vérifié par le bureau avant diffusion », pour ne jamais laisser croire à un envoi automatique validé.
- Reste l'illustration principale de `/cap-chantier/` ; `/cap-cash/` utilise plutôt la maquette résumé hebdomadaire et le tableau de validation (§9-10) comme illustration principale.

---

## 9. Fonctionnement de la maquette « résumé hebdomadaire »

- Composant statique (pas de JS), présenté comme un gabarit d'email ou de note interne.
- Contenu : reprend l'intention de BLOC 10.4 (« un résumé hebdomadaire ») avec des placeholders génériques (« Dossier A », « Dossier B »), jamais un nom de client réel ni un montant absent du Document Maître.
- Étiqueté « Exemple de format », pour ne pas être confondu avec une preuve sociale ou une promesse de résultat mesuré.

---

## 10. Fonctionnement de la vue assistante / tableau de validation

- Tableau HTML statique reproduisant le « tableau de validation » (BLOC 5.2) et la « vue bureau » (BLOC 10.5) : colonnes Dossier / Action proposée / [Valider] [Modifier] [Reporter] (CAP CASH) ou Dossier / Statut / [Vérifier] [Classer] [Signaler] (CAP CHANTIER, terminologie à ajuster en rédaction).
- Boutons non fonctionnels sur le site public (`aria-disabled="true"`), légende « Aperçu de l'interface ».
- Données de lignes génériques et anonymisées uniquement.

---

## 11. Formulaire du diagnostic et intégration n8n

- **Champs exacts (BLOC 10.6)** : nom, entreprise, effectif, métier, logiciel de gestion, irritant principal, utilisateur principal, prestataire informatique (oui / non / ne sait pas).
- **Sélecteur de parcours** en tête de formulaire : « Mon besoin est standard (qualification courte gratuite) » / « Ma situation est plus complexe (diagnostic 490€ HT) » — ce choix ne change que le texte de confirmation envoyé après soumission (délai de rappel, mention du prix le cas échéant), pas les champs collectés ni le webhook cible.
- **Aucun fichier obligatoire à la soumission** (BLOC 4.2 Parcours B) — le formulaire ne doit comporter aucun champ d'upload requis.
- **Mécanique technique reprise à l'identique** du mécanisme en production sur `site/estimation/index.html` : honeypot `website` (`aria-hidden`, `tabindex="-1"`), validation JS (champs requis, regex email, blocage domaines jetables), envoi `fetch()` `POST` JSON vers le webhook n8n existant (même variable `N8N_WEBHOOK_URL`).
- **RGPD** : case de consentement explicite, lien vers `/confidentialite/`.
- Suppression complète de la logique de calcul d'auto-estimation ROI (secteurs, temps hebdo, coût horaire) présente dans `estimation/index.html` — cohérent avec l'interdiction des chiffres de ROI non prouvés (BLOC 10.10).

---

## 12. Mise à jour des pages légales

| Page | Changement | Ce qui ne change pas |
|---|---|---|
| `/cgv/` | Remplacer entièrement la grille tarifaire CAP IA/ACTION/SOLUTION/SUIVI par la grille par briques (BLOC 5-8) : prix d'installation fixes, surveillance technique 99€/mois, maintien opérationnel 149€/mois, mention systématique « Abonnements techniques non inclus... » (BLOC 8.4), mention légale **« TVA non applicable, article 293 B du CGI »** sur chaque prix, clauses de paiement adaptées à des installations à prix fixe (pas de paiement en 2-3 tranches type CAP SOLUTION, sauf si vous souhaitez le conserver pour les diagnostics complexes — à trancher en rédaction) | Identité du prestataire, forme juridique, SIRET, TVA intracommunautaire — déjà correctes |
| `/confidentialite/` | Mettre à jour la liste des données collectées avec les 2 nouveaux champs du formulaire (« utilisateur principal », « prestataire informatique ») | Base légale, durée de conservation, sous-traitants, droits |
| `/cookies/` | Vérifier l'absence de mention résiduelle de l'ancienne offre | Mécanique de consentement (déjà conforme) |
| `/mentions-legales/` | Aucun changement de contenu prévu | Tout — identité déjà conforme au statut tranché |

Aucune donnée d'identité juridique (nom, statut, SIRET, adresse) ne sera modifiée sans nouvelle validation explicite.

---

## 13. Redirections Netlify

| Ancienne URL | Redirection | Statut | Remarque |
|---|---|---|---|
| `/offres` | `/` | 301 | Révisé : l'ancienne page couvrait 4 paliers génériques, aucune page cible unique n'en est l'équivalent direct — l'Accueil présente les deux offres et les trois portes d'entrée |
| `/solutions` | `/` | 301 | Idem — FLUX/PILOT n'ont plus d'équivalent direct ; mapping fin à confirmer si vous souhaitez plutôt répartir vers `/cap-cash/` et `/cap-chantier/` |
| `/methode` | `/` | 301 | — |
| `/estimation` | `/diagnostic/` | 301 | La logique de calcul disparaît, mais l'intention (qualifier un besoin) est reprise par `/diagnostic/` |
| `/eligibilite-cap-ia` | `/diagnostic/` | 301 | — |
| `/eligibilite-cap-ia-btp` | `/diagnostic/` | 301 | — |
| `/eligibilite-cap-ia-autres-secteurs` | `/diagnostic/` | 301 | VotrIA reste ciblé BTP 10-25 sal. (BLOC 2.2) — cette redirection ne présume pas d'un élargissement de cible |

Les 9 redirections déjà en place dans `netlify.toml` (`/cas-usage`, `/conformite-ia-rgpd`, `/diagnostic`, `/contact`, `/exemple-cap-ia`, `/demonstrateur-cap-ia-btp`, `/btp`, `/industrie`, `/logistique`, `/services`) sont réexaminées une à une pour pointer vers les nouvelles pages plutôt que supprimées. Les en-têtes de sécurité actuels sont conservés à l'identique.

---

## 14. Mise à jour sitemap et robots.txt

- `robots.txt` : inchangé dans sa structure.
- `sitemap.xml` : régénéré avec les 8 URLs actives (`/`, `/cap-cash/`, `/cap-chantier/`, `/diagnostic/`, `/mentions-legales/`, `/confidentialite/`, `/cookies/`, `/cgv/`), `lastmod` mise à jour à la date de mise en ligne.

---

## 15. Contrôles responsive, accessibilité, sécurité et SEO

Identiques en principe au plan v3.0 (§15) : breakpoints 1050/720/520px, `aria-hidden` sur le honeypot, `aria-disabled` sur les boutons de maquette, CSP et en-têtes inchangés, pas de nouvelle ressource externe.

**Contrôle de contenu final spécifique au v3.1** : grep systématique pour vérifier l'absence de :
- noms de personas (Laurent, Nadia, Philippe) et des rôles internes nommés autrement que génériquement ;
- vocabulaire CAP IA, CAP ACTION, CAP SOLUTION, CAP SUIVI, FLUX, PILOT ;
- toute formulation de la liste des promesses interdites (BLOC 10.9) ;
- tout élément de la liste à ne pas afficher (BLOC 10.10), y compris Docker et webhook qui s'ajoutent à la liste du v3.0 ;
- le diagnostic présenté comme obligatoire pour une petite offre ou une brique standard ;
- « HT = TTC » et tout seuil de chiffre d'affaires.

---

## 16. Ordre exact de développement par lots

1. **Lot 0 — Fondations** : `site/assets/css/v3.css` et `site/assets/js/v3.js` (§6-7), sans contenu de page.
2. **Lot 1 — Layout partagé** : nav/footer commun, testé isolément avant duplication.
3. **Lot 2 — Accueil** (`/`) : accroche, blocs CAP CASH/CAP CHANTIER, trois portes d'entrée, progression par briques, validation humaine, bloc dirigeant/bureau/terrain, environnement, preuve sociale placeholder, section secondaire Revue des emails.
4. **Lot 3 — CAP CASH** (`/cap-cash/`) : 3 briques (§3.2), maquette résumé hebdomadaire, tableau de validation.
5. **Lot 4 — CAP CHANTIER** (`/cap-chantier/`) : 3 briques + Réunion chantier (§3.3), maquette WhatsApp, vue bureau.
6. **Lot 5 — Diagnostic** (`/diagnostic/`) : les deux parcours, formulaire (§11), intégration webhook n8n.
7. **Lot 6 — Pages légales** : CGV (grille par briques + mention TVA), confidentialité (champs formulaire), vérification cookies.
8. **Lot 7 — Netlify & SEO** : `netlify.toml` (§13), `sitemap.xml`, `robots.txt`.
9. **Lot 8 — QA finale** : contrôles §15, revue croisée avec le Document Maître v3.1 section par section, validation humaine avant mise en ligne.

---

## 17. Critères de validation avant mise en ligne

- [ ] Aucune occurrence de « Laurent », « Nadia », « Philippe » dans le code livré au public.
- [ ] Aucune mention de CAP IA, CAP ACTION, CAP SOLUTION, CAP SUIVI, FLUX ou PILOT.
- [ ] Le diagnostic payant n'est présenté nulle part comme obligatoire pour un besoin standard ; la qualification courte gratuite est visible à égalité.
- [ ] Tous les prix affichés correspondent exactement à ceux du Document Maître v3.1 (990€, 1 490€, 2 200€, 1 800€, 1 600€, 1 990€, 1 200€, 790€, 490€, 99€/mois, 149€/mois), sans qualificatif de tarif provisoire ou d'essai, et sans qualifier de « prix fixe » une offre introduite par « à partir de ».
- [ ] Aucune des formulations de la liste des promesses interdites (BLOC 10.9) ; aucun des éléments de la liste à ne pas afficher (BLOC 10.10).
- [ ] Mention « environnement, comptes et abonnements appartiennent au client » présente et fidèle au texte de référence (BLOC 10.8).
- [ ] Mention légale « TVA non applicable, article 293 B du CGI » présente sur `/cgv/` et prévue sur les futures factures ; aucune occurrence de « HT = TTC » ; aucun seuil de chiffre d'affaires sur une page commerciale.
- [ ] Identité juridique des pages légales conforme au statut tranché (Jean-François Martin, EI, micro-entreprise, SIREN/SIRET/TVA) — aucune mention résiduelle de « SARL-U », « EURL » ou « Lean Perform ».
- [ ] Formulaire de diagnostic fonctionnel de bout en bout avec le webhook n8n existant (test réel, données fictives), champs strictement conformes à BLOC 10.6.
- [ ] Bandeau cookies opérationnel sur toutes les nouvelles pages.
- [ ] En-têtes de sécurité et redirections Netlify vérifiés après déploiement.
- [ ] Sitemap et robots.txt à jour, aucun lien interne cassé.
- [ ] Contrôle responsive aux 3 breakpoints (1050px, 720px, 520px) sur chaque nouvelle page.
- [ ] Aucune animation en boucle, aucune vidéo, aucun élément 3D.
- [ ] Aucune modification du dépôt principal `E:\VotrIA\web-site-votria` détectée.
- [ ] Validation humaine finale par vous avant bascule DNS/déploiement production.
