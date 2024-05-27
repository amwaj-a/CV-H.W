let date = document.getElementById("date");
let education = document.getElementById("education");
let univers = document.getElementById("univers");
let gpa = document.getElementById("gpa");
let education1 = document.getElementById("education1");

education.onmouseover = () => {
  date.innerText = "2016 - 2021";
  univers.innerText = "TAIBAH UNIVERSITY";
  gpa.innerText = "";
  let li = document.createElement("li");
  li.innerText = " Bachelor of Computer Science";
  gpa.appendChild(li);
  education1.style.display = "none";
};

// SKILL
console.log(document.querySelectorAll("ul"));
let skill = document.querySelectorAll("div")[5];
skill.setAttribute("class", "skill");

// profile
let profile = document.querySelectorAll("p")[5];
// console.log(profile);
profile.setAttribute("class", "pragraph");

// work
let work = document.querySelectorAll("div")[9];
work.setAttribute("class", "workSection");

let liWork = document.querySelectorAll("ul")[5];
liWork.setAttribute("class", "EXPERIENCE");

let liWork2 = document.querySelectorAll("ul")[6];
liWork.setAttribute("class", "EXPERIENCE");

let liWork3 = document.querySelectorAll("ul")[7];
liWork.setAttribute("class", "EXPERIENCE");

// ref
let ref = document.querySelectorAll("div")[11];
ref.setAttribute("class", "REFERENCE");
