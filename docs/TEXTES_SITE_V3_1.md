# TEXTES DU SITE VOTRIA — V3.1

- **Version :** V3.1
- **Date :** 29 juillet 2026
- **Source de vérité :** `docs/VOTRIA_DOCUMENT_MAITRE_V3_1.md` (prévaut sur tout autre document, y compris `docs/PLAN_IMPLEMENTATION_SITE_V3_1.md`)
- **Statut :** textes proposés avant intégration
- **Règle :** aucun texte de ce document ne doit être intégré au site sans validation éditoriale préalable

Documents explicitement exclus comme source de texte, de prix ou d'argument commercial : `VOTRIA_DOCUMENT_MAITRE_V3.md`, `PLAN_IMPLEMENTATION_SITE_V3.md`, les anciennes pages CAP IA/CAP ACTION/CAP SOLUTION/CAP SUIVI, les anciennes offres FLUX et PILOT, et le prototype `E:\VotrIA\Site web`. Aucun de ces éléments n'a été utilisé pour rédiger ce qui suit.

---

## 0. Identité juridique — bloc de référence transversal

À reprendre à l'identique partout où une mention légale ou une mention de prix HT est nécessaire (pied de page, CGV, factures, formulaire).

**TEXTE PUBLIC**

> VotrIA — Jean-François Martin, entrepreneur individuel, régime micro-entreprise.
> SIREN 498 982 990 · SIRET 498 982 990 00059 · TVA intracommunautaire FR71 498 982 990.
> TVA non applicable, article 293 B du Code général des impôts.

**NOTE D'INTÉGRATION — identité et CGV traitées séparément**
L'identité juridique publiée sur `site/mentions-legales/index.html` (nom, statut, SIREN, SIRET, TVA intracommunautaire) est correcte et reste inchangée.

`site/cgv/index.html` est une situation différente : son identité de prestataire est correcte, mais son contenu tarifaire et contractuel reste entièrement fondé sur les anciennes offres (CAP IA, CAP ACTION, CAP SOLUTION, CAP SUIVI) et doit être **réécrit intégralement**, pas simplement complété. Les CGV devront couvrir : les nouvelles briques et leurs tarifs (y compris les tarifs « à partir de »), les deux parcours (qualification courte / diagnostic), les services tiers et leur exclusion, la surveillance technique et le maintien opérationnel, les responsabilités respectives, la validation humaine, et la réversibilité des accès. La mention « TVA non applicable, article 293 B du CGI » s'ajoute à cette réécriture, elle n'en constitue pas l'essentiel.

Cette réécriture des CGV n'est pas traitée dans ce document éditorial (textes de pages commerciales uniquement) — elle doit faire l'objet d'un livrable dédié, non produit pendant cette session.

**POINT À VALIDER**
Aucun sur l'identité juridique elle-même. La réécriture complète des CGV reste un chantier à part entière, non commencé.

---

## 1. PAGE ACCUEIL

**URL** : `/`

### 1.1 Balises

| Élément | Contenu |
|---|---|
| Title | `VotrIA — Devis, factures et chantiers suivis` |
| Meta description | `VotrIA aide les PME du bâtiment (10 à 25 salariés) à suivre leurs devis, leurs factures en retard et leurs comptes rendus de chantier, sans changer de logiciel.` |
| Open Graph title | `VotrIA — Devis, factures et chantiers suivis` |
| Open Graph description | `Pour les entreprises du second œuvre de 10 à 25 salariés. Le système prépare et classe, votre équipe garde la décision.` |

### 1.2 H1 et introduction

**TEXTE PUBLIC**

> # Vos demandes de devis restent suivies. Vos factures en retard ressortent. Vos comptes rendus arrivent au bureau.

> Pour les entreprises du second œuvre de 10 à 25 salariés. Sans remplacer votre logiciel. Le système prépare et classe, votre équipe garde la décision.

Boutons du hero :

- `Vérifier mon besoin`
- `Découvrir les solutions`

**NOTE D'INTÉGRATION**
« Vérifier mon besoin » renvoie vers `/diagnostic/`. « Découvrir les solutions » renvoie vers une ancre de bas de page listant CAP CASH et CAP CHANTIER (section 1.3).

---

### 1.3 Section — Deux domaines : CAP CASH / CAP CHANTIER

**TEXTE PUBLIC — CAP CASH**

> ### CAP CASH
> Les demandes reçues, les devis sans réponse et les factures échues sont réunis dans une seule liste à vérifier.

- Demandes reçues
- Devis sans prochaine action
- Factures échues
- Liste unique à vérifier

Bouton : `Découvrir CAP CASH` → `/cap-cash/`

**TEXTE PUBLIC — CAP CHANTIER**

> ### CAP CHANTIER
> Les vocaux et les photos du terrain deviennent un compte rendu prêt à vérifier au bureau.

- Vocaux et photos du terrain
- Compte rendu prêt à vérifier
- Documents manquants signalés
- Travaux supplémentaires encore ouverts

Bouton : `Découvrir CAP CHANTIER` → `/cap-chantier/`

**POINT À VALIDER**
Le Document Maître v3.1 présente le résultat avant les fonctions pour ces deux blocs, sans fixer de longueur exacte. La formulation ci-dessus est une proposition à valider, pas une citation figée.

---

### 1.4 Section — Trois portes d'entrée

**TEXTE PUBLIC**

> ### Trois façons de commencer

**Carte 1**

> #### WhatsApp → compte rendu chantier
> Le chef d'équipe envoie un vocal et ses photos. Le bureau reçoit un compte rendu prêt à vérifier.
>
> **Installation : 1 490 € HT**
> Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

Bouton : `Voir le détail` → `/cap-chantier/#whatsapp-compte-rendu`

**Carte 2**

> #### Demandes de devis à traiter
> Les demandes reçues par email sont identifiées, résumées et conservées dans une seule liste jusqu'à leur prise en charge.
>
> **Installation : 990 € HT**
> Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

Bouton : `Voir le détail` → `/cap-cash/#demandes-de-devis`

**Carte 3**

> #### Réunion chantier → compte rendu
> Déposez l'enregistrement de votre réunion. Récupérez un compte rendu avec les décisions, responsables et échéances.
>
> **Installation : 790 € HT**
> Aucun abonnement obligatoire.
> Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

Bouton : `Voir le détail` → `/cap-chantier/#reunion-chantier`

