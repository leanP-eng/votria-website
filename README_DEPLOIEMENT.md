# Déploiement VotrIA

Cette archive contient la version consolidée du site statique.

## Déploiement Netlify

1. Décompresser l’archive.
2. Publier le contenu du dossier à la racine du site Netlify.
3. Conserver `netlify.toml` à la racine.
4. Vérifier que le domaine `votria.pro` pointe vers le site Netlify.
5. Tester les formulaires avec des données fictives.
6. Vérifier le bandeau de consentement en navigation privée :
   - aucun appel Google Analytics avant acceptation ;
   - refus et acceptation accessibles au même niveau ;
   - bouton « Cookies » disponible après le choix.

## Fichier externe à fournir

Le diagnostic renvoie vers :

`https://votria.pro/guide-ia-tpe.pdf`

Ce PDF n’est pas contenu dans l’archive. Il doit être ajouté à la racine ou le lien doit être modifié dans `diagnostic.html`.

## Contrôles externes restant à effectuer

- configuration de la conservation et des accès dans n8n ;
- contrat de sous-traitance / DPA n8n ;
- suppression automatique des exécutions n8n selon la durée retenue ;
- test réel des en-têtes CSP après déploiement ;
- vérification du formulaire Contact et du diagnostic avec le workflow de production ;
- revue périodique des prestataires, durées et sources externes.
