# Votria.pro — Site Web

Site officiel Votria.pro — Consultant & Agence IA

## 📋 Structure du projet

```
votria-netlify/
├── index.html                    # Accueil
├── offres.html                   # Offres (Cap IA + Deploy IA)
├── methode.html                  # Notre méthode
├── a-propos.html                 # À propos du fondateur
├── contact.html                  # Formulaire de contact
├── mentions-legales.html         # Mentions légales (LCEN)
├── confidentialite.html          # Politique de confidentialité (RGPD)
├── netlify.toml                  # Configuration Netlify
├── _redirects                    # Routes propres sans .html
└── /documents/
    ├── votria-cap-ia.pdf         # Document Cap IA
    └── votria-deploy-ia.pdf      # Document Deploy IA
```

## 🚀 Déploiement sur Netlify

### Prérequis
- Compte Netlify (gratuit)
- Domaine `votria.pro` pointant vers Netlify (configuré en DNS)

### Étapes de déploiement

#### Option 1 : Drag & Drop (simple)
1. Va sur https://app.netlify.com
2. Connecte-toi avec ton compte
3. Crée un nouveau site → **Drag & Drop**
4. Dépose le dossier `votria-netlify/` complet
5. Attends que Netlify scanne les fichiers
6. Vérifie que tout s'affiche bien
7. Change le nom du site ou configure le domaine `votria.pro`

#### Option 2 : Git (recommandé pour mises à jour)
1. Va sur https://github.com et crée un repo `votria-pro`
2. Clone le repo sur ton ordi
3. Copie tous les fichiers de `votria-netlify/` dans le repo
4. Pousse les fichiers : `git add . && git commit -m "Initial deploy" && git push`
5. Sur Netlify : New site → Connect to Git
6. Sélectionne ton repo GitHub
7. Configure les paramètres (laisse par défaut, Netlify détecte `netlify.toml`)
8. Déploie automatiquement

### Configuration du domaine `votria.pro`

Une fois sur Netlify :
1. Va dans **Site settings** → **Domain management**
2. Ajoute ton domaine custom : `votria.pro`
3. Configure les DNS chez ton registrar (OVH) :
   - Pointe `votria.pro` vers les DNS de Netlify
   - Ou crée un CNAME `www` vers Netlify
4. Attends quelques minutes que le DNS se propage

**Cert HTTPS :** Netlify génère automatiquement un certificat Let's Encrypt gratuit.

## 🔗 Routes disponibles

| URL | Fichier |
|-----|---------|
| `/` | index.html |
| `/offres` | offres.html |
| `/methode` | methode.html |
| `/a-propos` | a-propos.html |
| `/contact` | contact.html |
| `/mentions-legales` | mentions-legales.html |
| `/confidentialite` | confidentialite.html |
| `/documents/votria-cap-ia.pdf` | documents/votria-cap-ia.pdf |
| `/documents/votria-deploy-ia.pdf` | documents/votria-deploy-ia.pdf |

Les routes sont **propres** (sans `.html`) grâce au fichier `_redirects`.

## 🔧 Configuration

### Netlify.toml
Fichier de configuration automatique pour Netlify :
- Build settings
- Redirects
- Headers de sécurité (X-Content-Type-Options, etc.)

### _redirects
Alterne pour spécifier les routes propres (si netlify.toml ne suffit pas).

## 📝 Maintenance

### Ajouter une nouvelle page
1. Crée `nouvelle-page.html` à la racine
2. Ajoute la route dans `_redirects` et/ou `netlify.toml`
3. Pousse les changements (Git) ou redéploie manuellement

### Mettre à jour une page existante
1. Modifie le fichier HTML
2. Pousse les changements
3. Netlify redéploie automatiquement (Git) ou déploie manuellement

### Documents PDF
Les fichiers PDF sont dans `/documents/` et téléchargeables depuis le formulaire contact.

## 🔐 Sécurité

- **HTTPS** : Automatique avec Let's Encrypt
- **Headers de sécurité** : Configurés dans `netlify.toml`
- **RGPD** : Politique de confidentialité incluse
- **Webhook n8n** : Sécurisé avec validation côté serveur

## 📧 Formulaire de contact

Le formulaire envoie les données à :
```
https://lean-parform.app.n8n.cloud/webhook-test/votria-contact-form
```

Les données sont mappées dans un Google Sheet avec n8n.

## ✅ Checklist avant déploiement

- [ ] Tous les fichiers HTML sont présents
- [ ] Les PDFs sont dans `/documents/`
- [ ] Les liens internes fonctionnent (test en local)
- [ ] Le formulaire contact envoie bien les données à n8n
- [ ] DNS `votria.pro` pointe vers Netlify
- [ ] Certificat HTTPS est actif

## 📞 Support

En cas de problème :
1. Vérifie les logs de Netlify (Deployments tab)
2. Vérifie que les fichiers sont bien uploadés
3. Vide le cache du navigateur (`Ctrl+Maj+R`)
4. Teste le formulaire contact avec n8n

---

**Dernière mise à jour :** Décembre 2026
