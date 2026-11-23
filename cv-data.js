// Données communes au terminal, au CV express et aux versions à transmettre.
const cvData = {
    name: 'Victor Noël',
    role: 'Élève ingénieur informatique au CESI Lille',
    specialty: 'Automatisation & IA appliquée',
    summary: 'Je développe des outils internes, intègre des API et automatise le traitement de données avec des modèles de langage.',
    location: '59650 Villeneuve-d’Ascq',
    mobility: 'Permis B, véhiculé',
    email: 'victor_noel2004@icloud.com',
    linkedin: 'https://www.linkedin.com/in/vic-noel',
    github: 'https://github.com/VictorCESIVA',
    portfolio: 'https://victorcesiva.github.io/CV-original/',
    experience: [
        {
            date: '2026',
            title: 'NXTFood / ACCRO — Développeur Automatisation & IA (CDD)',
            detail: 'Conception et déploiement d’automatisations métier : classification et curation par LLM, intégrations API, applications internes et services auto-hébergés sous Docker.',
            tags: ['Python · FastAPI', 'Docker', 'LLM']
        },
        {
            date: '2024 et 2025',
            title: 'Chronopost — Agent de conditionnement',
            detail: 'Tri et préparation de colis en équipe, sous cadence.',
            tags: ['Logistique', 'Travail d’équipe']
        },
        {
            date: '2023',
            title: 'Fizzy — Stage ouvrier',
            detail: 'Découverte des activités de production et de contrôle qualité.',
            tags: ['Industrie']
        }
    ],
    education: [
        {
            date: 'Depuis 2025',
            title: 'CESI Lille — Formation d’ingénieur informatique',
            detail: 'Algorithmique, réseaux, bases de données et projets en équipe.',
            tags: []
        },
        {
            date: '2023–2025',
            title: 'ISEN Yncréa Lille — Cycle préparatoire sciences et informatique',
            detail: 'Mathématiques, physique et programmation en C/C++.',
            tags: []
        },
        {
            date: '2022',
            title: 'Baccalauréat scientifique — Mention bien',
            detail: 'Spécialités mathématiques et physique-chimie.',
            tags: []
        }
    ],
    skills: [
        ['Automatisation & IA', 'Python, FastAPI, intégrations API, classification et curation par LLM.'],
        ['Web & données', 'JavaScript, HTML/CSS, PHP, SQL, PostgreSQL, MySQL et Supabase.'],
        ['Logiciel & embarqué', 'C#/.NET, C/C++, STM32 et PlatformIO.'],
        ['Outils & déploiement', 'Docker, Linux, Git/GitHub, VS Code, Vercel et Claude Code.']
    ],
    languages: [
        ['Anglais', 'TOEIC 870'],
        ['Français', 'Langue maternelle']
    ],
    featuredProjects: ['opencleaner', 'cotalyse', '3ww'],
    otherProjects: [
        ['Application web PHP/MySQL (ISEN)', 'Authentification et gestion de base de données.'],
        ['Infrastructure réseau (CESI)', 'VLAN, NAT/PAT, routage inter-VLAN, OSPF et DHCP.'],
        ['Modélisation mathématique 2D/3D (ISEN)', 'Visualisation de courbes et surfaces avec Python et SageMath.']
    ]
};

function cvEscape(value) {
    return value.replace(/[&<>"']/g, char => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'})[char]);
}

if (typeof module === 'object' && module.exports) module.exports = {cvData, cvEscape};
