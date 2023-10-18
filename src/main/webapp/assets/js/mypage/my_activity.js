let content = document.getElementById("my-content");
let comment = document.getElementById("my-comment");
let content_group = document.getElementById("group-content");
let comment_group = document.getElementById("group-comment");

comment.addEventListener("click", () =>{ 
  content_group.classList.add('group-hidden');
  comment_group.classList.remove('group-hidden');
})

content.addEventListener("click", () =>{ 
  comment_group.classList.add('group-hidden');
  content_group.classList.remove('group-hidden');
})