let todoInput = document.querySelector(".todo-input");
let addTodoButton = document.querySelector(".add-todo");
let todoList = document.querySelector(".todos-list");

// what happens when we click add Todo
addTodoButton.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

// adding new todo in the list
function addTodo() {
  let todo = todoInput.value;
  if (todo) {
    let listItem = document.createElement("li");
    listItem.classList.add("todo-item");

    let pTag = document.createElement("p");
    pTag.classList.add("todo");
    let camelCase = todo.charAt(0).toUpperCase() + todo.slice(1);
    pTag.innerHTML = camelCase;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-todo");
    deleteBtn.innerHTML = "Delete";

    deleteBtn.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });

    listItem.append(pTag);
    listItem.append(deleteBtn);
    todoList.append(listItem);

    todoInput.value = "";
  }
}
