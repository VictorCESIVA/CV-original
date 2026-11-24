// Terminal 2D et contenus du CV : extrait du HTML pour être mis en cache et testé séparément.
// Chargé avec defer avant station.js, qui réutilise cv, cvSection, cvGroups et cvContact.
function cvSection(title) {
    return `<h4 class="section-title">${cvEscape(title)}</h4>`;
}

function cvGroups(title, groups, onScreen = false) {
    return cvSection(title) + `<dl class="skill-groups">${groups.map(([label, value, examples = []]) => {
        const links = examples.map(([route, text]) => {
            const key = cvEscape(route);
            const target = onScreen ? `href="#${key}" data-dossier="${key}"` : `href="cv.html#${key}"`;
            return `<li><a ${target}><span aria-hidden="true">↳</span> ${cvEscape(text)}</a></li>`;
        });
        return `<div><dt>${cvEscape(label)}</dt><dd>${cvEscape(value)}${
            links.length ? `<ul class="skill-examples" aria-label="Exemples">${links.join('')}</ul>` : ''
        }</dd></div>`;
    }).join('')}</dl>`;
}

function cvTimeline(title, entries) {
    return cvSection(title) + entries.map(entry => `<article class="timeline-item">
        <span class="timeline-dot" aria-hidden="true"></span>
        <div class="timeline-content">
            <p class="timeline-date">${cvEscape(entry.date)}</p>
            <p><strong>${cvEscape(entry.title)}</strong></p>
            <p class="timeline-detail">${cvEscape(entry.detail)}</p>
            ${entry.tags.length ? `<div class="timeline-tags">${entry.tags.map(tag =>
                `<span class="tag tag-cyan">${cvEscape(tag)}</span>`
            ).join('')}</div>` : ''}
        </div>
    </article>`).join('');
}

const cvContact = `<ul class="other-projects">
  <li><a href="mailto:${cvEscape(cvData.email)}">${cvEscape(cvData.email)}</a></li>
  <li><a href="${cvEscape(cvData.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
  <li><a href="${cvEscape(cvData.github)}" target="_blank" rel="noopener noreferrer">GitHub</a></li>
  <li>${cvEscape(cvData.location)} · ${cvEscape(cvData.mobility)}</li>
</ul>`;

const cv = {
    about: `${cvSection('Profil')}
<p><strong>${cvEscape(cvData.name)}</strong> · ${cvEscape(cvData.role)}.</p>
<p>${cvEscape(cvData.summary)}</p>
${cvContact}
<div class="profile-links">
  <a href="cv.html">Version à partager</a>
  <a href="CV_Victor_NOEL.pdf" download>CV PDF</a>
</div>`,

    skills: cvGroups('Technologies en pratique', cvData.skills, true),

    softskills: `<h4 class="section-title">Qualités &amp; centres d’intérêt</h4>

<span class="c-dim">Qualités</span>
<div class="softskill-row" style="margin-top:8px">
  <span class="tag tag-green">✓ Rigoureux</span>
  <span class="tag tag-cyan">✓ Créatif</span>
  <span class="tag tag-purple">✓ Curieux</span>
  <span class="tag tag-orange">✓ Autonome</span>
  <span class="tag tag-pink">✓ Esprit d'équipe</span>
  <span class="tag tag-green">✓ Force de proposition</span>
  <span class="tag tag-cyan">✓ Adaptable</span>
  <span class="tag tag-purple">✓ Problem solver</span>
</div>

<br><span class="c-dim">Centres d'intérêt</span>
<div class="interest-grid">
  <div class="interest-item">⚽ Football</div>
  <div class="interest-item">🎮 Jeux vidéo</div>
  <div class="interest-item">🤖 Intelligence Artificielle</div>
  <div class="interest-item">🛠️ Open Source</div>
  <div class="interest-item">📊 Data Science</div>
  <div class="interest-item">🎵 Musique</div>
  <div class="interest-item">🔬 Sciences</div>
  <div class="interest-item">💡 Side projects</div>
</div>`,

    certifications: cvGroups('Langues & certification', cvData.languages),
    education: cvTimeline('Formations', cvData.education),
    otherProjects: cvSection('Autres travaux académiques') + `<ul class="other-projects">${cvData.otherProjects.map(([title, detail]) =>
        `<li><strong>${cvEscape(title)}</strong> — ${cvEscape(detail)}</li>`
    ).join('')}</ul>`,
    xp: cvTimeline('Expériences professionnelles', cvData.experience),
    contact: cvSection('Contact') + cvContact,

    help: `<h4 class="section-title">Commandes disponibles</h4>
<div class="help-grid">
  <code>profil</code><span>Profil et liens</span>
  <code>compétences</code><span>Compétences techniques</span>
  <code>intérêts</code><span>Qualités et centres d’intérêt</span>
  <code>langues</code><span>Langues et TOEIC</span>
  <code>formation</code><span>Formations</span>
  <code>projets</code><span>Projets personnels et CESI</span>
  <code>parcours</code><span>Expériences professionnelles</span>
  <code>contact</code><span>E-mail, LinkedIn et GitHub</span>
  <code>github</code><span>Statistiques du profil GitHub</span>
  <code>tout</code><span>Afficher toutes les rubriques</span>
  <code>thème [couleur]</code><span>vert, rouge, bleu, rose ou défaut</span>
  <code>jeu</code><span>Deviner un nombre (quitter pour arrêter)</span>
  <code>matrix</code><span>Animation rétro</span>
  <code>effacer</code><span>Effacer les résultats affichés</span>
  <code>pdf</code><span>Télécharger le CV PDF</span>
</div>
<p class="command-note">Les commandes anglaises restent disponibles, dont <code>help</code>, <code>projects</code> et <code>xp</code>.</p>`
};

