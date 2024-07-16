// 이미지 소스 배열
var path = "./src/intro/img/groom/";
var path2 = "./src/intro/img/bride/";
var images = [
  "1_1_bgimage1.jpg",
  "1_1_bgimage2.jpg",
  "1_1_bgimage3.jpg",
  "1_1_bgimage4.jpg",
  "1_1_bgimage5.jpg",
  "1_1_bgimage6.jpg",
];

// 현재 이미지 인덱스
var currentIndex = 0;
showSlides();
// showSlides(path2);


function showSlides() {
  var bg_img = document.getElementById("bg_img");
  var newSrc = path + images[currentIndex];
  var newSrc2 = path2 + images[currentIndex];
  // 투명도를 0으로 설정
  bg_img.style.opacity = 0;
  bg_img2.style.opacity = 0;
  currentIndex++;
  if (currentIndex > 5) {
    currentIndex = 0;
  }

  // 이미지가 로드된 후 투명도를 1로 변경
  setTimeout(function () {
    bg_img.src = newSrc;
    bg_img2.src = newSrc2;
    bg_img.style.opacity = 1;
    bg_img2.style.opacity = 1;
  }, 300);
}
setInterval(showSlides, 4000);
