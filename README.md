# VSK Events

Site web de DJ événementiel — [vsk.ashrafchihab.com](https://vsk.ashrafchihab.com)

React · Vite · Framer Motion · React Router

---

## Développement local

```bash
npm install
npm run dev
```

Ouvre http://localhost:5173

## Build de production

```bash
npm run build
```

Génère `dist/` — prêt au déploiement.

## Déploiement

Tout push sur la branche `main` déclenche automatiquement :

1. **GitHub Actions** — install, build, vérification
2. **rsync SSH** — déploiement du dossier `dist/` vers N0C
3. **Production** — https://vsk.ashrafchihab.com

Aucune action manuelle nécessaire après la configuration initiale des secrets GitHub.

## Routes

| Route | Page |
|-------|------|
| `/` | Accueil |
| `/a-propos` | À propos |
| `/prestations` | Prestations |
| `/prestations/mariages` | Mariage |
| `/prestations/soirees-privees` | Soirées privées |
| `/prestations/entreprises` | Entreprises |
| `/galerie` | Galerie |
| `/faq` | FAQ |
| `/contact` | Contact |

Le fallback SPA Apache (`public/.htaccess`) assure que chaque route fonctionne en navigation directe et à l'actualisation.