const input = document.getElementById('commandInput');
const output = document.getElementById('output');
const terminalBody = document.getElementById('terminal-body');
const matrixCanvas = document.getElementById('matrix-canvas');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const commandAliases = {
    aide:'help', profil:'about', competences:'skills', interets:'softskills', langues:'certifications',
    toeic:'certifications', formation:'education', projets:'projects', parcours:'xp', experience:'xp',
    tout:'all', jeu:'game', quitter:'quit', effacer:'clear', pdf:'download', telecharger:'download'
};
const themeAliases = {vert:'green', rouge:'red', bleu:'blue', rose:'pink', defaut:'default'};
const themes = { green:'#aff4af', red:'#ffa7a0', blue:'#92d6ff', pink:'#ffb0cb', default:'' };
const cvSections = ['about','xp','education','skills','projects','certifications','softskills','contact'];
let targetNumber = 0;
let matrixInterval, matrixTimeout;
const commandHistory = [];
let historyIndex = 0;
let commandDraft = '';

function recallCommand(direction) {
    const next = Math.max(0, Math.min(commandHistory.length, historyIndex + direction));
    if (next === historyIndex) return;
    if (historyIndex === commandHistory.length) commandDraft = input.value;
    historyIndex = next;
    input.value = commandHistory[next] ?? commandDraft;
    input.setSelectionRange(input.value.length, input.value.length);
}

