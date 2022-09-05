const loginForm = document.querySelector("#splash_question_form");
const loginInput = document.querySelector("#splash_question_form input");
const loginButton = document.querySelector("#splash_question_form button");
const greeting = document.querySelector("#greeting-span");
let getName = localStorage.getItem("username");

function splashNone(getName) {
  if (getName !== null) {
    const none = document.querySelector("#splash");
    none.className = "splash-none";
    const logo = document.querySelector("#splash_logo");
    logo.className = "splash_logo_anime";
    const form = document.querySelector("#splash_question_form");
    form.className = "splash_question_form_anime";
    const hidden = document.querySelector("#splash-container");
    hidden.className = "splash-container_hidden";
  }
}

function saveInput(name) {
  localStorage.setItem("username", name);
}

function inputName(event) {
  event.preventDefault();
  const name = loginInput.value;
  saveInput(name);
  loginInput.value = "";
  let getName = localStorage.getItem("username");
  greeting.innerText = getName;
  splashNone();
}

loginForm.addEventListener("submit", inputName);
splashNone(localStorage.getItem("username"));
greeting.innerText = getName;

const nameSpan = document.querySelector("#greeting-span");
function deleteName() {
  localStorage.clear();
  window.location.reload();
}

nameSpan.addEventListener("click", deleteName);
