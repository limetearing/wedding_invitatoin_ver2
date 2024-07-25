function copyLink() {
    const link = "https://www.example.com"; // 복사할 링크

    // 임시 텍스트 영역 생성
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = link;

    // 요소를 화면 밖에 위치시키기
    tempTextArea.style.position = 'absolute';
    tempTextArea.style.left = '-9999px';

    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999); // 모바일 장치 호환성

    try {
        const successful = document.execCommand('copy');
        const msg = successful ? '성공적으로 복사되었습니다!' : '복사에 실패했습니다!';
        alert(msg);
    } catch (err) {
        alert('복사 중 오류가 발생했습니다.');
        console.error('복사 중 오류:', err);
    }

    // 임시 텍스트 영역 삭제
    document.body.removeChild(tempTextArea);
}
