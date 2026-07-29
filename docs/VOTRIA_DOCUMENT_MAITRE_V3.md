> **OBSOLÈTE — remplacé par `docs/VOTRIA_DOCUMENT_MAITRE_V3_1.md`.**
> **Ne pas utiliser pour le développement ou la rédaction du site.**
> Conservé uniquement pour l'historique (dernier état connu de la v3.0, incluant la correction juridique validée le 29 juillet 2026, avant remplacement complet par la v3.1).

---

# DOCUMENT MAÎTRE VOTRIA — v3.0
**29 juillet 2026 | Remplace : Document Maître v2.0, Offre Tiroirs v1, Discours Commercial v1**

> **RÈGLE D'OR :** Ce document annule et remplace toutes les versions antérieures. Il constitue la seule référence stratégique, commerciale, tarifaire et éditoriale de VotrIA.

---

## BLOC 1 — Identité & Contraintes personnelles

**Entrepreneur**
- Statut juridique et fiscal : Jean-François Martin, entrepreneur individuel soumis au régime de la micro-entreprise
- Marque commerciale : VotrIA
- Entité qui contracte, facture et signe : Jean-François Martin EI
- SIREN : 498 982 990 · SIRET : 498 982 990 00059 · TVA intracommunautaire : FR71 498 982 990
- Régime de TVA : franchise en base de TVA, aucune TVA facturée à ce jour. Les prix publics restent exprimés en euros HT (ne jamais afficher « HT = TTC »). La mention légale de franchise en base correspondant à la date de publication doit figurer sur les CGV et sur les factures. La TVA légalement applicable pourra être ajoutée à compter d'un futur changement de régime fiscal.
- Structure : Solo (aucun salarié, aucun freelancer permanent prévu)
- Localisation : L'Isle-Jourdain, Occitanie (~20 km Toulouse)

**Capacité de travail**
- Disponibilité : 50h/semaine maximum
- Billable réaliste : 60-70% (30-40% non-billable = prosp, contenu, admin)
- Heures billable annualisées : ~1 560-1 820 heures/an

**Viabilité économique**
- Coûts fixes mensuels : 400€
- Seuil de survie (net) : 2 500€/mois → Besoin de **3 500€ brut/mois**
- TJM plancher : 60€/h
- Marge d'erreur : quasi zéro les 6 premiers mois

**Lancement** : Septembre 2026

---

## BLOC 2 — Positionnement & Principes

**Positionnement central**
> VotrIA connecte les outils déjà utilisés par les PME du bâtiment pour que l'argent rentre et que l'information circule. Sans remplacer ce qui marche déjà.

**Cible** : PME du bâtiment, 10 à 25 salariés, second œuvre prioritaire (électricité, plomberie/CVC, menuiserie), en Occitanie.

**Accroche site**
> Des devis qui dorment. Des factures qui traînent. Des infos chantier qui se perdent. On connecte vos outils existants pour que l'argent rentre et que l'information circule.

**Principes non négociables**
1. Le client conserve son ERP et ses outils métier.
2. Aucune écriture automatique dans l'ERP.
3. Toutes les données et outils sont installés dans l'environnement du client.
4. Aucune donnée client ne transite par une infrastructure VotrIA.
5. Les règles métier sont configurables, pas codées spécifiquement pour chaque client.
6. La validation humaine reste obligatoire avant tout envoi commercial.
7. Les cas ambigus sont bloqués et envoyés dans une file d'exceptions.
8. Les développements spécifiques non réutilisables sont refusés ou facturés séparément.
9. Le client reste responsable de l'exactitude et de la fraîcheur de ses données.

**Domaines de solution**
1. **CAP CASH** : Sécuriser le chiffre d'affaires (relance devis, trésorerie, encaissements)
2. **CAP CHANTIER** : Structurer le flux terrain-bureau (remontée info, documents, avenants)

---

## BLOC 3 — Les 3 personas acheteurs

### LAURENT — 10-14 salariés

- Entrepreneur centralisateur, goulot d'étranglement
- 8-12 devis/mois non relancés ≈ 7 500€/mois de CA perdu
- 3-5 factures en retard permanent ≈ 10-25k€ trésorerie bloquée
- Cycle de vente : 30-45 jours | Conversion CAP IA → famille : 20-25%
- Churn attendu : 60-70% | TJM réel VotrIA : 130€/h
- **Entrée :** Famille 1 (Relance commerciale)
- **Extension naturelle :** Famille 2 (Trésorerie)
- Condition de succès : assistante identifiée comme responsable

