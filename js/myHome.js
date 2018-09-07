//ICON FADE IN & SLIDE TOGGLE
function menu() {
	$(".menu").hide();
	$(".menu").fadeIn(5000);
	$(".links").hide();
	$(".nav-button").on("click", function() {
		$(this).next().slideToggle(400);
	});
}

$(window).resize();
$(document).ready(menu);
