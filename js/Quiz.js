let start = document.getElementById('start-btn');
let logout = document.getElementById('logout-btn');

start.addEventListener('click', (e) => {
  e.preventDefault();
  window.location = 'Game.html';
})


logout.addEventListener('click', (e) => {
  e.preventDefault();
  window.location = 'Login.html';
})