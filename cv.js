// Progressive enhancement for the text CV. The static page is the complete CV;
// this script only adds tag and public-repository filters to the projects list.
(() => {
    'use strict';

    const explorer = document.getElementById('cv-explorer');
    const list = document.getElementById('projets-liste');
    const section = document.getElementById('projets');
    if (!explorer || !list) return;

    const projects = Array.from(list.children).filter(child => child.classList.contains('cv-project'));
    if (!projects.length) return;

    const chipGroup = explorer.querySelector('.cv-explorer-tags');
    const status = explorer.querySelector('.cv-explorer-status');
    const reset = explorer.querySelector('[data-cv-reset]');
    const publicOnly = explorer.querySelector('[data-cv-public]');
    const publicLabel = publicOnly?.closest('label');
    if (!chipGroup || !status || !reset || !publicOnly) return;

    const tagsByProject = new Map();
    const counts = new Map();
    for (const project of projects) {
        const tags = (project.dataset.tags || '').split('|').filter(Boolean);
        tagsByProject.set(project, tags);
        for (const tag of tags) counts.set(tag, (counts.get(tag) || 0) + 1);
    }
    const orderedTags = [...counts.keys()].sort((a, b) => (counts.get(b) - counts.get(a)) || a.localeCompare(b, 'fr'));
    const chips = new Map();

    for (const tag of orderedTags) {
        const uses = counts.get(tag);
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'cv-tag';
        chip.dataset.cvTag = tag;
        chip.setAttribute('aria-pressed', 'false');
        chip.setAttribute('aria-label', `${tag} : ${uses} ${uses > 1 ? 'projets' : 'projet'}`);
        const text = document.createElement('span');
        text.textContent = tag;
        const count = document.createElement('span');
        count.className = 'cv-tag-count';
        count.setAttribute('aria-hidden', 'true');
        count.textContent = String(uses);
        chip.append(text, count);
        chipGroup.append(chip);
        chips.set(tag, chip);
    }

    const canFilterPublic = projects.some(project => project.dataset.code !== 'public');
    if (!canFilterPublic) publicLabel?.remove();

    let activeTags = new Set();
    let onlyPublic = false;
    let unknownTags = [];

    function readState() {
        const params = new URLSearchParams(location.search);
        activeTags = new Set();
        unknownTags = [];
        for (const tag of params.getAll('tag')) {
            if (!tag) continue;
            if (!chips.has(tag)) {
                if (!unknownTags.includes(tag)) unknownTags.push(tag);
            } else {
                activeTags.add(tag);
            }
        }
        onlyPublic = canFilterPublic && params.get('code') === 'public';
    }

    function writeUrl(push) {
        const url = new URL(location.href);
        url.searchParams.delete('tag');
        url.searchParams.delete('code');
        for (const tag of orderedTags) {
            if (activeTags.has(tag)) url.searchParams.append('tag', tag);
        }
        if (onlyPublic) url.searchParams.set('code', 'public');
        if (activeTags.size || onlyPublic) {
            const target = url.hash ? document.getElementById(url.hash.slice(1)) : null;
            if (!target || !target.classList.contains('cv-project') || target.hidden) url.hash = 'projets';
        }
        try {
            if (push) history.pushState(null, '', url.href);
            else history.replaceState(null, '', url.href);
        } catch {
            // Filtering still works when the page runs from a context without history URLs (file://).
        }
    }

    function updateStatus(visible) {
        const active = orderedTags.filter(tag => activeTags.has(tag));
        const tagPhrase = active.length === 1
            ? `l’étiquette « ${active[0]} »`
            : active.length ? `les étiquettes ${active.map(tag => `« ${tag} »`).join(' et ')}` : '';
        const filterPhrase = tagPhrase && onlyPublic
            ? `${tagPhrase} ainsi qu’un dépôt public`
            : tagPhrase || 'un dépôt public';
        let message;
        if (!active.length && !onlyPublic) {
            message = visible.length === 1 ? '1 projet affiché.' : `${visible.length} projets affichés.`;
        } else if (!visible.length) {
            message = `Aucun projet ne combine ${filterPhrase}.`;
        } else {
            message = `${visible.length > 1 ? `${visible.length} projets` : '1 projet'} sur ${projects.length} avec ${filterPhrase}.`;
        }
        if (unknownTags.length) {
            message += ` ${unknownTags.length > 1 ? 'Étiquettes inconnues ignorées' : 'Étiquette inconnue ignorée'} : ${unknownTags.map(tag => `« ${tag} »`).join(', ')}.`;
        }
        status.textContent = message;
    }

    function apply({push = false, sync = false} = {}) {
        const visible = projects.filter(project => {
            if (onlyPublic && project.dataset.code !== 'public') return false;
            return [...activeTags].every(tag => tagsByProject.get(project).includes(tag));
        });
        const visibleSet = new Set(visible);
        projects.forEach(project => { project.hidden = !visibleSet.has(project); });
        chips.forEach((chip, tag) => chip.setAttribute('aria-pressed', String(activeTags.has(tag))));
        publicOnly.checked = onlyPublic;
        reset.hidden = !activeTags.size && !onlyPublic;
        updateStatus(visible);
        if (sync) writeUrl(push);
    }

    chipGroup.addEventListener('click', event => {
        const chip = event.target.closest('[data-cv-tag]');
        if (!chip) return;
        unknownTags = [];
        const tag = chip.dataset.cvTag;
        if (activeTags.has(tag)) activeTags.delete(tag);
        else activeTags.add(tag);
        apply({push:true, sync:true});
    });

    publicOnly.addEventListener('change', () => {
        unknownTags = [];
        onlyPublic = publicOnly.checked;
        apply({push:true, sync:true});
    });

    reset.addEventListener('click', () => {
        unknownTags = [];
        activeTags.clear();
        onlyPublic = false;
        apply({push:true, sync:true});
        const first = orderedTags.map(tag => chips.get(tag)).find(chip => chip);
        first?.focus({preventScroll:true});
    });

    window.addEventListener('popstate', () => {
        readState();
        apply();
    });

    // A skill example may point at a project hidden by the current filter.
    document.addEventListener('click', event => {
        const link = event.target.closest('a[href^="#projet-"]');
        if (!link) return;
        const target = document.getElementById(link.hash.slice(1));
        if (!target || !target.hidden) return;
        unknownTags = [];
        activeTags.clear();
        onlyPublic = false;
        apply({sync:true});
    });

    readState();
    const hasFilter = activeTags.size > 0 || onlyPublic;
    apply();
    explorer.hidden = false;
    if (hasFilter && !location.hash) {
        requestAnimationFrame(() => section?.scrollIntoView({block:'start'}));
    }
})();
