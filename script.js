// script.js - handles tabs, dark mode, typewriter, and TIL fetching

// ----- Tab Navigation -----
const tabs = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.tab');

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    sections.forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });

  // Keyboard navigation
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});

// ----- Dark Mode Toggle -----
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.setAttribute('aria-pressed', document.body.classList.contains('dark'));
});

// ----- Typewriter Effect -----
const tw = document.getElementById('typewriter');
const txt = tw.dataset.text;
let i = 0;
function type() {
  if (i < txt.length) {
    tw.textContent += txt.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}
type();

// ----- Footer Year -----
document.getElementById('year').textContent = new Date().getFullYear();

// ----- TIL Section: Fetch from Repos + Commits -----
async function fetchTIL() {
  const tilList = document.getElementById('tilList');
  tilList.innerHTML = '<p>Loading TILs...</p>';

  try {
    // Step 1: Fetch all repos
    const repoRes = await fetch('https://api.github.com/users/Akshata4/repos');
    const repos = await repoRes.json();

    tilList.innerHTML = '';

    // Step 2: Repos with “TIL” in name/description
    const tilRepos = repos.filter(r =>
      r.name.toLowerCase().includes('til') ||
      (r.description && r.description.toLowerCase().includes('til'))
    );

    tilRepos.forEach(r => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${r.name}</h3>
        <p>${r.description || ''}</p>
        <a class='btn' href='${r.html_url}' target='_blank'>View Repo</a>
      `;
      tilList.appendChild(card);
    });

    // Step 3: Search for “TIL” commits across recent repos (limit for rate safety)
    for (const repo of repos.slice(0, 10)) {
      const commitsRes = await fetch(`https://api.github.com/repos/Akshata4/${repo.name}/commits`);
      const commits = await commitsRes.json();

      commits
        .filter(c => c.commit.message.toLowerCase().includes('til'))
        .slice(0, 3)
        .forEach(c => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <h3>TIL Commit • ${repo.name}</h3>
            <p>${c.commit.message}</p>
            <a class='btn' href='${c.html_url}' target='_blank'>View Commit</a>
          `;
          tilList.appendChild(card);
        });
    }

    if (tilList.children.length === 0) {
      tilList.innerHTML = '<p>No TIL repos or commits found yet 🚀</p>';
    }
  } catch (err) {
    console.error('Error fetching TILs:', err);
    tilList.innerHTML = '<p>Error loading TILs. Please try again later.</p>';
  }
}

fetchTIL();

// ----- Coding Stats -----
function fetchLeetCodeStats() {
  const container = document.getElementById('leetcode-stats');
  // Hardcoded stats - update with real numbers from https://leetcode.com/u/akshatamadavi/
  container.innerHTML = `
    <p><strong>Total Solved:</strong> 50</p>
    <p><strong>Easy:</strong> 30</p>
    <p><strong>Medium:</strong> 15</p>
    <p><strong>Hard:</strong> 5</p>
  `;
}

function loadCodingStats() {
  fetchLeetCodeStats();
}

// Load stats when coding tab is clicked
document.querySelector('[data-tab="coding"]').addEventListener('click', loadCodingStats);
