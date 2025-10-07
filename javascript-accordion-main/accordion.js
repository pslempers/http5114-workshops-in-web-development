function accordionClick(target) {
    console.log(target);
    const section = document.getElementById(target);
    var sections = document.getElementsByClassName("accordion-section");
    
    if (section.style.contentVisibility == "visible") {
        section.style.contentVisibility = "hidden";
        isOpen = true;
    }
    else {
        for (i=0; i<sections.length; i++) {
            sections[i].style.contentVisibility = "hidden";
        }
        section.style.contentVisibility = "visible";
    }
}