### NADIA — 15-19 salariés

- Cheffe d'entreprise en structuration, rupture d'info terrain-bureau
- Assistante passe 3-4h/semaine à chercher, trier, ressaisir
- Info terrain reste dans les téléphones des équipes
- Cycle de vente : 60-90 jours | Conversion : 35-40%
- Adoption facile (assistante = championne interne) | TJM réel : 139€/h
- ★ MEILLEUR FIT COMMERCIAL
- **Entrée :** Famille 3 (Chantier → Bureau)
- **Extension naturelle :** Famille 4 (Dossier chantier) puis Famille 1

### PHILIPPE — 20-25 salariés

- PME structurée, trop d'info dispersée, dérives détectées trop tard
- Cycle de vente : 60-90 jours | Conversion : 50-60%
- Adoption très bonne | TJM réel : 145-240€/h
- **Entrée :** Famille 3 + Famille 4 d'emblée
- **Extension Year 2 :** Pilotage marge (famille future)

**Ordre d'attaque** : Nadia (septembre) → Laurent (octobre-novembre) → Philippe (janvier-février)

---

## BLOC 4 — Offre commerciale : architecture à tiroirs

### 4.1 Concept

Un seul produit : **VotrIA pour le BTP.**

4 familles au catalogue. Chaque famille contient 5 automatisations. Le diagnostic (490€) détermine par quelle famille commencer. Tout est échangeable selon les résultats du diagnostic.

### 4.2 Entrée unique — Diagnostic (490€ HT)

1h30 avec le dirigeant. Un processus. Un rapport en 48 heures.

Le diagnostic identifie : la famille prioritaire, les 2-3 automatisations à déployer en premier, le logiciel en place et la faisabilité technique, le gain attendu chiffré, la personne référente interne.

Le diagnostic peut conclure « ne pas automatiser ».

3 questions tech intégrées :
- "Votre logiciel de gestion permet-il d'exporter vos devis en format type Excel ?"
- "Quelqu'un peut faire l'export 1x/semaine (5 min) ?"
- "Vous avez un prestataire IT ou quelqu'un pour gérer l'infra ?"

### 4.3 Famille 1 — Relance commerciale

**Votre assistante relance quand elle peut. On systématise.**

| | Automatisation |
|---|---|
| ✓ | Récupération des devis en attente depuis le logiciel (export ou API) |
| ✓ | Priorisation par montant, ancienneté et type de client |
| ✓ | Préparation des brouillons de relance (email, SMS) |
| ✓ | Détection des réponses email et suspension automatique de la séquence |
| ✓ | Résumé hebdo dirigeant : « 3 dossiers nécessitent votre appel » |

**RÉSULTAT TYPE :** 100% des devis relancés dans les délais · résumé 5 lignes chaque lundi · 0 relance oubliée

*Aucune relance envoyée sans validation. L'assistante décide, le système prépare.*

Idéal si : plus de 15 devis en attente/mois et personne ne relance systématiquement.
Persona principal : Laurent. Secondaire : Nadia.

### 4.4 Famille 2 — Trésorerie & encaissements

**Votre DSO fond. Votre cash respire.**

| | Automatisation |
|---|---|
| ✓ | Import des factures et acomptes depuis le logiciel (export ou API) |
| ✓ | Classement par niveau de retard (J+7, J+15, J+30, J+45, J+60) |
| ✓ | Relance progressive multi-canal (email poli → email ferme → SMS → recommandé) |
| ✓ | Arrêt automatique après paiement ou accord de règlement |
| ✓ | Alerte dirigeant : factures critiques + pré-rédaction courrier recommandé |

**RÉSULTAT TYPE :** Factures >30 jours visibles en 1 clic · séquence de relance sans oubli · pré-rédaction recommandé J+45

*Aucun envoi sans validation. L'assistante contrôle chaque étape.*

Idéal si : 3-5 factures régulièrement en retard, 10-25k€ trésorerie bloquée.
Persona : universel (Laurent, Nadia, Philippe).

### 4.5 Famille 3 — Chantier → Bureau

**L'info terrain arrive structurée au bureau. Sans ressaisie.**

