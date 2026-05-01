// Case 1 page logic

function startCall() {
  document.getElementById('callBtnWrap').style.display = 'none';
  document.getElementById('chatLog').style.display = 'block';
  setTimeout(() => document.getElementById('notesBtnWrap').style.display = 'block', 300);
}

function showNotes() {
  document.getElementById('notesBtnWrap').style.display = 'none';
  document.getElementById('notesSection').style.display = 'block';
  document.getElementById('decisionCard').style.display = 'flex';
}

function answerNo() {
  document.getElementById('decisionCard').style.display = 'none';
  document.getElementById('noFeedback').style.display = 'block';
  scrollFeed();
}

function answerYes() {
  document.getElementById('decisionCard').style.display = 'none';
  const noFeedbackBtn = document.querySelector('#noFeedback .call-btn');
  if (noFeedbackBtn) noFeedbackBtn.style.display = 'none';
  document.getElementById('postLog').style.display = 'block';
  scrollFeed();
}

function showCall2() {
  document.querySelector('#postLog .call-btn').style.display = 'none';
  document.getElementById('chatLog2').style.display = 'block';
  setTimeout(() => document.getElementById('completion').style.display = 'flex', 400);
  scrollFeed();
}
