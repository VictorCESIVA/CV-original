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
    ['Home', 'End', ' ', 'ArrowLeft', 'ArrowRight', 'Delete']
];
const labels = { Escape:'Échap', Home:'Début', End:'Fin', Delete:'Suppr', Backspace:'⌫', Enter:'Entrée', Shift:'Maj', ArrowLeft:'←', ArrowRight:'→', ' ':'Espace' };
const names = { Backspace:'Effacer', ArrowLeft:'Curseur à gauche', ArrowRight:'Curseur à droite' };
const screens = {
    home: document.getElementById('screen-home'),
    dossier: document.getElementById('screen-dossier'),
    terminal: document.getElementById('screen-terminal')
};
const screenLabels = {home:'BUREAU', dossier:'DOSSIERS', terminal:'TERMINAL'};
let activeScreen = 'home';
const screenMode = document.getElementById('screen-mode');
const screenTabs = document.querySelectorAll('[data-screen]');

function showScreen(mode) {
    if (mode !== activeScreen) {
        screens[activeScreen].hidden = true;
        screens[mode].hidden = false;
        activeScreen = mode;
        screenMode.textContent = screenLabels[mode];
        screenTabs.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.screen === mode)));
    }
    if (mode === 'terminal') input.focus({preventScroll:true});
    else stopMatrix();
}

screenTabs.forEach(button => button.addEventListener('click', () => showScreen(button.dataset.screen)));

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
    showScreen('terminal');
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
    } else if (e.target === mouseButtons[2]) showScreen('terminal');
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

const projects = window.CV_PROJECTS || [];
const collectionNames = { perso:'Projets perso', cesi:'Projets CESI' };

function projectArticle(project) {
    return `<article class="catalog-card">
        <button type="button" class="open-sheet" data-project="${project.id}">${project.name}</button>
        <p>${project.description}</p><small>${project.tags.join(' · ')}</small>
    </article>`;
}

const projectGroups = Object.entries(collectionNames).map(([collection,title]) => {
    const items = projects.filter(project => project.collection === collection);
    const cards = items.map(projectArticle).join('');
    document.querySelector(`#portfolio-archive [data-collection="${collection}"]`).innerHTML = cards;
    return {title, items, cards};
});
cv.projects = projectGroups.map(({title,cards}) =>
    `<h4 class="section-title">${title}</h4><div class="project-grid">${cards}</div>`
).join('') + cv.otherProjects;

function dossierProject({name, description, tags, url}) {
    return `<details class="dossier-project">
        <summary>${cvEscape(name)}</summary>
        <p>${cvEscape(description)}</p>
        <p class="dossier-project-tags">${cvEscape(tags.join(' · '))}</p>
        ${url ? `<a href="${cvEscape(url)}" target="_blank" rel="noopener noreferrer">Dépôt GitHub ↗</a>` : ''}
    </details>`;
}

const dossiers = {
    parcours: cv.xp + cv.education,
    projets: projectGroups.map(({title, items}) =>
        `${cvSection(title)}<div class="dossier-projects">${items.map(dossierProject).join('')}</div>`
    ).join('') + cv.otherProjects,
    competences: cv.skills + cv.certifications,
    contact: cvContact
};
const dossierTitle = document.getElementById('dossier-title');
const dossierPath = document.getElementById('dossier-path');
const dossierContent = document.getElementById('dossier-content');
const dossierLink = document.getElementById('dossier-link');
let dossierLauncher;

for (const launcher of screens.home.querySelectorAll('a[data-dossier]')) {
    launcher.setAttribute('aria-controls', 'screen-dossier');
    launcher.addEventListener('click', event => {
        if (!isPlainClick(event)) return;
        event.preventDefault();
        dossierLauncher = launcher;
        const key = launcher.dataset.dossier;
        dossierTitle.textContent = launcher.textContent.trim();
        dossierPath.textContent = `C:\\CV\\${key.toUpperCase()}`;
        dossierLink.href = launcher.href;
        dossierContent.innerHTML = dossiers[key];
        showScreen('dossier');
        screenFrame.dispatchEvent(new Event('cv:read-screen'));
        dossierScroll.scrollTop = 0;
        dossierTitle.focus({preventScroll:true});
    });
}

