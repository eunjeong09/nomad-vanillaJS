//toDoForm, toDoInput, toDoList 선언
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

// TODOS_LS 선언
const TODO_LS = "toDos";

// toDos 배열 선언
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);

    });

    toDos = cleanToDos;
    saveToDos();
}

// saveToDos
function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

// paintToDo
function paintToDo(text) {
  console.log(text);
  // 객체생성 - li, button, span
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  delBtn.innerText = "❌";
  delBtn.addEventListener('click', deleteToDo);

  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };

  toDos.push(toDoObj);
  saveToDos(toDos);
}

// handleSubmit()
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

// loadToDos() - localStorage.getItem(TODO_LS)
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODO_LS);
  if (loadedToDos !== null) {
    const parsedTodo = JSON.parse(loadedToDos);
    parsedTodo.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

// init()
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
