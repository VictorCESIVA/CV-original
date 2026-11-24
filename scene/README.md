# Bureau 3D

Le fichier précompilé `desk.bundle.js` n’est chargé que pour la vue **Bureau 3D**. Il inclut Three.js et la texture du plateau pour fonctionner aussi en ouverture locale.

Pour reconstruire le bundle depuis ce dossier, exécuter `npm ci` puis `npm run build`.

## Utiliser le CV

Ouvrir `../index.html` directement ou le servir tel quel. Sans WebGL, le moniteur 2D donne accès au même écran, au terminal et au CV express.

- **Guide** propose en premier le PC seul, puis le bureau 3D et le CV express. Le bouton **?** dans la barre de NOËL OS le rouvre depuis le moniteur. Le guide et le mode choisi sont mémorisés dans `localStorage`, sans compte.
  **Voir un exemple** ouvre la fiche OpenCleaner dans le moniteur, sans charger la 3D lors d’une première visite. Le PDF se télécharge aussi directement depuis le guide. Fermer le guide laisse le mode déjà choisi ou, à défaut, le PC seul.
- Le moniteur démarre sur l’accueil NOËL OS. **À la une** ouvre l’expérience professionnelle la plus récente. Le menu `C:\CV` permet de changer de dossier sans revenir à l’accueil. **Version texte** ouvre la même rubrique hors de la scène.
  Les liens `../index.html#parcours`, `#projets`, `#competences` et `#contact` ouvrent le dossier sans afficher le guide ; **Précédent** et **Suivant** suivent la navigation. Le terminal reste accessible depuis la barre du PC et à l’adresse `#terminal`.
- Le terminal accepte les commandes françaises (`aide`, `compétences`, `projets`, `thème bleu`), avec ou sans accents, ainsi que les commandes anglaises existantes. Les flèches **↑** et **↓**, physiques ou virtuelles, retrouvent les cinquante dernières commandes de la page et rendent le brouillon à la fin de l’historique.
- Cliquer sur la coque ou sur une zone libre de la vitre ouvre le gros plan. **Lire l’écran** et **Vue du bureau** permettent aussi de basculer au clavier. Sur mobile, le bureau est cadré plus près du PC ; le gros plan utilise le châssis 2D, sans rendu WebGL, et les projets restent accessibles sous la vue du bureau.
- Le **CV express** présente le résumé, le contact et la dernière mission professionnelle avec ses outils. Le **CV PDF** est accessible sans manipuler la scène.
- **PC seul** et **Bureau 3D** basculent entre les deux vues sans fermer le dossier courant. La 3D déjà chargée est mise en pause en mode PC seul. Si le moteur ne répond pas ou si le contexte WebGL est perdu, le même écran reste lisible en 2D.
- **Version à partager** ouvre `../cv.html`, une page de lecture indépendante du bureau et utilisable sans JavaScript.
- Les exemples du dossier **Compétences** ouvrent la mission ou la fiche projet correspondante dans le moniteur. CV express et CV texte conservent les mêmes liens vers la version écrite, sans ajouter de contenu au PDF.
- Dans le dossier **Projets**, les miniatures et les liens de la liste ouvrent des fiches `.NFO` à l’intérieur du moniteur. **Échap** ferme le menu ou remonte de la fiche vers la liste, puis de la liste vers l’accueil. Chaque fiche a un lien direct `../index.html#projet-…` et une version sans JavaScript `../cv.html#projet-…`, même pour un dépôt privé.
- **Partager** copie le lien public du dossier ou du projet courant, même depuis `file:`. Si le navigateur refuse la copie, l’adresse est sélectionnée pour une copie manuelle.

La vitre est dessinée sur un plan de 640 × 480 pixels CSS, en retrait derrière l’ouverture biseautée du moniteur. La scène en déduit les dimensions de la vitre ; la même matrice de caméra projette l’interface, le clavier et la souris sur leurs surfaces 3D.
Les reflets et les lignes de balayage sont atténués dans les dossiers et le terminal pour garder le texte lisible.

### Coût de rendu

`static-batch.js` fusionne au chargement les meubles et décors immobiles qui partagent un matériau : un seul maillage et un seul appel de dessin par matériau, au lieu d’un par objet. La scène passe ainsi d’environ 490 à 235 objets visibles, et d’environ 1 370 à 660 appels de dessin quand la carte d’ombres est redessinée, 930 à 460 pour une image interactive (mesuré dans Chromium sur la vue bureau à 1440 × 900).
Restent séparés les éléments qui bougent ou répondent au pointeur : les touches du clavier, la souris et la coque du moniteur. Les matériaux transparents, les objets masqués et les cibles de survol ne sont jamais fusionnés, donc les reflets, les ombres portées et les infobulles restent identiques.
La fusion ajoute quelques dizaines de millisecondes au chargement ; en échange, les deux bruits procéduraux du plâtre et du plastique sont remplis pixel par pixel sans allocation intermédiaire, ce qui en récupère une partie.

## Mettre à jour le CV texte et PDF

Les faits du CV sont dans `../cv-data.js` et les fiches projets dans `../projects.js`. Depuis ce dossier, `npm run build:cv` génère ensemble `../cv.html` et `../CV_Victor_NOEL.pdf` en utilisant `../cv.css`, y compris sa mise en page A4.
La version web affiche le catalogue complet et les liens de preuve des projets documentés. L’impression conserve la sélection `featuredProjects` et ses descriptions courtes sur une page A4.

`../cv-apercu.jpg` (1200 × 630) est la capture réelle du bureau, utilisée dans le guide sur ordinateur et pour Open Graph. `../cv-apercu-mobile.webp` en est un recadrage léger centré sur le moniteur, affiché dans le guide sur les téléphones assez hauts. Le guide garde les accès visibles sur les écrans courts, et aucun aperçu ne charge la 3D.

La commande utilise `chromium` ou le binaire donné par `CHROME`. L’option `npm run build:cv -- --no-sandbox` est réservée aux environnements isolés qui n’offrent pas de sandbox Chromium, pour imprimer ces fichiers locaux de confiance.

## Scène et crédits

La texture photographique du bois provient de [Wood Table 001, Poly Haven](https://polyhaven.com/a/wood_table_001), sous licence CC0. Three.js est distribué sous la licence MIT reproduite dans `THREE-LICENSE.txt`.
Les titres et le logo de NOËL OS utilisent [VT323, de Peter Hull](https://github.com/phoikoi/VT323), distribué sous [SIL Open Font License 1.1](assets/VT323-OFL.txt). La police est intégrée au CSS pour fonctionner sans connexion, y compris en ouvrant `index.html` directement.

La pièce complète est modélisée en primitives : plateau et piètement tourné avec tiroir central, chaise de bureau, sol parqueté avec tapis kilim et plinthe, fenêtre à store semi-levé derrière le moniteur, multiprise et câbles d'alimentation, étagère murale à équerres avec serre-livres et plante.

Sept miniatures représentent OpenCleaner, SardocheMètre, Cotalyse, la station météo 3WW, le jeu de la vie, Web4All et Prosit 5. Les noms, descriptions et liens sont centralisés dans `../projects.js`.

La face de Clawd utilise [le visuel diffusé sur claude.dev](https://claude.dev/shared/img/clawd-mark.png). Son contour est extrudé dans la scène. L’autocollant utilise le [logo Hugging Face](https://huggingface.co/brand). La fiche murale renvoie à [Attention Is All You Need](https://arxiv.org/abs/1706.03762).
