var pacman;
var ghost;
var pacmanX = 0, pacmanY = 0, step= 3;


window.addEventListener('DOMContentLoaded', function(){
  pacman = document.getElementById('pacman');
  ghost = document.getElementById('ghost');

  startGame(pacman)
});

function startGame(pacman) {
  window.addEventListener('keydown', function(e) {
    e.preventDefault();

    const key = e.key;
    switch (key) {
      case "ArrowLeft":
        pacmanX -= step
        pacman.style.left = pacmanX + 'px'
        break;
      case "ArrowRight":
        pacmanX += step
        pacman.style.left = pacmanX + 'px'
        break;
      case "ArrowUp":
        pacmanY -= step
        pacman.style.top = pacmanY + 'px'
        break;
      case "ArrowDown":
        pacmanY += step
        pacman.style.top = pacmanY + 'px'
        break;
    }
  })
}