
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
