// XMLHttpRequest 객체를 사용하여 footer.HTML 파일을 가져옴
var footer = new XMLHttpRequest();
footer.open('GET', '../../views/news/footer.html', true);
footer.onreadystatechange = function() {
  if (footer.readyState === 4 && footer.status === 200) {
    // footer.HTML 파일의 내용을 가져와서 <div>에 삽입
    document.getElementById('footer').innerHTML = footer.responseText;
  }
};
footer.send();