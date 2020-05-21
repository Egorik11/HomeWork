const todos = [
  { title: "task1", description: "сделать что-то", completed: false },
  { title: "task2", description: "сделать что-то", completed: true },
  { title: "task3", description: "сделать что-то", completed: false },
];
console.log(todos);

function addTodo(title, description) {
  for (let i = 0; i < todos.length; i++) {
    if (title && description) {
      return todos.concat({ title, description, completed: false });
    }
  }
}
// console.log(addTodo('ЗАДАЧА №...', 'Выполнить'));

function toggleTodo(index) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[index].completed) {
      todos[index].completed = false;
    } else todos[index].completed = true;
  }
  return todos;
}
// console.log(toggleTodo(2));

function deleteTodo(todos, index) {
  for (let i = 0; i < todos.length; i++) {
    return todos.slice(0, index);
  }
}
// console.log(deleteTodo(todos, 2));

function updateTodo(index, todo) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[index]) {
      todos[index] = todo;
    }
  }
  return todos;
}
// console.log(updateTodo(0, { title: "ЗАДАЧА №...", description: "выполнить" }));

function filterTodos(filter) {
  let result = [];
  for (let i = 0; i < todos.length; i++) {
    if (filter === "all") return todos;
    if (filter === "active" && todos[i].completed === false)
      result.push(todos[i]);
    if (filter === "completed" && todos[i].completed === true)
      result.push(todos[i]);
  }
  return result;
}
// console.log(filterTodos('completed'));

function searchTodos(search) {
  let result = [];
  for (let obj in todos) {
    for (let item in (object = todos[obj])) {
      if (item === search || object[item] === search) {
        result.push(`{${item}: ${object[item]}}`);
      }
    }
  }
  return result;
}
// console.log(searchTodos("task1"));

function toggleTodos(completed) {
  for (let i = 0; i < todos.length; i++) {
    if (completed === true) {
      todos[i].completed = true;
    } else if (completed === false) {
      todos[i].completed = false;
    }
  }
  return todos;
}
// console.log(toggleTodos(false))

function clearCompletedTodos() {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === true) {
      todos.splice(i, 1);
    }
  }
  return todos;
}
// console.log(clearCompletedTodos());
