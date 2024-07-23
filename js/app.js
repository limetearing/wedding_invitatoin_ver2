let startX;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;
const slider = document.querySelector('.slider');
const sliderWidth = slider.offsetWidth;

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
    const slideWidth = window.innerWidth;
    const movedBy = currentTranslate - prevTranslate;

    // 다음 또는 이전 슬라이드로 넘어가려면 일정 거리 이상 이동해야 함
    if (movedBy < 0) {
        currentTranslate = prevTranslate - movedBy/4;
    } else if (movedBy > 0) {
        currentTranslate = prevTranslate + movedBy/4;
    } else {
        currentTranslate = prevTranslate;
    }

    // 슬라이드 위치가 슬라이더 컨테이너의 시작과 끝을 넘지 않도록 조정
    currentTranslate = Math.max(Math.min(currentTranslate, 0), -sliderWidth + slideWidth);

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
        currentTranslate = Math.max(Math.min(currentTranslate, 0), -sliderWidth + window.innerWidth);

        slider.style.transform = `translateX(${currentTranslate}px)`;
    }
}
