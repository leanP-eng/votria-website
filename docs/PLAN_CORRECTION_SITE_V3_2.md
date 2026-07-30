# PLAN DE CORRECTION SITE V3.2
**30 juillet 2026 | Corrections à apporter aux pages HTML pour refléter l'offre commerciale V3.2**

> **Règle absolue :** les pages légales (`mentions-legales/`, `confidentialite/`, `cookies/`, `cgv/`) ne sont pas modifiées. Elles sont signalées à la fin de ce document uniquement pour information.
>
> Les fichiers `v3.css`, `v3.js`, `cookie-consent.js`, `merci/index.html`, `netlify.toml`, `sitemap.xml`, `robots.txt`, `404.html` ne sont pas touchés.
>
> Ne pas créer de `_redirects` ni de `_headers`.

---

## PRIORITÉ D'EXÉCUTION

| Ordre | Fichier | Raison |
|---|---|---|
| 1 | `site/cap-cash/index.html` | Prix public faux (990 € → 1 490 €), vocabulaire interdit le plus dense |
| 2 | `site/index.html` | Répercussion du prix corrigé, suppression de la section "Revue emails prioritaires" |
| 3 | `site/cap-chantier/index.html` | Nouvelle offre 2 690 €, suppression de l'extension 1 200 € |
| 4 | `site/diagnostic/index.html` | Labels des deux choix à mettre à jour |

---

## FICHIER 1 — `site/cap-cash/index.html`

### 1.A Tableau des corrections

