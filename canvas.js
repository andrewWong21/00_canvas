var canvas = document.getElementById("draw");
var ctx = canvas.getContext('2d');
var drawCircles = true;
var toggleButton = document.getElementById("toggle");
var clearButton = document.getElementById("clear");

var draw = function(e) {
    ctx.beginPath();
    if (drawCircles){
        ctx.arc(e.offsetX, e.offsetY, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
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
};

ctx.fillStyle = "#87CEEB";
canvas.addEventListener("click", draw);
toggleButton.addEventListener("click", toggle);
clearButton.addEventListener("click", clear);
