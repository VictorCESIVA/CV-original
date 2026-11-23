# Bureau 3D

La page charge le fichier précompilé `desk.bundle.js`. La scène Three.js et la texture du plateau sont incluses dans ce fichier pour que le CV fonctionne aussi en ouverture locale.

Pour reconstruire le bundle depuis ce dossier, exécuter `npm ci` puis `npm run build`.

## Utiliser le CV

Ouvrir `../index.html` directement ou le servir tel quel. Sans WebGL, le moniteur 2D donne accès au même écran, au terminal et au CV express.

- Le guide s’ouvre à la première visite et reste accessible via **Guide**. La fermeture est mémorisée dans `localStorage`, sans compte.
- Le moniteur démarre sur l’accueil NOËL OS. Ses dossiers ouvrent le CV express à la rubrique correspondante. Le terminal reste accessible depuis la barre du PC.
- **CV express** et **CV PDF** sont accessibles sans manipuler la scène. Sur petit écran, **Agrandir** ouvre le PC à taille de lecture ; la vue du bureau présente aussi la liste des projets.
- **Version à partager** ouvre `../cv.html`, une page de lecture indépendante du bureau et utilisable sans JavaScript.

L’écran spatial est dessiné sur un plan de 640 × 480 pixels CSS. La scène en déduit les dimensions de la vitre ; la même matrice de caméra projette l’interface, le clavier et la souris sur leurs surfaces 3D.

## Mettre à jour le CV texte et PDF

Les faits du CV sont dans `../cv-data.js` et les fiches projets dans `../projects.js`. Depuis ce dossier, `npm run build:cv` génère ensemble `../cv.html` et `../CV_Victor_NOEL.pdf` en utilisant `../cv.css`, y compris sa mise en page A4.

La commande utilise `chromium` ou le binaire donné par `CHROME`. L’option `npm run build:cv -- --no-sandbox` est réservée aux environnements isolés qui n’offrent pas de sandbox Chromium, pour imprimer ces fichiers locaux de confiance.

## Scène et crédits

La texture photographique du bois provient de [Wood Table 001, Poly Haven](https://polyhaven.com/a/wood_table_001), sous licence CC0. Three.js est distribué sous la licence MIT reproduite dans `THREE-LICENSE.txt`.

La pièce complète est modélisée en primitives : plateau et piètement tourné avec tiroir central, chaise de bureau, sol parqueté avec tapis kilim et plinthe, fenêtre à store semi-levé derrière le moniteur, multiprise et câbles d'alimentation, étagère murale à équerres avec serre-livres et plante.

Sept miniatures de projets sont posées sur le bureau : OpenCleaner, SardocheMètre, Cotalyse, la station météo 3WW, le jeu de la vie, Web4All et Prosit 5. Chaque miniature est cliquable et ouvre sa fiche ; les noms, descriptions et liens sont centralisés dans `../projects.js`.

La face de Clawd utilise [le visuel diffusé sur claude.dev](https://claude.dev/shared/img/clawd-mark.png). Son contour est extrudé dans la scène. L’autocollant utilise le [logo Hugging Face](https://huggingface.co/brand). La fiche murale renvoie à [Attention Is All You Need](https://arxiv.org/abs/1706.03762).
