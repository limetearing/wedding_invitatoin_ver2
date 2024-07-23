let startX;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;
const slider = document.querySelector('.slider');

slider.addEventListener('touchstart', touchStart);
slider.addEventListener('touchend', touchEnd);
slider.addEventListener('touchmove', touchMove);

function touchStart(event) {
    startX = event.touches[0].clientX;
    isDragging = true;
    slider.style.transition = 'none';
}

function touchEnd() {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -100) {
        currentTranslate = prevTranslate - window.innerWidth;
    } else if (movedBy > 100) {
        currentTranslate = prevTranslate + window.innerWidth;
    } else {
        currentTranslate = prevTranslate;
    }
    slider.style.transition = 'transform 0.3s ease';
    slider.style.transform = `translateX(${currentTranslate}px)`;
    prevTranslate = currentTranslate;
}

function touchMove(event) {
    if (isDragging) {
        const currentX = event.touches[0].clientX;
        const deltaX = currentX - startX;
        currentTranslate = prevTranslate + deltaX;
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }
}
