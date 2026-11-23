// Single source of truth for the projects shown on the desk and in the dialogues.
const cvProjects = [
    {
        id: 'opencleaner',
        model: 'cleaner',
        name: 'OpenCleaner',
        label: 'OpenCleaner',
        collection: 'perso',
        tags: ['C#', '.NET', 'Open source'],
        description: 'Un utilitaire Windows gratuit et open source pour repérer les fichiers inutiles, consulter ce qui occupe le disque et choisir quoi nettoyer.',
        url: 'https://github.com/VictorCESIVA/OpenCleaner',
        proof: {
            detail: 'L’analyse ne supprime aucun fichier. Les résultats sont vérifiables avant le nettoyage ; une sauvegarde locale chiffrée peut être créée et contrôlée avant suppression.',
            links: [
                ['Versions Windows', 'https://github.com/VictorCESIVA/OpenCleaner/releases/latest'],
                ['Documentation technique', 'https://github.com/VictorCESIVA/OpenCleaner/blob/master/docs/TECHNICAL.md']
            ]
        }
    },
    {
        id: 'sardochemetre',
        model: 'meter',
        name: 'SardocheMètre',
        label: 'SardocheMètre',
        collection: 'perso',
        tags: ['JavaScript', 'IA', 'Humour'],
        description: 'Un site satirique qui utilise l’IA pour commenter et noter les tweets de Sardoche.',
        url: 'https://github.com/VictorCESIVA/sardochemetre'
    },
    {
        id: 'cotalyse',
        model: 'cotalyse',
        name: 'Cotalyse',
        label: 'Cotalyse',
        collection: 'perso',
        tags: ['Python', 'FastAPI', 'Dépôt privé'],
        description: 'Une plateforme pour suivre les cotes de football et évaluer les sélections après chaque match.',
        url: null
    },
    {
        id: '3ww',
        model: 'station',
        name: 'Worldwide Weather Watcher',
        label: 'Station météo',
        collection: 'cesi',
        tags: ['C', 'STM32', 'PlatformIO'],
        description: 'Une station météo sur carte STM32. Le dépôt rassemble le programme en C, les essais sur le montage et les livrables du projet.',
        url: 'https://github.com/VictorCESIVA/Worldwide-Weather-Watcher',
        proof: {
            detail: 'L’écriture d’une mesure sur carte SD a été vérifiée sur le montage final. Le compte rendu distingue les essais réalisés des points restant à valider.',
            links: [
                ['Compte rendu des essais', 'https://github.com/VictorCESIVA/Worldwide-Weather-Watcher/blob/codex/3ww/docs/VALIDATION.md'],
                ['Livrable d’architecture (PDF)', 'https://github.com/VictorCESIVA/Worldwide-Weather-Watcher/blob/codex/3ww/output/pdf/LIVRABLE_2_ARCHITECTURE.pdf']
            ]
        }
    },
    {
        id: 'conway',
        model: 'life',
        name: 'Jeu de la vie de Conway',
        label: 'Jeu de la vie',
        collection: 'cesi',
        tags: ['C++17', 'SFML'],
        description: 'Un automate cellulaire avec deux modes d’exécution, en console ou dans une fenêtre graphique.',
        url: 'https://github.com/VictorCESIVA/projet-cesi-jeux-de-la-vie'
    },
    {
        id: 'web4all',
        model: 'web',
        name: 'Web4All — CESI Stages',
        label: 'Web4All',
        collection: 'cesi',
        tags: ['PHP', 'MySQL', 'PHPUnit'],
        description: 'Une application web de gestion de stages construite autour d’une architecture MVC.',
        url: 'https://github.com/VictorCESIVA/projet-web'
    },
    {
        id: 'prosit5',
        model: 'prosit',
        name: 'Prosit 5 — Pile et mémoire',
        label: 'Prosit 5',
        collection: 'cesi',
        tags: ['C', 'STM32'],
        description: 'Un exercice embarqué pour observer au débogueur comment trois capteurs simulés conservent leurs dernières mesures.',
        url: 'https://github.com/VictorCESIVA/prosit-5-pile-stm32'
    }
];

if (typeof module === 'object' && module.exports) module.exports = cvProjects;
else window.CV_PROJECTS = cvProjects;
