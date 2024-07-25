function copyLink() {
    const link = "https://www.example.com"; // 복사할 링크

    // 임시 입력 필드 생성
    const tempInput = document.createElement('input');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    tempInput.value = link;

    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert("링크가 복사되었습니다: " + link);
}
