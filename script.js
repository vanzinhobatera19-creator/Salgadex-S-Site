// Ano no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Tabs do cardápio
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`.panel[data-panel="${tab.dataset.cat}"]`).classList.add('active');
  });
});

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ===== Toast de confirmação =====
let toastEl = null;
function showToast(msg) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

// ===== Cliques no cardápio abrem o WhatsApp já com o item =====
document.querySelectorAll('.menu-grid li').forEach(li => {
  const nameEl = li.querySelector('span');
  if (!nameEl) return; // pula o aviso "note-full"
  const priceEl = li.querySelector('em');
  li.addEventListener('click', () => {
    li.classList.remove('bump');
    void li.offsetWidth;
    li.classList.add('bump');
    const nome = nameEl.textContent.trim();
    const preco = priceEl ? priceEl.textContent.trim() : '';
    showToast(`🥟 ${nome} — bora pedir?`);
    const texto = encodeURIComponent(`Oi! Vim pelo site e quero pedir: ${nome} (${preco})`);
    setTimeout(() => window.open(`https://wa.me/5511977963668?text=${texto}`, '_blank'), 550);
  });
});

// ===== Cliques nas porções (promoções) =====
document.querySelectorAll('.promo-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.remove('bump');
    void card.offsetWidth;
    card.classList.add('bump');
    const qty = card.querySelector('.promo-qty')?.textContent.trim();
    const label = card.querySelector('.promo-label')?.textContent.trim();
    const preco = card.querySelector('.promo-price')?.textContent.trim();
    showToast(`🎉 Porção de ${qty} ${label} — bora pedir?`);
    const texto = encodeURIComponent(`Oi! Vim pelo site e quero pedir: ${qty} ${label} (${preco})`);
    setTimeout(() => window.open(`https://wa.me/5511977963668?text=${texto}`, '_blank'), 550);
  });
});

// ===== Mascote interativo =====
const mascotBtn = document.getElementById('mascotBtn');
const frases = ['Oi! 👋', 'Bora comer? 🥟', 'Fominha? 😋', 'Peça já! 🔥', 'Salgadex\'S ama você! 💛'];
let fraseIndex = 0;
if (mascotBtn) {
  mascotBtn.addEventListener('click', () => {
    const bubble = document.getElementById('speechBubble');
    fraseIndex = (fraseIndex + 1) % frases.length;
    bubble.textContent = frases[fraseIndex];
    mascotBtn.classList.remove('poked');
    void mascotBtn.offsetWidth;
    mascotBtn.classList.add('poked');
  });
}

// PWA: registra o service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
