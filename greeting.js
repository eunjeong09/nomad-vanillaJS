// form, input, greetins 객체 가져오기(js-)
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

// USER_LS, SHOWING_CN 선언
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//saveName - set localStorage("USER_LS")
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//handleSubmit
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

//askForName
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

//paintGreeting
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greetings.classList.add(SHOWING_CN);
  greetings.innerHTML = `Hello ${text}`;
}

//loadName() - get localStorage("USER_LS")
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

//init
function init() {
  loadName();
}
init();
