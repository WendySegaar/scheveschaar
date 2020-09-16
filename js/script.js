var displaySlide = 1;
var slides = new Array("images/slideshow.png", "images/slideshow2.png", "images/slideshow3.png");

window.onload = function timer() {
	setTimeout(changeSlide, 3000);
}
function changeSlide() {
	document.getElementById("slide").setAttribute("src", slides[displaySlide]);
	displaySlide++;
	if (displaySlide >= slides.length) {
		displaySlide = 0;
	}
	setTimeout(changeSlide, 3000);
}
function dropdown(){
	document.getElementById("dropdown").style.display="flex";
	setTimeout(resetDropdown, 5000);
}

function resetDropdown() {
	document.getElementById("dropdown").style.display="none";
}