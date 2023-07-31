var pacman;
var ghost;
var pacmanX, pacmanY, step= 3;


window.addEventListener('DOMContentLoaded', function(){
  pacman = document.getElementById('pacman');
  ghost = document.getElementById('ghost');

  var pacmanInitialPosition = pacman.getBoundingClientRect()
  pacmanX = pacmanInitialPosition.x
  pacmanY = pacmanInitialPosition.y

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