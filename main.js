// codesandbox https://codesandbox.io/s/json-server-whu3w?file=/db.json
// JSON Server https://whu3w.sse.codesandbox.io/todos

const todoList = document.querySelector(".todo-list");
const getRandomBoolean = () => Math.random() >= 0.5;
const url = "https://whu3w.sse.codesandbox.io/todos";
const todoCount = null;

function getItems(queryParams = "") {
  return fetch(url + queryParams)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

const renderTodos = (contentText) => {
  for (let key in contentText) {
    const check = contentText[key].completed ? "checked" : "";
    const complet = contentText[key].completed ? "completed" : "";
    console.log(contentText[key]);
    const id = contentText[key].id;

    todoList.innerHTML += `<li class="${complet}" id="${id}">
        <div class="view">
          <input class="toggle" type="checkbox" ${check} /><label
            >${contentText[key].title}</label
          ><button class="destroy"></button>
        </div>
      </li>`;
  }
};

async function main() {
  const items = await getItems();
  renderTodos(items);
  const newTodo = document.querySelector(".new-todo");
  const filterActive = document.querySelector('[href="/active"]');
  const filterAll = document.querySelector('[href="/"]');
  const filterCompleted = document.querySelector('[href="/completed"]');
  const destroy = document.querySelectorAll(".destroy");
  const titles = document.querySelectorAll("label");

  titles.forEach((title) => {
    title.addEventListener("dblclick", (event) => {
      editTodos(event, "Новая туду");
    });
  });

  newTodo.addEventListener("keyup", (event) => {
    if (event.keyCode === 13 && newTodo.value !== "") {
      const todo = createTodo(newTodo.value);
      todoList.append(todo);
      newTodo.value = "";
    }
  });

  destroy.forEach((item) => {
    item.addEventListener("click", deleteTodos);
  });

  filterAll.addEventListener("click", (event) => {
    event.preventDefault();
    allTodos();
  });

  filterActive.addEventListener("click", (event) => {
    event.preventDefault();
    activeTodos();
  });

  filterCompleted.addEventListener("click", (event) => {
    event.preventDefault();
    completedTodos();
  });
}
main();

function createTodo(title) {
  const todo = document.createElement("li");
  todo.innerHTML = `<div class="view">
  <!-- completed, editing -->
  <input class="toggle" type="checkbox"/>
  <!-- checked -->
  <label>${title}</label>
  <button class="destroy"></button>
  </div>
  <input type="text" class="edit" value="" />`;
  const body = {
    title,
    completed: getRandomBoolean(),
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
  return todo;
}

function allTodos() {
  const todos = [...document.querySelectorAll(".todo-list li")];
  todos.forEach((todo) => {
    todo.style.display = "block";
  });
  fetch("https://whu3w.sse.codesandbox.io/todos")
    .then((response) => response.json())
    .then((data) => console.log(data));
  renderTodos();
}

function activeTodos() {
  const todos = [...document.querySelectorAll(".todo-list li")];
  todos.forEach((todo) => {
    if (todo.classList.contains("completed")) {
      todo.style.display = "none";
    } else todo.style.display = "block";
  });
  fetch("https://whu3w.sse.codesandbox.io/todos?completed=false")
    .then((response) => response.json())
    .then((data) => console.log(data));
  renderTodos();
}

function completedTodos() {
  const todos = [...document.querySelectorAll(".todo-list li")];
  todos.forEach((todo) => {
    if (!todo.classList.contains("completed")) {
      todo.style.display = "none";
    } else todo.style.display = "block";
  });
}

async function deleteTodos(event) {
  const target = event.target;
  const todo = target.closest("li");
  todo.remove();
  await fetch(url + "/" + todo.id, {
    method: "DELETE",
  })
    .then(() => getItems())
    .catch((error) => console.log(error));
}

function editTodos(event, title) {
  const target = event.target;
  const todo = target.closest("li");
  // const title = target.querySelector('label')
  // const editField = target.querySelector('.edit')
  // editField.value = title.innerText
  // target.className = 'editing'

  // editField.addEventListener('keyup', event => {
  //   if (event.keyCode === 13 && editField.value !== '') {
  //     target.classList.remove('editing')
  //     title.innerText = editField.value
  //   }
  // })

  const body = {
    title,
    completed: getRandomBoolean(),
  };
  fetch(url + "/" + todo.id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(() => getItems())
    .catch((error) => console.log(error));
}
