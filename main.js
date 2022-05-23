var lastx, lasty;
var color = "black";
var width = 2;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

newWidth = screen.width - 70;
newHeight = screen.height - 200;

if( screen.width < 992)
{
 document.getElementById("myCanvas").width = newWidth;
 document.getElementById("myCanvas").height = newHeight;
 document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    lastx = e.touches[0].clientX - canvas.offSetLeft;
    lasty = e.touches[0].clientY - canvas.offSetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    currentx = e.touches[0].clientX - canvas.offSetLeft;
    currenty = e.touches[0].clientY - canvas.offSetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo (lastx, lasty);
    ctx.lineTo (currentx, currenty);
    ctx.stroke();
    lastx = currentx;
    lasty = currenty;
}
function ClearAll(){
    ctx.clearRect(0,0, ctx.canvas.width , ctx.canvas.height);
}

