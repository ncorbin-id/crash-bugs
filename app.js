// Shared utilities — used across all pages

function scrollFeed() {
  setTimeout(() => {
    const feed = document.querySelector('.feed-pane');
    if (feed) feed.scrollTo({ top: feed.scrollHeight, behavior: 'smooth' });
  }, 80);
}

function updateFinalBtn(container) {
  const btn = container.querySelector('[data-mark-closed]');
  if (!btn) return;
  const closed = ['case1closed','case2closed','case3closed','case4closed']
    .filter(k => localStorage.getItem(k) === '1').length;
  if (closed >= 3) {
    btn.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        node.textContent = ' Complete simulation';
      }
    });
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) icon.textContent = 'check_circle';
    if (btn.tagName === 'A') btn.href = 'close.html';
  }
}

function markClosed(caseKey) {
  localStorage.setItem(caseKey, '1');
}

function toggle(id) {
  const el = document.getElementById(id);
  const isOpen = el.classList.contains('open');
  el.classList.toggle('open', !isOpen);
  el.querySelector('.accordion-trigger').setAttribute('aria-expanded', String(!isOpen));
}

function startSimulation() {
  ['case1closed', 'case2closed', 'case3closed', 'case4closed'].forEach(k => localStorage.removeItem(k));
  window.location.href = 'queue.html';
}

function restartSimulation() {
  ['case1closed', 'case2closed', 'case3closed', 'case4closed'].forEach(k => localStorage.removeItem(k));
  window.location.href = 'index.html';
}
