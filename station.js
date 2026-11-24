// Virtual keys and physical keys share the terminal's input and submit path.
const keyboard = document.querySelector('#keyboard');
const keys = new Map();
let shift = false;
const digitBase = ['à','&','é','"',"'",'(','-','è','_','ç'];
const symbolBase = { ',':'?', ';':'.', ':':'/', '!':'§', 'ù':'%', ')':'°', '=':'+', '^':'¨', '$':'£' };
const rows = [
    ['Escape', ...'1234567890', ')', '=', 'Backspace'],
    [...'azertyuiop', '^', '$'],
    [...'qsdfghjklm', 'ù', 'Enter'],
    ['Shift', ...'wxcvbn', ',', ';', ':', '!'],
    ['Home', 'End', ' ', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'Delete']
];
const labels = { Escape:'Échap', Home:'Début', End:'Fin', Delete:'Suppr', Backspace:'⌫', Enter:'Entrée', Shift:'Maj', ArrowLeft:'←', ArrowUp:'↑', ArrowDown:'↓', ArrowRight:'→', ' ':'Espace' };
const names = { Backspace:'Effacer', ArrowLeft:'Curseur à gauche', ArrowRight:'Curseur à droite', ArrowUp:'Commande précédente', ArrowDown:'Commande suivante' };
const screens = {
    home: document.getElementById('screen-home'),
    dossier: document.getElementById('screen-dossier'),
    terminal: document.getElementById('screen-terminal')
};
const screenLabels = {home:'ACCUEIL', dossier:'DOSSIERS', terminal:'TERMINAL'};
let activeScreen = 'home';
const screenMode = document.getElementById('screen-mode');
const screenTabs = document.querySelectorAll('[data-screen]');
const homeTab = document.querySelector('[data-screen="home"]');

function showScreen(mode) {
    if (mode !== activeScreen) {
        screens[activeScreen].hidden = true;
        screens[mode].hidden = false;
        activeScreen = mode;
        screenMode.textContent = screenLabels[mode];
        screenTabs.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.screen === mode)));
    }
    if (mode !== 'terminal') stopMatrix();
}

screenTabs.forEach(button => button.addEventListener('click', () => navigateScreen(button.dataset.screen)));

function isPlainClick(event) {
    return event.button === 0 && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey;
}

for (const row of rows) {
    const line = document.createElement('div');
    line.className = 'key-row';
    for (const key of row) {
        const button = document.createElement('button');
        button.type = 'button';
        button.tabIndex = -1; // The physical keyboard uses the terminal input directly.
        button.className = 'key';
        button.dataset.key = key;
        const digit=/^[0-9]$/.test(key);
        button.textContent = digit ? digitBase[Number(key)] : labels[key] || key.toUpperCase();
        if (digit || symbolBase[key]) button.dataset.upper = digit ? key : symbolBase[key];
        button.setAttribute('aria-label', names[key] || button.textContent);
        if (key.length > 1) button.classList.add('wide');
        if (key === ' ') button.classList.add('space');
        if (key === 'Shift') button.setAttribute('aria-pressed','false');
        button.addEventListener('pointerdown', e => {
            e.preventDefault();
            button.setPointerCapture(e.pointerId);
            button.classList.add('pressed');
        });
        button.addEventListener('lostpointercapture', () => button.classList.remove('pressed'));
        button.addEventListener('click', () => typeKey(key));
        keys.set(key, button);
        line.append(button);
    }
    keyboard.append(line);
}

function typeKey(key) {
    navigateScreen('terminal');
    let start = input.selectionStart;
    const end = input.selectionEnd;
    if (key === 'Escape') {
        input.value = '';
    } else if (key === 'Home' || key === 'End') {
        const pos = key === 'Home' ? 0 : input.value.length;
        input.setSelectionRange(pos,pos);
    } else if (key === 'Delete') {
        input.setRangeText('',start,start === end ? Math.min(end+1,input.value.length) : end,'end');
    } else if (key === 'Shift') {
        shift = !shift;
        keys.get(key).setAttribute('aria-pressed', String(shift));
        keys.get(key).classList.toggle('on', shift);
    } else if (key === 'Enter') {
        submitCommand();
    } else if (key === 'ArrowUp' || key === 'ArrowDown') {
        recallCommand(key === 'ArrowUp' ? -1 : 1);
    } else if (key === 'ArrowLeft' || key === 'ArrowRight') {
        const pos = key === 'ArrowLeft' ? (start !== end ? start : Math.max(0,start-1))
            : (start !== end ? end : Math.min(input.value.length,end+1));
        input.setSelectionRange(pos,pos);
    } else {
        if (key === 'Backspace' && start === end) start = Math.max(0,start-1);
        let typed = key;
        if (/^[0-9]$/.test(key)) typed = shift ? key : digitBase[Number(key)];
        else if (shift) typed = symbolBase[key] || key.toUpperCase();
        input.setRangeText(key === 'Backspace' ? '' : typed, start,end,'end');
        if (shift) typeKey('Shift');
    }
}
const down = new Map();
function matchingKey(e) {
    if (/^Digit[0-9]$/.test(e.code)) return keys.get(e.code.slice(-1));
    if (keys.has(e.key)) return keys.get(e.key);
    const unshifted=Object.keys(symbolBase).find(key=>symbolBase[key]===e.key);
    return keys.get(e.key.toLowerCase()) || keys.get(unshifted);
}
document.addEventListener('keydown', e => {
    if (e.target !== input || e.isComposing) return;
    const button = matchingKey(e);
    if (button) {
        down.set(e.code,button);
        button.classList.add('on');
    }
});
document.addEventListener('keyup', e => {
    const button = down.get(e.code);
    down.delete(e.code);
    if (button && ![...down.values()].includes(button) && !(button.dataset.key === 'Shift' && shift))
        button.classList.remove('on');
});
document.querySelectorAll('[data-command]').forEach(button => {
    button.addEventListener('click', () => submitCommand(button.dataset.command));
});

