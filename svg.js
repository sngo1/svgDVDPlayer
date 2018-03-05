// Samantha Ngo
// Softdev -- Period 7
// K#08: Animation Nation
// 2018-03-04

var pic = document.getElementById("vimage");
console.log("PIC: ", pic);
var cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
console.log("cl: ", cl);

// Clears the board
var clearBoard = function(){
    console.log(pic);
    objectsLeft = pic.children.length;
    while (objectsLeft > 0){
	console.log("Length: ", objectsLeft);
	pic.removeChild(pic.children[0]);
	console.log("Element Removed");
	objectsLeft -= 1;
    }
    lastX = null;
    lastY = null;
    console.log("Board cleared.");
    return true;
}

// Draw a dot given x and y coordinates
var drawDot = function(xCor, yCor){
    cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cl.setAttribute("cx", String(xCor));
    cl.setAttribute("cy", String(yCor));
    cl.setAttribute("r", "20");
    cl.setAttribute("fill", "pink");
    cl.setAttribute("stroke", "pink");
    console.log("Circle drawn at: ", xCor, yCor);
    pic.appendChild(cl);
    console.log("On the board: ", pic.children);
    return true;
}

var requestID;

// Stop animation
var stopAnim = function(e){
    console.log("Cancel ID: ", requestID);
    window.cancelAnimationFrame(requestID);
    console.log("Animation stopped.");
    return true;
}

var xCor = Math.floor(Math.random() * 501);
var yCor = Math.floor(Math.random() * 501);
var xAdd = 5;
var yAdd = 4;

// Increments coordinates of where the ball is drawn -- Motion
var runDVD = function(e){
    // Delete last circle drawn -- stop motion animation
    clearBoard();

    // Every time a coordinate reaches an edge, reverse it to go in the opposite direction
    if (xCor >= 500 || xCor <= 0){
	xAdd *= -1;
    }
    if (yCor >= 500 || yCor <= 0){
	yAdd *= -1;
    }

    // Update coordinates accordingly
    xCor += xAdd;
    yCor += yAdd;

    // Draw new circle at coordinate
    drawDot(xCor, yCor);
    requestID = window.requestAnimationFrame(runDVD);
    console.log("REQID: ", requestID);
    return true;
}

// Activate listener for start button
startButton = document.getElementById("start");
console.log("Start: ", startButton);
startButton.addEventListener("click", runDVD);

// Activate listener for stop button
stopButton = document.getElementById("stop");
console.log("Stop: ", stopButton);
stopButton.addEventListener("click", stopAnim);
