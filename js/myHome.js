//SLIDESHOW ANIMATION FOR WORK SECTION
var slideIndex = 0;
if (document.getElementsByClassName("mySlides") !== undefined){
showSlides();
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); 
}

//ICON FADE IN & SLIDE TOGGLE
function menu() {
	$(".menu").hide();
	$(".blog").hide();	
	$(".menu").fadeIn(5000);
	$(".blog").fadeIn(5000);
	$(".links").hide();
	$(".nav-button").on("click", function() {
		$(this).next().slideToggle(400);
	});
}

//LIGHTNING ANIMATION
function lightning() {
	$(".lightning").hide();
	$(".title").on("click", function() {
		for (var i = 0; i < 4; i++) {
			$(".lightning").fadeIn(80);
			$(".lightning").fadeOut(130);
		}
			$(".lightning").fadeIn(80);
		$(".lightning").fadeOut(1000);
	});	
}

$(window).resize();
$(document).ready(menu);
$(document).ready(lightning);
