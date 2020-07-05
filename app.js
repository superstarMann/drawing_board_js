const canvas = document.getElementById("CanvasJs");
const select_color = document.getElementsByClassName("control_color");
const range = document.getElementById("JsRange");
const mode = document.getElementById("JsMode");
const SaveBtn = document.getElementById("JsSave");
const Eraser = document.getElementById("JsEraser");
const ctx = canvas.getContext(`2d`);


canvas.width = 600;
canvas.height = 600;

ctx.strokeStyle = "#2c2c2c";
ctx.fillStyle = `#2c2c2c`;
ctx.lineWidth = 3;

let painting = false;
let filling = false;


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
    ctx.fillStyle = color;   
}
function handleRange(event){
    const size = event.target.value;
    ctx.lineWidth = size
}

function handleMode(event) {
    if(filling === true){
        filling = false;
        mode.innerText = "채우기";
    }else{
      filling = true;
      mode.innerText = "그리기";
    }
}

function FillCanvas(event) {
    if(filling === false){
        ctx.fillRect(0, 0, 600, 600)
    }
}

function handleCM (event) {
    event.preventDefault()
}

function handleSave (event) {
    const SaveImage = canvas.toDataURL("image/jped");
    const link = document.createElement("a");
    link.href = SaveImage;
    link.download = "나도이제 화가 😁";
    link.click();
}

if(canvas){
   canvas.addEventListener("mousemove", OnMouseMove)
   canvas.addEventListener("mousedown", StartPainting)
   canvas.addEventListener("mouseup", StopMouse)
   canvas.addEventListener("mouseleave", StopMouse)
   canvas.addEventListener("click", FillCanvas)
   canvas.addEventListener("contextmenu", handleCM)
}

Array.from(select_color).forEach(color => color.addEventListener("click", ChooseColor));

if(range){
    range.addEventListener("click", handleRange)
}

if(mode){
    mode.addEventListener("click", handleMode)
}

if(SaveBtn){
    SaveBtn.addEventListener("click", handleSave)
}

if(Eraser){
    Eraser.addEventListener("click", handleEraser)
}