| | Automatisation |
|---|---|
| ✓ | Réception des notes vocales et photos par WhatsApp ou email dédié |
| ✓ | Transcription et structuration en compte rendu (lieu, travaux, réserves, décisions) |
| ✓ | Classement automatique des photos et documents par chantier (Google Drive) |
| ✓ | Détection des travaux supplémentaires mentionnés (alerte avenant potentiel) |
| ✓ | Synthèse quotidienne assistante : « 3 CR reçus, 1 avenant à chiffrer, 2 BL classés » |

**RÉSULTAT TYPE :** 3-4h/semaine de ressaisie évitées · CR prêt en 2 min au lieu de 20 · 0 avenant oublié

*Le compte rendu est un brouillon. Le bureau valide avant toute diffusion au client.*

Idéal si : au moins un chef d'équipe ou conducteur de travaux, et l'info terrain reste dans les téléphones.
Persona principal : Nadia. Secondaire : Philippe.

### 4.6 Famille 4 — Dossier & documents chantier

**Les documents sont classés. Les pièces manquantes sont signalées.**

| | Automatisation |
|---|---|
| ✓ | Réception des documents par email ou WhatsApp (BL, factures, attestations) |
| ✓ | Lecture OCR et identification du type de document |
| ✓ | Affectation automatique au bon chantier |
| ✓ | Checklist des pièces attendues par chantier (configurable) |
| ✓ | Alerte pièces manquantes : « Chantier Dupuis : attestation décennale absente » |

**RÉSULTAT TYPE :** Documents retrouvés en 10 secondes · pièces manquantes signalées sous 24h · 0 document perdu

*Le classement est automatique. La vérification reste humaine.*

Persona : Nadia, Philippe. Laurent si assistante en place.

### 4.7 Famille future — Pilotage marge (Year 2)

Non disponible au lancement. Prérequis : ERP structuré, pointage heures, factures fournisseurs traçables.

Automatisations prévues : tableau de bord hebdo par chantier (feu tricolore), comparaison budget vs dépenses, alerte dérive matériaux/heures, détection avenants non facturés, synthèse marge avant clôture.

### 4.8 Inclus avec chaque famille

**Le résumé du lundi** — chaque lundi à 7h, email de 5-8 lignes au dirigeant avec les dossiers à traiter. S'enrichit à chaque famille ajoutée.

**Le tableau de validation assistante** — vue simple (Excel/Google Sheets) avec les actions à valider, 3 boutons par ligne : Valider · Modifier · Reporter.

### 4.9 Parcours client

```
DIAGNOSTIC (490€) → PREMIÈRE FAMILLE (à partir de 2 200€) → EXTENSION (à partir de 1 000€/famille)
```

Le client ne voit que 3 étapes : On regarde → On teste → On étend.

Le CAP ACTION n'apparaît pas sur le site — il intervient en coulisses quand le SI est complexe (multi-outils, multi-équipes, logiciel sans API).

### 4.10 Prix

| Élément | Prix HT |
|---|---|
| Diagnostic | 490€ (fixe, affiché) |
| Première famille | à partir de 2 200€ (affiché) |
| Famille supplémentaire | à partir de 1 000€ (affiché) |
| Prix définitif | déterminé par le diagnostic |

Le premier engagement client : **2 690 à 3 290€ HT** (diagnostic + première famille).

**Pourquoi afficher les prix** : la tarification transparente est un différenciateur VotrIA vs Tensoria/Holycow/AJE (tous "sur devis"). L'étude psycho identifie "difficulté à comparer les offres" et "rejet des abonnements indéfinis mal expliqués" comme frustrations majeures.

### 4.11 Combinaisons types

| Persona | Familles | Budget type |
|---|---|---|
| Laurent | F1 + F2 | 490 + 2 200 + 1 200 = ~3 890€ |
| Nadia | F3 + F4 + F1 | 490 + 2 800 + 1 200 + 1 200 = ~5 690€ |
| Philippe | F3 + F4 | 490 + 2 800 + 1 200 = ~4 490€ (Year 1) |

### 4.12 Logique commerciale

Le client n'achète pas une automatisation complète à 6 000€. Il achète la relance de ses devis à 2 200€. Si ça marche, il ajoute les factures à 1 200€. Chaque famille ajoutée coûte moins cher parce que le socle existe (fichier pivot, accès, assistante formée, résumé du lundi qui s'enrichit).

