let slideIndex = 0;
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const hoverClass = document.querySelector(".header-link:nth-child(3)");
const collectionClass = document.querySelector(".collection-section");

function showSlide(index) {
    const slides = document.querySelectorAll('.slide-content');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    if (slideIndex === 0) {
        prevButton.disabled = true;
        prevButton.style.backgroundColor = "#BEBEBE";
        prevButton.style.cursor = "default";
    } else {
        prevButton.disabled = false;
        prevButton.style.backgroundColor = "grey";
        prevButton.style.cursor = "pointer";
    }
    if (slideIndex === slides.length - 1) {
        nextButton.disabled = true;
        nextButton.style.backgroundColor = "#BEBEBE";
        nextButton.style.cursor = "default";
    } else {
        nextButton.disabled = false;
        nextButton.style.backgroundColor = "grey";
        nextButton.style.cursor = "pointer";
    }
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

showSlide(slideIndex);

document.addEventListener('DOMContentLoaded', function(){
    const textFloat = document.querySelector('.text-1');
    const sliderImage1 = document.getElementById("sliderImage1");
    textFloat.style.transform = 'translateX(0%)';
    // Slider Image Fade In 
    sliderImage1.style.opacity = '100';
})

hoverClass.addEventListener("mouseover", function(){
    collectionClass.style.display = "block";
})

collectionClass.addEventListener("mouseover", function(){
    collectionClass.style.display = "block";
})

collectionClass.addEventListener("mouseout", function(){
    collectionClass.style.display = "none";
})

hoverClass.addEventListener("mouseout", function(){
    collectionClass.style.display = "none";
})