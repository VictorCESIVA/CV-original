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
const screenLabels = {home:'BUREAU', dossier:'DOSSIERS', terminal:'TERMINAL'};
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
            dossierContent.innerHTML = project ? projectFile(project) : dossiers[key];
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
    if (location.hash !== hash) {
        const url = new URL(location.href);
        url.hash = hash;
        history.pushState(null, '', url);
    }
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
document.getElementById('resume-skills').innerHTML = dossiers.competences;
document.getElementById('resume-contact-details').innerHTML = dossiers.contact;

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
    if (want3d && deskState === 'idle' && !guide.open && !resume.open) {
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

guideButton.addEventListener('click', () => {
    guide.returnValue = '';
    guide.showModal();
});
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
const directRoute = initialRoute === 'terminal' || dossierFiles.has(initialRoute) || projectsByRoute.has(initialRoute);
if (directRoute) showRoute(initialRoute, false);
if (typeof guide.showModal === 'function') {
    guideButton.hidden = false;
    document.querySelectorAll('a[data-resume]').forEach(link => link.setAttribute('aria-haspopup', 'dialog'));
    if (!guideSeen && !directRoute) guide.showModal();
}
syncDesk();
