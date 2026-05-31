# Estia Ménage — Site vitrine

Site public d'Estia Ménage (présentation, tarifs, formulaire de contact). Pas d'authentification, pas d'API interne.

## Stack

- **Next.js 16** (App Router, React 19)
- **TypeScript** strict
- **Tailwind CSS** + **lucide-react** (UI)
- **i18n** custom (fr/en/de/es/it/pl/pt/tr)

## Démarrage rapide

```bash
npm install
npm run dev          # http://localhost:3000
```

## Architecture

```
src/
├── app/             Pages publiques (App Router)
├── components/      Sections (Hero, Features, Pricing, Contact…)
├── i18n/            Traductions (8 locales)
└── lib/             Helpers
```

## Scripts npm

| Commande | Description |
|---|---|
| `npm run dev` | Dev (Turbopack) |
| `npm run build` | Build production |
| `npm start` | Lance le build prod |
| `npm run lint` | ESLint |

## Déploiement

Compatible Vercel/Netlify directement (Next.js standard). Pas de variables d'environnement sensibles requises.

## Repos liés

- 🛠️ [estia-menage](https://github.com/Electrix67130/estia-menage) — API backend.
- 📱 [estia-menage-ui](https://github.com/Electrix67130/estia-menage-ui) — app mobile.
- 🖥️ [estia-menage-dashboard](https://github.com/Electrix67130/estia-menage-dashboard) — admin.
