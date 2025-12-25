const slide = document.querySelectorAll(".slides")
let currentSlide = 0;

slide[currentSlide].style.display = "block"

const prev = () => {
    slide[currentSlide].style.display = "none"
    currentSlide--
    if(currentSlide==-1) currentSlide = currentSlide + 3;
    slide[currentSlide].style.display = "block"
}

const next = () => {
    slide[currentSlide].style.display = "none"
    currentSlide++
    currentSlide = currentSlide % 3;
    slide[currentSlide].style.display = "block"
}
