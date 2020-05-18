let button = document.querySelector(".clear-completed");
let check = document.querySelector(".toggle");
let inputAdd = document.querySelector(".new-todo");
let ulList = document.querySelector(".todo-list");
let buttonDestroy = document.querySelectorAll(".destroy");
let allSelected = document.querySelector(".all")
let activeButton = document.querySelector(".active")
let completedButton = document.querySelector(".completed")

inputAdd.onkeypress = (event) => {
  if (event.keyCode === 13) {
    store.dispatch(actions.addTodo(event.target.value));
    console.log(store.getState());;
  }
};

ulList.addEventListener("click", (event) => {
	console.log(event);
	store.dispatch(actions.deleteTodo(event.target.dataset.id));
	
})


completedButton.addEventListener("click", () => {
	store.dispatch(actions.filterTodos("completed"))
	activeButton.classList.remove("selected")
	allSelected.classList.remove("selected")
	completedButton.classList.add("selected")
})

activeButton.addEventListener("click", () => {
	store.dispatch(actions.filterTodos("active"))
	allSelected.classList.remove("selected")
	completedButton.classList.remove("selected")
	activeButton.classList.add("selected")
})

allSelected.addEventListener("click", () => {
	store.dispatch(actions.filterTodos("all"))
	activeButton.classList.remove("selected")
	completedButton.classList.remove("selected")
	allSelected.classList.add("selected")
})

function render() {
	const {items: todos, filter} = store.getState().todos
	console.log(store.getState())
	let html = filterTodos(todos, filter).map((todo) => {
		const checked = todo.completed ? "checked": ""
		return	`<li class="">
	<div class="view">
		<input class="toggle" type="checkbox" ${checked}/><label class="comp">${todo.title}</label
		><button data-id="${todo.id}" class="destroy"></button>
	</div>
</li>`
	}
)
ulList.innerHTML = html;
}

const store = Redux.createStore(rootReducer);
// console.log(store.getState());

// console.log(store)
render()



store.subscribe(render)
