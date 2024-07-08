// const swiper = document.querySelector('.carousel_wrapper');
// const user_prevButtons = document.querySelectorAll('.carousel_prev');
// const user_nextButtons = document.querySelectorAll('.carousel_next');

const swiper2 = document.querySelector('.carousel_wrapper2');
const user_prevButtons2 = document.querySelectorAll('.carousel_prev2');
const user_nextButtons2 = document.querySelectorAll('.carousel_next2');

let currentSlide = 0;

function showSlide(slideIndex, region) {
    region.style.transform = `translateX(-${slideIndex * 300}px)`;
    currentSlide = slideIndex;
}

function show_de(prevButtons, nextButtons, region){

prevButtons.forEach((prevButton) => {
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1, region);
        }
    });
});

nextButtons.forEach((nextButton) => {
    nextButton.addEventListener('click', () => {
        if (currentSlide < 3) {
            showSlide(currentSlide + 1, region);
        }
    });
});



showSlide(0);
}

show_de(user_prevButtons2, user_nextButtons2, swiper2);
show_de(0);


//
// show_de(user_prevButtons, user_nextButtons, bullets2, swiper);