const mouse = document.querySelector('#mouse');
const screenFrame = document.querySelector('.screen');
const pointer = document.querySelector('#screen-pointer');
const mouseButtons = ['left','wheel','right'].map(name => mouse.querySelector('.'+name));
let drag = null;
let moved = false;
let x = .5, y = .5;
const dossierScroll = document.getElementById('dossier-scroll');
const scrollAreas = {home:screens.home, dossier:dossierScroll, terminal:terminalBody};
const scrollArea = () => scrollAreas[activeScreen];
function showPointer() {
    pointer.hidden = false;
    pointer.style.left = (x*screenFrame.clientWidth)+'px';
    pointer.style.top = (y*screenFrame.clientHeight)+'px';
}
mouse.addEventListener('pointerdown', e => {
    if (e.button !== 0) return;
    moved = false;
    drag = {id:e.pointerId, startX:e.clientX, startY:e.clientY, x,y};
    e.target.setPointerCapture(e.pointerId);
});
document.addEventListener('pointermove', e => {
    if (!document.body.classList.contains('spatial') && !reducedMotion.matches && e.pointerType !== 'touch') {
        mouse.style.setProperty('--mx', ((e.clientX/innerWidth-.5)*18)+'px');
        mouse.style.setProperty('--my', ((e.clientY/innerHeight-.5)*12)+'px');
    }
    if (!drag || drag.id !== e.pointerId) return;
    const dx = e.clientX-drag.startX, dy = e.clientY-drag.startY;
    if (Math.hypot(dx,dy)>3) moved = true;
    if (moved) {
        x = Math.min(.99,Math.max(0,drag.x+dx*2/screenFrame.clientWidth));
        y = Math.min(.99,Math.max(0,drag.y+dy*2/screenFrame.clientHeight));
        showPointer();
    }
});
document.querySelector('.station').addEventListener('pointerdown', e => mouseButtons[e.button]?.classList.add('on'));
function releaseMouse() {
    drag = null;
    mouseButtons.forEach(button => button.classList.remove('on'));
}
document.addEventListener('pointerup',releaseMouse);
document.addEventListener('pointercancel',releaseMouse);
mouse.addEventListener('click', e => {
    if (moved && e.detail) return;
    if (e.target === mouseButtons[1]) {
        const area = scrollArea();
        area.scrollBy(0, area.clientHeight * .75);
    } else if (e.target === mouseButtons[0]) {
        showPointer();
        const rect = pointer.getBoundingClientRect();
        const hit = document.elementFromPoint(rect.left, rect.top)?.closest('a,button,input,summary');
        if (screenFrame.contains(hit)) {
            if (hit === input) input.focus({preventScroll:true});
            else hit.click();
        }
    } else if (e.target === mouseButtons[2]) navigateScreen('terminal');
});
let wheelTimer;
mouse.addEventListener('wheel', e => {
    e.preventDefault();
    mouseButtons[1].classList.add('on');
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => mouseButtons[1].classList.remove('on'),130);
    const area = scrollArea();
    area.scrollBy(0,e.deltaY*(e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? area.clientHeight : 1));
},{passive:false});
window.addEventListener('blur', () => {
    releaseMouse();
    down.clear();
    keys.forEach((button,key) => button.classList.toggle('on',key === 'Shift' && shift));
});

const projects = window.CV_PROJECTS;
const collectionNames = { perso:'Projets personnels', cesi:'Projets CESI' };
const projectRoute = id => `projet-${id}`;
const projectPage = id => `cv.html#${projectRoute(id)}`;
const projectsByRoute = new Map(projects.map(project => [projectRoute(project.id), project]));
const projectGroups = Object.entries(collectionNames).map(([collection, title]) => ({
    title, items: projects.filter(project => project.collection === collection)
}));

function projectCatalog(onScreen) {
    return projectGroups.map(({title, items}) => `${cvSection(title)}<div class="project-grid">${items.map(project => {
        const key = cvEscape(projectRoute(project.id));
        const target = onScreen ? `href="#${key}" data-dossier="${key}"` : `href="${cvEscape(projectPage(project.id))}"`;
        return `<article class="catalog-card"><a class="catalog-title" ${target}>${cvEscape(project.name)}</a>
            <p>${cvEscape(project.description)}</p><small>${cvEscape(project.tags.join(' · '))}</small></article>`;
    }).join('')}</div>`).join('') + cv.otherProjects;
}
cv.projects = projectCatalog(true);

function projectRow({id, name, tags}) {
    const key = cvEscape(projectRoute(id));
    return `<li><a href="#${key}" data-dossier="${key}">
        <span>${cvEscape(name)}</span><small>${cvEscape(tags[0])}</small>
    </a></li>`;
}

function projectFile({id, collection, description, tags, url, proof}) {
    const external = (href, label) => `<a href="${cvEscape(href)}" target="_blank" rel="noopener noreferrer">${cvEscape(label)} <span aria-hidden="true">↗</span></a>`;
    return `<p class="project-file-path">C:\\CV\\PROJETS\\${cvEscape(id.toUpperCase())}.NFO</p>
        ${proof ? `<section class="project-proof">
            <h3 class="section-title">Preuves et documentation</h3>
            <div class="project-file-links">${proof.links.map(([label, href]) => external(href, label)).join('')}</div>
            <p>${cvEscape(proof.detail)}</p>
        </section>` : ''}
        <p>${cvEscape(description)}</p>
        <p class="project-file-tags">${cvEscape([collection === 'cesi' ? 'Projet CESI' : 'Projet personnel', ...tags].join(' · '))}</p>
        <nav class="project-file-links" aria-label="Navigation de la fiche">
            <a href="#projets" data-dossier="projets"><span aria-hidden="true">←</span> Tous les projets</a>
            ${url ? external(url, 'Code source') : ''}
        </nav>`;
}

