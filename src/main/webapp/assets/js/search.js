// XMLHttpRequest 객체를 사용하여 search.HTML 파일을 가져옴
var search = new XMLHttpRequest();
search.open('GET', '../search.html', true);
search.onreadystatechange = function() {
  if (search.readyState === 4 && search.status === 200) {
    // search.HTML 파일의 내용을 가져와서 <div>에 삽입
    document.getElementById('search').innerHTML = search.responseText;
  }
};
search.send();