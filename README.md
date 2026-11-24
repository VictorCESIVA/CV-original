# CV interactif — Victor Noël

Bureau rétro en HTML/CSS/JS : un moniteur CRT affiche les dossiers du CV, un clavier AZERTY et une souris virtuels pilotent l’interface, et une scène 3D optionnelle met le poste de travail en volume.

## Fichiers

- `index.html` : poste de travail, dialogues (CV express, guide, partage, recherche) et contenus générés côté client.
- `station.css` : apparence du bureau, du moniteur, des périphériques et des dialogues.
- `station.js` : navigation entre écrans, terminal, dossiers projets, recherche et comportement du bureau 3D.
- `projects.js` : source unique des projets affichés sur le bureau et dans les fiches.
- `cv-data.js` : parcours, formations, compétences, langues et coordonnées utilisés par le terminal, le CV express et les pages générées.
- `cv.html` : version texte à partager, générée depuis `cv-data.js` et `projects.js`.
- `cv.css` : styles de la version texte.

## Recherche instantanée

Le bouton **Rechercher** (ou `Ctrl`/`⌘` + `K`) ouvre l’**Index du bureau**. La recherche couvre les dossiers, les projets, les expériences, les formations, les compétences, les langues et les actions du bureau (CV express, PDF, guide, contact). Les résultats se parcourent avec les flèches, s’ouvrent avec `Entrée` et se ferment avec `Échap`. Les correspondances sont annoncées dans une zone live et signalées visuellement dans les résultats.

## Raccourcis

- `Ctrl`/`⌘` + `K` : ouvrir la recherche.
- `Tab` : parcourir les commandes et les liens.
- `Échap` : fermer la recherche, le guide ou le CV express.
- Terminal : `aide` pour la liste des commandes, `↑`/`↓` pour l’historique.
- Le clavier virtuel AZERTY alimente directement le terminal.

## Prévisualiser en local

Depuis la racine du dépôt :

```sh
python3 -m http.server 8000
```

Puis ouvrir <http://localhost:8000/>.

## Bureau 3D

`scene/` contient les sources Three.js à modifier. `desk.bundle.js` et `cv.html` sont générés : ne pas les modifier à la main. Après une modification des sources, régénérer le bundle avec `npm run build`, puis les pages CV partageables avec `npm run build:cv`.

```sh
cd scene
npm install
npm run build
npm run build:cv
```

Le mode PC reste pleinement utilisable sans charger la 3D.
