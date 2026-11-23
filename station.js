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
for (const row of rows) {
    const line = document.createElement('div');
    line.className = 'key-row';
    for (const key of row) {
        const button = document.createElement('button');
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
    if (isTyping) return;
    input.focus({preventScroll:true});
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
    button.addEventListener('click', () => {
        if (isTyping) return;
        input.value = button.dataset.command;
        submitCommand();
    });
});

const mouse = document.querySelector('#mouse');
const screenFrame = document.querySelector('.screen');
const pointer = document.querySelector('#screen-pointer');
const mouseButtons = ['left','wheel','right'].map(name => mouse.querySelector('.'+name));
let drag = null;
let moved = false;
let x = .5, y = .5;
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
    mouse.style.setProperty('--mx', ((e.clientX/innerWidth-.5)*18)+'px');
    mouse.style.setProperty('--my', ((e.clientY/innerHeight-.5)*12)+'px');
    if (!drag || drag.id !== e.pointerId) return;
    const dx = e.clientX-drag.startX, dy = e.clientY-drag.startY;
    if (Math.hypot(dx,dy)>3) moved = true;
    if (moved) {
        x = Math.min(.99,Math.max(0,drag.x+dx*2/screenFrame.clientWidth));
        y = Math.min(.99,Math.max(0,drag.y+dy*2/screenFrame.clientHeight));
        showPointer();
    }
});
document.addEventListener('pointerdown', e => mouseButtons[e.button]?.classList.add('on'));
function releaseMouse() {
    drag = null;
    mouseButtons.forEach(button => button.classList.remove('on'));
}
document.addEventListener('pointerup',releaseMouse);
document.addEventListener('pointercancel',releaseMouse);
mouse.addEventListener('click', e => {
    if (moved && e.detail) return;
    if (e.target === mouseButtons[1]) terminalBody.scrollBy(0,terminalBody.clientHeight*.75);
    else if (e.target === mouseButtons[0]) {
        showPointer();
        const rect = pointer.getBoundingClientRect();
        const hit = document.elementFromPoint(rect.left, rect.top)?.closest('a,button,input');
        if (hit && screenFrame.contains(hit)) hit.click();
        if (!hit || hit === input) input.focus({preventScroll:true});
    } else input.focus({preventScroll:true});
});
let wheelTimer;
document.addEventListener('wheel', e => {
    mouseButtons[1].classList.add('on');
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => mouseButtons[1].classList.remove('on'),130);
    if (mouse.contains(e.target)) {
        e.preventDefault();
        terminalBody.scrollBy(0,e.deltaY*(e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? terminalBody.clientHeight : 1));
    }
},{passive:false});
window.addEventListener('blur', () => {
    releaseMouse();
    down.clear();
    keys.forEach((button,key) => button.classList.toggle('on',key === 'Shift' && shift));
});

const projects = window.CV_PROJECTS || [];
const collectionNames = { perso:'Projets perso', cesi:'Projets CESI' };

function projectArticle(project) {
    const title = project.url
        ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name}</a>`
        : project.name;
    return `<article><h3>${title}</h3><p>${project.description}</p><small>${project.tags.join(' · ')}</small></article>`;
}

document.querySelectorAll('#portfolio-archive [data-collection]').forEach(section => {
    section.innerHTML = projects
        .filter(project => project.collection === section.dataset.collection)
        .map(projectArticle)
        .join('');
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

window.addEventListener('cv:open-project', event => {
    const project = projects.find(item => item.id === event.detail);
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
});
