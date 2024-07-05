//현재 url 변수로 가져오기
let nowUrl = window.location.href;

function copyUrl() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard.writeText(nowUrl).then((res) => {
    alert("모바일 청첩장 주소가 복사되었습니다.");
  });
}

function copyCall1() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard.writeText("01076855106").then((res) => {
    alert("신랑 연락처가 복사되었습니다.");
  });
}
function copyCall2() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard.writeText("01035949239").then((res) => {
    alert("신부 연락처가 복사되었습니다.");
  });
}

function copyAcc1() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard
    .writeText("박현근 우리은행 1002-747-975534")
    .then((res) => {
      alert("박현근님 계좌번호가 복사되었습니다.");
    });
}
function copyAcc2() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard.writeText("박영범 농협 079-12-334115").then((res) => {
    alert("박영범님 계좌번호가 복사되었습니다.");
  });
}
function copyAcc3() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard.writeText("양혜영 농협 125-12-224101").then((res) => {
    alert("양혜영님 계좌번호가 복사되었습니다.");
  });
}

function copyAcc4() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard
    .writeText("장원영 우리은행 1002-253-960825")
    .then((res) => {
      alert("장원영님 계좌번호가 복사되었습니다.");
    });
}
function copyAcc5() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard
    .writeText("장범진 KB국민 515525-93-111537")
    .then((res) => {
      alert("장범진님 계좌번호가 복사되었습니다.");
    });
}
function copyAcc6() {
  //nowUrl 변수에 담긴 주소를
  navigator.clipboard
    .writeText("유혜숙 카카오뱅크 3333-09-8617769")
    .then((res) => {
      alert("유혜숙님 계좌번호가 복사되었습니다.");
    });
}


function checkPrevNum(num, maxNum) {
  if (num < 1) {
    newNum = num + maxNum;
  } else {
    newNum = num;
  }
  if (newNum > 9) {
    newNum = newNum.toString();
  } else {
    newNum = "0" + newNum.toString();
  }
  return newNum;
}

function checkNextNum(num, maxNum) {
  if (num > maxNum) {
    newNum = num - maxNum;
  } else {
    newNum = num;
  }
  if (newNum > 9) {
    newNum = newNum.toString();
  } else {
    newNum = "0" + newNum.toString();
  }
  return newNum;
}

function prevScene(imgID = "pre1", maxNum = 7) {
  var src1 = document.getElementById(imgID + "-1").src;

  var filename1 = src1.split("/").pop();
  var nameWithoutExtension1 = filename1.split(".")[0];
  var numberInScene1 = nameWithoutExtension1.split("_")[1];
  var newNumber1 = parseInt(numberInScene1) - 2;
  var newNumber2 = newNumber1 + 1;
  newNumber1 = checkPrevNum(newNumber1, maxNum);
  newNumber2 = checkPrevNum(newNumber2, maxNum);

  var newName1 = nameWithoutExtension1.replace(numberInScene1, newNumber1);
  var newSrc1 = src1.replace(filename1, newName1 + ".jpg");
  document.getElementById(imgID + "-1").src = newSrc1;

  var newName2 = nameWithoutExtension1.replace(numberInScene1, newNumber2);
  var newSrc2 = src1.replace(filename1, newName2 + ".jpg");
  document.getElementById(imgID + "-2").src = newSrc2;
}

function nextScene(imgID = "pre1", maxNum = 7) {
  var src2 = document.getElementById(imgID + "-2").src;

  var filename2 = src2.split("/").pop();
  var nameWithoutExtension2 = filename2.split(".")[0];
  var numberInScene2 = nameWithoutExtension2.split("_")[1];
  var newNumber2 = parseInt(numberInScene2) + 2;
  var newNumber1 = newNumber2 - 1;

  newNumber1 = checkNextNum(newNumber1, maxNum);
  newNumber2 = checkNextNum(newNumber2, maxNum);

  var newName2 = nameWithoutExtension2.replace(numberInScene2, newNumber2);
  var newSrc2 = src2.replace(filename2, newName2 + ".jpg");
  document.getElementById(imgID + "-2").src = newSrc2;

  var newName1 = nameWithoutExtension2.replace(numberInScene2, newNumber1);
  var newSrc1 = src2.replace(filename2, newName1 + ".jpg");
  document.getElementById(imgID + "-1").src = newSrc1;
}

function prevScene1() {
  prevScene("pre1", 10);
}

function nextScene1() {
  nextScene("pre1", 10);
}

function prevScene2() {
  prevScene("pre2", 7);
}

function nextScene2() {
  nextScene("pre2", 7);
}

function prevScene3() {
  prevScene("pre3", 7);
}

function nextScene3() {
  nextScene("pre3", 7);
}

function prevScene4() {
  prevScene("pre4", 7);
}

function nextScene4() {
  nextScene("pre4", 7);
}
