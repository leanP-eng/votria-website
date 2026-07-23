VOTRIA — SITE FINAL STATIQUE

Déploiement Netlify
1. Décompresser VotrIA_Site_Final.zip.
2. Déployer le dossier VotrIA_Site_Final comme répertoire de publication.
3. Conserver les sous-dossiers : chaque route contient son fichier index.html.

Routes incluses
/
/solutions
/offres
/methode
/cas-concrets
/a-propos
/estimation
/eligibilite-cap-ia
/eligibilite-cap-ia-btp
/eligibilite-cap-ia-autres-secteurs
/guide-btp
/mentions-legales
/confidentialite
/cgv
/cookies

Connexions déjà présentes
- Webhook n8n Cloud : https://lean-parform.app.n8n.cloud/webhook/fast-audit
- Calendly : lien externe, sans iframe
- Stripe : paiement dans le parcours Calendly

Recette à effectuer après déploiement
- Configurer Google Analytics 4 G-WDMPM0P81V uniquement après consentement.
- Régler la conservation des données utilisateur GA4 à 14 mois maximum.
- Configurer tarteaucitron.js : choix mémorisé 6 mois, Tout accepter et Tout refuser au même niveau, lien Gérer mes cookies sur toutes les pages.
- Vérifier dans l’onglet Réseau qu’aucune requête Google Analytics ne part avant consentement.
- Tester les formulaires, les réponses n8n accepted true/false, l’écriture Google Sheets et l’envoi des emails.
- Vérifier le lien Calendly définitif et le paiement Stripe dans le parcours externe.
