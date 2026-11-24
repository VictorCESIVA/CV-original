# CV interactif — Victor Noël

Bureau rétro en HTML/CSS/JS : un moniteur CRT affiche les dossiers du CV, un clavier AZERTY et une souris virtuels pilotent l’interface, et une scène 3D optionnelle met le poste de travail en volume.

## Fichiers

- `index.html` : poste de travail, dialogues (CV express, guide, partage, sélection, recherche) et contenus générés côté client.
- `station.css` : apparence du bureau, du moniteur, des périphériques et des dialogues.
- `station.js` : navigation entre écrans, terminal, dossiers projets, sélection partageable, dossier imprimable, recherche et comportement du bureau 3D.
- `projects.js` : source unique des projets affichés sur le bureau et dans les fiches, avec la carte des identifiants, la clé de sélection locale et le parseur commun aux liens `?selection=…`.
- `cv-data.js` : parcours, formations, compétences, langues et coordonnées utilisés par le terminal, le CV express et les pages générées.
- `dossier.html`, `dossier.css`, `dossier.js` : dossier A4 des projets sélectionnés, avec coordonnées, preuves et sources.
- `cv.html` : version texte à partager, générée depuis `cv-data.js` et `projects.js`.
- `cv.css` : styles de la version texte.

## Recherche instantanée

Le bouton **Rechercher** (ou `Ctrl`/`⌘` + `K`) ouvre l’**Index du bureau**. La recherche couvre les dossiers, les projets, les expériences, les formations, les compétences, les langues et les actions du bureau (CV express, PDF, guide, contact). Les résultats se parcourent avec les flèches, s’ouvrent avec `Entrée` et se ferment avec `Échap`. Les correspondances sont annoncées dans une zone live et signalées visuellement dans les résultats.

## Sélection de projets à partager

Le bouton **Sélection** compose une shortlist de projets pour un recruteur. Cochez les projets voulus, puis **Afficher la sélection** pour la relire dans le moniteur ou **Partager le lien** pour copier une URL autonome.

Le lien prend la forme `https://victorcesiva.github.io/CV-original/?selection=opencleaner,3ww#selection`. À l’ouverture, la sélection s’affiche directement dans l’écran **Dossiers** : chaque projet mène à sa fiche complète et à ses preuves. Aucun compte n’est nécessaire.

Si un identifiant du lien n’existe plus, les projets reconnus restent affichés et un avertissement indique les entrées ignorées. Une sélection vide propose de la recomposer. La sélection en cours est aussi mémorisée localement pour la prochaine visite ; le paramètre `selection` reste prioritaire. Le bureau et le dossier imprimable lisent les doublons, les identifiants inconnus et la clé `cv-noel:selection-v1` avec le même parseur, défini dans `projects.js`.

### Dossier de projets imprimable

Depuis le dialogue de sélection ou l’écran **Sélection**, le bouton **Dossier imprimable** ouvre `dossier.html?selection=…&print=1`. La page est composée pour l’impression A4 : identité, coordonnées, puis uniquement les projets cochés avec leurs preuves, leurs sources et les liens disponibles. Aucun élément du moniteur CRT ni de l’interface du bureau n’est repris.

Le bouton **Imprimer / Enregistrer en PDF** de la page, ou `Ctrl`/`⌘` + `P`, lance l’impression. Les liens web sont imprimés avec leur URL complète et les projets ne sont pas coupés entre deux pages. Une sélection vide affiche un état explicite avec un retour vers la composition de la shortlist ; le bouton d’impression y est désactivé.

## Raccourcis

- `Ctrl`/`⌘` + `K` : ouvrir la recherche.
- `Tab` : parcourir les commandes et les liens.
- `Échap` : fermer la recherche, le guide, le CV express ou la sélection.
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
