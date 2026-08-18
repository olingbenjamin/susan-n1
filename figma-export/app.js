/* =====================================================================
   Susan Tumuhairwe — static site interactions (vanilla JS)
   ===================================================================== */
(function () {
  // Mark JS-enabled so scroll-reveals can start hidden (visible otherwise).
  document.documentElement.classList.add('js');

  document.addEventListener('DOMContentLoaded', function () {
    /* ---- Navbar scroll state ---- */
    var navbar = document.querySelector('.navbar');
    if (navbar) {
      var onScroll = function () {
        if (window.scrollY > 40) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    /* ---- Mobile menu ---- */
    var openBtn = document.querySelector('[data-menu-open]');
    var closeBtn = document.querySelector('[data-menu-close]');
    var menu = document.querySelector('.mobile-menu');
    if (openBtn && menu) openBtn.addEventListener('click', function () { menu.classList.add('open'); });
    if (closeBtn && menu) closeBtn.addEventListener('click', function () { menu.classList.remove('open'); });
    if (menu) {
      menu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () { menu.classList.remove('open'); });
      });
    }

    /* ---- Scroll reveal via IntersectionObserver ---- */
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = el.getAttribute('data-delay');
            if (delay) el.style.transitionDelay = delay + 's';
            el.classList.add('in');
            io.unobserve(el);
          }
        });
      }, { rootMargin: '-8% 0px -8% 0px' });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('in'); });
    }

    /* ---- Booking form (local, no backend) ---- */
    var form = document.querySelector('[data-inquiry-form]');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var note = form.querySelector('.form-note');
        var required = ['name', 'email', 'organization', 'event_type', 'message'];
        var ok = required.every(function (n) {
          var f = form.querySelector('[name="' + n + '"]');
          return f && f.value.trim() !== '';
        });
        if (note) {
          if (ok) {
            note.textContent = 'Thank you — your inquiry has been captured. Susan\u2019s team responds within 48 hours.';
            note.style.color = 'var(--sage)';
            form.reset();
          } else {
            note.textContent = 'Please complete the required fields (*).';
            note.style.color = '#b23b3b';
          }
          note.classList.add('show');
        }
      });
    }
  });
})();