**NOTE D'INTÉGRATION**
Aucun badge « pilote », « bêta » ou « essai » ne doit apparaître sur ces trois cartes. Le seul badge autorisé est « Aucun abonnement obligatoire » sur la carte Réunion chantier — c'est un fait, pas un argument de vente. Aucune qualification d'un tarif comme provisoire, d'essai ou de lancement, y compris sous forme de négation : la brique WhatsApp est présentée uniquement par son prix (« Installation : 1 490 € HT »), sans qualificatif.

---

### 1.5 Section — Progression par briques

**TEXTE PUBLIC**

> ### On avance par étapes, pas par gros projet
> Commencez par une tâche précise. Gardez ce qui fonctionne. Étendez seulement lorsque votre équipe l'utilise.

**NOTE D'INTÉGRATION**
Un schéma simple à trois temps (petite brique → mesure d'usage → extension) illustre ce texte. Le composant correspondant est décrit dans `PLAN_IMPLEMENTATION_SITE_V3_1.md` (§5, `.brick-block`) — cette section-ci fournit uniquement le texte, pas le composant.

---

### 1.6 Section — Validation humaine

**TEXTE PUBLIC**

> ### Le système prépare. Votre équipe décide.
>
> Le système récupère
> → Le système trie
> → Le système prépare
> → **VOUS VALIDEZ**
> → L'action est exécutée

> Aucun message commercial et aucun compte rendu client ne part sans la validation prévue avec votre équipe.

**POINT À VALIDER**
Aucun — séquence et réassurance reprises telles que fournies dans les sources.

---

### 1.7 Section — Dirigeant / bureau / terrain / prestataire informatique

**TEXTE PUBLIC**

> ### Chacun garde son rôle

- Le dirigeant garde la décision.
- Le bureau vérifie dans une seule liste.
- Le terrain continue d'utiliser WhatsApp.
- Le prestataire informatique conserve un périmètre documenté, lorsqu'il y en a un.

**NOTE D'INTÉGRATION**
La quatrième carte est formulée avec « lorsqu'il y en a un » pour ne jamais faire croire que toutes les entreprises disposent déjà d'un prestataire informatique — exigence explicite reçue pour cette section. Le formulaire de la page Diagnostic couvre déjà ce cas avec l'option « Je ne sais pas ».

---

### 1.8 Section — Environnement client et services tiers

**TEXTE PUBLIC**

> ### Votre environnement, vos abonnements, vos données.
>
> La solution est installée dans un environnement dédié à votre entreprise. Les comptes techniques restent à votre nom. VotrIA configure et maintient le fonctionnement selon la formule choisie. Les services nécessaires et leur coût estimatif sont présentés avant engagement.

- Environnement dédié à l'entreprise
- Comptes au nom du client
- Coûts présentés avant engagement
- Accès VotrIA révocables
- Aucune plateforme mutualisée VotrIA contenant les données de production

**NOTE D'INTÉGRATION**
Ce texte ne promet jamais qu'aucune donnée ne quitte l'entreprise — cette formulation figure dans la liste des promesses interdites (section 13). Le texte se limite à décrire qui possède les comptes et où la solution tourne.

---

### 1.9 Section secondaire — Revue des emails prioritaires

**TEXTE PUBLIC**

> ### En complément : la revue des emails prioritaires
> Chaque matin, les messages nécessitant une décision sont regroupés dans une synthèse courte.
>
> **Installation : 990 € HT**
> Surveillance technique : 99 € HT/mois
> Maintien opérationnel : 149 € HT/mois
> Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

Bouton : `Voir le détail` → `/#revue-emails` (bloc développé sur la même page, pas de page dédiée)

**NOTE D'INTÉGRATION**
Présentée en bloc secondaire, hors des trois portes d'entrée principales, conformément à l'ordre demandé.

---

### 1.10 Section — Qui intervient

**TEXTE PUBLIC**

> ### Qui intervient
> VotrIA est animé par Jean-François Martin, basé à L'Isle-Jourdain, en Occitanie. Vous parlez directement à la personne qui installe et suit votre solution. VotrIA intervient auprès des PME du bâtiment de la région et travaille, si besoin, avec le prestataire informatique déjà en place chez vous.

**NOTE D'INTÉGRATION**
Volontairement court — ce n'est pas une page « À propos ». Aucune certification, aucun partenariat, aucun chiffre d'expérience non présent dans le Document Maître v3.1 n'a été ajouté.

---

### 1.11 Section — Preuve sociale

**NOTE D'INTÉGRATION**
Section non publiée tant qu'une preuve réelle, mesurée et comparable n'est pas disponible. Aucun texte public n'est fourni ici — ni témoignage, ni logo, ni chiffre, ni texte d'attente de substitution. Le bloc ne doit pas être développé sur le site jusqu'à l'obtention d'un premier résultat réel.

**TEXTE PUBLIC**
Aucun.

---

### 1.12 Double CTA final

**TEXTE PUBLIC**

> ### Par où commencer ?

- `Mon besoin est standard — qualification courte gratuite` → `/diagnostic/#parcours-standard`
- `Ma situation est plus complexe — diagnostic à 490 € HT` → `/diagnostic/#parcours-complexe`

**POINT À VALIDER**
Aucun.

---

## 2. PAGE CAP CASH

**URL** : `/cap-cash/`

### 2.1 Balises

| Élément | Contenu |
|---|---|
| Title | `CAP CASH — Devis et factures suivis — VotrIA` |
| Meta description | `Suivi des demandes de devis, relance des devis sans réponse et suivi des factures échues, par étapes, sans changer votre logiciel de gestion.` |
| Open Graph title | `CAP CASH — Devis et factures suivis` |
| Open Graph description | `Des briques progressives, avec un périmètre standard et des tarifs publiés, pour suivre vos devis et vos factures sans changer d'outil.` |

### 2.2 H1 et introduction

**TEXTE PUBLIC**

> # CAP CASH : vos devis et vos factures suivis dans une seule liste

> CAP CASH avance par étapes : demandes de devis, suivi des devis, puis factures et encaissements. Des briques progressives, avec un périmètre standard et des tarifs publiés.

Fil d'Ariane : `Accueil > CAP CASH`

---

### 2.3 Brique 1 — Demandes de devis à traiter

Ancre : `#demandes-de-devis`

**TEXTE PUBLIC**

> ### Demandes de devis à traiter
> Les demandes reçues par email sont identifiées, résumées et conservées dans une seule liste jusqu'à leur prise en charge.

**Prix**

- Installation : **990 € HT**
- Surveillance technique : **99 € HT/mois**
- Maintien opérationnel : **149 € HT/mois**
- La surveillance ou le maintien opérationnel est facturé par environnement client et couvre jusqu'à trois flux standard actifs. Au-delà, le périmètre et le tarif sont adaptés avant engagement.
- Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

**Inclus**

- Une adresse professionnelle surveillée
- Détection des demandes
- Résumé du besoin
- Informations manquantes signalées
- Liste quotidienne des demandes non prises en charge
- Affectation manuelle à une personne
- Aucun devis généré automatiquement
- Aucun message envoyé sans validation

**Périmètre standard**

- Une entreprise
- Une adresse Gmail ou Microsoft 365
- Une liste de suivi
- Une personne référente
- Aucun historique repris
- Aucune écriture dans le logiciel de gestion

Bouton : `Demander une qualification courte` → `/diagnostic/#parcours-standard`

---

### 2.4 Brique 2 — Suivi et relance des devis

Ancre : `#suivi-relance-devis`

**TEXTE PUBLIC**

> ### Suivi et relance des devis
> Les devis sans réponse sont regroupés, priorisés et préparés pour validation.

**Prix**

- Installation autonome : **à partir de 2 200 € HT**
- Extension depuis la première brique : **à partir de 1 800 € HT**
- Surveillance technique et maintien opérationnel : couverts par l'abonnement de votre environnement (99 € HT/mois et 149 € HT/mois), dans la limite de trois flux standard actifs — voir section 6.
- Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

**Inclus**

- Import de vos devis (fichier Excel ou équivalent)
- Priorisation selon les règles validées avec vous
- Brouillons de relance préparés
- Tableau de validation
- Dossiers reportés toujours visibles
- Résumé hebdomadaire
- Cas ambigus isolés pour vérification

**Non compris au prix minimal**

- Lecture automatique des réponses reçues
- Suspension automatique des séquences de relance
- Envoi par SMS
- Connexion directe à votre logiciel de gestion
- Plusieurs sociétés
- Plusieurs logiciels
- Reprise d'un historique
- Écriture dans le logiciel de gestion

**NOTE D'INTÉGRATION**
« Import Excel ou équivalent » remplace la mention technique « CSV » du Document Maître, sans nommer de format de fichier précis sur la page publique — à ajuster en rédaction si vous préférez garder « fichier Excel ».

**NOTE D'INTÉGRATION — décision prise**
Cette brique prépare des relances par email (canal automatisé au sens du Document Maître v3.1, BLOC 8.3 : « email automatisé, WhatsApp ou connexion automatisée : surveillance technique minimale obligatoire »). La surveillance technique et le maintien opérationnel sont facturés par environnement client, pas par brique : si l'environnement dispose déjà d'un abonnement actif (par exemple via la brique 1) et reste dans la limite de trois flux standard, cette brique n'ajoute aucun coût de surveillance supplémentaire. Installée seule, dans un environnement neuf, elle ouvre l'abonnement aux mêmes tarifs déjà publiés (99 € HT/mois et 149 € HT/mois).

---

### 2.5 Brique 3 — Factures et encaissements

Ancre : `#factures-encaissements`

**TEXTE PUBLIC**

> ### Factures et encaissements
> Les factures échues sont identifiées, classées et présentées dans l'ordre de priorité.

**Prix**

- Installation autonome : **à partir de 2 200 € HT**
- Extension depuis un socle CAP CASH existant : **à partir de 1 600 € HT**
- Surveillance technique et maintien opérationnel : couverts par l'abonnement de votre environnement (99 € HT/mois et 149 € HT/mois), dans la limite de trois flux standard actifs — voir section 6.
- Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

**Inclus**

- Import des factures et des acomptes
- Classement par niveau de retard
- Relances préparées
- Accords de règlement signalés lorsqu'ils figurent dans la source
- Dossiers critiques présentés au dirigeant
- Courrier préparé avant envoi manuel
- Validation humaine obligatoire

**NOTE D'INTÉGRATION — décision prise**
Même logique que pour « Suivi et relance des devis » (§2.4) : canal automatisé au sens du BLOC 8.3, couvert par l'abonnement d'environnement existant dans la limite de trois flux standard, ou ouvrant l'abonnement aux mêmes tarifs déjà publiés si l'environnement n'en a pas encore.

---

### 2.6 Budget indicatif CAP CASH complet

**TEXTE PUBLIC**

> ### Budget indicatif
> Un parcours CAP CASH complet représente environ **4 390 € HT** lorsque les extensions réutilisent réellement le socle déjà installé. Les services tiers et la surveillance ou le maintien opérationnel ne sont pas inclus dans ce montant.

**NOTE D'INTÉGRATION**
Ce montant est un repère, pas un forfait garanti — il ne doit jamais être présenté comme un prix fixe global. Le mot « environ » et la mention des exclusions doivent rester visibles partout où ce chiffre apparaît.

---

### 2.7 Section — Surveillance, maintien opérationnel et cas complexes

**TEXTE PUBLIC**

> ### Ce qui est prévu après l'installation
> Une fois la brique installée, deux niveaux de suivi sont disponibles : une surveillance technique qui alerte en cas de panne, et un maintien opérationnel qui inclut un peu de temps d'ajustement chaque mois. Le détail est expliqué dans la section « Surveillance et maintien opérationnel » (section 11 de ce document).
>
> Si votre besoin dépasse le périmètre standard d'une brique — plusieurs logiciels, plusieurs sociétés, données dispersées — un diagnostic à 490 € HT permet de cadrer une proposition adaptée. Ce diagnostic n'est pas obligatoire pour installer une brique standard.

Bouton : `Voir la page Diagnostic` → `/diagnostic/`

---

## 3. PAGE CAP CHANTIER

**URL** : `/cap-chantier/`

### 3.1 Balises

| Élément | Contenu |
|---|---|
| Title | `CAP CHANTIER — Comptes rendus et documents — VotrIA` |
| Meta description | `Les vocaux et photos du terrain deviennent un compte rendu prêt à vérifier. Documents classés, travaux supplémentaires suivis, sans nouvelle application.` |
| Open Graph title | `CAP CHANTIER — Comptes rendus et documents suivis` |
| Open Graph description | `WhatsApp pour le terrain, un compte rendu prêt à vérifier pour le bureau. Des briques progressives, avec un périmètre standard et des tarifs publiés.` |

### 3.2 H1 et introduction

**TEXTE PUBLIC**

> # CAP CHANTIER : les informations terrain arrivent au bureau, prêtes à vérifier

> CAP CHANTIER avance par étapes : compte rendu WhatsApp, dossier chantier, puis travaux supplémentaires et avenants. Une offre autonome — la réunion chantier — s'y ajoute.

Fil d'Ariane : `Accueil > CAP CHANTIER`

---

### 3.3 Brique 1 — WhatsApp → compte rendu chantier

Ancre : `#whatsapp-compte-rendu`

**TEXTE PUBLIC**

> ### WhatsApp → compte rendu chantier
> Le chef d'équipe envoie un vocal et ses photos sur WhatsApp. Le bureau reçoit un compte rendu prêt à vérifier.

**Prix**

- Installation : **1 490 € HT**
- Surveillance technique : **99 € HT/mois**
- Maintien opérationnel : **149 € HT/mois**
- La surveillance ou le maintien opérationnel est facturé par environnement client et couvre jusqu'à trois flux standard actifs. Au-delà, le périmètre et le tarif sont adaptés avant engagement.
- Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

**Périmètre standard**

- Une entreprise
- Un numéro WhatsApp professionnel
- Un modèle de compte rendu
- Un espace documentaire
- Cinq utilisateurs terrain maximum
- Aucun envoi automatique au client
- Aucun groupe WhatsApp existant récupéré
- Aucun historique repris

**Ce qui se passe, étape par étape**

- Vocal et photos reçus
- Transcription
- Chantier proposé
- Compte rendu structuré
- Décisions et actions proposées
- Travaux supplémentaires potentiels signalés
- Validation par le bureau
- Classement
- Cas ambigus isolés pour vérification

Bouton : `Demander une qualification courte` → `/diagnostic/#parcours-standard`

---

### 3.4 Brique 2 — Dossier chantier incomplet

Ancre : `#dossier-chantier`

**TEXTE PUBLIC**

> ### Dossier chantier incomplet
> Chaque semaine, le bureau reçoit la liste des pièces manquantes par chantier.

**Version standard**

- Prix : **à partir de 1 490 € HT**
- Espace documentaire propre
- Une checklist
- Contrôle de présence des pièces
- Liste des pièces manquantes
- Résumé hebdomadaire
- Cas ambigus à valider

**Version avec lecture et proposition de classement**

- Prix : **à partir de 1 990 € HT**
- Identification du type de document
- Proposition de rattachement au chantier
- Classement direct uniquement lorsqu'il n'y a pas d'ambiguïté
- File d'exceptions pour les autres cas

**Non compris au prix minimal**

- Nettoyage de l'historique
- Réparation d'une arborescence complète
- Renommage manuel massif
- Plusieurs espaces documentaires
- Plusieurs checklists métier
- Classement manuel réalisé par VotrIA

**TEXTE PUBLIC — abonnement**

> Surveillance technique et maintien opérationnel proposés en option (99 € HT/mois et 149 € HT/mois), non obligatoires pour cette brique.
> Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

**NOTE D'INTÉGRATION — décision prise**
Le traitement de documents par lot correspond au cas « flux ponctuel ou local », pour lequel l'abonnement est facultatif — à la différence des canaux email automatisé ou WhatsApp. Les mêmes tarifs déjà publiés restent proposés en option, sans nouveau montant créé.

---

### 3.5 Brique 3 — Travaux supplémentaires et avenants

Ancre : `#travaux-supplementaires`

**TEXTE PUBLIC**

> ### Travaux supplémentaires et avenants
> Les travaux supplémentaires mentionnés sur le terrain restent visibles jusqu'à leur traitement.

**Prix**

- **À partir de 1 200 € HT**, uniquement en extension depuis la brique WhatsApp → compte rendu chantier.
- Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

**Inclus**

- Signalement d'un travail supplémentaire potentiel
- Responsable identifié
- Statut du dossier (à chiffrer, envoyé, validé ou refusé)
- Liste des actions ouvertes
- Synthèse périodique
- Validation humaine

**NOTE D'INTÉGRATION — décision prise**
Cette brique n'existe qu'en extension de « WhatsApp → compte rendu chantier », dont la surveillance technique et le maintien opérationnel sont déjà souscrits. Elle est donc couverte par cet abonnement existant — aucun abonnement supplémentaire n'est facturé pour cette extension.

---

### 3.6 Budget indicatif CAP CHANTIER complet

**TEXTE PUBLIC**

> ### Budget indicatif
> Un parcours CAP CHANTIER complet représente environ **4 180 à 4 680 € HT**, hors services tiers et hors surveillance ou maintien opérationnel, selon le niveau de traitement documentaire choisi.

**NOTE D'INTÉGRATION**
Même règle que pour CAP CASH (section 2.6) : ce montant est un repère, jamais un forfait garanti.

---

### 3.7 Offre autonome — Réunion chantier → compte rendu

Ancre : `#reunion-chantier`

**NOTE D'INTÉGRATION — décision prise**
Rattachement confirmé à `/cap-chantier/` plutôt qu'à une section transverse de l'Accueil : cette brique traite du chantier (réunions de chantier) et constitue la première étape de CAP SUIVI CHANTIER (Y2, également rattaché à CAP CHANTIER) — le rattachement thématique l'emporte sur son statut d'offre « autonome » au sens tarifaire. Seule la carte de rappel sur l'Accueil (section 1.4, carte 3) reste visible en dehors de cette page, à titre de porte d'entrée.

**TEXTE PUBLIC**

> ### Réunion chantier → compte rendu
> Déposez l'enregistrement de votre réunion. Récupérez un compte rendu avec les décisions, responsables et échéances.

**Prix**

- Installation : **790 € HT**
- Aucun abonnement obligatoire

**Inclus**

- Dépôt de l'enregistrement audio
- Transcription
- Un modèle de compte rendu
- Décisions
- Responsables
- Échéances
- Réserves
- Travaux supplémentaires évoqués
- Plan d'action
- Validation humaine
- Prise en main

**Non compris**

- Connexion directe à un outil de visioconférence
- Suivi automatique des actions
- Plusieurs modèles de compte rendu
- Traitement manuel récurrent réalisé par VotrIA

---

### 3.8 CAP SUIVI CHANTIER — note de bas de page

**TEXTE PUBLIC**

> CAP SUIVI CHANTIER est un prolongement futur, non disponible au lancement. Aucun tarif n'est publié et aucune commande n'est possible à ce stade.

**NOTE D'INTÉGRATION**
Aucun bouton, aucun formulaire, aucune date ne doit accompagner cette note. Elle sert uniquement à situer la brique « Réunion chantier » dans une trajectoire, sans engager VotrIA sur un calendrier.

---

## 4. PAGE DIAGNOSTIC

**URL** : `/diagnostic/`

### 4.1 Balises

| Élément | Contenu |
|---|---|
| Title | `Diagnostic ou qualification courte — VotrIA` |
| Meta description | `Besoin standard : qualification courte gratuite. Situation complexe : diagnostic à 490 € HT. Deux façons de démarrer avec VotrIA selon votre situation.` |
| Open Graph title | `Diagnostic ou qualification courte — VotrIA` |
| Open Graph description | `Deux façons de démarrer selon votre besoin : qualification courte gratuite ou diagnostic à 490 € HT.` |

### 4.2 H1 et introduction

**TEXTE PUBLIC**

> # Deux façons de démarrer avec VotrIA : qualification courte gratuite ou diagnostic à 490 € HT

> Le choix dépend de votre situation, pas de votre budget. La qualification courte suffit pour un besoin standard. Le diagnostic est réservé aux situations plus complexes.

Fil d'Ariane : `Accueil > Diagnostic`

---

### 4.3 Parcours standard — qualification courte

Ancre : `#parcours-standard`

**TEXTE PUBLIC**

> ### Besoin standard : qualification courte gratuite
> 15 à 20 minutes pour vérifier que votre besoin correspond à une offre standard.

**Conditions**

- Une entreprise
- Une source d'information
- Un processus
- Aucun historique à reprendre
- Aucune règle spécifique
- Un besoin qui correspond exactement à une offre standard existante

**Ce que la qualification courte ne comprend pas**

- Audit complet du logiciel de gestion
- Contrôle détaillé des exports
- Test sur vos données réelles
- Rapport écrit
- Conseil d'organisation étendu
- Spécification sur mesure

Bouton : `Demander une qualification courte`

---

### 4.4 Parcours complexe — diagnostic à 490 € HT

Ancre : `#parcours-complexe`

**TEXTE PUBLIC**

> ### Situation complexe : diagnostic à 490 € HT

**Cas concernés**

- Plusieurs outils
- Plusieurs équipes
- Plusieurs sociétés
- Données dispersées
- Règles spécifiques
- Doute sur la possibilité de récupérer les informations

**Inclus**

- Entretien avec le dirigeant et, si nécessaire, la personne qui utilise le logiciel
- Douleur prioritaire identifiée
- Fonctionnement actuel observé
- Personne référente identifiée
- Première vérification du logiciel et des données
- Solution recommandée
- Ordre de grandeur du budget
- Décision : automatiser, attendre, ou ne pas automatiser

**TEXTE PUBLIC — réassurance**

> Aucun fichier n'est exigé pour réserver le diagnostic. Si l'export n'est pas disponible, une tentative de récupération peut être réalisée ensemble, en partage d'écran. Une proposition ferme suppose toujours une méthode de récupération reproductible.

Bouton : `Demander un diagnostic — 490 € HT`

**NOTE D'INTÉGRATION**
Aucun prix ferme de déploiement n'est annoncé avant cette vérification — à respecter strictement dans tout texte de suivi (email de confirmation, devis).

---

### 4.5 Formulaire

**TEXTE PUBLIC — champs**

| Champ | Type | Aide |
|---|---|---|
| Type de demande | choix unique, obligatoire, visible en tête de formulaire | Qualification courte / Diagnostic pour situation complexe |
| Nom et prénom | texte, obligatoire | — |
| Entreprise | texte, obligatoire | — |
| Adresse email professionnelle | email, obligatoire | — |
| Téléphone | texte, facultatif | — |
| Effectif | liste, obligatoire | Nombre approximatif de personnes dans l'entreprise |
| Métier | texte ou liste, obligatoire | Ex. : électricité, plomberie/CVC, menuiserie |
| Logiciel de gestion | texte, obligatoire | Le nom du logiciel utilisé aujourd'hui pour les devis ou les factures |
| Irritant principal | texte libre, obligatoire | Ce qui vous fait perdre le plus de temps aujourd'hui |
| Utilisateur principal | texte, obligatoire | La personne qui utilisera le plus le système au quotidien |
| Prestataire informatique | choix unique, obligatoire | Oui / Non / Je ne sais pas |

**NOTE D'INTÉGRATION — décision prise**
Le champ « Type de demande » est un champ de formulaire visible et obligatoire, pas seulement un choix décrit en note d'intégration : il apparaît en tête de formulaire, avant les autres champs. Il détermine le message de confirmation envoyé après l'envoi (voir « TEXTE PUBLIC — messages » ci-dessous), sans changer les autres champs collectés. Aucun fichier n'est demandé à cette étape, conformément à la section 4.4.

**TEXTE PUBLIC — consentement**

> J'accepte que VotrIA conserve mes coordonnées pour me recontacter au sujet de ma demande, conformément à la politique de confidentialité.

**TEXTE PUBLIC — messages**

- Succès (parcours standard) : « Merci. Votre demande est enregistrée. VotrIA vous recontacte pour convenir d'un créneau de 15 à 20 minutes. »
- Succès (parcours complexe) : « Merci. Votre demande de diagnostic est enregistrée. VotrIA vous recontacte pour convenir d'un rendez-vous. »
- Échec d'envoi : « L'envoi n'a pas fonctionné. Vous pouvez réessayer, ou écrire directement à contact@votria.pro. »
- Champ obligatoire manquant : « Ce champ est nécessaire pour traiter votre demande. »
- Email invalide : « Vérifiez l'adresse email saisie. »
- Délai de réponse : « Réponse sous deux jours ouvrés. »

**NOTE D'INTÉGRATION — décision confirmée**
Le délai « Réponse sous deux jours ouvrés » est confirmé comme engagement assumé, à afficher tel quel. Aucun message ne nomme le système d'envoi ni aucun outil technique.

---

## 5. TEXTES TRANSVERSAUX

### A. Navigation desktop

```
VotrIA     Accueil   CAP CASH   CAP CHANTIER   [Vérifier mon besoin]
```

Le bouton de droite renvoie vers `/diagnostic/` et présente les deux parcours dès l'arrivée sur la page. **Libellé retenu : « Vérifier mon besoin »** — décidé pour ne jamais annoncer un prix ni le mot « diagnostic » seul dans la navigation, et rester cohérent avec le premier CTA du hero (section 1.2) et le bouton de la porte d'entrée « Demandes de devis » (section 1.4).

### B. Navigation mobile

Menu plein écran ouvert par un bouton « Menu », reprenant les 3 liens de contenu puis le bouton `Vérifier mon besoin` en pleine largeur, sur le modèle du menu déjà en place sur les pages légales actuelles.

### C. Fil d'Ariane

- Accueil : aucun fil (page racine)
- `Accueil > CAP CASH`
- `Accueil > CAP CHANTIER`
- `Accueil > Diagnostic`
- `Accueil > Mentions légales` / `Accueil > Confidentialité` / `Accueil > Cookies` / `Accueil > Conditions générales de vente`

### D. Pied de page

**TEXTE PUBLIC**

> VotrIA — Jean-François Martin, entrepreneur individuel — L'Isle-Jourdain, Occitanie
> Contact : contact@votria.pro

Colonnes :

- Navigation : Accueil, CAP CASH, CAP CHANTIER, Diagnostic
- Légal : Mentions légales, Confidentialité, Cookies, Conditions générales de vente
- Ligne finale : `© 2026 VotrIA. Tous droits réservés.`

**NOTE D'INTÉGRATION**
Aucune mention de « capital social » ni de « gérant » — une entreprise individuelle n'a ni l'un ni l'autre. Aucune mention de zone géographique élargie non confirmée par le Document Maître (Occitanie, démarrage Gers et Haute-Garonne).

### E. Libellés des boutons — liste consolidée

- `Vérifier mon besoin`
- `Découvrir les solutions`
- `Découvrir CAP CASH`
- `Découvrir CAP CHANTIER`
- `Voir le détail`
- `Demander une qualification courte`
- `Demander une qualification courte`
- `Demander un diagnostic — 490 € HT`
- `Voir la page Diagnostic`
- `Envoyer ma demande`

### F. Cartes tarifaires — gabarit

Champs fixes pour toute carte de brique ou d'offre :

1. Nom de la brique
2. Promesse (une phrase)
3. Prix HT (installation, puis abonnements le cas échéant)
4. Mention « Abonnements techniques non inclus » si un abonnement est associé
5. Bouton `Voir le détail`

### G. Badges autorisés

- `Aucun abonnement obligatoire` (uniquement sur la brique Réunion chantier)

Aucun autre badge (pas de « nouveau », pas de « populaire », pas de badge mentionnant l'IA ou une technologie, pas de badge ou mention qualifiant un tarif de provisoire, d'essai ou de lancement — supprimé définitivement, y compris sous forme de négation).

### H. Mentions sous les prix

- `Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.` — sous chaque prix accompagné d'un abonnement.
- `Prix exprimés en euros HT. TVA non applicable, article 293 B du Code général des impôts.` — une fois par page comportant des prix (CAP CASH, CAP CHANTIER, Diagnostic).

### I. Messages d'erreur (formulaire)

Voir section 4.5 — messages centralisés là où ils s'appliquent (seul le formulaire de `/diagnostic/` existe à ce stade).

### J. Messages de confirmation

Voir section 4.5.

### K. Page 404

**TEXTE PUBLIC**

> # Cette page n'existe plus
> L'adresse demandée n'est plus disponible. Vous pouvez repartir de l'accueil ou choisir directement une des pages ci-dessous.

Liens : Accueil, CAP CASH, CAP CHANTIER, Diagnostic.

Title : `Page introuvable — VotrIA`

### L. Bandeau cookies

**NOTE D'INTÉGRATION**
Aucun ajustement éditorial nécessaire. Le texte actuel de `site/assets/cookie-consent.js` (« VotrIA utilise Google Analytics uniquement avec votre accord... ») ne mentionne ni l'ancienne offre ni aucun terme interdit par ce document. Il reste valable pour la V3.1 sans modification de texte.

### M. Titres et descriptions Open Graph

Repris dans les tableaux de balises de chaque page (sections 1.1, 2.1, 3.1, 4.1).

### N. Textes de partage social

- Accueil : « VotrIA aide les PME du bâtiment à suivre leurs devis, leurs factures et leurs chantiers, sans changer de logiciel. »
- CAP CASH : « Vos devis et vos factures suivis dans une seule liste, par étapes. »
- CAP CHANTIER : « Les vocaux et photos du terrain deviennent un compte rendu prêt à vérifier. »
- Diagnostic : « Qualification courte gratuite ou diagnostic à 490 € HT — selon votre besoin. »

### O. Ancres internes

`#cap-cash` et `#cap-chantier` (cartes de l'accueil), `#revue-emails` (accueil), `#demandes-de-devis`, `#suivi-relance-devis`, `#factures-encaissements` (CAP CASH), `#whatsapp-compte-rendu`, `#dossier-chantier`, `#travaux-supplementaires`, `#reunion-chantier` (CAP CHANTIER), `#parcours-standard`, `#parcours-complexe` (Diagnostic).

### P. Questions fréquentes

**TEXTE PUBLIC**

> **Dois-je changer de logiciel ?**
> Non. VotrIA s'installe autour de votre logiciel actuel, sans le remplacer.
>
> **Mon équipe doit-elle utiliser une nouvelle application ?**
> Le terrain continue d'utiliser WhatsApp. Le bureau utilise une liste ou un tableau de validation, pas une nouvelle application complexe.
>
> **Qui valide les messages et comptes rendus ?**
> Votre équipe. Aucun message commercial et aucun compte rendu client ne part sans validation.
>
> **Où sont installés les outils ?**
> Dans un environnement dédié à votre entreprise. Les comptes techniques restent à votre nom.
>
> **Les abonnements techniques sont-ils inclus ?**
> Non. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.
>
> **Que se passe-t-il si mon besoin sort du périmètre standard ?**
> Un diagnostic à 490 € HT permet de cadrer une proposition adaptée à votre situation.
>
> **Le diagnostic est-il obligatoire ?**
> Non. Il est réservé aux situations complexes. Un besoin standard passe par une qualification courte gratuite.
>
> **Que comprend la surveillance technique ?**
> Le contrôle des exécutions, une alerte en cas d'échec, une première qualification de l'incident et un rapport de fonctionnement.
>
> **Que comprend le maintien opérationnel ?**
> La surveillance technique, plus jusqu'à 30 minutes d'intervention par mois, prise en compte sous un jour ouvré.
>
> **Puis-je arrêter et récupérer mes accès ?**
> Oui. La restitution et la suppression des accès sont prévues dès l'installation.

**NOTE D'INTÉGRATION**
Exactement les 10 questions autorisées, sans ajout. Aucune FAQ supplémentaire n'a été créée pour allonger la page.

---

## 6. SURVEILLANCE TECHNIQUE ET MAINTIEN OPÉRATIONNEL

**TEXTE PUBLIC**

> ### Surveillance technique — 99 € HT/mois
> Le fonctionnement est contrôlé automatiquement. En cas d'échec, une alerte est déclenchée, l'incident est qualifié une première fois, et un rapport de fonctionnement vous est transmis.
>
> Ne sont pas compris : le temps de correction, un changement de format, un changement de logiciel, une nouvelle règle, une nouvelle source, ou une évolution fonctionnelle.
>
> ### Maintien opérationnel — 149 € HT/mois
> En plus de la surveillance technique : jusqu'à 30 minutes d'intervention par mois, prise en compte sous un jour ouvré. Ce temps ne se reporte pas au mois suivant.
>
> Une prise en compte ne garantit pas une résolution immédiate. Au-delà du temps inclus, l'intervention est facturée après accord. Un changement dû à votre entreprise ou à un fournisseur tiers est facturé séparément.

**Règles d'application (exactes, résolues)**

- Flux ponctuel ou local : abonnement facultatif.
- Email automatisé, WhatsApp ou connexion automatisée : surveillance technique minimale obligatoire.
- Réunion chantier déposée ponctuellement : aucun abonnement VotrIA obligatoire.

**Règle commerciale complémentaire (décision VotrIA)**

> La surveillance ou le maintien opérationnel est facturé par environnement client et couvre jusqu'à trois flux standard actifs. Au-delà, le périmètre et le tarif sont adaptés avant engagement.

**NOTE D'INTÉGRATION — décision prise, à intégrer au Document Maître**
Cette règle commerciale (facturation par environnement, jusqu'à trois flux standard inclus) est une décision VotrIA qui doit être reportée dans `docs/VOTRIA_DOCUMENT_MAITRE_V3_1.md` (BLOC 8) — elle n'y figurait pas dans la version précédente de ce document éditorial et n'est plus présentée comme une ambiguïté non résolue.

**Application par brique**

- Demandes de devis à traiter, WhatsApp → compte rendu chantier, Suivi et relance des devis, Factures et encaissements, Revue des emails prioritaires : canal email automatisé ou WhatsApp → surveillance technique obligatoire (99 € HT/mois) et maintien opérationnel proposé (149 € HT/mois), facturés une fois par environnement (jusqu'à trois flux inclus, cf. règle ci-dessus).
- Dossier chantier incomplet : traitement documentaire par lot, assimilé à un flux ponctuel ou local → abonnement facultatif, aux mêmes tarifs si souscrit.
- Travaux supplémentaires et avenants : existe uniquement en extension de la brique WhatsApp → couverte par l'abonnement déjà souscrit sur cette brique, aucun abonnement supplémentaire.
- Réunion chantier → compte rendu : déposée ponctuellement, aucun abonnement VotrIA obligatoire — un service tiers (transcription, par exemple) peut néanmoins être nécessaire (voir section 7).

---

## 7. SERVICES TIERS

**TEXTE PUBLIC**

> Abonnements techniques non inclus. Les services nécessaires sont souscrits au nom de votre entreprise et détaillés avant engagement.

**TEXTE PUBLIC — explication (une fois par page concernée)**

> Selon la brique installée, certains services techniques peuvent être nécessaires : hébergement, messagerie, WhatsApp, transcription, stockage, ou d'autres services retenus selon votre cas. Ils sont souscrits directement par vous, à votre nom, et présentés avant tout engagement.

**NOTE D'INTÉGRATION**

- Aucun coût estimatif de service tiers n'est publié dans ce document, faute de chiffre validé dans le Document Maître v3.1.
- Comptes toujours au nom du client, paiement direct par le client.
- Services obligatoires ou optionnels détaillés avant engagement.
- Accès VotrIA révocables ; restitution et suppression des accès prévues dès l'installation.
- L'absence d'abonnement VotrIA obligatoire (ex. Réunion chantier) ne signifie pas qu'aucun service tiers n'est nécessaire — la mention reste due dans ce cas également.

**Présence vérifiée de la mention** — sous chacune des offres suivantes : Demandes de devis à traiter (§2.3), Suivi et relance des devis (§2.4), Factures et encaissements (§2.5), WhatsApp → compte rendu chantier (§3.3 et §1.4 carte 1), Dossier chantier incomplet (§3.4), Travaux supplémentaires et avenants (§3.5), Revue des emails prioritaires (§1.9), Réunion chantier → compte rendu (§3.7 et §1.4 carte 3).

---

## 8. PROMESSES INTERDITES — CONTRÔLE

Formulations qui ne doivent apparaître nulle part dans ce document ni sur le site :

100 % des devis relancés · zéro relance oubliée · zéro avenant oublié · zéro document perdu · votre DSO fond · récupérez 15 000 € · documents retrouvés en dix secondes · IA autonome · solution sans erreur · premiers déploiements en cours · hébergement 100 % européen · aucune donnée ne quitte jamais l'entreprise · aucun risque · entièrement automatique · sans intervention humaine.

Formulations utilisées à la place, conformément aux sources :

- les dossiers répondant aux règles sont présentés à validation ;
- les dossiers non traités restent visibles ;
- les travaux supplémentaires potentiels sont signalés ;
- les documents sont classés ou placés en exception ;
- les factures échues sont identifiées et priorisées.

Résultat du contrôle : voir tableau de contrôle (section 10), ligne 3.

---

## 9. CONTRÔLE DES PRIX

| Offre | Prix retenu dans ce document |
|---|---|
| Qualification courte | Gratuite |
| Diagnostic complexe | 490 € HT |
| Demandes de devis à traiter | 990 € HT |
| Suivi et relance — autonome | à partir de 2 200 € HT |
| Suivi et relance — extension | à partir de 1 800 € HT |
| Factures et encaissements — autonome | à partir de 2 200 € HT |
| Factures et encaissements — extension | à partir de 1 600 € HT |
| CAP CASH complet (indicatif) | environ 4 390 € HT |
| WhatsApp → compte rendu chantier | 1 490 € HT |
| Dossier chantier — standard | à partir de 1 490 € HT |
| Dossier chantier — avec lecture et classement | à partir de 1 990 € HT |
| Travaux supplémentaires et avenants | à partir de 1 200 € HT (extension uniquement) |
| CAP CHANTIER complet (indicatif) | environ 4 180 à 4 680 € HT |
| Revue des emails prioritaires | 990 € HT |
| Réunion chantier → compte rendu | 790 € HT |
| Surveillance technique | 99 € HT/mois |
| Maintien opérationnel | 149 € HT/mois |

Aucun prix Y2 publié. Aucune qualification d'un tarif comme provisoire, d'essai ou de lancement, sous quelque forme que ce soit. Aucun prix CAP ACTION ou CAP SOLUTION repris. Aucune offre introduite par « à partir de » n'est qualifiée de prix fixe.

---

## 10. SEO — tableau récapitulatif

| Page | Title (≤ 60) | Meta description (140-160) | H1 unique |
|---|---|---|---|
| `/` | `VotrIA — Devis, factures et chantiers suivis` | Oui, voir §1.1 | Oui |
| `/cap-cash/` | `CAP CASH — Devis et factures suivis — VotrIA` | Oui, voir §2.1 | Oui |
| `/cap-chantier/` | `CAP CHANTIER — Comptes rendus et documents — VotrIA` | Oui, voir §3.1 | Oui |
| `/diagnostic/` | `Diagnostic ou qualification courte — VotrIA` | Oui, voir §4.1 | Oui |

Expressions naturelles utilisables, sans bourrage : automatisation PME BTP, suivi devis bâtiment, relance devis BTP, compte rendu chantier WhatsApp, gestion informations chantier, PME bâtiment Occitanie.

Aucune page locale artificielle par département n'a été créée dans ce document.

---

## 11. TABLEAU DE CONTRÔLE

| Contrôle | Résultat | Occurrence | Correction effectuée | Point restant à valider |
|---|---|---|---|---|
| 1. Tous les prix correspondent à la liste de référence | Conforme | — | — | Aucun |
| 2. Zéro occurrence d'un tarif présenté comme provisoire, d'essai ou de lancement | Conforme | 0 | 4 occurrences reformulées pour retirer la chaîne littérale, y compris dans les notes de contrôle | Aucun |
| 3. Aucune offre « à partir de » qualifiée de prix fixe | Conforme | 0 | 3 formulations génériques corrigées (§2.1, §2.2, §3.1) ; seules les offres à 790 €, 990 € et 1 490 € HT restent qualifiées de prix fixe | Aucun |
| 4. Personas internes jamais nommés | Conforme | 0 | — | Aucun |
| 5. Diagnostic non présenté comme obligatoire | Conforme | — | — | Aucun |
| 6. Champ Email présent et obligatoire | Conforme | §4.5 | Ajouté (« Adresse email professionnelle ») | Aucun |
| 7. Champ Téléphone présent | Conforme | §4.5 | Ajouté, facultatif | Aucun |
| 8. Champ Type de demande visible dans le formulaire | Conforme | §4.5 | Ajouté comme champ réel, plus seulement en note | Aucun |
| 9. Mention des services tiers sous chaque offre concernée | Conforme | 8 offres vérifiées (§7) | Ajoutée sur Dossier chantier (§3.4), Travaux supplémentaires (§3.5) et Réunion chantier (§1.4 carte 3, §3.7) | Aucun |
| 10. Règles de surveillance/maintien conformes aux trois règles exactes | Conforme | §6 | Réécrites avec la règle par environnement (jusqu'à trois flux inclus) ajoutée comme décision à intégrer au Document Maître | Aucun |
| 11. Validation humaine présente sur les quatre pages | Conforme | §1.6, §2.7, §3 (inclus de chaque brique), §4.4 | — | Aucun |
| 12. Aucun chiffre de ROI ou de marché inventé | Conforme | — | — | Aucun |
| 13. Aucune preuve sociale fictive | Conforme | §1.11 laissée vide intentionnellement | — | Aucun |
| 14. CAP SUIVI CHANTIER clairement non disponible | Conforme | §3.8 | — | Aucun |
| 15. VotrIA ne paraît pas héberger une plateforme mutualisée | Conforme | §1.8 | — | Aucun |
| 16. Le terrain n'installe aucune nouvelle application | Conforme | §3.3, FAQ | — | Aucun |
| 17. Exclusions visibles et compréhensibles | Conforme | « Non compris » sur chaque brique concernée | — | Aucun |
| 18. CTA correspondent au bon parcours et aux libellés corrigés | Conforme | §1.4, §1.12, §2.3, §3.3, §4.3-4.4, §5.E | `Réserver ma qualification courte` → `Demander une qualification courte` ; `Réserver le diagnostic — 490 € HT` → `Demander un diagnostic — 490 € HT` | Aucun |
| 19. Identité juridique inchangée / CGV correctement qualifiées | Conforme | §0 | Note corrigée : identité correcte et inchangée, CGV à réécrire intégralement (non traité dans ce document) | Réécriture des CGV elles-mêmes — hors périmètre de ce document |
| 20. Aucun fichier de code (HTML/CSS/JS/Netlify/formulaire) modifié | Conforme | — | — | Aucun |

**Résultat de la recherche finale dans le fichier** (recherche effectuée avec un outil de recherche après rédaction) :
- `tarif pilote` : **0 occurrence** (4 reformulées).
- `à prix fixe` en référence à une offre « à partir de » : **0 occurrence** (3 corrigées) ; l'expression reste seulement pour les offres réellement fixes (790 €, 990 €, 1 490 € HT), jamais comme description globale de l'ensemble des briques.
- `sans engagement` : **0 occurrence**.
- `Réserver ma qualification` / `Réserver le diagnostic` : **0 occurrence** (remplacées).
- `aucune correction de fond` appliquée aux CGV : **0 occurrence** — l'expression ne subsiste que pour l'identité juridique (exacte et non concernée par la correction demandée).
- `Email invalide` : présent une fois, dans les messages d'erreur du formulaire — occurrence attendue, pas une anomalie.
- Termes techniques et statuts juridiques interdits (n8n, API, OCR, LLM, Docker, webhook, no-code, Lean Perform, SARL-U, EURL, capital social, gérant, HT = TTC, TTC = HT) : **0 occurrence en texte public**.
- Les 15 promesses interdites de la section 8 : **0 occurrence en texte public**.
- Personas internes (Laurent, Nadia, Philippe) : **0 occurrence**.

---

## 12. POINTS RESTANT RÉELLEMENT À VALIDER

Les 5 points précédemment listés ont été résolus (voir corrections ci-dessus, notamment §2.4, §2.5, §3.4, §3.5, §3.7, §6 et §5.A). Un seul point reste réellement ouvert, distinct des 5 précédents :

1. **Réécriture complète des CGV** (`site/cgv/index.html`) — confirmée nécessaire par cette session, mais non réalisée : elle doit couvrir les nouvelles briques et leurs tarifs (y compris les « à partir de »), les deux parcours, les services tiers, la surveillance technique, le maintien opérationnel, les responsabilités, la validation humaine et la réversibilité des accès. Ce travail n'a pas été engagé pendant cette session (hors périmètre : textes de pages commerciales uniquement).

---

**Fin du document.**