**Une douleur précise pour entrer. Un socle commun pour construire. Des extensions pour augmenter la valeur sans recommencer le projet.**

### 4.13 Visuel "5 étapes — VOUS au milieu"

Chaque famille suit le même schéma :
IA Récupère → IA Trie → IA Prépare → **VOUS Validez** → IA Envoie et suit

L'IA fait le travail. Vous gardez la décision.

---

## BLOC 5 — Discours commercial & structure du site

### 5.1 Messages par persona (usage interne, pas sur le site)

- Laurent : "Combien de devis dorment dans votre logiciel en ce moment ? On les récupère."
- Nadia : "L'info de vos chantiers arrive au bureau par WhatsApp, post-it et mémoire. On structure le flux sans changer vos outils."
- Philippe : "Vous connaissez la marge de vos chantiers en cours, là, maintenant ? On vous donne la réponse chaque lundi matin."

### 5.2 Structure du site

```
Page d'accueil
├── Accroche + sous-titre + cible explicite
├── Deux blocs visuels : CAP CASH / CAP CHANTIER
├── Parcours en 3 étapes
├── Bloc preuve sociale (emplacement prêt)
└── CTA → Diagnostic 490€

Page CAP CASH
├── Famille 1 (Relance) + RÉSULTAT TYPE + réassurance
├── Famille 2 (Trésorerie) + RÉSULTAT TYPE + réassurance
├── Maquette résumé du lundi + vue assistante
└── CTA → Diagnostic 490€

Page CAP CHANTIER
├── Famille 3 (Chantier→Bureau) + RÉSULTAT TYPE + réassurance
├── Famille 4 (Dossier chantier) + RÉSULTAT TYPE + réassurance
├── Maquette CR structuré + dossier Drive
└── CTA → Diagnostic 490€

Page Diagnostic
├── Prix 490€ + durée + livrable
├── Ce que le diagnostic couvre / ne couvre pas
├── "Si la réponse est non, on vous le dit."
└── Formulaire de contact (nom, entreprise, effectif, métier, logiciel, irritant principal)
```

### 5.3 Éléments visuels à créer

1. Widget workflow animé (type ExplorIA) : "Relance devis, automatisée" → 5 étapes → badge "en production"
2. Maquette "résumé du lundi matin" (email 8 lignes avec vrais exemples)
3. Maquette "vue assistante" (tableau avec boutons Valider/Modifier/Reporter)
4. Visuel "5 étapes — VOUS au milieu"

### 5.4 Bloc preuve sociale (en attente)

Au lancement : "Premiers déploiements en cours — résultats disponibles fin 2026."

Dès le premier client, format carte sectorielle :
"PLOMBERIE · Laurent D., Gérant · 14 sal · Gers"
Chiffre en gros (+35% de devis relancés)
Verbatim 2 lignes

### 5.5 Ce qui ne doit PAS apparaître sur le site

| Exclu | Raison (source) |
|---|---|
| "Intelligence artificielle" en accroche | Étude : "L'IA doit rester presque invisible" |
| n8n, API, OCR, LLM, workflow, no-code | Le patron ne sait pas ce que c'est |
| "Transformation digitale" | Étude : "L'entreprise ne cherche pas à se transformer" |
| Schéma d'architecture technique | Crée de l'ambiguïté, pas de la clarté |
| ROI chiffré sans preuve | Pas de "récupérez 15k€/mois" sans client réel |
| 4 paliers de prix (CAP IA/ACTION/SOLUTION/SUIVI) | Le patron voit "projet long et cher" |
| Page "Notre méthodologie" | Le patron BTP ne lit pas les méthodologies |
| Diagnostic gratuit | Pas de pipeline entrant — 490€ = filtre de sérieux |
| Comparaison concurrentielle | Le patron ne connaît pas les concurrents |

### 5.6 Tarification sur le site

Diagnostic : 490€ HT → prix fixe affiché.
Familles : "à partir de" avec montant repère → affiché.
Prix définitif : déterminé par le diagnostic → pas "sur devis" mais "le diagnostic détermine le périmètre exact."

**Pourquoi afficher** : la transparence est un différenciateur. L'étude confirme la frustration des patrons face au "sur devis" opaque.

---

## BLOC 6 — Marché cible

