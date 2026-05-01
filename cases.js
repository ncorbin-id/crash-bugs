// Cases queue page logic

let owned = 0;

function restoreCase(caseId, btnId, localKey) {
  if (localStorage.getItem(localKey) !== '1') return;
  const row = document.querySelector(`tr[data-id="${caseId}"]`);
  const btn = document.getElementById(btnId);
  row.classList.add('owned');
  row.querySelector('.status-badge').className = 'status-badge status-closed';
  row.querySelector('.status-badge').textContent = 'Closed';
  btn.classList.add('done');
  btn.textContent = '✓ Closed';
  owned++;
}

window.addEventListener('DOMContentLoaded', () => {
  restoreCase(1, 'ownBtn1', 'case1closed');
  restoreCase(2, 'ownBtn2', 'case2closed');
  restoreCase(3, 'ownBtn3', 'case3closed');
  restoreCase(4, 'ownBtn4', 'case4closed');
});

function ownCase(id, btn) {
  if (btn.classList.contains('done')) return;
  if (id === 1) { window.location.href = 'Crash Bugs Case 1.html'; return; }
  if (id === 2) { window.location.href = 'Crash Bugs Case 2.html'; return; }
  if (id === 3) { window.location.href = 'Crash Bugs Case 3.html'; return; }
  if (id === 4) { window.location.href = 'Crash Bugs Case 4.html'; return; }
  btn.classList.add('done');
  btn.textContent = '✓ Owned';
  const row = document.querySelector(`tr[data-id="${id}"]`);
  row.classList.add('owned');
  const badge = row.querySelector('.status-badge');
  badge.className = 'status-badge status-closed';
  badge.textContent = 'Closed';
  owned++;
  if (owned === 4) document.getElementById('allDone').classList.add('visible');
}
