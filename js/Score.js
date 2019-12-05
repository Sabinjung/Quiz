let displayScore = document.getElementById('score');
let restart = document.getElementById('restart-btn');
let data = localStorage.getItem('score');

score = 4 - data;
displayScore.innerHTML = displayScore.innerText + score;

restart.addEventListener('click', (e) => {
  e.preventDefault();
  window.location = 'Quiz.html';
})
