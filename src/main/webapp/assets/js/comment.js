// XMLHttpRequest 객체를 사용하여 comment.HTML 파일을 가져옴
var comment = new XMLHttpRequest();
comment.open('GET', '../comment.html', true);
comment.onreadystatechange = function() {
  if (comment.readyState === 4 && comment.status === 200) {
    // comment.HTML 파일의 내용을 가져와서 <div>에 삽입
    document.getElementById('comment').innerHTML = comment.responseText;
  }
};
comment.send();