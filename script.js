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

/*
	#2 HOVER OVER BIG THING
	#2 HOVER OVER BIG THING
	#2 HOVER OVER BIG THING
*/
document.getElementById("big").addEventListener("mouseover", function() {
    //alert("Hey, I told you not to hover over me!");
});

document.getElementById("login_form").addEventListener("submit", function(event)
{
    if(document.getElementsByName("psw")[0].value=="12345678")
    {
        document.getElementsByTagName("h1")[2].innerHTML="Great Job!";
    }
    else
    {
        alert("Incorrect Password");
    }

    event.preventDefault();
});

/*
	#6 SPHERE
	#6 SPHERE
	#6 SPHERE
*/
document.getElementById("sphere").addEventListener("submit", function(event) {
	var radius = parseFloat(document.getElementById("radius").value);
	console.log(radius);
	document.getElementById("volume").innerHTML = (4/3) * Math.PI * (radius ** 3);
	event.preventDefault();
});