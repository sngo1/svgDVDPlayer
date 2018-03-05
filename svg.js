// Samantha Ngo
// Softdev -- Period 7
// HW07
// 2018-03-01

var pic = document.getElementById("vimage");
console.log("PIC: ", pic);
var cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
console.log("cl: ", cl);

/* NOTES & CODE
cl.setAttribute("cx", "0");
cl.setAttribute("cy", "0");
cl.setAttribute("r", "200");
cl.setAttribute("fill", "purple");
cl.setAttribute("stroke", "pink");
console.log("Attribute cx changed to 200");

pic.appendChild(cl);
console.log("Child appended.")

var change = function(e){
    pic = this;
    this.setAttribute("fill","green");
    console.log("Color changed to green.");
}
*/

// For drawing lines
var lastX = null;
var lastY = null;

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

// console.log("clearboard tests:");
// clearBoard()

// Activate listener for clear button
eraser = document.getElementById("clear");
console.log("ERASER: ", eraser);
eraser.addEventListener("click", clearBoard);

// Draws a new dot and connects it to the last one
var drawDot = function(xCor, yCor){
    if (!(lastX == null && lastY == null)){
	drawBlackLine(lastX, lastY, xCor, yCor);
	cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	cl.setAttribute("cx", String(lastX));
	cl.setAttribute("cy", String(lastY));
	cl.setAttribute("r", "20");
	cl.setAttribute("fill", "pink");
	cl.setAttribute("stroke", "pink");
	console.log("Circle drawn.");
	pic.appendChild(cl);
    }
    cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cl.setAttribute("cx", String(xCor));
    cl.setAttribute("cy", String(yCor));
    cl.setAttribute("r", "20");
    cl.setAttribute("fill", "pink");
    cl.setAttribute("stroke", "pink");
    console.log("Circle drawn.");
    pic.appendChild(cl);
    console.log("Child appended.");
    console.log("On the board: ", pic.children);
    lastCor = [xCor, yCor];
    lastX = xCor;
    lastY = yCor;
    return lastCor;
}

// NOT IN USE
// Draws a pink line to mask lines overlapping circles; does not compensate for
// overlaps
var drawPinkLine = function(startX, startY, endX, endY){
    line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(startX));
    line.setAttribute("y1", String(startY));
    line.setAttribute("x2", String(endX));
    line.setAttribute("y2", String(endY));
    line.setAttribute("stroke", "pink");
    line.setAttribute("stroke-width", "2");
    console.log("Dot Connected.");
    pic.appendChild(line);
    console.log("Child appended.");
    console.log("On the board: ", pic.children);
    lastCor = [endX, endY];
    return lastCor;
}

// Draws a black line given start and end coordinates
var drawBlackLine = function(startX, startY, endX, endY){
    line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(startX));
    line.setAttribute("y1", String(startY));
    line.setAttribute("x2", String(endX));
    line.setAttribute("y2", String(endY));
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");
    console.log("Dot Connected.");
    pic.appendChild(line);
    console.log("Child appended.");
    console.log("On the board: ", pic.children);
    lastCor = [endX, endY];
    return lastCor;
}

// Passes the coordinates of the mouse to the drawDot function
var clicked = function(e){
    console.log("X: ", e.offsetX);
    console.log("Y: ", e.offsetY);
    drawDot(e.offsetX, e.offsetY);
    return true;
}

// Activates listener for board
pic.addEventListener("click", clicked);
console.log(pic.children);
