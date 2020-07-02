import React, { Component } from "react";
import "./App.css";

const generateID = () => {
  return Date.now();
};
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: "Todo 1",
          completed: false,
        },
        {
          id: 2,
          title: "Todo 2",
          completed: true,
        },
        {
          id: 3,
          title: "Todo 3",
          completed: false,
        },
      ],
      filteredTodos: [
        {
          id: 1,
          title: "Todo 1",
          completed: false,
        },
        {
          id: 2,
          title: "Todo 2",
          completed: true,
        },
        {
          id: 3,
          title: "Todo 3",
          completed: false,
        },
      ],
    };
  }

  updateTodosState = (todos) => {
    this.setState({
      todos,
      filteredTodos: todos,
    });
  };
  activeTodos = () => {
    const activeTodo = this.state.todos.filter((todo) => !todo.completed);
    return activeTodo.length;
  };
  addTodo = (event) => {
    if (event.key === "Enter") {
      const todos = [...this.state.todos];
      todos.push({
        id: generateID(),
        title: event.target.value,
        completed: false,
      });
      this.updateTodosState(todos);
      event.target.value = "";
    }
  };
  destroyTodo = (id) => {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.updateTodosState(todos);
  };
  deleteAllTodos = () => {
    const todos = this.state.todos.filter((todo) => todo.completed === false);
    this.updateTodosState(todos);
  };
  toggleTodo = (id) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    this.updateTodosState(todos);
  };

  filterTodos = (event) => {
    event.preventDefault();
    const filter = event.target.dataset.filter;
    console.log(this.state.filteredTodos);
    
    switch (filter) {
      case 'all':
        this.setState({
          filteredTodos: [...this.state.todos]
        })
        break
      case 'active':
        this.setState({
          filteredTodos: this.state.todos.filter(t => t.completed === false)
        })
        break
      case 'completed':
        this.setState({
          filteredTodos: this.state.todos.filter(t => t.completed === true)
        })
        break
      default:
        break
    }
  };
  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            onKeyUp={this.addTodo}
            className="new-todo"
            placeholder="What needs to be done?"
          />
        </header>
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {this.state.filteredTodos.map((todo) => {
              return (
                <li className={todo.completed ? "completed" : ""} key={todo.id}>
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      data-todo="toggle"
                      checked={todo.completed}
                      onChange={this.toggleTodo.bind(this, todo.id)}
                    />
                    <label data-id={todo.id}>{todo.title}</label>
                    <button
                      data-todo="delete"
                      onClick={this.destroyTodo.bind(this, todo.id)}
                      className="destroy"
                    ></button>
                  </div>
                  <input type="text" className="edit" value={todo.title} />
                </li>
              );
            })}
          </ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>{this.activeTodos()}</strong> items left
          </span>
          <ul className="filters">
            <li>
              <a
                data-todo="filter"
                data-filter='"all"'
                href="/"
                className="selected"
                onClick={(e) => this.filterTodos(e)}
              >
                All
              </a>
            </li>
            <li>
              <a
                onClick={(e) => this.filterTodos(e)}
                data-todo="filter"
                data-filter='"active"'
                href="/active"
              >
                Active
              </a>
            </li>
            <li>
              <a
                onClick={(e) => this.filterTodos(e)}
                data-todo="filter"
                data-filter='"completed"'
                href="/completed"
              >
                Completed
              </a>
            </li>
          </ul>
          <button
            onClick={this.deleteAllTodos}
            data-todo="clear-completed"
            className="clear-completed"
          >
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}
