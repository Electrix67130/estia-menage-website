@AGENTS.md

# Estia Clean Connect — Site vitrine

Site public **statique** du produit (`estia-clean-connect.fr`). Next.js 16 en
`output: "export"` : `npm run build` produit `out/`, servi par Caddy sur le VPS.
Contexte produit complet : `.claude/CONTEXT.md` du repo `estia-menage-api`.

## Règles

- **Aucune URL ni email en dur** dans une page : tout vient de `src/lib/site.ts`.
- **8 langues, mêmes clés partout** (`src/i18n/locales/*.ts`). Ajouter une clé =
  l'ajouter dans les 8 fichiers ; vérifier avec le script de parité du README.
- `/support` et `/privacy` sont **référencées dans la fiche App Store** : elles
  doivent répondre 200 en permanence, Apple les vérifie à chaque revue.
- Les pages légales (`/privacy`, `/legal`) restent **rédigées en français**
  (responsable de traitement français) ; `LegalShell` affiche la mention
  « version française qui fait foi » dans la langue du lecteur.
- Le produit **n'est pas réservé aux conciergeries** : conciergeries courte
  durée, sociétés de nettoyage, propriétaires multi-biens. Ne pas réécrire les
  textes comme si c'était un outil Airbnb uniquement.
- Vérifier avant de livrer : `npx tsc --noEmit`, `npm run lint`, `npm run build`.

## Déploiement

Tag git `[0-9]*` → GitHub Actions (build) → `scp` de `out/` → `scripts/install-site.sh`
sur le VPS (`/srv/estia-site`, bascule atomique du lien `courant`).
Préparation VPS et bloc Caddy : `docs/DEPLOYMENT.md` §4 bis du repo API.
