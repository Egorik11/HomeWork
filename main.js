async function mainTodos() {
  const todoList = document.querySelector(".todo-list");
  const clerTodos = document.querySelector(".clear-completed");
  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let contentText = await response.json();
  contentText = contentText.splice(0, 3);

  for (let key in contentText) {
    const check = contentText[key].completed ? "checked" : "";
    const complet = contentText[key].completed ? "completed" : "";
    console.log(contentText[key]);
    todoList.innerHTML += `<li class="">
        <div class="view">
          <input class="toggle" type="checkbox" ${check} /><label
            >${contentText[key].title}</label
          ><button class="destroy"></button>
        </div>
      </li>`;
  }
  const initTodos = document.querySelectorAll(".todo-list li");
  initTodos.forEach((todo) => {
    bindTodoEvents(todo);
    bindTodosEvent();
  });

  const newTodo = document.querySelector(".new-todo");

  const todoCount = document.querySelector(".todo-count strong");
  todoCount.textContent = contentText.length;

  clerTodos.style.display = "none";

  newTodo.addEventListener("keyup", (event) => {
    if (event.keyCode === 13 && newTodo.value !== "") {
      const todo = createTodo(newTodo.value);
      todoList.append(todo);
      newTodo.value = "";

      const todos = [...todoList.querySelectorAll("li")];
      countTodos(todos);
      bindTodosEvent(todos);
    }
  });

  function createTodo(title) {
    const todo = document.createElement("li");
    todo.innerHTML = `<div class="view">
  <!-- completed, editing -->
  <input class="toggle" type="checkbox"/>
  <!-- checked -->
  <label>${title}</label>
  <button class="destroy"></button>
  </div>
  <input type="text" class="edit" value="Todo 3" />`;

    bindTodoEvents(todo);

    return todo;
  }

  function countTodos(todos) {
    const active = todos.reduce((active, todo) => {
      if (!todo.classList.contains("completed")) {
        active.push(todo);
      }
      return active;
    }, []);

    if (todos.length >= 1) {
      todoCount.textContent = active.length;
    }
  }

  function bindTodoEvents(todo) {
    const destroy = todo.querySelector(".destroy");
    const toggle = todo.querySelector(".toggle");
    const title = todo.querySelector("label");

    destroy.onclick = deleteTodo;
    toggle.onclick = toggleTodo;
    title.addEventListener("dblclick", editText);
  }

  function bindTodosEvent(todos) {
    const toggleAll = document.querySelector(".toggle-all").nextElementSibling;
    const filterAll = document.querySelector('[href="/"]');

    const filterActive = document.querySelector('[href="/active"]');
    const filterCompleted = document.querySelector('[href="/completed"]');

    toggleAll.onclick = toggleAllTodos;
    clerTodos.onclick = clearCompleted;
    filterAll.onclick = filterTodosAll;
    filterActive.onclick = filterTodosActive;
    filterCompleted.onclick = filterTodosCompleted;
  }

  function deleteTodo() {
    const todo = this.closest("li");

    if (!todo.classList.contains("completed")) {
      --todoCount.textContent;
    }

    todo.remove();
  }

  function toggleTodo() {
    const todo = this.closest("li");
    todo.classList.toggle("completed");
    const todos = [...todoList.querySelectorAll("li")];
    const completed = todos.reduce((completed, todo) => {
      if (todo.classList.contains("completed")) {
        completed.push(todo);
      }
      return completed;
    }, []);

    if (todo.classList.contains("completed")) {
      todoCount.textContent--;
      clerTodos.style.display = "block";
    } else {
      todoCount.textContent++;
    }

    if (completed.length === 0) {
      clerTodos.style.display = "none";
    }
  }

  function editText() {
    const todo = this.closest("li");
    const title = todo.querySelector("label");
    const editField = todo.querySelector(".edit");
    editField.value = title.innerText;
    todo.className = "editing";

    editField.addEventListener("keyup", (event) => {
      if (event.keyCode === 13 && editField.value !== "") {
        todo.classList.remove("editing");
        title.innerText = editField.value;
      }
    });
  }

  function toggleAllTodos() {
    const todos = [...document.querySelectorAll(".todo-list li")];
    const completed = todos.reduce((completed, todo) => {
      if (todo.classList.contains("completed")) {
        completed.push(todo);
      }
      return completed;
    }, []);

    todos.forEach((todo) => {
      const toggle = todo.querySelector(".toggle");

      if (!todo.classList.contains("completed")) {
        todo.className = "completed";
        toggle.checked = true;
        --todoCount.textContent;
        clerTodos.style.display = "block";
      } else if (completed.length === todos.length) {
        todo.classList.remove("completed");
        toggle.checked = false;
        ++todoCount.textContent;
        clerTodos.style.display = "none";
      }
    });
  }

  function clearCompleted() {
    const todos = [...document.querySelectorAll(".todo-list li")];

    todos.forEach((todo) => {
      if (todo.classList.contains("completed")) {
        todo.remove();
      }
    });
  }

  function filterTodosAll(event) {
    event.preventDefault();
    console.log("fdfdf");
    const todos = [...document.querySelectorAll(".todo-list li")];
    todos.forEach((todo) => {
      todo.style.display = "block";
    });
  }

  function filterTodosActive(event) {
    event.preventDefault();
    const todos = [...document.querySelectorAll(".todo-list li")];
    todos.forEach((todo) => {
      if (todo.classList.contains("completed")) {
        todo.style.display = "none";
      } else todo.style.display = "block";
    });
  }
  function filterTodosCompleted(event) {
    event.preventDefault();
    const todos = [...document.querySelectorAll(".todo-list li")];
    todos.forEach((todo) => {
      if (!todo.classList.contains("completed")) {
        todo.style.display = "none";
      } else todo.style.display = "block";
    });
  }
}
mainTodos();
