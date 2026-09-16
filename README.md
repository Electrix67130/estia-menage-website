# Estia Clean Connect — Site vitrine

Site public d'**Estia Clean Connect**, l'application de gestion des prestations de
ménage (planning, checklists, preuve de passage, facturation) : présentation du
produit, tarifs sur devis, contact, **aide** et **pages légales**.

Pas d'authentification, pas d'API, pas de base : c'est un site **statique**.

> ⚠️ À ne pas confondre avec `estiaconciergerie.fr`, le site de la conciergerie
> Estia (Alsace / Vosges). Ici on parle du **produit**, pas de la conciergerie.

## Stack

- **Next.js 16** (App Router, React 19) en `output: "export"` → dossier `out/`
- **TypeScript** strict
- **Tailwind CSS** + **lucide-react**
- **i18n** maison (fr/en/de/es/it/pl/pt/tr), langue mémorisée dans le navigateur

## Démarrage rapide

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # export statique dans out/ (~2 Mo)
npx serve out        # pour relire le rendu final
```

## Architecture

```
src/
├── app/             Pages (App Router) : /, features, how-it-works, pricing,
│                    contact, support, privacy, legal + robots.ts, sitemap.ts
├── components/      Header, Footer, LegalShell, LanguagePicker
│   └── sections/    Hero, Features, How, ForWho, Pricing, Cta
├── contexts/        I18nContext (langue courante)
├── i18n/            Dictionnaires (8 langues, mêmes clés partout)
└── lib/site.ts      URLs, contact, identité légale — SOURCE UNIQUE
scripts/
└── install-site.sh  Installation côté VPS (exécutée par la CI)
```

### Règles

- **Aucune URL ni adresse email en dur dans une page** : tout passe par
  `src/lib/site.ts`.
- **Les 8 dictionnaires ont exactement les mêmes clés.** Ajouter une clé =
  l'ajouter partout (`translate()` retombe sur le français, mais une page
  à moitié française n'est pas une traduction).
- Les pages `/privacy` et `/legal` restent **rédigées en français** — le
  responsable de traitement est français et c'est cette version qui fait foi.
  Une mention l'annonce dans la langue du lecteur.
- `/support` et `/privacy` sont **référencées dans la fiche App Store**
  (`store.config.json` du repo mobile). Elles doivent répondre 200 en
  permanence : Apple vérifie les deux liens à chaque revue.

## Pages légales — à compléter

`src/lib/site.ts` → `LEGAL_IDENTITY` : forme juridique, SIRET, RCS, TVA, siège
social et directeur de la publication. Les champs vides ne sont pas affichés,
donc la page reste propre en attendant — mais ces mentions sont **obligatoires**
(art. 6-III LCEN) une fois le site en ligne.

## Déploiement

Export statique construit par la CI puis déposé sur le VPS, où **Caddy** sert les
fichiers. Pas de Node sur le VPS : son disque (7,9 Go) est déjà bien rempli par
l'API et le dashboard.

```
tag git [0-9]* → GitHub Actions → npm ci + tsc + npm run build
              → tar de out/ → scp sur le VPS → scripts/install-site.sh
              → /srv/estia-site/versions/<horodatage> + bascule du lien courant
```

Préparation du VPS et bloc Caddy : **`docs/DEPLOYMENT.md` §4 bis du repo
`estia-menage-api`**. Tant que ce n'est pas fait, laisser la variable de repo
`DEPLOY_ENABLED` à `false` : le job d'envoi est sauté, le build continue de
servir de garde-fou.
