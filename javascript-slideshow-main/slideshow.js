var slides = document.getElementsByClassName("slide");

function startSlideShow() {

    console.log("hi");

    // for (i=0; i<slides.length; i++) {
    //     slides[i].classList.add(i);
    // }

    // initialize slideshow with first slide (slides[0])
    // - make visible
    // - add active slide class
    slides[0].style.display = "block";
    slides[0].classList.add("active-slide");

    // initialize all slides other than the first
    // - hide them
    // - remove active-slide class
    for (i=1; i<slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("active-slide");
    }
}

function nextSlide() {
    console.log("next");
    
    for(i=0; i<slides.length; i++) {
        // if it's the last slide, clicking next will make slides[0] active.
        if (i == slides.length - 1 && slides[i].classList.contains("active-slide")) {
            slides[i].style.display = "none";
            slides[i].classList.remove("active-slide");
            slides[0].classList.add("active-slide");
            break;
        }
        // if it's the active slide, make the next slide active.
        if (slides[i].classList.contains("active-slide")) {
            slides[i].style.display = "none";
            slides[i].classList.remove("active-slide");
            slides[i+1].classList.add("active-slide");
            break;
        }
    }

    // display the active-slide
    var currentSlide = document.getElementsByClassName("active-slide");
    currentSlide[0].style.display = "block";
}

function prevSlide() {
    console.log("prev");
    
    for(i=0; i<slides.length; i++) {
        // if it's the last slide, clicking next will make slide[0] active.
        if (i == 0 && slides[i].classList.contains("active-slide")) {
            slides[i].style.display = "none";
            slides[i].classList.remove("active-slide");
            slides[slides.length - 1].classList.add("active-slide");
            break;
        }
        // if it's the active slide, make the next slide active.
        if (slides[i].classList.contains("active-slide")) {
            slides[i].style.display = "none";
            slides[i].classList.remove("active-slide");
            slides[i-1].classList.add("active-slide");
            break;
        }
    }
    // display the active-slide
    var currentSlide = document.getElementsByClassName("active-slide");
    currentSlide[0].style.display = "block";
}