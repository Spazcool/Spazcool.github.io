function menu() {
	$(".mymenu").hide();
	$(".mymenu").fadeIn(5000);
	$(".links").hide();
	$(".nav-button").on("click", function() {
		$(this).next().slideToggle(400);
	});
}

function lightning() {
	$(".lightning").hide();
	$(".mytitle").on("click", function() {
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
