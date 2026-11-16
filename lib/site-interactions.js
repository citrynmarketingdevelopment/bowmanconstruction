export function initializeSite() {
  const cleanups = [];
  function on(target, event, handler, options) {
    if (!target) return;
    target.addEventListener(event, handler, options);
    cleanups.push(() => target.removeEventListener(event, handler, options));
  }
  function observe(callback, options) {
    const observer = new IntersectionObserver(callback, options);
    cleanups.push(() => observer.disconnect());
    return observer;
  }
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  mobileNav.hidden = true;
}
closeMenu();
on(menuButton, 'click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  mobileNav.hidden = expanded;
});
on(mobileNav, 'click', e => { if (e.target.closest('a')) closeMenu(); });
on(document, 'keydown', e => { if (e.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') { closeMenu(); menuButton.focus(); } });
on(matchMedia('(min-width: 801px)'), 'change', e => { if (e.matches) closeMenu(); });

const servicePanels = [...document.querySelectorAll('.service-panel')];
if (servicePanels.length) document.querySelector('#services')?.classList.add('is-interactive');
function activateService(panel) {
  if (!panel) return;
  servicePanels.forEach(item => {
    const active = item === panel;
    item.classList.toggle('is-active', active);
    item.querySelector('.service-trigger').setAttribute('aria-expanded', String(active));
  });
}
servicePanels.forEach((panel, index) => {
  on(panel, 'pointerenter', event => {
    if (event.pointerType === 'mouse' && matchMedia('(hover: hover) and (pointer: fine)').matches && !panel.parentElement.querySelector('.service-trigger:focus-visible')) activateService(panel);
  });
  const trigger = panel.querySelector('.service-trigger');
  on(trigger, 'focus', () => activateService(panel));
  on(trigger, 'click', () => activateService(panel));
  on(trigger, 'keydown', event => {
    const direction = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 0;
    if (direction) {
      event.preventDefault();
      servicePanels[(index + direction + servicePanels.length) % servicePanels.length].querySelector('.service-trigger').focus();
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      servicePanels[event.key === 'Home' ? 0 : servicePanels.length - 1].querySelector('.service-trigger').focus();
    }
  });
});
function serviceFromHash() {
  const panel = servicePanels.find(item => '#' + item.id === location.hash);
  if (panel) activateService(panel);
}
serviceFromHash();
on(window, 'hashchange', serviceFromHash);

document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = observe(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// The gallery works without JavaScript; filtering and the lightbox enhance it.
const filters = [...document.querySelectorAll('.gallery-filter')];
const cards = [...document.querySelectorAll('.gallery-card')];
let activeCategory = 'all';
function filterGallery(category, updateHash = true) {
  if (!filters.some(f => f.dataset.filter === category)) category = 'all';
  activeCategory = category;
  filters.forEach(f => f.setAttribute('aria-pressed', String(f.dataset.filter === category)));
  cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  const count = cards.filter(c => !c.hidden).length;
  const status = document.querySelector('.gallery-status');
  if (status) status.textContent = `${count} ${count === 1 ? 'Photo' : 'Photos'}${category === 'all' ? ' From The Jobsite' : ' In ' + ({paving:'Paving',compaction:'Compaction',crew:'Our Crew',equipment:'Equipment'}[category] || category)}`;
  if (updateHash) history.replaceState(null, '', category === 'all' ? location.pathname : '#' + category);
}
filters.forEach(button => on(button, 'click', () => filterGallery(button.dataset.filter)));
if (filters.length) {
  filterGallery(location.hash.slice(1) || 'all', false);
  on(window, 'hashchange', () => filterGallery(location.hash.slice(1) || 'all', false));
}
const dialog = document.querySelector('.photo-dialog');
let currentCard;
function showPhoto(card) {
  currentCard = card;
  const image = card.querySelector('img');
  const dest = dialog.querySelector('.dialog-image');
  dest.src = card.href; dest.alt = image.alt;
  dialog.querySelector('.dialog-caption').textContent = card.dataset.caption;
}
function movePhoto(direction) {
  const visible = cards.filter(c => !c.hidden);
  showPhoto(visible[(visible.indexOf(currentCard) + direction + visible.length) % visible.length]);
}
if (dialog && typeof dialog.showModal === 'function') {
  cards.forEach(card => on(card, 'click', e => { e.preventDefault(); showPhoto(card); dialog.showModal(); }));
  on(dialog.querySelector('.dialog-close'), 'click', () => dialog.close());
  on(dialog.querySelector('[data-next]'), 'click', () => movePhoto(1));
  on(dialog.querySelector('[data-prev]'), 'click', () => movePhoto(-1));
  on(dialog, 'click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
  on(dialog, 'keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); movePhoto(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); movePhoto(-1); } });
  on(dialog, 'close', () => currentCard?.focus());
}

// Decorative header video: keep the photo for reduced motion, data saving, or playback failure.
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  const hero = heroVideo.closest('.hero');
  const videoToggle = hero.querySelector('.hero-video-toggle');
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection;
  let manuallyPaused = false;
  let heroVisible = true;
  let loaded = false;
  const allowed = () => !motionPreference.matches && !connection?.saveData;
  const playWhenVisible = () => {
    if (loaded && allowed() && heroVisible && !document.hidden && !manuallyPaused) {
      heroVideo.play().catch(() => { videoToggle.hidden = true; });
    } else heroVideo.pause();
  };
  function configureHeroVideo() {
    if (!allowed()) {
      heroVideo.pause();
      heroVideo.querySelectorAll('source').forEach(source => source.removeAttribute('src'));
      heroVideo.load();
      heroVideo.classList.remove('is-playing');
      videoToggle.hidden = true;
      loaded = false;
      return;
    }
    if (!loaded) {
      heroVideo.muted = true;
      heroVideo.querySelectorAll('source').forEach(source => { source.src = source.dataset.src; });
      loaded = true;
      heroVideo.load();
    }
    playWhenVisible();
  }
  on(heroVideo, 'playing', () => {
    heroVideo.classList.add('is-playing');
    videoToggle.hidden = false;
    videoToggle.textContent = 'Pause Video';
  });
  on(heroVideo, 'pause', () => { videoToggle.textContent = 'Play Video'; });
  on(heroVideo, 'error', () => {
    heroVideo.classList.remove('is-playing');
    videoToggle.hidden = true;
  });
  on(videoToggle, 'click', () => {
    manuallyPaused = !heroVideo.paused;
    if (manuallyPaused) heroVideo.pause();
    else playWhenVisible();
  });
  if ('IntersectionObserver' in window) {
    observe(entries => {
      heroVisible = entries[0].isIntersecting;
      playWhenVisible();
    }, { threshold: 0 }).observe(hero);
  }
  on(document, 'visibilitychange', playWhenVisible);
  on(motionPreference, 'change', configureHeroVideo);
  on(connection, 'change', configureHeroVideo);
  const poster = hero.querySelector('img.hero-photo');
  if (poster.complete) configureHeroVideo();
  else {
    on(poster, 'load', configureHeroVideo, { once: true });
    on(poster, 'error', configureHeroVideo, { once: true });
  }
}

return () => { cleanups.reverse().forEach(cleanup => cleanup());
 heroVideo?.pause();
};
}