const dossiers = {
    parcours: cv.xp + cv.education,
    projets: projectGroups.map(({title, items}) =>
        `${cvSection(title)}<ul class="dossier-projects">${items.map(projectRow).join('')}</ul>`
    ).join('') + cv.otherProjects,
    competences: cv.skills + cv.certifications,
    contact: cvContact
};
const dossierTitle = document.getElementById('dossier-title');
const dossierMenu = document.getElementById('dossier-menu');
const dossierSummary = dossierMenu.querySelector('summary');
const dossierNav = dossierMenu.querySelector('nav');
const dossierCurrent = document.getElementById('dossier-current');
const dossierContent = document.getElementById('dossier-content');
const dossierLink = document.getElementById('dossier-link');
const dossierFiles = new Map();
let currentFile;
let currentDossierKey;
let dossierOpener;

for (const launcher of screens.home.querySelectorAll('.home-launchers a[data-dossier]')) {
    const key = launcher.dataset.dossier;
    const name = launcher.querySelector('strong').textContent;
    const textHref = launcher.href;
    launcher.href = `#${key}`;
    launcher.setAttribute('aria-controls', 'screen-dossier');
    const item = document.createElement('a');
    item.href = launcher.href;
    item.dataset.dossier = key;
    item.textContent = name;
    dossierFiles.set(key, {name, textHref, item, launcher});
    dossierNav.append(item);
}

function showRoute(key, moveFocus, trigger) {
    const project = projectsByRoute.get(key);
    const file = dossierFiles.get(project ? 'projets' : key);
    if (file) {
        dossierOpener = trigger && screens.home.contains(trigger) ? trigger : file.launcher;
        const newRoute = currentDossierKey !== key;
        if (newRoute) {
            if (currentFile !== file) {
                currentFile?.item.removeAttribute('aria-current');
                file.item.setAttribute('aria-current', 'page');
                currentFile = file;
                dossierCurrent.textContent = file.name;
            }
            currentDossierKey = key;
            dossierTitle.textContent = project ? project.name : file.name;
            dossierLink.href = project ? projectPage(project.id) : file.textHref;
            dossierContent.innerHTML = project ? projectFile(project)
                : (key === 'selection' ? selectionFile() : dossiers[key]);
        }
        showScreen('dossier');
        if (newRoute) dossierScroll.scrollTop = 0;
        dossierMenu.open = false;
        screenFrame.dispatchEvent(new Event('cv:read-screen'));
        if (moveFocus) dossierTitle.focus({preventScroll:true});
    } else if (key === 'terminal') {
        const entering = activeScreen !== 'terminal';
        showScreen('terminal');
        if (entering) screenFrame.dispatchEvent(new Event('cv:read-screen'));
        if (moveFocus) input.focus({preventScroll:true});
    } else {
        const previous = activeScreen;
        showScreen('home');
        if (!moveFocus) return;
        if (previous === 'dossier') dossierOpener.focus({preventScroll:true});
        if (previous === 'terminal') homeTab.focus({preventScroll:true});
    }
}

function navigateScreen(key, trigger) {
    const hash = key === 'home' ? '' : `#${key}`;
    const url = new URL(location.href);
    if (key === 'selection') {
        if (selectionIds.length) url.searchParams.set('selection', selectionIds.join(','));
        else url.searchParams.delete('selection');
    } else {
        url.searchParams.delete('selection');
    }
    url.hash = hash;
    if (url.href !== location.href) history.pushState(null, '', url);
    showRoute(key, true, trigger);
}

document.addEventListener('click', event => {
    const launcher = event.target.closest('a[data-dossier]');
    if (!launcher || !isPlainClick(event)) return;
    event.preventDefault();
    if (guide.contains(launcher)) guide.close();
    const fromIndex = Boolean(launcher.closest('.project-index'));
    navigateScreen(launcher.dataset.dossier, launcher);
    if (fromIndex) window.scrollTo(0, 0);
});
dossierMenu.addEventListener('focusout', ({relatedTarget}) => {
    if (relatedTarget && !dossierMenu.contains(relatedTarget)) dossierMenu.open = false;
});
document.addEventListener('click', ({target}) => {
    if (dossierMenu.open && !dossierMenu.contains(target)) dossierMenu.open = false;
});
screens.dossier.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    if (dossierMenu.open) {
        dossierMenu.open = false;
        dossierSummary.focus({preventScroll:true});
    } else if (projectsByRoute.has(currentDossierKey)) {
        const projectKey = currentDossierKey;
        navigateScreen('projets');
        dossierContent.querySelector(`a[data-dossier="${projectKey}"]`).focus();
    } else {
        navigateScreen('home');
    }
});
window.addEventListener('hashchange', () => showRoute(location.hash.slice(1), true));

window.addEventListener('cv:open-project', ({detail}) => {
    const key = projectRoute(detail);
    if (projectsByRoute.has(key)) navigateScreen(key);
});
const projectIndex = document.querySelector('.project-index');
for (const {title,items} of projectGroups) {
    const group = document.createElement('section');
    const heading = document.createElement('h2');
    heading.textContent = title;
    group.append(heading);
    for (const project of items) {
        const link = document.createElement('a');
        link.dataset.dossier = projectRoute(project.id);
        link.href = `#${link.dataset.dossier}`;
        link.textContent = project.name;
        const tech = document.createElement('small');
        tech.textContent = project.tags[0];
        link.append(tech);
        group.append(link);
    }
    projectIndex.append(group);
}

