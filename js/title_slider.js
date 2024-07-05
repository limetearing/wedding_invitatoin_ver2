// 이미지 소스 배열
var path = "./src/";
var images = [
  "1_1_bgimage1.jpg",
  "1_1_bgimage2.jpg",
  "1_1_bgimage3.jpg",
  "1_1_bgimage4.jpg",
  "1_1_bgimage5.jpg",
  "1_1_bgimage6.jpg",
];

const preload = (images) => {
  images.forEach((image) => {
    const img = new Image();
    img.src = path + image;
  });
};
preload(images);

// 현재 이미지 인덱스
var currentIndex = 0;
showSlides();

function showSlides() {
  var bg_img = document.getElementById("bg_img");
  var newSrc = path + images[currentIndex];
  // 투명도를 0으로 설정
  bg_img.style.opacity = 0;

  currentIndex++;
  if (currentIndex > 5) {
    currentIndex = 0;
  }

  // 이미지가 로드된 후 투명도를 1로 변경
  setTimeout(function () {
    bg_img.src = newSrc;
    bg_img.style.opacity = 1;
  }, 300);
}
setInterval(showSlides, 4000);
