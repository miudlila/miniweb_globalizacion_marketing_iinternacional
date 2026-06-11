/* ============================================================
   main.js — Globalización y Marketing Internacional (DEMO)
   Handles: mobile nav toggle, back-to-top, reading progress
   ============================================================ */

(function () {
  'use strict';

  const toggle = document.querySelector('.nav__toggle');
  const menu   = document.querySelector('.nav__menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

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

  window.checkQuiz = function (quizId) {
    const quiz = document.getElementById(quizId);
    if (!quiz) return;

    const selected = quiz.querySelector('.quiz__option[data-checked="true"]');
    if (!selected) {
      alert('Por favor selecciona una respuesta');
      return;
    }

    const isCorrect = selected.getAttribute('data-correct') === 'true';
    const feedback = document.getElementById(quizId + '-feedback');

    if (feedback) {
      feedback.removeAttribute('hidden');
      const correctMsg = feedback.querySelector('.quiz__msg-correct');
      const incorrectMsg = feedback.querySelector('.quiz__msg-incorrect');

      if (isCorrect) {
        if (correctMsg) correctMsg.removeAttribute('hidden');
        if (incorrectMsg) incorrectMsg.setAttribute('hidden', '');
      } else {
        if (correctMsg) correctMsg.setAttribute('hidden', '');
        if (incorrectMsg) incorrectMsg.removeAttribute('hidden');
      }
    }

    quiz.querySelector('.quiz__check').setAttribute('disabled', '');
    quiz.querySelectorAll('.quiz__option').forEach(function (opt) {
      opt.setAttribute('disabled', '');
    });
  };

  window.resetQuiz = function (quizId) {
    const quiz = document.getElementById(quizId);
    if (!quiz) return;

    const feedback = document.getElementById(quizId + '-feedback');
    if (feedback) feedback.setAttribute('hidden', '');

    quiz.querySelectorAll('.quiz__option').forEach(function (opt) {
      opt.removeAttribute('data-checked');
      opt.removeAttribute('disabled');
    });

    quiz.querySelector('.quiz__check').removeAttribute('disabled');
  };

  document.querySelectorAll('.quiz__option').forEach(function (option) {
    option.addEventListener('click', function () {
      const quiz = option.closest('.quiz');
      if (!quiz) return;

      quiz.querySelectorAll('.quiz__option').forEach(function (opt) {
        opt.removeAttribute('data-checked');
      });
      option.setAttribute('data-checked', 'true');
    });
  });
})();
