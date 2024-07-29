function showAccountNumber() {
    var newWindow = window.open("", "_blank", "width=300,height=200");
    newWindow.document.write("<html><head><title>계좌번호</title></head><body>");
    newWindow.document.write("<h2>계좌번호</h2>");
    newWindow.document.write("<p>우리은행 123-456-7890</p>");
    newWindow.document.write("<button onclick='window.close();'>닫기</button>");
    newWindow.document.write("</body></html>");
}