### 6.1 Données nationales
Marché 10-25 sal BTP France : ~24 000-26 000 établissements.
76% déjà équipés logiciel facturation. 5% utilisent l'IA pour automatiser.

### 6.2 TAM Occitanie (5-50 sal)
~11 500 entreprises (8 750 de 5-9 sal + 1 813 de 10-19 + 895 de 20-49).
VotrIA cible 10-25 sal uniquement.

### 6.3 SAM
35% du TAM ≈ ~4 000 entreprises avec besoin reconnu d'automatisation.

### 6.4 SOM
Noyau dur (électricité, plomberie, menuiserie) : ~1 800 entreprises.
SOM étendu : ~2 520 entreprises.

### 6.5 Parc logiciel du segment 10-20 sal

| Logiciel | Part estimée | API n8n | Relance intégrée |
|---|---|---|---|
| Sage Batigest | 18-28% | Non (CSV only) | Non |
| EBP Bâtiment | 12-20% | Oui (API REST) | Non |
| ProGBat | 8-14% | Oui (API REST, meilleur candidat) | Non |
| Extrabat | 4-8% | Partenariat requis | Non |
| Vertuoza | 2-5% | Non garanti | Partiel |
| Excel/fragmenté | 30-45% | N/A | Non |
| Obat/Batappli | ~5-7% | N/A | Oui (partiel) |

**93% des clients cibles n'ont pas de relance automatisée.** L'espace est quasi vierge.

### 6.6 Psychologie d'achat

