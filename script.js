/*
	ARGUING BUTTONS
	ARGUING BUTTONS
	ARGUING BUTTONS
	ARGUING BUTTONS
*/

var leftBtn = document.getElementById("left");
var leftText = document.getElementById("leftText");
var rightBtn = document.getElementById("right");
var rightText = document.getElementById("rightText");
leftBtn.addEventListener("click", function() {
	leftText.innerHTML = "<b>I'm right!</b>";
	rightText.innerHTML = "";
});
rightBtn.addEventListener("click", function() {
	rightText.innerHTML = "<b>NO, I'm right!</b>";
	leftText.innerHTML = "";
});