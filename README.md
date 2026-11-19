# Go BIA Go ✈️

Appli web gratuite (PWA) pour préparer le Brevet d'Initiation Aéronautique : leçons express, quiz, mini-examen, XP, séries de jours et badges.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Toute l'appli : écrans, contenu des leçons, questions, badges |
| `manifest.webmanifest` | Carte d'identité de l'appli (nom, icône, couleurs) pour l'installation sur téléphone |
| `sw.js` | « Service worker » : permet d'utiliser l'appli hors connexion |
| `netlify.toml` | Réglages d'hébergement Netlify |
| `icons/` | Icônes de l'appli |

## Mettre à jour l'appli

1. Modifier les fichiers (sur GitHub : ouvrir le fichier, cliquer sur le crayon ✏️, puis « Commit changes »).
2. Netlify republie automatiquement en 1 minute environ.
3. Si tu modifies le contenu, change aussi `VERSION` en haut de `sw.js` (par ex. `gobiago-v2`) pour que les téléphones récupèrent la nouvelle version.

## Ajouter des questions

Tout le contenu (modules, leçons, questions, lexique) est dans `content.js`.

Dans `index.html`, chaque leçon contient une liste `qs`. **La bonne réponse est toujours la première** de la liste `o` : l'appli mélange les réponses toute seule.

```js
{q:"La question ?", o:["Bonne réponse","Mauvaise 1","Mauvaise 2","Mauvaise 3"], e:"Explication affichée après la réponse."}
```

> Prototype : progression enregistrée sur l'appareil uniquement. Contenu à faire relire par un instructeur BIA avant diffusion publique.