| Section actuelle | Problème | Remplacement | HTML à conserver | HTML à supprimer | Ancre concernée | Méta à modifier | Risque |
|---|---|---|---|---|---|---|---|
| Eyebrow "Trois briques" | "briques" est un terme interdit en V3.2 | Remplacer par "Les offres CAP CASH" | balise `<span class="eyebrow">` | contenu texte uniquement | aucune | aucune | faible |
| H2 "Une progression, pas un forfait indivisible" | Compatible V3.2 — conserver | aucun | H2 complet | rien | aucune | aucune | aucun |
| `brick-progress-note` : "Vous pouvez commencer par une seule brique." | "brique" interdit | "Vous pouvez commencer par une seule offre." | balise et classe CSS | contenu texte uniquement | aucune | aucune | faible |
| Section Brique 1 — H3 "Demandes de devis à traiter" | Titre ne reflète pas la fusion email + devis V3.2 | "Voir les emails à traiter et ne plus oublier une demande de devis" | balise `<h3>`, `id="demandes-de-devis"` | contenu texte du H3 | `#demandes-de-devis` (conserver pour les liens entrants) | aucune | **MOYEN** — index.html contient un lien vers `#demandes-de-devis` |
| Prix Brique 1 : "Installation : 990 € HT" | Prix incorrect en V3.2 | "1 490 € HT" | balise du prix | montant 990 | aucune | `<meta name="description">` si elle mentionne 990 | **ÉLEVÉ** — prix public faux affiché |
| Description Brique 1 : traitement des demandes de devis seules | Ne mentionne pas la fusion avec la revue d'emails | Ajouter : "VotrIA analyse votre boîte email. Les emails à traiter et les nouvelles demandes de devis ressortent chaque jour." | structure paragraphes existante | texte de description actuel | aucune | aucune | faible |
| "périmètre standard" dans la section conditions | "standard" interdit en V3.2 | "Ce prix s'applique lorsque :" | balise texte | mot "standard" | aucune | aucune | faible |
| Fine print : "Surveillance technique obligatoire pour ce flux (email automatisé)" | "flux" interdit | "Surveillance technique obligatoire pour ce fonctionnement (email automatisé)" | balise | mot "flux" | aucune | aucune | faible |
| Note "socle existant" (dans explication de l'extension) | "socle" interdit, extension non affichée publiquement en V3.2 | Supprimer la phrase complète | rien | phrase complète | aucune | aucune | faible |
| Section Brique 2 — prix "à partir de 2 200 € HT / Extension depuis la première brique : à partir de 1 800 € HT" | Prix d'extension (1 800 €) ne doit pas apparaître sur le site public en V3.2 | Conserver uniquement "à partir de 2 200 € HT" ; supprimer la ligne extension | ligne du prix principal "2 200 € HT" | ligne "Extension depuis la première brique : à partir de 1 800 € HT" | aucune | aucune | **MOYEN** — disparition d'information visible |
| Section Brique 3 — prix "à partir de 2 200 € HT / Extension depuis un socle CAP CASH existant : à partir de 1 600 € HT" | Prix d'extension (1 600 €) ne doit pas apparaître sur le site public en V3.2 | Conserver uniquement "à partir de 2 200 € HT" ; supprimer la ligne extension | ligne du prix principal "2 200 € HT" | ligne "Extension depuis un socle CAP CASH existant : à partir de 1 600 € HT" | aucune | aucune | **MOYEN** — disparition d'information visible |
| Budget indicatif "~4 390 € HT" en bas de page | Calculé sur anciens prix incluant les extensions ; V3.2 n'affiche pas de budget global CAP CASH | Supprimer la section budget indicatif globale | rien | section budget indicatif complète | aucune | aucune | faible |
| Toute occurrence de "brique" en texte visible | Terme interdit | "offre" | balises concernées | occurrences textuelles de "brique" | aucune | aucune | faible |

### 1.B Vérification vocabulaire interdit — cap-cash/index.html

| Terme | Action |
|---|---|
| brique | Remplacer par "offre" dans tout texte visible |
| socle | Supprimer ou remplacer par "installation déjà en place" |
| flux | Remplacer par "fonctionnement" |
| extension | Supprimer les lignes de prix d'extension |
| périmètre standard | Remplacer par "Ce prix s'applique lorsque" |
| standard | Vérifier et supprimer si présent |
| file d'exceptions | Remplacer par "cas à vérifier" |
| module, autonome | Vérifier et supprimer si présent |
| 990 € | Corriger en 1 490 € |
| 1 800 € | Supprimer (prix d'extension) |
| 1 600 € | Supprimer (prix d'extension) |

### 1.C Éléments à conserver impérativement — cap-cash/index.html

- Classes CSS : `brick`, `brick-head`, `brick-body`, `brick-price`, `brick-scope`, `brick-progress`, `brick-progress-item`, `brick-progress-note` — ces noms sont des classes CSS internes, pas du texte visible ; ne pas les modifier.
- IDs : `demandes-de-devis`, `suivi-relance`, `factures` — conserver pour compatibilité des liens entrants.
- Formulaire Netlify : ne pas toucher.
- Scripts, `v3.css`, `v3.js`, `cookie-consent.js`.
- Nav, footer, cookie banner.
- Tout le contenu des sections "Ce que vous recevez", "Non compris", qui ne contient pas de termes interdits.
- Balise `<meta name="robots">` et balise canonical.

---

## FICHIER 2 — `site/index.html`

### 2.A Tableau des corrections

| Section actuelle | Problème | Remplacement | HTML à conserver | HTML à supprimer | Ancre concernée | Méta à modifier | Risque |
|---|---|---|---|---|---|---|---|
| Carte 2 (section "trois façons de commencer") — H3 "Demandes de devis à traiter" | Titre ne reflète pas la fusion V3.2 | "Voir les emails à traiter et ne plus oublier une demande de devis" | balise `<h3>`, lien vers `/cap-cash/` | contenu texte du H3 | lien `href="/cap-cash/#demandes-de-devis"` — vérifier que l'ancre existe encore après correction de cap-cash | aucune | **MOYEN** — lien entrant potentiellement cassé |
| Carte 2 — prix "Installation : 990 € HT" | Prix incorrect en V3.2 | "À partir de 1 490 € HT" | balise du prix | montant 990 | aucune | `<meta name="description">` si elle mentionne 990 | **ÉLEVÉ** — prix faux affiché sur la page principale |
| Section "Revue des emails prioritaires" (id="revue-emails", 990 € HT) | Cette offre séparée n'existe plus en V3.2 — fusionnée dans l'offre email + devis à 1 490 € | Supprimer la section complète **ou** la remplacer par un encart neutre (ex. "Toutes les offres → /cap-cash/") | rien (supprimer la section entière) | section complète avec id="revue-emails" | `href="#revue-emails"` depuis le lien en bas du hero — supprimer ce lien également | aucune | **MOYEN** — un lien interne pointe sur cet id |
| Tout lien interne `href="#revue-emails"` | Pointe vers une section supprimée | Supprimer ou rediriger vers `/cap-cash/` | rien | attribut `href="#revue-emails"` complet | id="revue-emails" | aucune | faible |
| Toute occurrence de "990 € HT" en dehors de la carte déjà corrigée | Prix retiré du catalogue V3.2 | Vérifier et corriger ou supprimer | dépend du contexte | occurrences textuelles de "990 €" | aucune | aucune | faible |

### 2.B Vérification vocabulaire interdit — index.html

| Terme | Action |
|---|---|
| brique | Vérifier présence — probablement absent du texte visible |
| 990 € | Corriger en 1 490 € (carte 2) puis supprimer dans la section Revue emails |
| standard | Vérifier et supprimer si présent |
| flux | Vérifier et supprimer si présent |

### 2.C Éléments à conserver impérativement — index.html

- H1 : "Vos demandes de devis restent suivies. Vos factures en retard ressortent. Vos comptes rendus arrivent au bureau." — NE PAS MODIFIER.
- Carte 1 (WhatsApp → CR, 1 490 € HT) — NE PAS MODIFIER.
- Carte 3 (Réunion, 790 € HT) — NE PAS MODIFIER.
- Section méthode/progression.
- Section hero complète sauf si elle contient "990 €".
- Nav, footer, scripts, CSS.

---

## FICHIER 3 — `site/cap-chantier/index.html`

### 3.A Tableau des corrections

| Section actuelle | Problème | Remplacement | HTML à conserver | HTML à supprimer | Ancre concernée | Méta à modifier | Risque |
|---|---|---|---|---|---|---|---|
| Eyebrow contenant "briques" ou "quatre briques" | "briques" interdit en V3.2 ; V3.2 compte 5 offres CAP CHANTIER | Remplacer par "Les offres CAP CHANTIER" | balise `<span class="eyebrow">` | contenu texte | aucune | aucune | faible |
| Section "Travaux supplémentaires et avenants" — prix "À partir de 1 200 € HT" | Ce prix d'extension ne doit pas apparaître publiquement en V3.2 | Remplacer entièrement la section par la nouvelle offre combinée "Recevoir les comptes rendus WhatsApp et suivre les travaux supplémentaires" à 2 690 € HT | balise de section (conserver la structure HTML) | contenu H3, description, prix, conditions de la section existante | `#travaux-supplementaires` si existant — l'ancre peut rester avec le nouveau contenu | aucune | **ÉLEVÉ** — prix et titre changent radicalement |
| Toute mention "1 200 € HT" ou "extension travaux supplémentaires" | Prix interdit publiquement en V3.2 | Supprimer | rien | toutes les occurrences | aucune | aucune | **ÉLEVÉ** — prix erroné affiché |
| Toute mention "1 290 € HT" | Ancien tarif pilote — interdit en V3.2 | Supprimer | rien | toutes les occurrences | aucune | aucune | **ÉLEVÉ** — tarif retiré |
| "file d'exceptions" dans le texte | Terme interdit en V3.2 | "cas à vérifier" | balise | occurrences textuelles | aucune | aucune | faible |
| "périmètre standard" dans les conditions | "standard" interdit en V3.2 | "Ce prix s'applique lorsque :" | balise | occurrence textuelle | aucune | aucune | faible |
| "flux (WhatsApp)" dans les fine prints | "flux" interdit en V3.2 | "fonctionnement (WhatsApp)" | balise | occurrence de "flux" | aucune | aucune | faible |
| "brique" visible dans les titres ou progressions | Terme interdit en V3.2 | "offre" | balises | occurrences textuelles | aucune | aucune | faible |
| Budget indicatif "~4 180–4 680 € HT" | Calculé sur anciens prix incluant les extensions ; V3.2 n'affiche pas de budget global CAP CHANTIER | Supprimer la section budget indicatif complète | rien | section budget indicatif | aucune | aucune | faible |
| Texte description Brique 2 Dossier chantier — "périmètre standard" dans les conditions | "standard" interdit | "Ce prix s'applique lorsque les documents sont déjà rangés dans un dossier identifiable par chantier." | balise | occurrence de "périmètre standard" | aucune | aucune | faible |
| Note de progression "Vous pouvez commencer par une seule brique." | "brique" interdit | "Vous pouvez commencer par une seule offre." | balise | occurrence de "brique" | aucune | aucune | faible |

### 3.B Contenu exact de la section de remplacement — Offre travaux supplémentaires

La section existante "Travaux supplémentaires et avenants" doit être réécrite avec ce contenu :

**H3 :** Recevoir les comptes rendus WhatsApp et suivre les travaux supplémentaires

**Prix affiché :** À partir de 2 690 € HT

**Surveillance :** 99 € HT/mois

**Description :**
Cette offre comprend tout ce que fait l'offre vocaux chantier à 1 490 € HT.

En plus, chaque travail supplémentaire signalé devient une ligne de suivi avec le chantier, la date, la description, les photos associées, la personne responsable et le statut.

Les statuts possibles : à confirmer — à chiffrer — devis à préparer — devis envoyé — accepté — refusé — terminé.

**Ce prix s'applique lorsque :**
- les conditions de l'offre vocaux chantier à 1 490 € HT sont remplies ;
- une seule personne référente gère le suivi des travaux supplémentaires.

**Non compris :**
- création automatique du devis ;
- choix automatique du prix ;
- envoi automatique ;
- engagement contractuel automatique.

**Lien CTA :** Vérifier si cette offre correspond à mon besoin → /diagnostic/

### 3.C Vérification vocabulaire interdit — cap-chantier/index.html

| Terme | Action |
|---|---|
| brique | Remplacer par "offre" dans tout texte visible |
| file d'exceptions | Remplacer par "cas à vérifier" |
| périmètre standard | Remplacer par "Ce prix s'applique lorsque" |
| standard | Vérifier et supprimer si hors formule "Ce prix s'applique lorsque" |
| flux | Remplacer par "fonctionnement" |
| extension | Supprimer les lignes de prix d'extension |
| 1 200 € | Supprimer (prix d'extension retiré) |
| 1 290 € | Supprimer (tarif pilote interdit) |
| tarif pilote | Supprimer |
| module, autonome, socle | Vérifier et supprimer si présent |

### 3.D Éléments à conserver impérativement — cap-chantier/index.html

- Section réunion (790 € HT) — conserver (mettre à jour le titre si nécessaire).
- Section WhatsApp → CR (1 490 € HT) — conserver.
- Section Dossier chantier (1 490 €/1 990 € selon conditions) — conserver avec mise à jour terminologique.
- IDs des sections : conserver pour compatibilité.
- Classes CSS `brick*` : ne pas modifier (classes internes, pas visibles).
- Nav, footer, scripts, CSS, formulaire.

---

## FICHIER 4 — `site/diagnostic/index.html`

### 4.A Tableau des corrections

| Section actuelle | Problème | Remplacement | HTML à conserver | HTML à supprimer | Ancre concernée | Méta à modifier | Risque |
|---|---|---|---|---|---|---|---|
| H2 ou H3 "Besoin standard" | "standard" interdit en V3.2 ; titre non conforme | "Votre besoin correspond à une offre présentée sur le site" | balise du titre | contenu texte du titre | aucune | aucune | faible |
| H2 ou H3 "Situation complexe" | Titre non conforme V3.2 | "Votre situation demande une vérification avant de chiffrer" | balise du titre | contenu texte du titre | aucune | aucune | faible |
| Label du formulaire : "Besoin standard — qualification courte gratuite" | Terme "standard" interdit | "Votre besoin correspond à une offre présentée sur le site" | balise `<label>`, attribut `name` du champ radio | contenu texte du label | aucune | aucune | **MOYEN** — ne pas modifier l'attribut `name` ni la valeur `value` du champ radio (Netlify) |
| Label du formulaire : "Situation complexe — diagnostic à 490 € HT" | Non conforme V3.2 | "Votre situation demande une vérification avant de chiffrer — diagnostic à 490 € HT" | balise `<label>`, attribut `name` du champ radio | contenu texte du label | aucune | aucune | **MOYEN** — ne pas modifier l'attribut `name` ni la valeur `value` du champ radio (Netlify) |
| Description "Un besoin qui correspond exactement à une offre standard existante" | "standard" interdit | "Un besoin qui correspond à l'une des offres présentées sur le site" | balise | occurrence de "standard" | aucune | aucune | faible |
| Toute occurrence de "périmètre standard", "offre standard", "besoin standard" | Termes interdits | Voir remplacements ci-dessus | balises | occurrences textuelles | aucune | aucune | faible |

### 4.B RÈGLE CRITIQUE — formulaire Netlify

Le formulaire `demande-votria` est protégé.

**Ne jamais modifier :**
- `data-netlify="true"`
- `name` des champs
- `value` des champs
- `action="/merci/"`
- La structure `<form>` elle-même

**Modification autorisée uniquement :**
- Le contenu textuel des balises `<label>`
- Les textes descriptifs hors champs

### 4.C Éléments à conserver impérativement — diagnostic/index.html

- H1 complet
- Structure complète du formulaire Netlify
- Prix 490 € HT (ne pas modifier)
- Description des deux parcours (mettre à jour uniquement les passages contenant les termes interdits)
- Nav, footer, scripts, CSS

---

## PAGES LÉGALES — Information uniquement, aucune modification autorisée

Les pages légales ne doivent pas être modifiées dans ce lot de corrections. Elles sont signalées ici uniquement pour information et suivi lors de la prochaine révision légale.

| Fichier | Risque détecté | Action |
|---|---|---|
| `site/mentions-legales/index.html` | Peut contenir des références à d'anciennes offres ou au statut "auto-entrepreneur" | Vérifier lors de la prochaine révision légale — NE PAS MODIFIER ICI |
| `site/confidentialite/index.html` | Aucun risque commercial identifié | Aucune action |
| `site/cookies/index.html` | Aucun risque commercial identifié | Aucune action |
| `site/cgv/index.html` | Peut contenir des références à d'anciennes offres ou des prix | Vérifier lors de la prochaine révision légale — NE PAS MODIFIER ICI |

---

## CHECKLIST DE VÉRIFICATION POST-CORRECTION

### A — Vocabulaire interdit (vérification globale)

Après corrections, lancer une recherche dans les fichiers HTML corrigés pour vérifier l'absence de :

```
brique · module · autonome · extension · socle · enrichi · standard · flux
classification · file d'exceptions · périmètre validé · architecture · pivot · MCO
moteur · ingestion · automatisation no-code · CAP IA · CAP ACTION · CAP SOLUTION
CAP SUIVI · FLUX · PILOT · Fast Audit · tarif pilote · 1 290 · 990 € · 1 200 € · 1 800 € · 1 600 €
```

### B — Prix publics conformes V3.2

Vérifier la présence exacte des prix suivants dans les fichiers corrigés :

| Prix | Page |
|---|---|
| 1 490 € HT | index.html (carte 2), cap-cash/index.html (offre 1) |
| 2 200 € HT (x2) | cap-cash/index.html (offres 2 et 3) |
| 790 € HT | index.html (carte réunion), cap-chantier/index.html (offre réunion) |
| 1 490 € HT | cap-chantier/index.html (offre WhatsApp) |
| 2 690 € HT | cap-chantier/index.html (offre WhatsApp + travaux supplémentaires) |
| 1 490 € HT | cap-chantier/index.html (offre dossier sans classement) |
| 1 990 € HT | cap-chantier/index.html (offre dossier avec classement) |
| 490 € HT | diagnostic/index.html |

### C — Liens internes

| Lien | Vérifié |
|---|---|
| index.html → `/cap-cash/` | ✓ conserver |
| index.html → `/cap-cash/#demandes-de-devis` | À vérifier : l'ancre existe-t-elle encore après correction ? |
| index.html → `#revue-emails` | Supprimer (section supprimée) |
| index.html → `/diagnostic/` | ✓ conserver |
| cap-cash/index.html → `/diagnostic/` | ✓ conserver |
| cap-chantier/index.html → `/diagnostic/` | ✓ conserver |

### D — Conformité commerciale

| Règle | Vérification |
|---|---|
| Aucun prix global affiché pour CAP CASH | Pas de ligne "Budget indicatif CAP CASH" |
| Aucun prix global affiché pour CAP CHANTIER | Pas de ligne "Budget indicatif CAP CHANTIER" |
| Aucune extension affichée publiquement | Aucune ligne "Extension depuis..." visible |
| "1 290 €" absent de toutes les pages | Recherche globale |
| Formulaire Netlify intact | Attributs `name`, `value`, `action` inchangés |

### E — SEO et métadonnées

| Élément | Vérification |
|---|---|
| `<title>` de chaque page ne contient pas de termes interdits | Vérifier |
| `<meta name="description">` ne mentionne pas "990 €" ni "standard" | Vérifier et corriger si besoin |
| Canonicals inchangés | Ne pas modifier |
| `<meta name="robots">` inchangés | Ne pas modifier |

---

## ORDRE D'EXÉCUTION DU COMMIT

```bash
git add site/cap-cash/index.html
git add site/index.html
git add site/cap-chantier/index.html
git add site/diagnostic/index.html
git commit -m "feat: mettre à jour les textes et les prix selon l'offre commerciale V3.2"
```

Ne pas pousser. Ne pas toucher à la branche main.

---

**Fin du document PLAN_CORRECTION_SITE_V3_2.md**
