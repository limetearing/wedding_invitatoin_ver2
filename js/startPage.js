let curPos = 0;
let postion = 0;
let start_x, end_x;
const contentsWidth = 300;
const contents = document.querySelector(".slide-contents");

contents.addEventListener('touchstart', touchStart);
contents.addEventListener('touchend', touchEnd);

// 뒤로가기, 앞으로 가기 함수 : 터치 이벤트가 발생(touchEnd())하면 호출 됨
function prev() {
  if (curPos > 0) {
    postion += contentsWidth;
    contents.style.transform = 'translateX(${postion}px)';
    curPos = curPos - 1;
  }
}

function next() {
  if (curPos < 2) {
    position += contentsWidth;
    contents.style.transform = 'translateX(${postion}px)';
    curPos = curPos + 1;
  }
}

function touchStart(e) {
  start_x = e.touchs[0].pageX
}

function touchEnd(e) {
  end_x = e.changedTouches[0].pageX;
  if (start_x > end_x) {
    next();
  } else {
    prev();
  }
}