const guide = document.getElementById('site-guide');
const guideButton = document.getElementById('open-guide');
const guideButtons = document.querySelectorAll('[data-guide]');
document.getElementById('home-project-count').textContent = `${projects.length} réalisations`;
for (const link of document.querySelectorAll('.desk-projects,.guide-example')) {
    link.href = `#${link.dataset.dossier}`;
    link.setAttribute('aria-controls', 'screen-dossier');
}
const resume = document.getElementById('resume-dialog');
const resumeContent = resume.querySelector('.resume-content');
const {date:missionDate, title:missionTitle, tags:missionTags} = cvData.experience[0];
const homeMission = document.getElementById('home-mission');
homeMission.href = dossierFiles.get(homeMission.dataset.dossier).launcher.href;
homeMission.setAttribute('aria-controls', 'screen-dossier');
document.getElementById('home-mission-title').textContent = missionTitle.split(' — ', 1)[0];
homeMission.hidden = false;
document.getElementById('resume-mission-date').textContent = `Expérience récente · ${missionDate}`;
document.getElementById('resume-mission-title').textContent = missionTitle;
document.getElementById('resume-mission-tags').textContent = missionTags.join(' · ');
document.getElementById('resume-summary').textContent = cvData.summary;
document.getElementById('resume-email').href = `mailto:${cvData.email}`;
document.getElementById('resume-timeline').innerHTML = dossiers.parcours;
document.getElementById('resume-projects').innerHTML = projectCatalog(false);
document.getElementById('resume-skills').innerHTML = cvGroups('Technologies en pratique', cvData.skills) + cv.certifications;
document.getElementById('resume-contact-details').innerHTML = dossiers.contact;

const shareButton = document.getElementById('share-dossier');
const shareDialog = document.getElementById('share-dialog');
const shareTitle = document.getElementById('share-title');
const shareUrl = document.getElementById('share-url');
const shareFeedback = document.getElementById('share-feedback');
shareButton.hidden = typeof shareDialog.showModal !== 'function';

function openShare(url, title) {
    shareTitle.textContent = title;
    shareUrl.value = url;
    shareFeedback.textContent = '';
    if (!shareDialog.open) shareDialog.showModal();
}

shareButton.addEventListener('click', () => {
    if (currentDossierKey === 'selection') {
        if (!selectionIds.length) {
            openSelectionDialog();
            return;
        }
        openShare(selectionShareUrl(), 'Partager : Sélection de projets');
        return;
    }
    const url = new URL(cvData.portfolio);
    url.hash = currentDossierKey;
    openShare(url.href, `Partager : ${dossierTitle.textContent}`);
});
document.getElementById('share-copy').addEventListener('click', async () => {
    const url = shareUrl.value;
    let copied = false;
    try {
        await navigator.clipboard.writeText(url);
        copied = true;
    } catch { /* Manual selection also works when the clipboard is blocked. */ }
    if (!shareDialog.open || shareUrl.value !== url) return;
    if (!copied) {
        shareUrl.focus();
        shareUrl.select();
    }
    shareFeedback.textContent = copied ? 'Lien copié.' : 'Copie automatique indisponible. Copiez le lien sélectionné.';
});

/* Sélection de projets : shortlist autonome partageable via ?selection=identifiant,identifiant */
const selectionDialog = document.getElementById('selection-dialog');
const selectionButton = document.getElementById('open-selection');
const selectionBadge = document.getElementById('selection-badge');
const selectionGroups = document.getElementById('selection-groups');
const selectionStatus = document.getElementById('selection-status');
const selectionView = document.getElementById('selection-view');
const selectionPrint = document.getElementById('selection-print');
const selectionShareButton = document.getElementById('selection-share');
const selectionClear = document.getElementById('selection-clear');
const selectionSupported = typeof selectionDialog.showModal === 'function';
const selectionKey = 'cv-noel:selection-v1';
const projectsById = new Map(projects.map(project => [project.id, project]));
let selectionIds = [];
let selectionNotice = '';

function parseSelection(value) {
    const ids = [];
    let invalid = 0;
    if (!value) return {ids, invalid};
    const seen = new Set();
    for (const candidate of value.split(',')) {
        const id = candidate.trim();
        if (!id) continue;
        if (!projectsById.has(id)) {
            invalid++;
        } else if (!seen.has(id)) {
            seen.add(id);
            ids.push(id);
        }
    }
    return {ids, invalid};
}

const selectionParam = new URL(location.href).searchParams.get('selection');
const parsedSelection = parseSelection(selectionParam);
if (selectionParam === null) {
    try {
        selectionIds = parseSelection(localStorage.getItem(selectionKey)).ids;
    } catch { /* The selection still works for this visit when storage is blocked. */ }
} else {
    selectionIds = parsedSelection.ids;
    if (parsedSelection.invalid) {
        selectionNotice = `${parsedSelection.invalid} projet${parsedSelection.invalid > 1 ? 's' : ''} de ce lien n’existe${parsedSelection.invalid > 1 ? 'nt' : ''} plus.`;
    } else if (!selectionIds.length) {
        selectionNotice = 'Ce lien ne contient aucun projet sélectionné.';
    }
}

function saveSelection() {
    try {
        localStorage.setItem(selectionKey, selectionIds.join(','));
    } catch { /* Storage is optional; the current selection remains usable. */ }
}

function selectionShareUrl() {
    const url = new URL(cvData.portfolio);
    if (selectionIds.length) url.searchParams.set('selection', selectionIds.join(','));
    url.hash = 'selection';
    return url.href;
}

function selectionDossierHref() {
    const url = new URL('dossier.html', location.href);
    if (selectionIds.length) url.searchParams.set('selection', selectionIds.join(','));
    url.searchParams.set('print', '1');
    return url.href;
}

function openSelectionDossier() {
    if (!selectionIds.length) {
        openSelectionDialog();
        return;
    }
    window.open(selectionDossierHref(), '_blank', 'noopener');
}

function selectionSummary() {
    const count = selectionIds.length;
    return count ? `${count} projet${count > 1 ? 's' : ''} sélectionné${count > 1 ? 's' : ''}.` : 'Aucun projet sélectionné.';
}

function updateSelectionChrome() {
    const count = selectionIds.length;
    selectionBadge.textContent = String(count);
    selectionBadge.hidden = !count;
    selectionButton.setAttribute('aria-label', count
        ? `Sélection de projets, ${count} projet${count > 1 ? 's' : ''} sélectionné${count > 1 ? 's' : ''}`
        : 'Sélection de projets');
    selectionStatus.textContent = [selectionSummary(), selectionNotice].filter(Boolean).join(' ');
    selectionView.disabled = !count;
    selectionPrint.hidden = !count;
    selectionPrint.href = selectionDossierHref();
    selectionShareButton.disabled = !count;
    selectionClear.disabled = !count;
}

