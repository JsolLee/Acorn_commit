let com = document.getElementById("scrap-community");
let com_group = document.getElementById("group-community");
let job = document.getElementById("scrap-job");
let job_group = document.getElementById("group-job");

com.addEventListener("click", () =>{ 
  job_group.classList.add('group-hidden');
  com_group.classList.remove('group-hidden');
})

job.addEventListener("click", () =>{ 
  com_group.classList.add('group-hidden');
  job_group.classList.remove('group-hidden');
})
