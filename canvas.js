var canvas = document.getElementById("draw");
var ctx = canvas.getContext('2d');
var drawCircles = true;
var toggleButton = document.getElementById("toggle");
var clearButton = document.getElementById("clear");
var prevX = -1;
var prevY = -1;

var draw = function(e) {
    if (drawCircles){
        if (prevX != -1){
            ctx.moveTo(prevX, prevY);
        };
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.moveTo(e.offsetX, e.offsetY);
        prevX = e.offsetX;
        prevY = e.offsetY;
    }
    else{
        ctx.fillRect(e.offsetX-15, e.offsetY-15, 30, 30);
    };
};

var toggle = function(e) {
    drawCircles = !drawCircles;
};

var clear = function(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    prevX = -1;
    prevY = -1;
};

ctx.fillStyle = "#87CEEB";
canvas.addEventListener("click", draw);
toggleButton.addEventListener("click", toggle);
clearButton.addEventListener("click", clear);
