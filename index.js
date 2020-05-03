let todos = [
    { title: "Задача 1", description: "Сделать что-то", completed: false }, // 0
    { title: "Задача 2", description: "Сделать что-то", completed: true }, // 1
    { title: "Задача 3", description: "Сделать что-то", completed: false } // 2
  ];
  console.log(todos);



class Todo{
  constructor(todos){
    this.todos = todos;
  }
  addTodo(title, description){
    this.todos = this.todos.concat({title, description, completed: false})
    return this.todos
  }
  toggleTodo(indexTodos){
    this.todos = this.todos.map((el, index) => {
      if(indexTodos === index){
        el.completed = !el.completed
      }
      return el
    })
    return this.todos
  }
  deleteTodo(indexTodos){
    this.todos = this.todos.filter((_, index) => indexTodos !== index);
    return this.todos
  }
  updateTodo(indexTodos, todo){
    this.todos = this.todos.map((el, index) => {
      if(indexTodos === index){
        return todo
      }
      return el
    })
    return this.todos
  }
  filterTodos(filter){
    if(filter === "all"){
      return this.todos
    }
    this.todos = this.todos.filter(el => {
      const active = el.completed === false && filter === "active";
      const comleted = el.completed === true && filter === "comleted"
      return active || comleted
    });
    return this.todos
  }
  searchTodos(search){
    
    return this.todos.reduce((acc, item) => {
      if(item.title === search){
        acc.push(item)
      }
      return acc
    },[])
  }
  toggleTodos(completed){
    this.todos = this.todos.map(el => {
      el.completed = Boolean(completed) 
      return el
    })
    return this.todos
  }
  clearCompletedTodos(){
    this.todos = this.todos.filter(el => el.completed === true)
    return this.todos
  }
}
let newObj = new Todo(todos);

// console.log(newObj.addTodo('fdfdf', 'fdfdfdfdfsds'));
// console.log(newObj.toggleTodo(0));
// console.log(newObj.deleteTodo(1));
// console.log(newObj.updateTodo(1, {title: 'вап', description: 'dsdsds', completed: false}))
// console.log(newObj.filterTodos("comleted"))
// console.log(newObj.searchTodos("Задача 3"))
// console.log(newObj.toggleTodos(false));
// console.log(newObj.clearCompletedTodos());






// function addTodo(title, description){
//   let todo = {
//     todos: [
//       { title: "Задача 1", description: "Сделать что-то", completed: false },
//       { title: "Задача 2", description: "Сделать что-то", completed: true },
//       { title: "Задача 3", description: "Сделать что-то", completed: true },
//       { title: "Задача 4", description: "Сделать что-нибудь", completed: false }
//     ],
//     addTodo(title, description){
//       return this.todos.concat({title, description, completed: false})
//     }
//   }
//   return todo
// }
// console.log(addTodo());


// function addTodo(title, description) {
//   let newTodos = todos.concat({
//     title: title,
//     description: description,
//     completed: false
//   })
//   return newTodos
// }
// console.log(addTodo("Задача 4", "Сделать что-нибудь")); // contact

// function toggleTodo(index) {} // map

// function deleteTodo(index) {} /// filter

// function updateTodo(index, todo) {} // map

// function filterTodos(filter) {} // filter

// function searchTodos(search) {} // reduce

// function toggleTodos(completed) {} // map

// function clearCompletedTodos() {} // filter

