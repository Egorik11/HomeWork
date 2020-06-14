const todoList = document.querySelector(".todo-list");
// const newTodo = document.querySelector('.new-todo')
// const getRandomBoolean = () => Math.random() >= 0.5;
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
  const destroy = document.querySelectorAll(".destroy");
  destroy.forEach((item) => {
    item.addEventListener("click", deleteTodo);
  });
}
main();

function deleteTodo() {
	const todo = closest("li");
	console.log(todo);
	
	todo.remove();
	deleteItem()
}

function deleteItem(id) {
  fetch(this.url + "/" + id, {
    method: "DELETE",
  })
    .then(res => console.log(res.status))
    .catch((error) => console.log(error));
}