function selectionProjectCard(project) {
    const route = cvEscape(projectRoute(project.id));
    const proof = project.proof?.links?.[0];
    return `<li class="selection-project">
        <h3><a href="#${route}" data-dossier="${route}">${cvEscape(project.name)}</a></h3>
        <p>${cvEscape(project.description)}</p>
        <small>${cvEscape(project.tags.join(' · '))}</small>
        <div class="selection-project-links">
            ${proof ? `<a href="${cvEscape(proof[1])}" target="_blank" rel="noopener noreferrer">${cvEscape(proof[0])} <span aria-hidden="true">↗</span></a>` : ''}
            ${project.url ? `<a href="${cvEscape(project.url)}" target="_blank" rel="noopener noreferrer">Code source <span aria-hidden="true">↗</span></a>` : ''}
            <a href="#${route}" data-dossier="${route}">Fiche complète <span aria-hidden="true">→</span></a>
        </div>
    </li>`;
}

function selectionFile() {
    const items = selectionIds.map(id => projectsById.get(id)).filter(Boolean);
    const count = items.length;
    return `<p class="project-file-path">C:\\CV\\SELECTION.NFO</p>
        ${selectionNotice ? `<p class="selection-warning" role="status">${cvEscape(selectionNotice)}</p>` : ''}
        <div class="selection-file-head">
            <p><strong>${cvEscape(selectionSummary())}</strong></p>
            <p>${count
                ? 'Chaque projet ouvre sa fiche complète, avec le contexte et les preuves disponibles.'
                : 'Composez une shortlist de projets, puis partagez le lien obtenu.'}</p>
        </div>
        <div class="selection-file-actions">
            <button type="button" data-selection-action="edit">${count ? 'Modifier la sélection' : 'Composer une sélection'}</button>
            ${count ? `<a href="${cvEscape(selectionDossierHref())}" target="_blank" rel="noopener" data-selection-action="print">Dossier imprimable</a>` : ''}
            ${count ? '<button type="button" data-selection-action="share">Partager ce lien</button>' : ''}
        </div>
        ${count ? `<ul class="selection-projects">${items.map(selectionProjectCard).join('')}</ul>`
            : '<p class="selection-empty">Aucun projet reconnu dans cette sélection.</p>'}`;
}

const selectionNavItem = document.createElement('a');
selectionNavItem.href = '#selection';
selectionNavItem.dataset.dossier = 'selection';
selectionNavItem.textContent = 'Sélection';
dossierNav.append(selectionNavItem);
dossierFiles.set('selection', {
    name: 'Sélection',
    textHref: 'cv.html#projets',
    item: selectionNavItem,
    launcher: selectionSupported ? selectionButton : homeTab
});

function buildSelectionOptions() {
    for (const {title, items} of projectGroups) {
        const group = document.createElement('fieldset');
        group.className = 'selection-group';
        const legend = document.createElement('legend');
        legend.textContent = title;
        group.append(legend);
        for (const project of items) {
            const option = document.createElement('label');
            option.className = 'selection-option';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = project.id;
            checkbox.addEventListener('change', () => setSelected(project.id, checkbox.checked));
            const text = document.createElement('span');
            text.className = 'selection-option-text';
            const name = document.createElement('strong');
            name.textContent = project.name;
            const tags = document.createElement('small');
            tags.textContent = project.tags.join(' · ');
            text.append(name, tags);
            option.append(checkbox, text);
            group.append(option);
        }
        selectionGroups.append(group);
    }
}

function syncSelectionInputs() {
    const chosen = new Set(selectionIds);
    selectionGroups.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = chosen.has(checkbox.value);
    });
}

function setSelected(id, checked) {
    selectionNotice = '';
    selectionIds = selectionIds.filter(candidate => candidate !== id);
    if (checked) selectionIds.push(id);
    saveSelection();
    updateSelectionChrome();
    syncSelectionRoute();
}

function syncSelectionRoute() {
    if (currentDossierKey !== 'selection') return;
    dossierContent.innerHTML = selectionFile();
    const url = new URL(location.href);
    if (selectionIds.length) url.searchParams.set('selection', selectionIds.join(','));
    else url.searchParams.delete('selection');
    url.hash = 'selection';
    if (url.href !== location.href) history.replaceState(null, '', url);
    if (!selectionDialog.open) screenFrame.dispatchEvent(new Event('cv:read-screen'));
}

function openSelectionDialog() {
    if (!selectionSupported || selectionDialog.open) return;
    if (guide.open || resume.open || shareDialog.open || searchDialog.open) return;
    syncSelectionInputs();
    updateSelectionChrome();
    selectionDialog.showModal();
    const first = selectionGroups.querySelector('input:checked') || selectionGroups.querySelector('input');
    first?.focus({preventScroll:true});
    syncDesk();
}

if (selectionSupported) {
    selectionButton.hidden = false;
    buildSelectionOptions();
    syncSelectionInputs();
    updateSelectionChrome();
    selectionButton.addEventListener('click', openSelectionDialog);
    selectionDialog.addEventListener('click', event => {
        if (event.target === selectionDialog) selectionDialog.close();
    });
    selectionDialog.addEventListener('close', () => {
        updateSelectionChrome();
        syncDesk();
        if (currentDossierKey === 'selection') screenFrame.dispatchEvent(new Event('cv:read-screen'));
    });
    selectionView.addEventListener('click', () => {
        if (!selectionIds.length) return;
        selectionDialog.close();
        navigateScreen('selection', selectionButton);
        dossierScroll.scrollTop = 0;
        dossierTitle.focus({preventScroll:true});
    });
    selectionShareButton.addEventListener('click', () => {
        if (!selectionIds.length) return;
        selectionDialog.close();
        openShare(selectionShareUrl(), 'Partager : Sélection de projets');
    });
    selectionClear.addEventListener('click', () => {
        selectionIds = [];
        selectionNotice = '';
        saveSelection();
        syncSelectionInputs();
        updateSelectionChrome();
        syncSelectionRoute();
        selectionGroups.querySelector('input')?.focus({preventScroll:true});
    });
} else {
    selectionButton.hidden = true;
}

