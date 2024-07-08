const swiper = document.querySelector('.carousel_wrapper');
const user_prevButtons = document.querySelectorAll('.carousel_prev');
const user_nextButtons = document.querySelectorAll('.carousel_next');


let currentSlide2 = 0;

function showSlide2(slideIndex, region) {
    region.style.transform = `translateX(-${slideIndex * 300}px)`;
    currentSlide2 = slideIndex;

}

function show_de2(prevButtons, nextButtons, region){

prevButtons.forEach((prevButton) => {
    prevButton.addEventListener('click', () => {
        if (currentSlide2 > 0) {
            showSlide2(currentSlide2 - 1, region);
        }
    });
});

nextButtons.forEach((nextButton) => {
    nextButton.addEventListener('click', () => {
        if (currentSlide2 < 3) {
            showSlide2(currentSlide2 + 1, region);
        }
    });
});



showSlide2(0);
}

// show_de(user_prevButtons2, user_nextButtons2, bullets, swiper2);


 show_de2(user_prevButtons, user_nextButtons, swiper);
 show_de2(0);
