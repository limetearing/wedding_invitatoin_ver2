function copyToClipboard(link, message) {
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
        if (successful) {
            alert(message);
        } else {
            alert('복사에 실패했습니다.');
        }
    } catch (err) {
        alert('복사 중 오류가 발생했습니다.');
        console.error('복사 중 오류:', err);
    }

    // 임시 텍스트 영역 삭제
    document.body.removeChild(tempTextArea);
}
