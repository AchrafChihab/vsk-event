# Déploiement des routes React

Le site utilise React Router en mode SPA avec `BrowserRouter`. Le serveur d’hébergement doit donc servir `index.html` pour les routes applicatives inconnues, tout en laissant les fichiers statiques existants (`/assets/*`, favicon, etc.) être servis normalement.

Pour Netlify, `public/_redirects` inclut cette règle SPA. Sur un autre hébergeur statique, configurez la règle équivalente :

```text
/*  /index.html  200
```

Sans ce fallback, une navigation interne fonctionne, mais l’ouverture directe ou le rafraîchissement de `/prestations/mariages`, `/contact` ou toute autre route renverra une erreur serveur.
