// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteMenu = document.getElementById('siteMenu');

if (navToggle && siteMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for anchor links (basic)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
