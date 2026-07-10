# Audit global du site VotrIA

**Date du contrôle : 10 juillet 2026**

## Périmètre

- 12 pages HTML
- formulaires Contact et Diagnostic
- politique de confidentialité et mentions légales
- liens internes, ancres et navigation
- consentement à la mesure d’audience
- configuration Netlify, redirections et en-têtes de sécurité
- sitemap et robots.txt

## Résultat

**19/19 contrôles bloquants réussis.**

- OK — 12 pages HTML consolidées
- OK — Aucun lien interne cassé
- OK — Aucun identifiant HTML dupliqué
- OK — Aucun lien target=_blank sans noopener
- OK — Métadonnées essentielles présentes
- OK — Ancienne marque Votria.pro supprimée
- OK — Aucun chargement direct de Google Analytics
- OK — Gestionnaire cookies installé sur 9 pages
- OK — Google Analytics chargé uniquement après accord
- OK — Acceptation et refus proposés au même niveau
- OK — Choix cookies conservé 6 mois
- OK — Retrait du consentement accessible
- OK — Contact et diagnostic reliés à n8n
- OK — Mentions légales cohérentes
- OK — Politique de confidentialité cohérente avec les outils
- OK — Redirections Netlify complètes
- OK — En-têtes de sécurité Netlify présents
- OK — Sitemap créé
- OK — Robots.txt créé

## Corrections globales appliquées

- ancienne marque `Votria.pro` supprimée des pages Accueil et Offres ;
- navigation et pied de page harmonisés ;
- sélecteur CSS global `nav` remplacé par `.site-nav` sur les pages concernées ;
- chargement direct de Google Analytics supprimé ;
- gestionnaire de consentement en mode basique ajouté : aucun script Analytics avant acceptation ;
- choix accepter/refuser conservé pendant six mois et modifiable via le bouton `Cookies` ;
- politique de confidentialité mise en cohérence avec ce fonctionnement ;
- redirections Netlify complétées ;
- en-têtes HTTP de sécurité ajoutés ;
- sitemap.xml et robots.txt créés.

## Points non bloquants ou externes

- `diagnostic.html` ne comporte pas de balise H1. La page a été conservée conformément à l’instruction de ne modifier que les aspects RGPD et sécurité.
- `guide-ia-tpe.pdf` est référencé par le diagnostic mais n’est pas présent dans les fichiers disponibles.
- La durée de conservation, la suppression des exécutions et les droits d’accès dans n8n ne peuvent pas être contrôlés depuis les fichiers HTML.
- Les polices Inter et Manrope restent chargées depuis Google Fonts, ce qui entraîne une requête externe lors de l’affichage.
- Les en-têtes CSP doivent être testés après publication afin de vérifier qu’aucune ressource utile n’est bloquée.
- Le lien vers le benchmark externe Nvestia est fonctionnel au moment du contrôle, mais son contenu doit être revu périodiquement.

## Structure de l’archive

L’archive contient les pages HTML, `assets/cookie-consent.js`, `netlify.toml`, `robots.txt`, `sitemap.xml` et `README_DEPLOIEMENT.md`.