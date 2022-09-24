const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.fillRect(100,50,50,50);

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

