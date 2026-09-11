// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle (persisted per-visitor via localStorage)
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var sun = document.getElementById('iconSun');
  var moon = document.getElementById('iconMoon');

  function apply(theme) {
    if (theme) root.setAttribute('data-theme', theme);
    var isDark = theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    sun.hidden = isDark;
    moon.hidden = !isDark;
  }

  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  apply(stored);

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var next = current === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// Mobile nav toggle
(function () {
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  navToggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Animated stat counters (run once, when in view)
(function () {
  var nums = document.querySelectorAll('.stat-num');
  if (!nums.length) return;

  function animate(el) {
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var start = 0;
    var duration = 900;
    var startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      el.textContent = Math.floor(progress * (target - start) + start);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }
    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  nums.forEach(function (n) { observer.observe(n); });
})();
