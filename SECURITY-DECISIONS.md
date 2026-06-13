# Décisions de sécurité — Site VotrIA

## Revue npm audit — 2026-06 (réévaluer chaque trimestre)

`npm audit` signale 4 vulnérabilités sur la chaîne astro ^4.16.0 / vite / esbuild.
Après analyse, aucune n'est exploitable dans le contexte de ce site.

Contexte technique : Astro en sortie **statique** (`output: 'static'`), **sans SSR,
sans middleware, sans server islands**. Déploiement de fichiers HTML/CSS/JS figés sur
Netlify. Pas de serveur de dev exposé en production.

| Advisory | Description | Pourquoi non exploitable ici |
|---|---|---|
| GHSA-j687-52p2-xcff | XSS via `define:vars` (sanitization `</script>` incomplète) | Seul usage de `define:vars` = `n8nUrl`, une constante d'environnement non contrôlée par l'utilisateur. Aucune donnée externe injectée. |
| GHSA-whqg-ppgf-wp8c | Authentication Bypass via double URL encoding | Concerne le middleware/SSR. Site 100% statique, pas de middleware. |
| GHSA-g735-7g2w-hh3f | Remote allowlist bypass via matchPathname wildcard | Concerne le routing serveur. Sans objet en sortie statique. |
| GHSA-xr5h-phrj-8vxv | Server islands : replay de paramètres chiffrés | Aucune server island utilisée. |
| GHSA-67mh-4wv8-2f99 | esbuild : requêtes arbitraires vers le serveur de dev | Cantonné au `astro dev`, jamais déployé en production. |

**Correctif disponible :** uniquement via Astro 6.x (`npm audit fix --force`), qui
introduit un breaking change incompatible avec `@astrojs/tailwind` (non compatible
Astro 6 à ce jour).

**Décision :** ne pas mettre à jour. Le risque de régression d'une montée majeure
dépasse le risque réel (nul) de ces vulnérabilités sur une sortie statique.

**Condition de réévaluation :** dès que `@astrojs/tailwind` annonce le support
d'Astro 6, OU migration vers le plugin `@tailwindcss/vite` (Tailwind v4) qui peut
débloquer Astro 6 sans dépendre de l'ancien package. Revue à refaire chaque trimestre
ou à toute nouvelle advisory critique.

Dernière revue : 2026-06 — JF.
