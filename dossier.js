(() => {
    'use strict';

    const projects = window.CV_PROJECTS;
    const data = typeof cvData === 'undefined' ? null : cvData;
    const esc = typeof cvEscape === 'undefined' ? null : cvEscape;
    const dossier = document.getElementById('dossier');
    const printButton = document.getElementById('dossier-print');
    const selection = projects?.selection;
    const params = new URLSearchParams(location.search);
    const selectionParam = params.get('selection');

    printButton.addEventListener('click', () => window.print());

    if (!Array.isArray(projects) || !selection || !data || typeof esc !== 'function') {
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

    const {storageKey: selectionKey, byId, parse: parseSelection} = selection;

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

    const tagCounts = new Map();
    for (const project of selected) {
        for (const tag of new Set(project.tags)) tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
    }
    const allTags = [...tagCounts.keys()];
    const sharedTags = allTags.filter(tag => tagCounts.get(tag) === count);
    const repoCount = selected.filter(project => project.url).length;
    const proofCount = selected.filter(project => project.proof).length;

    function plural(value, singular, pluralForm) {
        return `${value} ${value > 1 ? pluralForm : singular}`;
    }

    function cadreLabel(project) {
        return project.collection === 'cesi' ? 'Projet CESI' : 'Projet personnel';
    }

    function cadrePhrase(project) {
        return project.collection === 'cesi' ? 'projet CESI' : 'projet personnel';
    }

    function tagChip(tag, shared) {
        return `<span class="dossier-compare-tag"${shared ? ' data-shared="true"' : ''}>${esc(tag)}</span>`;
    }

    function sharedFacts() {
        const facts = [];
        if (new Set(selected.map(project => project.collection)).size === 1) {
            facts.push(`Même cadre pour tous : ${cadrePhrase(selected[0])}.`);
        }
        if (repoCount === count) facts.push('Dépôt public référencé pour chaque projet.');
        else if (repoCount === 0) facts.push('Aucun dépôt public n’est référencé.');
        if (proofCount === count) facts.push('Preuves documentées pour chaque projet.');
        else if (proofCount === 0) facts.push('Aucune preuve détaillée n’est référencée.');
        return facts;
    }

    function comparisonShared() {
        const facts = sharedFacts();
        const shared = sharedTags.length
            ? `<ul class="dossier-compare-chips">${sharedTags.map(tag => `<li>${tagChip(tag, true)}</li>`).join('')}</ul>`
            : `<p class="dossier-compare-none">Aucune étiquette n’est portée par les ${count} projets.</p>`;
        return `<section class="dossier-compare-panel" aria-labelledby="compare-shared">
            <h3 id="compare-shared">Commun aux ${count} projets</h3>
            ${shared}
            ${facts.length
                ? `<ul class="dossier-compare-facts">${facts.map(fact => `<li>${esc(fact)}</li>`).join('')}</ul>`
                : '<p class="dossier-compare-facts dossier-compare-none">Aucun cadre, dépôt ou preuve commun à tous.</p>'}
        </section>`;
    }

    function distinctNotes(project) {
        const notes = [];
        const uniqueTags = project.tags.filter(tag => tagCounts.get(tag) === 1);
        if (uniqueTags.length) {
            notes.push(`<li class="dossier-compare-notes-tags">${uniqueTags.map(tag => tagChip(tag)).join(' ')}</li>`);
        }
        if (count > 1) {
            if (new Set(selected.map(item => item.collection)).size > 1
                && selected.filter(item => item.collection === project.collection).length === 1) {
                notes.push(`<li>Seul ${cadrePhrase(project)} de la sélection.</li>`);
            }
            if (repoCount === 1 && project.url) notes.push('<li>Seul projet avec un dépôt public.</li>');
            else if (count - repoCount === 1 && !project.url) notes.push('<li>Seul projet sans dépôt public.</li>');
            if (proofCount === 1 && project.proof) notes.push('<li>Seul projet avec des preuves documentées.</li>');
            else if (count - proofCount === 1 && !project.proof) notes.push('<li>Seul projet sans preuve détaillée.</li>');
        }
        return notes;
    }

    function comparisonDistinct() {
        const rows = selected.map(project => {
            const notes = distinctNotes(project);
            return `<div class="dossier-compare-distinct-row">
                <dt>${esc(project.name)}</dt>
                <dd>${notes.length
                    ? `<ul class="dossier-compare-notes">${notes.join('')}</ul>`
                    : '<span class="dossier-compare-none">Aucun trait propre dans ces métadonnées.</span>'}</dd>
            </div>`;
        }).join('');
        return `<section class="dossier-compare-panel" aria-labelledby="compare-distinct">
            <h3 id="compare-distinct">Distinctif</h3>
            <dl class="dossier-compare-distinct">${rows}</dl>
        </section>`;
    }

    function comparisonFilter() {
        if (!allTags.length) return '';
        const chips = allTags.map(tag => {
            const uses = tagCounts.get(tag);
            return `<button type="button" class="dossier-filter-chip" data-compare-tag="${esc(tag)}" aria-pressed="false" aria-label="${esc(tag)} : portée par ${plural(uses, 'projet', 'projets')} sur ${count}">${esc(tag)}<span class="dossier-filter-count" aria-hidden="true">${uses}</span></button>`;
        }).join('');
        return `<div class="dossier-compare-filter">
            <div class="dossier-compare-filter-head">
                <p class="dossier-compare-filter-label" id="compare-filter-label">Filtrer le tableau par étiquette</p>
                <p class="dossier-compare-filter-hint">Activez une étiquette pour isoler les projets qui la portent ; activez-la à nouveau pour retirer le filtre.</p>
                <button type="button" class="dossier-compare-filter-reset" data-compare-reset hidden>Tout afficher</button>
            </div>
            <div class="dossier-filter-chips" role="group" aria-labelledby="compare-filter-label">${chips}</div>
        </div>`;
    }

    function comparisonTable() {
        const rows = [
            ['Cadre', project => esc(cadreLabel(project))],
            ['Stack', project => project.tags.length
                ? `<span class="dossier-compare-taglist">${project.tags.map(tag => tagChip(tag, tagCounts.get(tag) === count)).join('')}</span>`
                : '<span class="dossier-compare-none">Aucune étiquette</span>'],
            ['Dépôt', project => project.url
                ? externalLink('Dépôt public', project.url)
                : '<span class="dossier-compare-none">Aucun dépôt public</span>'],
            ['Preuves', project => project.proof
                ? `Documentées · ${plural(project.proof.links?.length ?? 0, 'lien', 'liens')}`
                : '<span class="dossier-compare-none">Non détaillées</span>'],
            ['Périmètre', project => esc(project.description)]
        ];
        const columns = selected.map(project => esc(project.id));
        return `<div class="dossier-compare-table-wrap" role="region" tabindex="0" aria-labelledby="compare-table-title">
            <table class="dossier-compare-table">
                <caption class="visually-hidden" id="compare-table-title">Comparaison de ${count} projets : cadre, stack, dépôt, preuves et périmètre.</caption>
                <thead>
                    <tr>
                        <th scope="col"><span class="visually-hidden">Caractéristique</span></th>
                        ${selected.map((project, index) => `<th scope="col" data-project-col="${columns[index]}">${esc(project.name)}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${rows.map(([label, value]) => `<tr>
                        <th scope="row">${label}</th>
                        ${selected.map((project, index) => `<td data-project-col="${columns[index]}">${value(project)}</td>`).join('')}
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>`;
    }

    function comparisonSection() {
        const legend = sharedTags.length
            ? `<p class="dossier-compare-legend"><span class="dossier-compare-tag" data-shared="true">Étiquette commune</span> Fond plein : étiquette portée par les ${count} projets ; contour seul : une partie de la sélection.</p>`
            : '';
        return `<section class="dossier-compare" id="comparaison" aria-labelledby="comparaison-title">
            <h2 class="dossier-section-title dossier-compare-title" id="comparaison-title">Comparer les projets</h2>
            <p class="dossier-compare-lead">${count} projets sélectionnés. Cette vue reprend uniquement les métadonnées des fiches — cadre, stack, dépôt, preuves et périmètre — sans note ni score calculé.</p>
            <div class="dossier-compare-grid">
                ${comparisonShared()}
                ${comparisonDistinct()}
            </div>
            ${comparisonFilter()}
            ${legend}
            <p class="dossier-compare-scroll-hint">Faites défiler le tableau horizontalement pour voir tous les projets.</p>
            ${comparisonTable()}
            <p class="dossier-compare-status" role="status" aria-live="polite"></p>
        </section>`;
    }

    function singleComparison(project) {
        const tags = project.tags.length
            ? `<ul class="dossier-compare-chips">${project.tags.map(tag => `<li>${tagChip(tag)}</li>`).join('')}</ul>`
            : '';
        const facts = [
            project.url ? 'Dépôt public référencé.' : 'Aucun dépôt public référencé.',
            project.proof
                ? `Preuves documentées (${plural(project.proof.links?.length ?? 0, 'lien', 'liens')}).`
                : 'Aucune preuve détaillée référencée.'
        ];
        return `<section class="dossier-compare dossier-compare-single" id="comparaison" aria-labelledby="comparaison-title">
            <h2 class="dossier-section-title dossier-compare-title" id="comparaison-title">Comparer les projets</h2>
            <p class="dossier-compare-lead"><strong>${esc(project.name)}</strong> est le seul projet sélectionné. Ajoutez un deuxième projet pour comparer les stacks, les dépôts publics et les preuves côte à côte.</p>
            <div class="dossier-compare-panel">
                <h3>Stack et preuves de ${esc(project.name)}</h3>
                ${tags}
                <ul class="dossier-compare-facts">${facts.map(fact => `<li>${esc(fact)}</li>`).join('')}</ul>
            </div>
            <p class="dossier-compare-actions"><a href="index.html#selection">Modifier la sélection</a></p>
        </section>`;
    }

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
        return `<section class="dossier-empty" id="comparaison" aria-labelledby="dossier-empty-title">
            <p class="dossier-kicker">Portfolio · Victor Noël</p>
            <h1>Dossier de projets</h1>
            <div class="dossier-empty-card">
                <h2 id="dossier-empty-title">Aucun projet sélectionné</h2>
                <p id="dossier-empty-help">${esc(notice || 'Cette page reprend uniquement les projets d’une shortlist. Composez une sélection dans le portfolio pour obtenir un dossier à transmettre ou à imprimer.')}</p>
                <p>La sélection se fait en quelques clics parmi les projets personnels et CESI, puis s’ouvre avec les preuves et les sources disponibles.</p>
                <p>La comparaison des stacks, des dépôts et des preuves s’active à partir de deux projets sélectionnés.</p>
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
            ${count === 1 ? singleComparison(selected[0]) : comparisonSection()}
            <h2 class="dossier-section-title">Projets sélectionnés</h2>
            <div class="dossier-projects">${selected.map(projectArticle).join('')}</div>
            <footer class="dossier-footer">
                <p>Dossier composé depuis le portfolio interactif de Victor Noël.</p>
                <p>${externalLink('Portfolio', data.portfolio)} · CV complet : <a href="CV_Victor_NOEL.pdf">CV_Victor_NOEL.pdf</a></p>
            </footer>
        </div>`;
    }

    const compare = document.getElementById('comparaison');
    if (compare && count > 1) {
        const status = compare.querySelector('.dossier-compare-status');
        const chips = Array.from(compare.querySelectorAll('[data-compare-tag]'));
        const reset = compare.querySelector('[data-compare-reset]');
        const columns = Array.from(compare.querySelectorAll('[data-project-col]'));
        let activeTag = '';

        const applyTag = tag => {
            activeTag = tag;
            chips.forEach(chip => chip.setAttribute('aria-pressed', String(chip.dataset.compareTag === tag)));
            const matching = tag ? selected.filter(project => project.tags.includes(tag)) : [];
            columns.forEach(cell => {
                cell.classList.toggle('is-filtered-out', Boolean(tag) && !matching.some(project => project.id === cell.dataset.projectCol));
            });
            if (reset) reset.hidden = !tag;
            status.textContent = tag
                ? `Étiquette « ${tag} » : ${matching.map(project => project.name).join(', ')} — ${plural(matching.length, 'projet', 'projets')} sur ${count}.`
                : 'Tous les projets sont affichés.';
        };

        compare.addEventListener('click', event => {
            const chip = event.target.closest('[data-compare-tag]');
            if (chip) {
                const tag = chip.dataset.compareTag;
                applyTag(activeTag === tag ? '' : tag);
                return;
            }
            if (event.target.closest('[data-compare-reset]')) applyTag('');
        });
    }

    if (location.hash === '#comparaison') {
        const target = document.getElementById('comparaison');
        if (target) {
            const focusTarget = target.querySelector('h2') || target.querySelector('h1') || target;
            if (focusTarget !== target && !focusTarget.hasAttribute('tabindex')) focusTarget.setAttribute('tabindex', '-1');
            const focusHeading = () => {
                const active = document.activeElement;
                if (!active || active === document.body || active === document.documentElement) {
                    focusTarget.focus({preventScroll: true});
                }
            };
            requestAnimationFrame(() => {
                focusTarget.focus({preventScroll: true});
                target.scrollIntoView({block: 'start'});
            });
            // Chrome resolves the fragment after the initial paint; restore focus
            // to the heading unless the visitor has already moved it.
            window.addEventListener('load', () => setTimeout(focusHeading, 120), {once: true});
        }
    }

    const wantsPrint = params.get('print') === '1';
    if (wantsPrint && count) {
        const launch = () => window.print();
        if (document.fonts?.ready) document.fonts.ready.then(() => setTimeout(launch, 80));
        else setTimeout(launch, 120);
    }
})();
