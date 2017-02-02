function menu() {
    $(".menu").hide();
    $(".menu").fadeIn(2000);
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

function hoverpic() {
    /*I hate me for not being able to cycle through the id tags */
    $("#solar").hover(function() {
        $("#solar-pic").css("opacity", "0.9");
    }, function() {
        $("#solar-pic").css("opacity", "0");
    });

    $("#twitch").hover(function() {
        $("#twitch-pic").css("opacity", "0.9");
    }, function() {
        $("#twitch-pic").css("opacity", "0");
    });

    $("#tyson").hover(function() {
        $("#tyson-pic").css("opacity", "0.9");
    }, function() {
        $("#tyson-pic").css("opacity", "0");
    });

    $("#ware").hover(function() {
        $("#ware-pic").css("opacity", "0.9");
    }, function() {
        $("#ware-pic").css("opacity", "0");
    });

    $("#weather").hover(function() {
        $("#weather-pic").css("opacity", "0.9");
    }, function() {
        $("#weather-pic").css("opacity", "0");
    });

    $("#wiki").hover(function() {
        $("#wiki-pic").css("opacity", "0.9");
    }, function() {
        $("#wiki-pic").css("opacity", "0");
    });
};


$(window).resize();
$(document).ready(menu);
$(document).ready(lightning);
$(document).ready(hoverpic);