dossierContent.addEventListener('click', event => {
    const action = event.target.closest('[data-selection-action]');
    if (!action) return;
    if (action.dataset.selectionAction === 'print') return;
    event.preventDefault();
    if (action.dataset.selectionAction === 'edit') openSelectionDialog();
    else if (action.dataset.selectionAction === 'share') openShare(selectionShareUrl(), 'Partager : Sélection de projets');
});

/* Index du bureau : recherche instantanée dans les contenus du CV. */
const searchDialog = document.getElementById('search-dialog');
const searchButton = document.getElementById('open-search');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');
const searchResults = document.getElementById('search-results');
const searchStatus = document.getElementById('search-status');
const searchSupported = typeof searchDialog.showModal === 'function';
const SEARCH_LIMIT = 12;
const searchItems = [];
let searchMatches = [];
let activeSearchIndex = -1;

function searchFold(value) {
    return String(value).normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
}

function addSearchItem(id, group, label, detail, keywords, run) {
    searchItems.push({
        id, group, label, detail, run,
        labelKey: searchFold(label),
        haystack: searchFold(`${label} ${detail} ${keywords}`)
    });
}

function openResumeAt(section) {
    if (typeof resume.showModal !== 'function') return;
    if (!resume.open) resume.showModal();
    const target = document.getElementById(`resume-${section}`);
    if (!target) return;
    target.focus({preventScroll:true});
    resumeContent.scrollTop = target.offsetTop - 16;
}

function addSearchContent() {
    const dossierDetails = {
        parcours: 'Expériences professionnelles et formations',
        projets: 'Projets personnels et CESI, fiches et preuves',
        competences: 'Technologies, langues et exemples concrets',
        contact: 'E-mail, LinkedIn et GitHub',
        selection: 'Shortlist de projets à partager par lien'
    };
    for (const [key, file] of dossierFiles) {
        addSearchItem(`dossier-${key}`, 'Dossier', file.name, dossierDetails[key] || '', key,
            () => navigateScreen(key));
    }
    for (const project of projects) {
        addSearchItem(`projet-${project.id}`, 'Projet', project.name,
            `${project.description} · ${project.tags.join(' · ')}`,
            `${project.id} ${project.collection} ${project.tags.join(' ')} ${project.proof ? project.proof.detail : ''}`,
            () => navigateScreen(projectRoute(project.id)));
    }
    cvData.experience.forEach((entry, index) => {
        addSearchItem(`experience-${index}`, 'Parcours', entry.title, `${entry.date} · ${entry.detail}`,
            entry.tags.join(' '), () => navigateScreen('parcours'));
    });
    cvData.education.forEach((entry, index) => {
        addSearchItem(`formation-${index}`, 'Parcours', entry.title, `${entry.date} · ${entry.detail}`,
            entry.tags.join(' '), () => navigateScreen('parcours'));
    });
    cvData.skills.forEach(([label, detail, examples = []], index) => {
        addSearchItem(`competence-${index}`, 'Compétence', label, detail,
            examples.map(([, text]) => text).join(' '), () => navigateScreen('competences'));
    });
    const languageDetail = cvData.languages.map(([language, level]) => `${language} · ${level}`).join(' · ');
    addSearchItem('competence-langues', 'Compétence', 'Langues et TOEIC', languageDetail,
        'anglais français toeic', () => navigateScreen('competences'));
    addSearchItem('action-cv-express', 'Action', 'CV express',
        'Profil, parcours, projets, compétences et contact en une page',
        'résumé rapide recruteur lecture', () => openResumeAt('profil'));
    addSearchItem('action-pdf', 'Action', 'Télécharger le CV PDF', 'CV_Victor_NOEL.pdf',
        'pdf imprimer télécharger document', () => document.getElementById('cv-pdf').click());
    addSearchItem('action-email', 'Action', 'Écrire un e-mail', cvData.email,
        'contact mail email recruter', () => { location.href = `mailto:${cvData.email}`; });
    addSearchItem('action-linkedin', 'Action', 'Profil LinkedIn', cvData.linkedin,
        'contact réseaux professionnels', () => window.open(cvData.linkedin, '_blank', 'noopener,noreferrer'));
    addSearchItem('action-github', 'Action', 'GitHub', cvData.github,
        'contact code dépôts open source', () => window.open(cvData.github, '_blank', 'noopener,noreferrer'));
    addSearchItem('action-texte', 'Action', 'Version texte', 'cv.html · page CV à partager',
        'lecture accessibilité résumé', () => { location.href = 'cv.html'; });
    addSearchItem('action-selection', 'Action', 'Composer une sélection de projets',
        'Shortlist partageable par un lien, à rouvrir chez le recruteur',
        'shortlist recruteur partager sélection projets lien', () => openSelectionDialog());
    addSearchItem('action-dossier-print', 'Action', 'Dossier de projets imprimable',
        'Page A4 avec les coordonnées et uniquement les projets sélectionnés',
        'imprimer pdf dossier recruteur sélection projets coordonnées', () => openSelectionDossier());
    addSearchItem('action-guide', 'Action', 'Guide de visite', 'Découvrir le bureau et ses commandes',
        'aide tutoriel visite', () => {
            guide.returnValue = '';
            guide.showModal();
        });
}

const searchSuggestionIds = [
    'action-cv-express', 'dossier-competences', 'projet-opencleaner', 'action-email', 'action-pdf', 'action-guide'
];

function searchSuggestions() {
    return searchSuggestionIds.map(id => searchItems.find(item => item.id === id)).filter(Boolean);
}

