// JavaScript Document
var t;
var currentIndex = 1;

function next(){
	clearInterval(t);
	if(currentIndex < 9){
		currentIndex++;
		document.getElementById("hinhslide").src = "images/slider/" + currentIndex + ".jpg";
	}
	else{
		currentIndex=1;
		document.getElementById("hinhslide").src = "images/slider/" + currentIndex + ".jpg";
	}
	t = setInterval("next()", 3000);
	
}
function back(){
	clearInterval(t);
	if(currentIndex > 1){
		currentIndex--;
		document.getElementById("hinhslide").src = "images/slider/" + currentIndex + ".jpg";
	}
	else{
		currentIndex=9;
		document.getElementById("hinhslide").src = "images/slider/" + currentIndex + ".jpg";
	}
	t = setInterval("back()", 3000);
}
t = setInterval("next()", 2000);