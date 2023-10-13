pagination// XMLHttpRequest 객체를 사용하여pagination.HTML 파일을 가져옴
var pagination = new XMLHttpRequest();
pagination.open('GET', '../pagination.html', true);
pagination.onreadystatechange = function() {
  if (pagination.readyState === 4 && pagination.status === 200) {
    // pagination.HTML 파일의 내용을 가져와서 <div>에 삽입
    document.getElementById('pagination').innerHTML = pagination.responseText;
  }
};
pagination.send();