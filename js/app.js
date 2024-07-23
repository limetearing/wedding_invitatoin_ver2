let startX;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideWidth = window.innerWidth;

slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchend', touchEnd);
slider.addEventListener('touchmove', touchMove);

function touchStart(event) {
    startX = event.touches[0].clientX;
    isDragging = true;
    slider.style.transition = 'none';
}

function touchEnd(event) {
    isDragging = false;
    const endX = event.changedTouches[0].clientX;
    const deltaX = endX - startX;

    if (deltaX < -slideWidth / 4) {
        currentTranslate = prevTranslate - slideWidth*8/10;
    } else if (deltaX > slideWidth / 4) {
        currentTranslate = prevTranslate + slideWidth*8/10;
    } else {
        currentTranslate = prevTranslate;
    }

    // 슬라이드 위치가 슬라이더 컨테이너의 시작과 끝을 넘지 않도록 조정
    currentTranslate = Math.max(Math.min(currentTranslate, 0), -slideWidth * (totalSlides - 1));

    slider.style.transition = 'transform 0.3s ease';
    slider.style.transform = `translateX(${currentTranslate}px)`;
    prevTranslate = currentTranslate;
}

function touchMove(event) {
    if (isDragging) {
        const currentX = event.touches[0].clientX;
        const deltaX = currentX - startX;
        currentTranslate = prevTranslate + deltaX;

        // 슬라이드 위치가 슬라이더 컨테이너의 시작과 끝을 넘지 않도록 조정
        currentTranslate = Math.max(Math.min(currentTranslate, 0), -slideWidth * (totalSlides - 1));

        slider.style.transform = `translateX(${currentTranslate}px)`;
    }
}
