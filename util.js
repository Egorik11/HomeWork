function filterTodos(filtertodos, filter) {
  switch (filter) {
    case "active":
      return filtertodos.filter((todo) => !todo.completed);
    case "completed":
      return filtertodos.filter((todo) => todo.completed);
    case "all":
      return filtertodos;

    default:
      return new Error(
        `filter: ${filter} - не указан! Укажите одно из: all, active, completed`
      );
  }
}

function uniqueId() {
  const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const len = abc.length;
  let size = 8; // move to param
  let id = "";

  while (0 < size--) {
    id += abc[(len * Math.random()) | 0];
  }

  return id;
}
