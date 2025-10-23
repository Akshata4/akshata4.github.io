// script.js - handle tabs, dark mode, typewriter, GitHub fetch
const tabs = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.tab');
tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});
// Dark mode toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => document.body.classList.toggle('dark'));
// Typewriter effect
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
// Year
document.getElementById('year').textContent = new Date().getFullYear();
// Fetch GitHub TIL repos
fetch('https://api.github.com/users/Akshata4/repos')
  .then(res => res.json())
  .then(repos => {
    const tilList = document.getElementById('tilList');
    const tilRepos = repos.filter(r => r.name.toLowerCase().includes('til') || (r.description && r.description.toLowerCase().includes('til')));
    tilRepos.slice(0, 6).forEach(r => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h3>${r.name}</h3><p>${r.description || ''}</p><a class='btn' href='${r.html_url}' target='_blank'>View Repo</a>`;
      tilList.appendChild(card);
    });
  });