function rankSearch(terms) {
    return searchItems
        .filter(item => terms.every(term => item.haystack.includes(term)))
        .map(item => {
            let score = 0;
            for (const term of terms) {
                if (item.labelKey === term) score += 12;
                else if (item.labelKey.startsWith(term)) score += 8;
                else if (item.labelKey.includes(term)) score += 5;
                else score += 1;
            }
            /* Un projet concret répond mieux à une techno qu'une rubrique de compétences. */
            return {item, score: score + (item.group === 'Projet' ? 2 : 0)};
        })
        .sort((a, b) => b.score - a.score || a.item.label.localeCompare(b.item.label, 'fr'))
        .map(({item}) => item);
}

function appendSearchHighlight(element, text, terms) {
    if (!terms.length) {
        element.textContent = text;
        return;
    }
    let folded = '';
    const positions = [];
    for (let index = 0; index < text.length; index++) {
        const normalized = text[index].normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
        for (const character of normalized) {
            folded += character;
            positions.push(index);
        }
    }
    const ranges = [];
    for (const term of terms) {
        let start = folded.indexOf(term);
        while (start !== -1) {
            ranges.push([positions[start], positions[start + term.length - 1] + 1]);
            start = folded.indexOf(term, start + term.length);
        }
    }
    if (!ranges.length) {
        element.textContent = text;
        return;
    }
    ranges.sort((a, b) => a[0] - b[0]);
    const merged = [];
    for (const range of ranges) {
        const previous = merged[merged.length - 1];
        if (previous && range[0] <= previous[1]) previous[1] = Math.max(previous[1], range[1]);
        else merged.push([range[0], range[1]]);
    }
    let cursor = 0;
    for (const [start, end] of merged) {
        if (start > cursor) element.append(document.createTextNode(text.slice(cursor, start)));
        const mark = document.createElement('mark');
        mark.textContent = text.slice(start, end);
        element.append(mark);
        cursor = end;
    }
    if (cursor < text.length) element.append(document.createTextNode(text.slice(cursor)));
}

function updateSearchActive() {
    Array.from(searchResults.children).forEach((option, index) => {
        option.setAttribute('aria-selected', String(index === activeSearchIndex));
    });
    const active = searchResults.children[activeSearchIndex];
    if (active) {
        searchInput.setAttribute('aria-activedescendant', active.id);
        active.scrollIntoView({block:'nearest'});
    } else {
        searchInput.removeAttribute('aria-activedescendant');
    }
}

function renderSearch(query) {
    const trimmed = query.trim();
    const terms = searchFold(trimmed).split(/\s+/).filter(Boolean);
    const ranked = terms.length ? rankSearch(terms) : searchSuggestions();
    searchMatches = ranked.slice(0, SEARCH_LIMIT);
    activeSearchIndex = searchMatches.length ? 0 : -1;
    searchResults.replaceChildren();
    searchMatches.forEach((item, index) => {
        const option = document.createElement('li');
        option.className = 'search-result';
        option.id = `search-option-${index}`;
        option.dataset.index = String(index);
        option.setAttribute('role', 'option');
        option.setAttribute('aria-selected', String(index === activeSearchIndex));
        const type = document.createElement('span');
        type.className = 'search-result-type';
        type.textContent = item.group;
        const label = document.createElement('strong');
        label.className = 'search-result-label';
        appendSearchHighlight(label, item.label, terms);
        const enter = document.createElement('span');
        enter.className = 'search-result-enter';
        enter.setAttribute('aria-hidden', 'true');
        enter.textContent = '↵';
        const detail = document.createElement('span');
        detail.className = 'search-result-detail';
        appendSearchHighlight(detail, item.detail, terms);
        option.append(type, label, enter, detail);
        searchResults.append(option);
    });
    if (!terms.length) {
        searchStatus.textContent = 'Suggestions — tapez un mot pour filtrer.';
    } else if (!ranked.length) {
        searchStatus.textContent = `Aucun résultat pour « ${trimmed} ». Essayez « Python », « STM32 » ou « contact ».`;
    } else if (ranked.length > searchMatches.length) {
        searchStatus.textContent = `${searchMatches.length} premiers résultats sur ${ranked.length} pour « ${trimmed} ».`;
    } else {
        searchStatus.textContent = `${ranked.length} résultat${ranked.length > 1 ? 's' : ''} pour « ${trimmed} ».`;
    }
    searchClear.hidden = !searchInput.value;
    searchInput.setAttribute('aria-expanded', 'true');
    updateSearchActive();
}

function moveSearchActive(delta) {
    if (!searchMatches.length) return;
    activeSearchIndex = (activeSearchIndex + delta + searchMatches.length) % searchMatches.length;
    updateSearchActive();
}

function setSearchActive(index) {
    if (!searchMatches.length) return;
    activeSearchIndex = Math.max(0, Math.min(searchMatches.length - 1, index));
    updateSearchActive();
}

function activateSearchItem(index) {
    const item = searchMatches[index];
    if (!item) return;
    searchDialog.close();
    searchInput.value = '';
    item.run();
}

function openSearch() {
    if (!searchSupported) return;
    if (guide.open || resume.open || shareDialog.open || selectionDialog.open) return;
    searchInput.value = '';
    renderSearch('');
    if (!searchDialog.open) searchDialog.showModal();
    searchInput.focus({preventScroll:true});
    syncDesk();
}

