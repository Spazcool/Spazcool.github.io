//SLIDESHOW ANIMATION FOR WORK SECTION
var slideIndex = 0;
//showSlides();

//ADDED THE IF STATEMENT IN AN ATTEMPT AT SQUASHING AN ERROR, NOPE
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
     //THROWS AN TYPE ERROR HERE REFERENCING "style"
     //I THOUGHT IT WAS DUE TO THE HTML BEING COMMENTED OUT BUT STILL THERE WHEN THE HTML WAS ACTIVE
     //MAYBE NEEDS A MORE CURRENT VERSION OF A LIBRARY SOMEWHERE??
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); 
}
