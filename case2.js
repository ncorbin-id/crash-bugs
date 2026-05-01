// Case 2 page logic

function answer(yes) {
  document.getElementById('decisionCard').style.display = 'none';
  document.getElementById(yes ? 'feedbackYes' : 'feedbackNo').style.display = 'block';
  scrollFeed();
}

function proceed() {
  document.querySelectorAll('#feedbackYes .call-btn, #feedbackNo .call-btn').forEach(b => b.style.display = 'none');
  document.getElementById('cyriSection').style.display = 'flex';
  scrollFeed();
}

function answer2(yes) {
  document.getElementById('decisionCard2').style.display = 'none';
  document.getElementById(yes ? 'feedback2Yes' : 'feedback2No').style.display = 'block';
  scrollFeed();
}

function showHold() {
  document.querySelectorAll('#feedback2Yes .call-btn, #feedback2No .call-btn').forEach(b => b.style.display = 'none');
  document.getElementById('holdSection').style.display = 'flex';
  scrollFeed();
}

function placeHold() {
  document.getElementById('placeHoldBtn').style.display = 'none';
  document.getElementById('holdBanner').style.display = 'block';
  document.getElementById('followupEmail').style.display = 'block';
  scrollFeed();
}
