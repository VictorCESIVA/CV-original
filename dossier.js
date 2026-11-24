(() => {
    'use strict';

    const projects = window.CV_PROJECTS;
    const data = typeof cvData === 'undefined' ? null : cvData;
    const esc = typeof cvEscape === 'undefined' ? null : cvEscape;
    const dossier = document.getElementById('dossier');
    const printButton = document.getElementById('dossier-print');
    const selectionKey = 'cv-noel:selection-v1';
    const params = new URLSearchParams(location.search);
    const selectionParam = params.get('selection');
    const byId = new Map((Array.isArray(projects) ? projects : []).map(project => [project.id, project]));

    printButton.addEventListener('click', () => window.print());

    if (!Array.isArray(projects) || !data || typeof esc !== 'function') {
        printButton.disabled = true;
        printButton.textContent = 'Dossier indisponible';
        dossier.innerHTML = `<section class="dossier-empty">
            <p class="dossier-kicker">Portfolio · Victor Noël</p>
            <h1>Dossier indisponible</h1>
            <div class="dossier-empty-card">
                <h2>Les données du portfolio n’ont pas pu être chargées.</h2>
                <p>Rouvrez le dossier depuis la sélection du portfolio. La version texte reste consultable sans JavaScript.</p>
                <p class="dossier-empty-actions"><a href="index.html#selection">Retour à la sélection</a> <a href="cv.html#projets">Voir les projets</a></p>
            </div>
        </section>`;
        return;
    }

    function parseSelection(value) {
        const ids = [];
        let invalid = 0;
        if (!value) return {ids, invalid};
        const seen = new Set();
        for (const candidate of value.split(',')) {
            const id = candidate.trim();
            if (!id) continue;
            if (!byId.has(id)) {
                invalid++;
            } else if (!seen.has(id)) {
                seen.add(id);
                ids.push(id);
            }
        }
        return {ids, invalid};
    }

    let selectedIds = [];
    let notice = '';
    if (selectionParam === null) {
        try {
            selectedIds = parseSelection(localStorage.getItem(selectionKey)).ids;
        } catch { /* The dossier still renders when storage is blocked. */ }
    } else {
        const parsed = parseSelection(selectionParam);
        selectedIds = parsed.ids;
        if (parsed.invalid) {
            notice = `${parsed.invalid} identifiant${parsed.invalid > 1 ? 's' : ''} de ce lien n’${parsed.invalid > 1 ? 'ont' : 'a'} pas été reconnu${parsed.invalid > 1 ? 's' : ''} et ${parsed.invalid > 1 ? 'ont' : 'a'} été ignoré${parsed.invalid > 1 ? 's' : ''}.`;
        } else if (!selectedIds.length) {
            notice = 'Ce lien ne contient aucun projet sélectionné.';
        }
    }

    const selected = selectedIds.map(id => byId.get(id)).filter(Boolean);
    const count = selected.length;

    function displayUrl(href) {
        return String(href).replace(/^https?:\/\//, '').replace(/\/$/, '');
    }

    function externalLink(label, href) {
        return `<a href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)}<span class="link-arrow" aria-hidden="true">↗</span></a>`;
    }

    function identityHeader() {
        const contact = [
            ['E-mail', `mailto:${data.email}`, data.email, false],
            ['LinkedIn', data.linkedin, displayUrl(data.linkedin), true],
            ['GitHub', data.github, displayUrl(data.github), true],
            ['Portfolio', data.portfolio, displayUrl(data.portfolio), true]
        ].map(([label, href, text, external]) => `<div><dt>${esc(label)}</dt><dd><a href="${esc(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(text)}</a></dd></div>`).join('');
        return `<header class="dossier-header">
            <p class="dossier-kicker">Dossier de candidature · CESI Lille</p>
            <h1 id="dossier-title">${esc(data.name)}</h1>
            <p class="dossier-role">${esc(data.role)} · ${esc(data.specialty)}</p>
            <p class="dossier-summary">${esc(data.summary)}</p>
            <dl class="dossier-contact">
                ${contact}
                <div><dt>Localisation</dt><dd>${esc(data.location)}</dd></div>
                <div><dt>Mobilité</dt><dd>${esc(data.mobility)}</dd></div>
            </dl>
        </header>`;
    }

    function projectLinks(project) {
        const proofLinks = project.proof?.links ?? [];
        const links = proofLinks.map(([label, href]) => `<li>${externalLink(label, href)}</li>`);
        if (project.url) links.push(`<li>${externalLink('Code source', project.url)}</li>`);
        if (!links.length) {
            return '<p class="dossier-no-links">Aucun dépôt public ni document complémentaire n’est référencé pour ce projet.</p>';
        }
        return `<h4 class="dossier-links-label">Liens du projet</h4><ul class="dossier-links">${links.join('')}</ul>`;
    }

    function projectArticle(project, index) {
        const context = project.collection === 'cesi' ? 'Projet CESI' : 'Projet personnel';
        const proof = project.proof ? `<section class="dossier-proof" aria-label="Preuves et documentation">
            <h4>Preuves et documentation</h4>
            <p>${esc(project.proof.detail)}</p>
        </section>` : '';
        return `<article class="dossier-project" aria-labelledby="projet-${esc(project.id)}">
            <p class="dossier-project-meta">${esc([context, ...project.tags].join(' · '))}</p>
            <h3 id="projet-${esc(project.id)}">${index + 1}. ${esc(project.name)}</h3>
            <p class="dossier-project-description">${esc(project.description)}</p>
            ${proof}
            ${projectLinks(project)}
        </article>`;
    }

    function emptyState() {
        printButton.disabled = true;
        printButton.textContent = 'Aucun projet à imprimer';
        printButton.setAttribute('aria-describedby', 'dossier-empty-help');
        return `<section class="dossier-empty">
            <p class="dossier-kicker">Portfolio · Victor Noël</p>
            <h1>Dossier de projets</h1>
            <div class="dossier-empty-card">
                <h2>Aucun projet sélectionné</h2>
                <p id="dossier-empty-help">${esc(notice || 'Cette page reprend uniquement les projets d’une shortlist. Composez une sélection dans le portfolio pour obtenir un dossier à transmettre ou à imprimer.')}</p>
                <p>La sélection se fait en quelques clics parmi les projets personnels et CESI, puis s’ouvre avec les preuves et les sources disponibles.</p>
                <p class="dossier-empty-actions"><a href="index.html#selection">Composer une sélection</a> <a href="cv.html#projets">Voir tous les projets</a></p>
            </div>
            <p class="dossier-empty-contact">${esc(data.name)} · <a href="mailto:${esc(data.email)}">${esc(data.email)}</a> · ${esc(data.location)}</p>
        </section>`;
    }

    if (!count) {
        document.title = 'Dossier de projets · Victor Noël';
        dossier.innerHTML = emptyState();
    } else {
        document.title = `Dossier de ${count} projet${count > 1 ? 's' : ''} · ${data.name}`;
        dossier.innerHTML = `<div class="dossier-paper">
            ${identityHeader()}
            ${notice ? `<p class="dossier-warning" role="status">${esc(notice)}</p>` : ''}
            <div class="dossier-intro">
                <p><strong>Projets sélectionnés pour ce dossier.</strong> Seuls les projets de la shortlist figurent ci-dessous, avec leurs preuves et leurs sources.</p>
                <span class="dossier-count">${count} projet${count > 1 ? 's' : ''}</span>
            </div>
            <h2 class="dossier-section-title">Projets sélectionnés</h2>
            <div class="dossier-projects">${selected.map(projectArticle).join('')}</div>
            <footer class="dossier-footer">
                <p>Dossier composé depuis le portfolio interactif de Victor Noël.</p>
                <p>${externalLink('Portfolio', data.portfolio)} · CV complet : <a href="CV_Victor_NOEL.pdf">CV_Victor_NOEL.pdf</a></p>
            </footer>
        </div>`;
    }

    const wantsPrint = params.get('print') === '1';
    if (wantsPrint && count) {
        const launch = () => window.print();
        if (document.fonts?.ready) document.fonts.ready.then(() => setTimeout(launch, 80));
        else setTimeout(launch, 120);
    }
})();
