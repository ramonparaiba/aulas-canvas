const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


//
let dirX, dirY, posX, posY;
let velocity;
let time;



function Start(){
  dirX = dirY = posX = posY = 0;
  velocity = 50;
  time = setInterval(Update, 100);
  document.addEventListener('keydown', KeyDown)
  document.addEventListener('keyup', KeyUp)
}
function Update(){
  ctx.clearRect(0,0,canvas.width, canvas.height)
  posX += dirX * velocity
  posY += dirY * velocity
  renderDuende(posX, posY)
}
function renderDuende(x, y){
  let character = new Image();
  character.src =  'imgs/duendin.png'
  character.onload = function () {
    ctx.drawImage(character, x, y)
  }
}


function KeyDown(event){
  let tecla = event.key;
  if (tecla === 'ArrowUp')
      dirY = -1
  if(tecla === 'ArrowDown')
      dirY = 1
  if(tecla === 'ArrowLeft')
      dirX = -1
  if(tecla === 'ArrowRight')
      dirX = 1
}

function KeyUp(event){
  let tecla = event.key;
  if (tecla === 'ArrowUp')
      dirY = 0
  if(tecla === 'ArrowDown')
      dirY = 0
  if(tecla === 'ArrowLeft')
      dirX = 0
  if(tecla === 'ArrowRight')
      dirX = 0
}




window.addEventListener('load', Start)