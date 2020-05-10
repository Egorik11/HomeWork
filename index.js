const getRandomBoolean = () => Math.random() >= 0.5; // получить случайное true|false
const getRandomTimeout = () => Math.random() * 1000; // получить случайное время от 0 до 10 секунд

/*
Список статусов https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP
нужно реазиловать 200 / 201 / 400/ 404 / 500 


onError - возвращает обьект в таком формате { status: 404, message: String }

onSuccess - возвращает обьект в таком формате { status: 200, message: Any }

any - любой тип данных

*/




class Todos {
    constructor() {
      this.todos = [
        { title: "Задача 1", description: "Сделать что-то", completed: false }, // index 0
        { title: "Задача 2", description: "Сделать что-то", completed: true }, // index 1
        { title: "Задача 3", description: "Сделать что-то", completed: false } // index 2
      ];
    }
    getTodos() {
      return this.todos;
    }
    addTodo(title, description) {
      this.todos = [...this.todos, { title, description, completed: false }];
    }
    toggleTodo(index) {
      this.todos = this.todos.map((todo, todoIndex) => {
        if (index === todoIndex) {
          return { ...todo, completed: !todo.completed };
        }
  
        return todo;
      });
    }
    deleteTodo(index) {
      this.todos = this.todos.filter((_, todoIndex) => index !== todoIndex);
      console.log({index, todo: this.todos});
      
    }
    updateTodo(index, data) {
      if (!data) return;
  
      this.todos = this.todos.map((todo, todoIndex) => {
        if (index === todoIndex) {
          return { ...todo, ...data };
        }
  
        return todo;
      });
    }
    filterTodos(filter) {
      switch (filter) {
        case "active":
          return this.todos.filter(todo => !todo.completed);
        case "completed":
          return this.todos.filter(todo => todo.completed);
        case "all":
          return this.todos;
  
        default:
          return new Error(
            `filter: ${filter} - не указан! Укажите одно из: all, active, completed`
          );
      }
    }
    toggleTodos(completed) {
      this.todos = this.todos.map(todo => {
        return { ...todo, completed: completed };
      });
    }
    clearCompletedTodos() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
  
//   const todos = new Todos();
  
//   todos.addTodo("Todo 4", "Сделать что-то");
  
//   console.log(todos.getTodos());

const fallbackPayload = {
    onSuccess: response => {
      console.log(`fallback ${response}`); // массив todos
    },
    onError: error => {
      console.log(`fallback ${error}`); // не верный url, например todoc
    }
};


class Request{
  constructor(){
      this.todos = new Todos;
  }
  get(url, payload = fallbackPayload){
      const delayTime = getRandomTimeout();
      const isSucces = getRandomBoolean();
      if(!isSucces){
          const message = "Bad Request";
        setTimeout(payload.onError, delayTime, message);
        return { status: 400, message }
      }
      if(url.startsWith("/todos")){
          const filter = url.split("?filter=")[1]
        console.log(filter);
        const message = (filter) ? this.todos.filterTodos(filter): this.todos.getTodos();
        setTimeout(payload.onSuccess, delayTime, message)
        return { status: 200, message }
      }
  }
  post(url, payload = fallbackPayload){
    const delayTime = getRandomTimeout();
    const isSucces = getRandomBoolean();
    if(!isSucces){
        const message = "Bad Request";
      setTimeout(payload.onError, delayTime, message);
      return { status: 400, message }
    }
    const body = payload.body;
    
    if(url.startsWith("/todos")){
        if(!body){
            const message = "Body not found";
            setTimeout(payload.onError, delayTime, message);
            return { status: 415, message }
        }
        this.todos.addTodo(body.title, body.description)
        setTimeout(payload.onSuccess, delayTime, body)
        return { status: 200, message: body }
    }
  }
  put(url, payload = fallbackPayload){
    const delayTime = getRandomTimeout();
    const isSucces = getRandomBoolean();
    if(!isSucces){
        const message = "Bad Request";
      setTimeout(payload.onError, delayTime, message);
      return { status: 400, message }
    }
    const body = payload.body;
    
    if(url.startsWith("/todos")){
        const index = url.split("/")[2]
        this.todos.updateTodo(index, body)
        setTimeout(payload.onSuccess, delayTime, body)
        return { status: 200, message: body }
    }
  }
  delete(url, payload = fallbackPayload){
    const delayTime = getRandomTimeout();
    const isSucces = getRandomBoolean();
    if(!isSucces){
        const message = "Bad Request";
      setTimeout(payload.onError, delayTime, message);
      return { status: 400, message }
    }
    const body = payload.body;
    
    if(url.startsWith("/todos")){
        const index = Number(url.split("/")[0])
        this.todos.deleteTodo(index)
        setTimeout(payload.onSuccess, delayTime)
        return { status: 200, message: body }
    }
  }
}
async function main(){
    const request = new Request();
    const todos = await request.get("/todos", {
        onSuccess: response => {
          console.log(response); // массив todos
        },
        onError: error => {
          console.log(error); // не верный url, например todoc
        }
    });
    const postTodos = request.post("/todos", {
        body: {
            title: "New todo",
            description: "Some text"
        },
        onSuccess: response => {
          console.log(response); // todo успешно создан
        },
        onError: error => {
          console.log(error); // не верный url, например todoc
        }
    })
    const putTodos = request.put("/todos/1", {
        body: {
            title: "New todo"
          // description: "Some text" // можно обновить лбое поле или поля или нет записи под index = 1
        },
        onSuccess: response => {
          console.log(response); // todo успешно обновлен
        },
        onError: error => {
          console.log(error); // не верный url, например todoc
        }
    })
    const deleteTodos = request.delete("/todos/1", {
        onSuccess: response => {
          console.log(response); // todo успешно удален
        },
        onError: error => {
          console.log(error); // не верный url, например todoc или нет записи под index = 1
        }
      })
      console.log(request);
      
}
main()




// // запросить todos
// request.get("/todos", {
//   onSuccess: response => {
//     console.log(response); // массив todos
//   },
//   onError: error => {
//     console.log(error); // не верный url, например todoc
//   }
// });

// // фильтрованные todos
// request.get("/todos?filter=all", {
//   onSuccess: response => {
//     console.log(response); // массив todos
//   },
//   onError: error => {
//     console.log(error); // не верный url, например todoc
//   }
// });

// // Создание todo
// request.post("/todos", {
//   body: {
//     title: "New todo",
//     description: "Some text"
//   },
//   onSuccess: response => {
//     console.log(response); // todo успешно создан
//   },
//   onError: error => {
//     console.log(error); // не верный url, например todoc
//   }
// });

// //обновление todo
// request.put("/todos/1", {
//   body: {
//     title: "New todo"
//     // description: "Some text" // можно обновить лбое поле или поля или нет записи под index = 1
//   },
//   onSuccess: response => {
//     console.log(response); // todo успешно обновлен
//   },
//   onError: error => {
//     console.log(error); // не верный url, например todoc
//   }
// });

// //удаление todo
// request.delete("/todos/1", {
//   onSuccess: response => {
//     console.log(response); // todo успешно удален
//   },
//   onError: error => {
//     console.log(error); // не верный url, например todoc или нет записи под index = 1
//   }
// });