input.addEventListener('keydown', event => {
    if (event.isComposing || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
    event.preventDefault();
    recallCommand(event.key === 'ArrowUp' ? -1 : 1);
});

function normalizeCommand(value) {
    return value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').replace(/\s+/g, ' ');
}

document.getElementById('terminal-form').addEventListener('submit', event => {
    event.preventDefault();
    submitCommand();
});

function submitCommand(value = input.value) {
    const submitted = value.trim();
    if (!submitted) return;
    if (commandHistory.at(-1) !== submitted) {
        commandHistory.push(submitted);
        if (commandHistory.length > 50) commandHistory.shift();
    }
    historyIndex = commandHistory.length;
    commandDraft = '';
    const command = normalizeCommand(submitted);
    input.value = '';
    const cmd = Object.hasOwn(commandAliases, command) ? commandAliases[command] : command;
    if (cmd === 'clear') {
        output.replaceChildren();
        stopMatrix();
        targetNumber = 0;
        terminalBody.scrollTop = 0;
        return;
    }

    const entry = document.createElement('div');
    entry.className = 'command-output';
    const echo = document.createElement('p');
    echo.className = 'command-echo';
    echo.textContent = `$ ${submitted}`;
    const result = document.createElement('div');
    entry.append(echo, result);
    output.append(entry);

    if (targetNumber && /^\d+$/.test(cmd)) {
        const guess = Number(cmd);
        if (guess < 1 || guess > 100) result.textContent = 'Saisissez un nombre entre 1 et 100.';
        else if (guess === targetNumber) {
            result.textContent = `Trouvé ! Le nombre était ${targetNumber}.`;
            targetNumber = 0;
        } else result.textContent = guess < targetNumber ? 'Plus haut.' : 'Plus bas.';
    } else if (cmd === 'quit' && targetNumber) {
        targetNumber = 0;
        result.textContent = 'Partie terminée.';
    } else if (cmd === 'help' || cvSections.includes(cmd)) {
        result.innerHTML = cv[cmd];
    } else if (cmd === 'all') {
        result.innerHTML = cvSections.map(section => cv[section]).join('');
    } else if (command === 'theme' || command.startsWith('theme ')) {
        const requested = command.slice(5).trim() || 'defaut';
        const color = Object.hasOwn(themeAliases, requested) ? themeAliases[requested] : requested;
        if (Object.hasOwn(themes, color)) {
            terminalBody.closest('.screen').style.setProperty('--green', themes[color]);
            result.textContent = `Thème : ${requested}`;
        } else result.textContent = 'Couleurs : vert, rouge, bleu, rose ou défaut.';
    } else if (cmd === 'download') {
        document.getElementById('cv-pdf').click();
        result.innerHTML = '<a href="CV_Victor_NOEL.pdf" download>Télécharger le CV PDF</a>';
    } else if (cmd === 'game') {
        targetNumber = Math.floor(Math.random() * 100) + 1;
        result.textContent = 'Devinez le nombre entre 1 et 100. Tapez quitter pour arrêter.';
    } else if (cmd === 'matrix') {
        result.textContent = reducedMotion.matches ? 'Animation désactivée (mouvement réduit).' : 'Bienvenue dans la Matrice.';
        if (!reducedMotion.matches) startMatrix();
    } else if (cmd === 'github') {
        result.textContent = 'Connexion à GitHub…';
        renderGitHub(result);
    } else {
        result.className = 'error';
        result.textContent = `Commande inconnue : ${submitted}. Tapez aide pour la liste.`;
    }
    terminalBody.scrollTop = entry.offsetTop - 12;
}

async function renderGitHub(result) {
    const link = document.createElement('a');
    link.href = cvData.github;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Profil GitHub';
    try {
        const response = await fetch('https://api.github.com/users/VictorCESIVA');
        if (!response.ok) throw new Error(response.status);
        const {public_repos, followers, following} = await response.json();
        result.textContent = `${public_repos} dépôts publics · ${followers} abonnés · ${following} abonnements. `;
    } catch {
        result.textContent = 'Statistiques GitHub indisponibles. ';
    }
    result.append(link);
}

function stopMatrix() {
    clearInterval(matrixInterval);
    clearTimeout(matrixTimeout);
    matrixCanvas.hidden = true;
}

function startMatrix() {
    stopMatrix();
    matrixCanvas.hidden = false;
    matrixCanvas.width = matrixCanvas.clientWidth;
    matrixCanvas.height = matrixCanvas.clientHeight;
    const {width,height} = matrixCanvas;
    const ctx = matrixCanvas.getContext('2d');
    const drops = Array(Math.ceil(width / 18)).fill(0);
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789';
    ctx.font = '14px monospace';
    matrixInterval = setInterval(() => {
        ctx.fillStyle = '#08140e18';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#aff4af';
        for (let column = 0; column < drops.length; column++) {
            ctx.fillText(chars[Math.floor(Math.random() * chars.length)], column * 18, drops[column]);
            drops[column] = drops[column] > height && Math.random() > .975 ? 0 : drops[column] + 18;
        }
    }, 40);
    matrixTimeout = setTimeout(stopMatrix, 4200);
}
