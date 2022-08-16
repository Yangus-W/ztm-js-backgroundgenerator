// Create a variable called "css" to catch <h3> element
var css = document.querySelector("h3");
// Create a variable called "colors1" to catch the color from the 1st <input> element (on the left)
var color1 = document.querySelector(".color1");
// Create a variable called "colors1" to catch the color from the 2nd <input> element (on the right)
var color2 = document.querySelector(".color2");
// Create a variable called "body" to catch the <body> element
var body = document.getElementById("gradient");
// Create a variable called "btn" to catch the <button> element
var btn = document.querySelector("button");

// Create a function that sets the background gradient of the body with color1 and color2
function setGradient() {
	// Use string concatenation to create the standard syntaxe of the linear gradient effect with hex(?) colors
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randColor1() {
	var randomNumber1 = Math.floor(Math.random()*16777215).toString(16); // "16777215" is the hexodecimal equivalent of "255"
	var randomColor1 = randomNumber1.padEnd(6,0);
	color1.value = "#" + randomColor1;
	
}

function randColor2() {
	var randomNumber2 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = randomNumber2.padStart(6,0);
	color2.value = "#" + randomColor2;

}

btn.addEventListener("click", randColor1);
btn.addEventListener("click", randColor2);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

setGradient();