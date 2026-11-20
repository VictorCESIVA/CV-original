// Virtual keys and physical keys share the terminal's input and submit path.
const keyboard = document.querySelector('#keyboard');
const keys = new Map();
let shift = false;
const rows = [
    [...'1234567890', 'Backspace'],
    [...'azertyuiop', '-'],
    [...'qsdfghjklm', 'Enter'],
    ['Shift', ...'wxcvbn', ',', '.', '/'],
    ['ArrowLeft', ' ', 'ArrowRight']
];
const labels = { Backspace:'⌫', Enter:'Entrée', Shift:'Maj', ArrowLeft:'←', ArrowRight:'→', ' ':'Espace' };
const names = { Backspace:'Effacer', ArrowLeft:'Curseur à gauche', ArrowRight:'Curseur à droite' };
for (const row of rows) {
    const line = document.createElement('div');
    line.className = 'key-row';
    for (const key of row) {
        const button = document.createElement('button');
        button.className = 'key';
        button.dataset.key = key;
        button.textContent = labels[key] || key.toUpperCase();
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
    if (key === 'Shift') {
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
        input.setRangeText(key === 'Backspace' ? '' : shift ? key.toUpperCase() : key, start,end,'end');
        if (shift) typeKey('Shift');
    }
}
const down = new Map();
function matchingKey(e) {
    if (keys.has(e.key)) return keys.get(e.key);
    return keys.get(e.key.toLowerCase()) || keys.get(e.code.replace(/^Digit/, ''));
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
