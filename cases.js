// Cases queue page logic

let owned = 0;

function restoreCase(caseId, btnId) {
  const row = document.querySelector(`tr[data-id="${caseId}"]`);
  const btn = document.getElementById(btnId);

  if (localStorage.getItem(`case${caseId}closed`) === '1') {
    row.classList.add('owned');
    row.querySelector('.status-badge').className = 'status-badge status-closed';
    row.querySelector('.status-badge').textContent = 'Closed';
    btn.classList.add('done');
    btn.textContent = '✓ Closed';
    owned++;
  } else if (localStorage.getItem(`case${caseId}owned`) === '1') {
    row.querySelector('.status-badge').className = 'status-badge status-owned';
    row.querySelector('.status-badge').textContent = 'Owned';
    btn.textContent = 'View';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  restoreCase(1, 'ownBtn1');
  restoreCase(2, 'ownBtn2');
  restoreCase(3, 'ownBtn3');
  restoreCase(4, 'ownBtn4');
});

function ownCase(id, btn) {
  if (btn.classList.contains('done')) return;
  localStorage.setItem(`case${id}owned`, '1');
  if (id === 1) { window.location.href = 'case1.html'; return; }
  if (id === 2) { window.location.href = 'case2.html'; return; }
  if (id === 3) { window.location.href = 'case3.html'; return; }
  if (id === 4) { window.location.href = 'case4.html'; return; }
}
