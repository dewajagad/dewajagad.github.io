// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== READING PROGRESS BAR =====
const progressBar = document.getElementById('progressBar');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (window.scrollY / total) * 100;
    progressBar.style.width = pct + '%';
  });
}

// ===== NEWSLETTER SUBSCRIBE =====
function handleSubscribe(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  const orig = btn.textContent;
  btn.textContent = '✓ You\'re in!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// ===== SEARCH FILTER (homepage) =====
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll('.post-card, .featured-post').forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = (!q || text.includes(q)) ? '' : 'none';
    });
  });
}

// ===== ANIMATE ON SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.post-card, .tool-card, .resource-card, .value-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(el);
});

// ===== ESTIMATED READ TIME =====
const articleBody = document.querySelector('.article-body');
if (articleBody) {
  const words = articleBody.innerText.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.ceil(words / 220));
  document.querySelectorAll('.read-time').forEach(el => el.textContent = mins + ' min read');
}
