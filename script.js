var canvas = document.getElementById("theCanvas");
var button = document.getElementById("clear");
var context = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 300;
var drawing = false

context.fillStyle = "red";
context.strokeStyle = "red";
context.lineCap = "round";
context.lineWidth = 5;

var sizeUp = document.getElementById("sizeUp");
var sizeDown = document.getElementById("sizeDown");
sizeUp.onclick = function() {
context.lineWidth++;
}
sizeDown.onclick = function() {
if (context.lineWidth > 1)
context.lineWidth--;
}

var blueButton = document.getElementById("blue");
var redButton = document.getElementById("red");
var greenButton = document.getElementById("green");
blueButton.onclick = function() {
context.strokeStyle = "blue";
}
redButton.onclick = function() {
context.strokeStyle = "red";
}
greenButton.onclick = function() {
context.strokeStyle = "green";
}

canvas.onmousedown = function(e) {
drawing = true
context.beginPath();
context.moveTo(e.pageX - this.offsetLeft,
e.pageY - this.offsetTop
);
}

canvas.onmousemove = function(e) {
if (drawing) {
context.lineTo(e.pageX - this.offsetLeft,
e.pageY - this.offsetTop
);
context.stroke();
}
}

document.onmouseup = function(){
drawing = false;
context.closePath();
}

button.onclick = function(){
context.clearRect(0, 0, canvas.width, canvas.height);
}