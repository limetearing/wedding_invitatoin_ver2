const btn_stop = document.getElementById('btn_stop');
const btn_play = document.getElementById('btn_play');
const arrows = document.getElementById('arrows');
const slider = document.getElementById('slider');
const li = slider.children;
const li_LEN = li.length;
const li_WID = 600;
const pager = document.getElementById('pager');
 
let pos = {
    prev : 0,
    now  : 0
}
 
let order = 0;
let sliderMove = 0;
let arrowTarget;
 
/* 01-1. 초기세팅 - UL넓이 정렬 */
slider.style.width = `${li_WID * li_LEN}px`;
 
/* 01-2. 초기세팅 - 페이저 추가 */
let pg;
for(let i=0; i<li_LEN; i++){
    pg = document.createElement('BUTTON');
    pg.setAttribute('data-order',i);
    pager.appendChild(pg);
}
pager.children[0].classList.add('on');
 
 
 
 
/* ✨✨✨  ======== GRAB SLIDE  ========*/
slider.addEventListener('mousedown',moveStart);
slider.addEventListener('mouseup',moveEnd);
slider.addEventListener('touchstart',moveStart_touch);
slider.addEventListener('touchend',moveEnd_touch);
 
function moveStart(e){
    stopSlide();
 
    e = e || window.event;
    pos.prev = e.clientX;
}//moveStart
 
function moveEnd(e){
    e = e || window.event;
    pos.now = e.clientX;
    finalEnd();
}//moveEnd
 
function moveStart_touch(e){
    stopSlide();
    pos.prev = e.touches[0].pageX;
}//moveStart_touch
 
function moveEnd_touch(e){
    e = e || window.event;
    pos.now = e.changedTouches[0].pageX;
    finalEnd();
}//moveEnd_touch
 
function finalEnd(){
    if(pos.prev > pos.now){
        onOrder(1);
    }else{
        onOrder(-1);
    }
    justPager(order);
    caculMove(order);
    moveSlide();
}//finalEnd
 
 
/*  ======== ✨ 순서 ======== */
function onOrder(num){
    order += num;
    if(order < 0){order = li_LEN - 1;}
    if(order > li_LEN - 1){order = 0;}
    console.log(order);
    return order;
}//onOrder
 
/*  ======== ✨ 움직임 계산  ======== ✨  */
function caculMove(num){
    sliderMove =  -(num * li_WID);
}//caculMove
 
/*  ======== ✨ 움직이기 */
function moveSlide(){
    slider.style.transform = `translateX(${sliderMove}px)`;
}//moveSlide
 
 
 
 
/* 📍  ======== 페이저 표시 관련 ======== */
pager.addEventListener('click',(e)=>{onPager(e)});
 
function onPager(e){
    stopSlide();
 
    e = e || window.event;
    order = e.target.dataset.order;
    if(order == undefined || order == null){return;}
    order = Number(order);
 
    justPager(order);
    caculMove(order);
    moveSlide();
}//onPager
 
function offPager(){
    for(let btns of pager.children){ btns.classList.remove('on');}
}//offPager
 
function justPager(num){
    offPager();
    pager.children[num].classList.add('on');
}//justPager
 
 
/* ⚡ ======== 좌우 화살표 관련 ========*/
arrows.addEventListener('click',(e)=>{onArrow(e)});
 
function onArrow(e){
    stopSlide();
 
    e = e || window.event;
    arrowTarget = e.target.dataset.flow;
    if(arrowTarget == undefined || arrowTarget == null){return;}
 
    switch(arrowTarget){
        case "prev" :
            onOrder(-1);
            break;
        case "next" :
            onOrder(1);
            break;
        default:
            break;
    }
    justPager(order);
    caculMove(order);
    moveSlide();
}//onArrow
 
 
/* ⏰ ========== 자동 재생 관련 ========== */
let myTime;
 
function autoSlide(){
    onOrder(1);
    justPager(order);
    caculMove(order);
    moveSlide();
    myTime = setTimeout(autoSlide,1500);
}//autoSlide
 
function stopSlide(){
    clearTimeout(myTime);
}//stopSlide
 
 
/* ========== 멈춤 / 다시 재생 ========== */
btn_stop.addEventListener('click',()=>{
    stopSlide();
});
 
btn_play.addEventListener('click',()=>{
    stopSlide();
    setTimeout(autoSlide,1000);
});
 
 
/* ----- ⏰ 최종 실행 ----- */
autoSlide();


출처: https://aosceno.tistory.com/526 [창고:티스토리]
