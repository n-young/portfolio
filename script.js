//Bars
window.onscroll = function () {
	progressBar()
};
let mains = ["mainabout", "mainprojects", "mainskills", "maincontact"];
let bars = ["aboutbar", "projectsbar", "skillsbar", "contactbar"]

function progressBar() {

	for (let i = 0; i < mains.length; i++) {
		var winScroll = document.documentElement.scrollTop - document.getElementById('landing').clientHeight;
		for (let j = 0; j < i; j++) {
			winScroll -= document.getElementById(mains[j]).clientHeight
		}
		var height = document.getElementById(mains[i]).clientHeight;
		var scrolled = (winScroll / height) * 100 - 8;
		if (scrolled > 0) {
			document.getElementById(bars[i]).style.width = scrolled + "%";
		} else {
			document.getElementById(bars[i]).style.width = "0%";
		}
	}
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

// Open
window.onload = () => {
	console.log("Loaded")
	let firsts = Array.from(document.getElementsByClassName("first"))
	console.log(typeof firsts)
	firsts.map(e => e.click())
}