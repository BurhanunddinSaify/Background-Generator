var color1 = document.querySelector("#color1")
var color2 = document.querySelector("#color2")
var bgcolor = document.getElementById("gradient")



function colorGenerator() {
    bgcolor.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";}
    

color1.addEventListener("input",colorGenerator);

color2.addEventListener("input",colorGenerator);


// // var css = document.querySelector("h3");
// var color1 = document.querySelector("#color1");
// var color2 = document.querySelector("#color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	// css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);