- Culture de l'utilité immédiate (résultat visible rapidement)
- Aversion à la perte (raisonne en pertes évitées, pas en gains théoriques)
- Besoin de contrôle (maîtrise et réversibilité > autonomie de l'IA)
- Identité métier (l'IA ne décide pas, elle évite les pertes d'information)
- Gouvernée par l'urgence (biais du présent, solution à un problème > projet à 6 mois)
- Preuve sociale par proximité (même métier, même taille, même zone)

---

## BLOC 7 — Concurrence (mise à jour 29 juillet 2026)

### 7.1 Concurrents directs

| Concurrent | Base | Menace |
|---|---|---|
| Holycow | Auch (Gers) | 🔴 URGENT — même zone, même discours |
| Tensoria | Toulouse | 🟡 MOYEN — risque segment 10-19 sal |
| Silex BTP | Rueil (92) | 🟡 MOYEN — menace SEO distanciel |
| AJE Intelligence | Toulouse | 🟡 MOYEN — généraliste, pas BTP |
| ExplorIA Labs | National | 🟡 MOYEN — ont déjà une "plateforme intervention terrain en production dans le BTP" |
| LIANA | Non vérifiable | ⚪ DÉCLASSÉE — vaporware |

### 7.2 Concurrence logicielle

Obat (relance + IA vocale), Kraaft (terrain), Vertuoza (ERP+IA), Graneet (marge 2-100M€ CA), IArtisans/CAPEB (réglementation).

### 7.3 Positionnement unique VotrIA

4 traits cumulatifs qu'aucun concurrent n'a en Occitanie :
1. Spécialisation BTP avec cas d'usage terrain
2. Ancrage local 6 départements
3. Tarification accessible et publiée
4. Parcours complet diagnostic → test → extension

---

## BLOC 8 — Viabilité Year 1

### Ordre d'attaque
Septembre : Nadia (40 contacts, 35-40% conversion)
Octobre-Novembre : Laurent (50 contacts, 20-25% conversion)
Janvier-Février : Philippe (20 contacts, 50-60% conversion)

### Projections
CAP IA signés : 34-40 | Conversions famille : 8-12
Revenue Year 1 : **36-48k€ HT**
ARPU moyen : ~1 156€

### Checkpoints
- Fin octobre : ≥2 diagnostics signés
- Fin novembre : ≥5 diagnostics cumulés
- Fin janvier : ≥3 familles déployées
- Fin mars : revenue mensuel ≥3 000€

---

## BLOC 9 — Risques

1. **Acquisition insuffisante** (CRITIQUE) — Signal : <5 diagnostics fin novembre
2. **Conversion diagnostic → famille < 25%** (ÉLEVÉ) — Signal : <2 conversions après 10 diagnostics
3. **Relance = espace contesté chez clients Obat/Batappli** (MOYEN) — Question filtre en diagnostic
4. **Cycle de vente trop long** (ÉLEVÉ) — Focus segments rapides (Laurent 30-45j)
5. **Qualité livrables** (RÉPUTATIONNEL) — Skill contrôleur qualité, ne jamais inventer de chiffre
6. **SEO occupé par d'autres** (MOYEN) — Contenu dès septembre

---

## BLOC 10 — Actions immédiates

### Semaine 1 août — Produit
- [ ] Tester le Pivot CAP CASH sur 2-3 vrais PDF et exports ERP
- [ ] Définir l'interface validation assistante (maquette du tableau)
- [ ] Trancher l'hébergement n8n (chez JF ou chez client)

### Semaine 2-3 août — Site
- [ ] Rédiger le site avec l'architecture à tiroirs (4 familles)
- [ ] Créer les maquettes visuelles (résumé lundi, vue assistante, widget workflow)
- [ ] Intégrer le formulaire de contact avec routage persona

### Semaine 4 août — Commercial
- [ ] Scripts de prospection par persona (Laurent, Nadia, Philippe)
- [ ] Email templates (proposition diagnostic, arrêt propre, proposition famille)
- [ ] Setup CRM Twenty (tracking par persona)

### Septembre — Lancement
- [ ] Annonce lancement (LinkedIn + réseau + FFB/CAPEB)
- [ ] Prospection Nadia (40 contacts)
- [ ] Premier diagnostic
- [ ] Premier déploiement famille → preuve sociale

---

## BLOC 11 — Offres annexes (10% du focus max)

**CAP TPE CRM** (1-9 sal) : Twenty Cloud per-client, 990-1 190€ HT. Ponctuel uniquement.
**Audit Relance Trimestriel** : 150€ HT, appel 45 min. Bonus si ça marche.

---

## BLOC 12 — Architecture technique

**Socle :** n8n + Python (moteur métier réutilisable) + Pivot VotrIA (modèle de données normalisé)

**Scope technique de référence :** document VOTRIA_CAP_CASH_Infrastructure_Technique_v1_0.md (925 lignes, architecture pivot, workflows, modèle de données, tests, critères de livraison)

**Profils ERP :** ProGBat (API REST, priorité 1), EBP SaaS (API REST, priorité 2), Batigest (CSV only, priorité 3), Extrabat (partenariat requis)

**Logiciel compatible cité sur le site :** Batigest, EBP, ProGBat, Excel

---

## BLOC 13 — Principes de travail avec Claude

- Posture Avocat du Diable : non négociable
- Style direct et orienté chiffres
- Sessions thématiques progressives
- Charte rédactionnelle : bannir vocabulaire IA-cliché, emphase artificielle, jargon non traduit
- Registre dirigeant d'entreprise, résultat business avant explication technique

---

## BLOC 14 — Notes méthodologiques

**[OBSERVÉ]** : source primaire publique. **[ESTIMÉ]** : dérivé ±10-20%. **[HYPOTHÈSE]** : jugement ±20-40%.

Données à valider avant Y2 : conversion diagnostic→famille (30% hypothèse), durée CAP SUIVI (9 mois hypothèse), prix par famille (à caler sur temps réel).

---

## BLOC 15 — Historique des versions

| Version | Date | Changements |
|---|---|---|
| Stratégie définitive v1 | ~juillet 2026 | Document initial, personas Martin/Chantal/Nico |
| Fiches Offres v1.0 | 27 juillet | 4 fiches CAP, CAP ACTION à 1 310€ |
| Résumé Exécutif v1.0 | 27 juillet | 15 blocs, Y1 à 21 500€, cible 5-50 sal |
| Document Maître v2.0 | 28 juillet | Personas Laurent/Nadia/Philippe, CAP ACTION Laurent 1 500€, concurrence mise à jour |
| Offre Tiroirs v1 | 29 juillet | 4 familles, architecture modulaire, parcours 3 étapes |
| Discours Commercial v1 | 29 juillet | Messages sourcés psychologie, structure site, exclusions |
| **Document Maître v3.0** | **29 juillet** | **Fusion complète : offre à tiroirs (4 familles × 5 automatisations), discours commercial intégré, structure site définie, prix "à partir de" affichés, parc logiciel documenté, ExplorIA Labs comme benchmark** |

---

**Fin du document**
**Prochaine révision** : 30 septembre 2026 (premier checkpoint)
