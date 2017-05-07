function main() {
    $(".fcc,.hr,.misc,#home,.projects,.created,#social1,#social2,#social3,#social4,#social5").each(function() {
        $(this).hide();
    });

    //OPENING ANIMATION
    $(".fcc").delay(1000).fadeIn(1000);
    $(".hr").delay(2000).fadeIn(1000);
    $(".misc").delay(3000).fadeIn(1000);
    $(".created").delay(4000).fadeIn(1000);
    $("#social1").delay(4500).fadeIn(1000);
    $("#social2").delay(5000).fadeIn(1000);
    $("#social3").delay(5500).fadeIn(1000);
    $("#social4").delay(6000).fadeIn(1000);
    $("#social5").delay(6500).fadeIn(1000);
    $("#home").delay(7000).fadeIn(1000);
    
    //SLIDE TOGGLE ANIMATIONS
    $(".projects-button").on("click", function() {
        $(this).toggleClass("active");
        $(this).text("Viewed");
        $(this).css("background-color", "grey");
        $(this).text("Viewed");
        $(this).next().slideToggle(400);
    });
}

$(document).ready(main);
