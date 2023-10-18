let company = document.getElementById("my-company");
let company_group = document.getElementById("group-company");

company.addEventListener("click", () =>{ 
  content_group.classList.add('group-hidden');
  comment_group.classList.add('group-hidden');
  company_group.classList.remove('group-hidden');
})

comment.addEventListener("click", () =>{ 
  content_group.classList.add('group-hidden');
  company_group.classList.add('group-hidden');
  comment_group.classList.remove('group-hidden');
})

content.addEventListener("click", () =>{ 
  comment_group.classList.add('group-hidden');
  company_group.classList.add('group-hidden');
  content_group.classList.remove('group-hidden');
})