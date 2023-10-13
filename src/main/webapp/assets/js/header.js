// XMLHttpRequest 객체를 사용하여 header.HTML 파일을 가져옴
var header = new XMLHttpRequest();
header.open('GET', '../header.html', true);
header.onreadystatechange = function() {
  if (header.readyState === 4 && header.status === 200) {
    // header.HTML 파일의 내용을 가져와서 <div>에 삽입
    document.getElementById('header').innerHTML = header.responseText;
  }
};
header.send();