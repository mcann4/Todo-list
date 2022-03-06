const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firsyCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelectorAll("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener() {
  form.addEventListener("submit", addTodo);
  secondCardBody.addEventListener("click", deleteTodo);
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    showAlert("success", "Deleted");
  }
}

function clearAllTodos(e) {
  if (confirm("Are u sure?")) {
    todoList.innerHTML = "";
  }
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();

  if (newTodo === "") {
    showAlert("danger", "Please enter a todo...");
  } else {
    addTodoUI(newTodo);
    showAlert("success", "Todo added");
  }

  e.preventDefault();
}

function showAlert(type, message) {
  const alert = document.createElement("div");

  alert.className = `alert alert-${type}`;

  alert.textContent = message;

  firsyCardBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 1500);
}

function addTodoUI(newTodo) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class = 'fa fa-remove'></i>";

  listItem.className = "list-group-item d-flex justify-content-between";

  //TExt node

  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);

  todoList.appendChild(listItem);
}
