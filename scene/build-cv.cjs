const {copyFileSync, mkdtempSync, rmSync, writeFileSync} = require('node:fs');
const {tmpdir} = require('node:os');
const {join, resolve} = require('node:path');
const {pathToFileURL} = require('node:url');
const {spawnSync} = require('node:child_process');
const {cvData: cv, cvEscape: esc} = require('../cv-data.js');
const projects = require('../projects.js');

const root = resolve(__dirname, '..');
const pdfName = 'CV_Victor_NOEL.pdf';
const link = (url, text) => `<a href="${esc(url)}">${esc(text)}</a>`;
const shortUrl = url => url.replace(/^https:\/\/(www\.)?/, '');

function entries(items) {
    return items.map(({title, date, detail}) => `        <article class="entry">
            <div class="entry-head"><h3>${esc(title)}</h3><p class="entry-date">${esc(date)}</p></div>
            <p class="entry-note">${esc(detail)}</p>
        </article>`).join('\n');
}

function rows(items) {
    return items.map(([title, detail]) => `            <li><strong>${esc(title)}</strong> — ${esc(detail)}</li>`).join('\n');
}

const featured = cv.featuredProjects.map(id => projects.find(project => project.id === id));
const others = projects.filter(project => !cv.featuredProjects.includes(project.id));
const catalog = [...featured, ...others].map(({id, url, name, description, tags, collection}, index) => {
    const extra = index < featured.length ? '' : ' cv-project-extra';
    return `            <li class="cv-project${extra}" id="projet-${esc(id)}">
                <h3>${url ? link(url, name) : esc(name)}</h3>
                <span class="cv-project-category">${collection === 'cesi' ? 'Projet CESI' : 'Projet personnel'}</span>
                <span class="entry-note">(${esc(tags.join(' · '))})</span>
                <p>${esc(description)}</p>
            </li>`;
}).join('\n');

const html = `<!DOCTYPE html>
<!-- Généré par scene/build-cv.cjs à partir de cv-data.js et projects.js. -->
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CV de ${esc(cv.name)} : parcours, compétences en automatisation et IA appliquée, et portfolio.">
    <title>${esc(cv.name)} — CV</title>
    <link rel="stylesheet" href="cv.css?v=portfolio">
</head>
<body>
<nav class="cv-nav" aria-label="Formats du CV">
    <a href="index.html">Retour au bureau interactif</a>
    <a href="#projets">Projets</a>
    <a class="download" href="${pdfName}" download>Télécharger le PDF</a>
</nav>
<main class="cv-paper">
    <header class="cv-header">
        <h1>${esc(cv.name)}</h1>
        <p class="cv-title">${esc(cv.role)} · ${esc(cv.specialty)}</p>
        <p class="cv-summary">${esc(cv.summary)}</p>
        <address class="cv-contact" id="contact">
            <p>${esc(cv.location)} · ${esc(cv.mobility)}</p>
            <ul class="cv-links">
                <li>${link(`mailto:${cv.email}`, cv.email)}</li>
                <li>${link(cv.linkedin, shortUrl(cv.linkedin))}</li>
                <li>${link(cv.github, shortUrl(cv.github))}</li>
            </ul>
        </address>
    </header>
    <section class="cv-section" id="parcours" aria-labelledby="experience-title">
        <h2 id="experience-title">Expériences professionnelles</h2>
${entries(cv.experience)}
    </section>
    <section class="cv-section" aria-labelledby="education-title">
        <h2 id="education-title">Formation</h2>
${entries(cv.education)}
    </section>
    <section class="cv-section" id="competences" aria-labelledby="skills-title">
        <h2 id="skills-title">Compétences techniques</h2>
        <ul class="cv-list">
${rows(cv.skills)}
        </ul>
    </section>
    <section class="cv-section" id="projets" aria-labelledby="projects-title">
        <h2 id="projects-title">Projets</h2>
        <ul class="cv-projects">
${catalog}
        </ul>
    </section>
    <section class="cv-section" aria-labelledby="languages-title">
        <h2 id="languages-title">Langues</h2>
        <p>${cv.languages.map(([language, level]) => `<strong>${esc(language)}</strong> : ${esc(level)}`).join(' · ')}</p>
    </section>
    <footer class="cv-footer">Portfolio interactif et autres projets : ${link(cv.portfolio, shortUrl(cv.portfolio))}</footer>
</main>
</body>
</html>
`;

const workspace = mkdtempSync(join(tmpdir(), 'cv-print-'));
try {
    const page = join(workspace, 'cv.html');
    const pdf = join(workspace, pdfName);
    const chrome = process.env.CHROME || 'chromium';
    writeFileSync(page, html);
    copyFileSync(join(root, 'cv.css'), join(workspace, 'cv.css'));
    const result = spawnSync(chrome, [
        '--headless', '--disable-gpu', '--disable-background-networking', '--no-pdf-header-footer',
        ...(process.argv.includes('--no-sandbox') ? ['--no-sandbox'] : []),
        `--user-data-dir=${join(workspace, 'profile')}`, `--print-to-pdf=${pdf}`, pathToFileURL(page).href
    ], {encoding:'utf8', timeout:45_000});
    if (result.error || result.status !== 0) {
        throw new Error(`Chromium n’a pas produit le PDF ; définissez CHROME si nécessaire.\n${result.error?.message || result.stderr}`);
    }
    copyFileSync(page, join(root, 'cv.html'));
    copyFileSync(pdf, join(root, pdfName));
    console.log(`cv.html et ${pdfName} générés.`);
} finally {
    rmSync(workspace, {recursive:true, force:true});
}
