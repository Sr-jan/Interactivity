// Interactivity demo 1

console.log("testing that this works")

//invert
var invertButton = document.querySelector("button")
var bodyClass = document.body.classList

invertButton.addEventListener("click", changeColor)

function changeColor() {
	console.log('testing color change')

	if (bodyClass.contains("invert")) {
			bodyClass.remove("invert")
	} 
	else {
			bodyClass.add("invert")
	} 
}

//greeting
var hand = document.querySelector(".waving-hand")
var greeting = document.querySelector(".greeting")

hand.addEventListener("click", sayHello)
function sayHello() {
	greeting.textContent = "hello there grend."
}


//fern
var toggle = document.querySelector(".toggle")
var content = document.querySelector(".content")

toggle.addEventListener("click", showHide)
function showHide() {
	content.id == "show" ? content.id = "" : content.id = "show"

}







