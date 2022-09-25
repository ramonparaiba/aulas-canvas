const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');



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
document.getElementById('up').addEventListener('click', myUp)
document.getElementById('down').addEventListener('click', myDown)
document.getElementById('right').addEventListener('click', myRight)
document.getElementById('left').addEventListener('click', myLeft)
document.addEventListener('mouseover', ClickOff)

function Update(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    posX += dirX * velocity
    posY += dirY * velocity
    drawRect(posX, posY);
    drawGrid();
    Limites();
}
function myUp(event){
    dirY = -1
}
function myDown(event){
    dirY = 1
}
function myLeft(event){
    dirX= -1
}
function myRight(event){
    dirX = 1
}
function ClickOff(event){
    dirX = dirY = 0;
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

function Limites(){
    if(posX >= canvas.width)
        posX = canvas.width-50
    if(posX < 0)
        posX = 0
    if(posY >= canvas.height)
        posY = canvas.height-50
    if(posY < 0)
        posY = 0
}


window.addEventListener('load', Start)






function drawGrid(){
    ctx.beginPath();
        
    ctx.strokeStyle = "#f4936e";
    for (let i = 50; i < canvas.width; i+=50) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);        
    }  
    for (let i = 50; i < canvas.height; i+=50) {
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);        
    }       
    ctx.stroke();
}


function drawRect(posX, posY){
    ctx.fillStyle = '#811d5f';
    ctx.fillRect(posX,posY,50,50);
}

