var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");



function get_random_color() {
	var ran1="#"+((1<<24)*Math.random()|0).toString(16);
	var ran2="#"+((1<<24)*Math.random()|0).toString(16);
	color1.value=ran1;
	color2.value=ran2;
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background +";";
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background +";";
}




color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", get_random_color);

//console.log(css, color1, color2);