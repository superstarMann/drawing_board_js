const canvas = document.getElementById("CanvasJs");
const select_color = document.getElementsByClassName("control_color");
const range = document.getElementById("JsRange");
const ctx = canvas.getContext(`2d`);

canvas.width = 600;
canvas.height = 600;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 3;

let painting = false;

function StopMouse() {
    painting = false;
}

function StartPainting() {
    painting = true;
}

function OnMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    
    if(!painting){
       ctx.beginPath();
       ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x , y);
        ctx.stroke();
    }
}


function OnMouseDown(event){
   painting = true;
 
}

function ChooseColor(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    
}
function handleRange(event){
    const size = event.target.value;
    ctx.lineWidth = size
}

if(canvas){
   canvas.addEventListener("mousemove", OnMouseMove)
   canvas.addEventListener("mousedown", StartPainting)
   canvas.addEventListener("mouseup", StopMouse)
   canvas.addEventListener("mouseleave", StopMouse)
}

Array.from(select_color).forEach(color => color.addEventListener("click", ChooseColor));

if(range){
    range.addEventListener("click", handleRange)
}