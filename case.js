// Generic case page component system — shared across all case pages.
// Behavior is declared entirely via data attributes on HTML elements.
// Requires: scrollFeed() and markClosed() from app.js.

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-reveals], [data-mark-closed]');
  if (!btn) return;

  // Mark a case closed in localStorage before the browser follows the href
  if (btn.dataset.markClosed) markClosed(btn.dataset.markClosed);
  if (!btn.dataset.reveals) return;

  // What to hide: the whole decision card, or just the button itself
  const decisionCard = btn.closest('.decision-card');
  if (decisionCard) {
    decisionCard.style.display = 'none';
  } else {
    btn.style.display = 'none';
  }

  // Reveal an element by clearing its inline display — lets CSS determine the display type
  // (.decision-card gets flex, .completion-card gets flex, plain divs get block, etc.)
  function show(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.removeProperty('display');
    updateFinalBtn(el);
    scrollFeed();
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
