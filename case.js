// Generic case page component system — shared across all case pages.
// Behavior is declared entirely via data attributes on HTML elements.
// Requires: scrollFeed(), markClosed(), updateFinalBtn() from app.js.

const PAGE_KEY = (() => {
  const id = document.body.dataset.caseId;
  return id ? `case${id}progress` : null;
})();

function saveState() {
  if (!PAGE_KEY) return;
  const state = {};
  document.querySelectorAll('[id]').forEach(el => {
    state[el.id] = el.style.display;
  });
  localStorage.setItem(PAGE_KEY, JSON.stringify(state));
}

function restoreState() {
  if (!PAGE_KEY) return;
  const saved = localStorage.getItem(PAGE_KEY);
  if (!saved) return;
  const state = JSON.parse(saved);
  Object.entries(state).forEach(([id, display]) => {
    const el = document.getElementById(id);
    if (el) el.style.display = display;
  });
  document.querySelectorAll('[data-mark-closed]').forEach(btn => {
    updateFinalBtn(btn.closest('[id]') || btn.parentElement);
  });
  scrollFeed();
}

document.addEventListener('DOMContentLoaded', restoreState);

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-reveals], [data-mark-closed]');
  if (!btn) return;

  if (btn.dataset.markClosed) {
    markClosed(btn.dataset.markClosed);
    if (PAGE_KEY) localStorage.removeItem(PAGE_KEY);
  }
  if (!btn.dataset.reveals) return;

  const decisionCard = btn.closest('.decision-card');
  if (decisionCard) {
    decisionCard.style.display = 'none';
  } else {
    btn.style.display = 'none';
  }
  saveState();

  function show(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.removeProperty('display');
    updateFinalBtn(el);
    scrollFeed();
    saveState();
  }

  const delay = parseInt(btn.dataset.delay) || 0;
  delay ? setTimeout(() => show(btn.dataset.reveals), delay) : show(btn.dataset.reveals);

  if (btn.dataset.alsoReveals) {
    const alsoDelay = parseInt(btn.dataset.alsoDelay) || 0;
    alsoDelay
      ? setTimeout(() => show(btn.dataset.alsoReveals), alsoDelay)
      : show(btn.dataset.alsoReveals);
  }
});
