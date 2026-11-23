# Bureau 3D

Le fichier précompilé `desk.bundle.js` n’est chargé que pour la vue **Bureau 3D**. Il inclut Three.js et la texture du plateau pour fonctionner aussi en ouverture locale.

Pour reconstruire le bundle depuis ce dossier, exécuter `npm ci` puis `npm run build`.

## Utiliser le CV

Ouvrir `../index.html` directement ou le servir tel quel. Sans WebGL, le moniteur 2D donne accès au même écran, au terminal et au CV express.

- **Guide** explique les trois accès dès la première visite : explorer en 3D, ouvrir le PC seul ou lire le CV express. Le guide et le mode choisi sont mémorisés dans `localStorage`, sans compte.
  Le CV express ouvert depuis le guide ne charge pas la scène pendant la lecture.
- Le moniteur démarre sur l’accueil NOËL OS. Les dossiers se lisent dans le PC, avec des fiches dépliables dans **Projets**. **Échap** revient à l’accueil et **Version texte** ouvre la rubrique correspondante hors de la scène. Le terminal reste accessible depuis la barre du PC.
- **CV express** et **CV PDF** sont accessibles sans manipuler la scène. Si le moniteur est petit, il passe en gros plan à l’ouverture d’un dossier. **Agrandir** et **Bureau** permettent aussi de changer de vue manuellement. Sur mobile, les projets restent accessibles sous la scène en vue du bureau.
- **PC seul** et **Bureau 3D** basculent entre les deux vues sans fermer le dossier courant. La 3D déjà chargée est mise en pause en mode PC seul. Si le moteur ne répond pas ou si le contexte WebGL est perdu, le même écran reste lisible en 2D.
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
