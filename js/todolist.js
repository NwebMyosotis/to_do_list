const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#list-zone");

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const icon = document.createElement("i");
  icon.classList = "fa-regular fa-square-check";
  span.innerText = newTodo.text;
  icon.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(icon);
  todoList.appendChild(li);
}

let toDos = [];
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

const savedTodos = localStorage.getItem("todos");
if (savedTodos !== null) {
  const getTodos = JSON.parse(savedTodos);
  toDos = getTodos;
  getTodos.forEach(paintTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);