if (searchSupported) {
    searchButton.hidden = false;
    addSearchContent();
    searchButton.addEventListener('click', openSearch);
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        renderSearch('');
        searchInput.focus({preventScroll:true});
    });
    searchInput.addEventListener('input', () => renderSearch(searchInput.value));
    searchInput.addEventListener('keydown', event => {
        if (event.isComposing) return;
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            if (!searchMatches.length) return;
            event.preventDefault();
            moveSearchActive(event.key === 'ArrowDown' ? 1 : -1);
        } else if (event.key === 'Home' || event.key === 'End') {
            if (!searchMatches.length) return;
            event.preventDefault();
            setSearchActive(event.key === 'Home' ? 0 : searchMatches.length - 1);
        } else if (event.key === 'Enter') {
            event.preventDefault();
            activateSearchItem(activeSearchIndex);
        } else if (event.key === 'Escape') {
            /* Safari/WebKit vide le champ type=search au lieu de fermer le dialogue. */
            event.preventDefault();
            searchDialog.close();
        }
    });
    searchResults.addEventListener('click', event => {
        const option = event.target.closest('.search-result');
        if (option) activateSearchItem(Number(option.dataset.index));
    });
    searchResults.addEventListener('pointermove', event => {
        const option = event.target.closest('.search-result');
        if (!option) return;
        const index = Number(option.dataset.index);
        if (index === activeSearchIndex) return;
        activeSearchIndex = index;
        updateSearchActive();
    });
    searchDialog.addEventListener('click', event => {
        if (event.target === searchDialog) searchDialog.close();
    });
    searchDialog.addEventListener('close', () => {
        searchInput.setAttribute('aria-expanded', 'false');
        searchInput.removeAttribute('aria-activedescendant');
        syncDesk();
    });
    document.addEventListener('keydown', event => {
        if (event.key.toLowerCase() !== 'k' || !(event.ctrlKey || event.metaKey) || event.altKey) return;
        if (guide.open || resume.open || shareDialog.open || selectionDialog.open) return;
        event.preventDefault();
        if (searchDialog.open) searchInput.focus({preventScroll:true});
        else openSearch();
    });
} else {
    searchButton.hidden = true;
}

const guideKey = 'cv-noel:guide-v1';
const viewKey = 'cv-noel:view';
const viewToggle = document.getElementById('view-mode');
let viewMode = 'pc';
let deskState = 'idle';
let setDeskActive;
let guideSeen = false;
try {
    guideSeen = localStorage.getItem(guideKey) === '1';
    if (localStorage.getItem(viewKey) === '3d') viewMode = '3d';
} catch { /* The guide remains usable when storage is blocked. */ }

function deskUnavailable() {
    setDeskActive = undefined;
    deskState = 'unavailable';
    guide.querySelectorAll('[data-3d-option]').forEach(option => { option.hidden = true; });
    syncDesk();
}

function syncDesk() {
    const want3d = viewMode === '3d';
    if (want3d && deskState === 'idle' && !guide.open && !resume.open && !searchDialog.open && !selectionDialog.open) {
        deskState = 'loading';
        const script = document.createElement('script');
        script.src = 'desk.bundle.js?v=fiches';
        script.addEventListener('error', deskUnavailable, {once:true});
        script.addEventListener('load', () => {
            if (deskState === 'loading') deskUnavailable();
        }, {once:true});
        document.body.append(script);
    }
    setDeskActive?.(want3d);

    const unavailable = deskState === 'unavailable';
    const loading = deskState === 'loading';
    viewToggle.setAttribute('aria-disabled', String(unavailable || loading));
    viewToggle.textContent = unavailable ? '3D indisponible' : loading ? 'Chargement 3D…'
        : want3d && deskState === 'ready' ? 'PC seul' : 'Bureau 3D';
}

function chooseView(mode) {
    viewMode = mode;
    try {
        localStorage.setItem(viewKey, mode);
    } catch { /* The choice still works without storage. */ }
    syncDesk();
    if (mode === '3d' && deskState === 'ready' && activeScreen !== 'home') {
        screenFrame.dispatchEvent(new Event('cv:read-screen'));
    }
}

window.addEventListener('cv:desk-ready', event => {
    setDeskActive = event.detail;
    deskState = 'ready';
    syncDesk();
    if (activeScreen !== 'home') screenFrame.dispatchEvent(new Event('cv:read-screen'));
}, {once:true});
window.addEventListener('cv:desk-unavailable', deskUnavailable, {once:true});

viewToggle.hidden = false;
viewToggle.addEventListener('click', () => {
    if (viewToggle.getAttribute('aria-disabled') === 'true') return;
    chooseView(viewMode === '3d' && deskState === 'ready' ? 'pc' : '3d');
});

guideButtons.forEach(button => button.addEventListener('click', () => {
    button.focus({preventScroll:true});
    guide.returnValue = '';
    guide.showModal();
}));
guide.addEventListener('close', () => {
    try {
        localStorage.setItem(guideKey, '1');
    } catch { /* Storage is optional for the local copy. */ }
    if (!guideSeen && !resume.open && activeScreen === 'home') guideButton.focus({preventScroll:true});
    guideSeen = true;
    if (guide.returnValue === '3d' || guide.returnValue === 'pc') chooseView(guide.returnValue);
    else syncDesk();
});
resume.addEventListener('close', syncDesk);

document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-resume]');
    if (!trigger || typeof resume.showModal !== 'function') return;
    if (trigger instanceof HTMLAnchorElement) {
        if (!isPlainClick(event)) return;
        event.preventDefault();
    }
    if (guide.open) {
        guide.close();
        guideButton.focus({preventScroll:true});
    }
    if (!resume.open) resume.showModal();
    const target = document.getElementById(`resume-${trigger.dataset.resume}`);
    target.focus({preventScroll:true});
    resumeContent.scrollTop = target.offsetTop - 16;
});

const initialRoute = location.hash.slice(1);
const sharedSelection = selectionParam !== null;
const directRoute = initialRoute === 'terminal' || dossierFiles.has(initialRoute) || projectsByRoute.has(initialRoute);
if (directRoute) showRoute(initialRoute, false);
else if (sharedSelection) showRoute('selection', false);
if (typeof guide.showModal === 'function') {
    guideButtons.forEach(button => { button.hidden = false; });
    document.querySelectorAll('a[data-resume]').forEach(link => link.setAttribute('aria-haspopup', 'dialog'));
    if (!guideSeen && !directRoute && !sharedSelection) guide.showModal();
}
syncDesk();