function closeDossier() {
    showScreen('home');
    dossierLauncher.focus({preventScroll:true});
}

document.getElementById('dossier-back').addEventListener('click', closeDossier);
screens.dossier.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    closeDossier();
});

const archiveDialog = document.getElementById('portfolio-archive');
document.addEventListener('click', event => {
    const trigger = event.target.closest('button[data-archive]');
    if (!trigger) return;
    const collection = trigger.dataset.archive;
    archiveDialog.querySelectorAll('[data-collection]').forEach(section => {
        section.hidden = section.dataset.collection !== collection;
    });
    document.getElementById('archive-title').textContent = collectionNames[collection];
    archiveDialog.showModal();
    archiveDialog.scrollTop = 0;
});

// A project miniature on the desk opens this fiche through a custom event.
const projectSheet = document.getElementById('project-sheet');
const sheetKicker = document.getElementById('project-sheet-kicker');
const sheetTitle = document.getElementById('project-sheet-title');
const sheetDescription = document.getElementById('project-sheet-description');
const sheetTags = document.getElementById('project-sheet-tags');
const sheetLink = document.getElementById('project-sheet-link');

function openProject(id) {
    const project = projects.find(item => item.id === id);
    if (!project) return;
    sheetKicker.textContent = `PROJET ${project.collection === 'cesi' ? 'CESI' : 'PERSO'}`;
    sheetKicker.dataset.collection = project.collection;
    sheetTitle.textContent = project.name;
    sheetDescription.textContent = project.description;
    sheetTags.replaceChildren(...project.tags.map(tag => {
        const chip = document.createElement('span');
        chip.textContent = tag;
        return chip;
    }));
    if (project.url) {
        sheetLink.hidden = false;
        sheetLink.href = project.url;
        sheetLink.textContent = 'Voir le dépôt GitHub ↗';
    } else {
        sheetLink.hidden = true;
        sheetLink.removeAttribute('href');
    }
    if (!projectSheet.open) projectSheet.showModal();
}

window.addEventListener('cv:open-project', event => openProject(event.detail));
document.addEventListener('click', event => {
    const button = event.target.closest('button[data-project]');
    if (button) openProject(button.dataset.project);
});
const projectIndex = document.querySelector('.project-index');
for (const {title,items} of projectGroups) {
    const group = document.createElement('section');
    const heading = document.createElement('h2');
    heading.textContent = title;
    group.append(heading);
    for (const project of items) {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.project = project.id;
        button.textContent = project.name;
        const tech = document.createElement('small');
        tech.textContent = project.tags[0];
        button.append(tech);
        group.append(button);
    }
    projectIndex.append(group);
}

const guide = document.getElementById('site-guide');
const guideButton = document.getElementById('open-guide');
const resume = document.getElementById('resume-dialog');
const resumeContent = resume.querySelector('.resume-content');
document.getElementById('resume-timeline').innerHTML = dossiers.parcours;
document.getElementById('resume-projects').innerHTML = cv.projects;
document.getElementById('resume-skills').innerHTML = dossiers.competences;
document.getElementById('resume-contact-details').innerHTML = dossiers.contact;

const guideKey = 'cv-noel:guide-v1';
let guideSeen = false;
try {
    guideSeen = localStorage.getItem(guideKey) === '1';
} catch { /* The guide remains usable when storage is blocked. */ }

guideButton.addEventListener('click', () => guide.showModal());
guide.addEventListener('close', () => {
    try {
        localStorage.setItem(guideKey, '1');
    } catch { /* Storage is optional for the local copy. */ }
    if (!guideSeen && !resume.open) guideButton.focus({preventScroll:true});
    guideSeen = true;
});

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

if (typeof guide.showModal === 'function') {
    guideButton.hidden = false;
    document.querySelectorAll('a[data-resume]').forEach(link => link.setAttribute('aria-haspopup', 'dialog'));
    if (!guideSeen) guide.showModal();
}
