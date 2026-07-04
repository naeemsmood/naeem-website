// Mobile nav toggle
document.querySelectorAll('.nav__toggle').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var panel = document.querySelector('.nav__mobile');
    if (!panel) return;
    var isOpen = panel.classList.toggle('is-open');
    btn.textContent = isOpen ? '✕' : '☰';
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});

// Scroll-triggered fade-ins
if ('IntersectionObserver' in window) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
} else {
  document.querySelectorAll('.reveal').forEach(function (el) {
    el.classList.add('is-visible');
  });
}
