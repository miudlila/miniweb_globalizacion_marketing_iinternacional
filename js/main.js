/* ============================================================
   main.js — Mercados Financieros Internacionales (COMT068PO)
   Handles: mobile nav toggle, back-to-top, reading progress
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile navigation toggle ────────────────────────────── */
  const toggle = document.querySelector('.nav__toggle');
  const menu   = document.querySelector('.nav__menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close menu when a link is clicked */
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close menu on outside click */
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Back-to-top button ──────────────────────────────────── */
  const btnTop = document.querySelector('.btn-top');

  if (btnTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btnTop.classList.add('is-visible');
      } else {
        btnTop.classList.remove('is-visible');
      }
    }, { passive: true });

    btnTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Reading progress bar ────────────────────────────────── */
  const progressBar = document.getElementById('progress-bar');

  if (progressBar) {
    function updateProgress() {
      const doc    = document.documentElement;
      const body   = document.body;
      const total  = Math.max(
        body.scrollHeight, doc.scrollHeight,
        body.offsetHeight, doc.offsetHeight,
        body.clientHeight, doc.clientHeight
      ) - doc.clientHeight;

      if (total <= 0) {
        progressBar.style.width = '100%';
        return;
      }

      const pct = Math.min(100, Math.round((window.scrollY / total) * 100));
      progressBar.style.width = pct + '%';
    }

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ── Sistema de modales ─────────────────────────────────── */
  function openModal(id) {
    var backdrop = document.getElementById(id);
    if (!backdrop) return;
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    var closeBtn = backdrop.querySelector('.modal__close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(id) {
    var backdrop = document.getElementById(id);
    if (!backdrop) return;
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.is-open').forEach(function (m) {
        m.classList.remove('is-open');
      });
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-backdrop')) {
      e.target.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  window.openModal  = openModal;
  window.closeModal = closeModal;

  /* ── Cookie consent ──────────────────────────────────────── */
  var cookieBanner = document.getElementById('cookie-banner');

  if (cookieBanner && !localStorage.getItem('cookie-consent')) {
    setTimeout(function () {
      cookieBanner.classList.add('is-visible');
    }, 600);
  }

  function cookieConsent(choice) {
    localStorage.setItem('cookie-consent', choice);
    if (cookieBanner) {
      cookieBanner.classList.remove('is-visible');
    }
  }

  window.cookieConsent = cookieConsent;

  /* ── Quiz de autoevaluación ─────────────────────────────── */

  /* Selección de opción */
  document.addEventListener('click', function (e) {
    var opt = e.target.closest('.quiz__option');
    if (!opt || opt.disabled) return;
    var quiz = opt.closest('[data-quiz]');
    if (!quiz) return;
    quiz.querySelectorAll('.quiz__option').forEach(function (o) { o.classList.remove('is-selected'); });
    opt.classList.add('is-selected');
  });

  function checkQuiz(quizId) {
    var quiz     = document.getElementById(quizId);
    if (!quiz) return;
    var selected = quiz.querySelector('.quiz__option.is-selected');
    var feedback = document.getElementById(quizId + '-feedback');
    if (!selected) return;

    var isCorrect = selected.dataset.correct === 'true';

    /* Mostrar el mensaje correcto, ocultar el otro */
    feedback.querySelector('.quiz__msg-correct').hidden   = !isCorrect;
    feedback.querySelector('.quiz__msg-incorrect').hidden = isCorrect;
    feedback.hidden = false;

    /* Bloquear opciones y revelar la correcta */
    quiz.querySelector('.quiz__check').disabled = true;
    quiz.querySelectorAll('.quiz__option').forEach(function (o) {
      o.disabled = true;
      if (o.dataset.correct === 'true') o.classList.add('is-correct-reveal');
    });
  }

  function resetQuiz(quizId) {
    var quiz     = document.getElementById(quizId);
    if (!quiz) return;
    var feedback = document.getElementById(quizId + '-feedback');

    quiz.querySelectorAll('.quiz__option').forEach(function (o) {
      o.disabled = false;
      o.classList.remove('is-selected', 'is-correct-reveal');
    });
    quiz.querySelector('.quiz__check').disabled = false;
    feedback.querySelector('.quiz__msg-correct').hidden   = true;
    feedback.querySelector('.quiz__msg-incorrect').hidden = true;
    feedback.hidden = true;
  }

  window.checkQuiz = checkQuiz;
  window.resetQuiz = resetQuiz;

  /* ── Active nav link highlighting ───────────────────────── */
  const currentPath = window.location.pathname.split('/').pop();

  document.querySelectorAll('.nav__link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = href.split('/').pop();
    if (linkFile === currentPath || (currentPath === '' && linkFile === 'index.html')) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
