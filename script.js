window.onscroll = function() {
    myFunction()
};
	let mains = ["mainabout", "maincoding", "mainphotos", "maincontact"];
	let bars = ["aboutbar", "codebar", "photobar", "contactbar"]
function myFunction() {

	for (let i = 0; i < mains.length; i++){
		var winScroll = document.documentElement.scrollTop - document.getElementById('landing').clientHeight;
		for (let j = 0; j < i; j++) {
			winScroll -= document.getElementById(mains[j]).clientHeight
		}
	    var height = document.getElementById(mains[i]).clientHeight;
	    var scrolled = (winScroll / height) * 100;
		if (scrolled > 0) {
	    	document.getElementById(bars[i]).style.width = scrolled + "%";
		}
		else {
			document.getElementById(bars[i]).style.width = "0%";
		}
	}
}
