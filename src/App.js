import React, { useState } from "react";
import "./styles.css";

let data = [
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
];

const Todo = ({ todo, toggleTodo, styleProps, destroyTodo }) => {
  return (
    <li style={styleProps} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          checked={todo.completed}
          type="checkbox"
          data-todo="toggle"
          onChange={(e) => {
            toggleTodo(todo.id);
            // console.log(todos);
          }}
        />
        <label data-id={1}>{todo.title}</label>
        <button
          data-todo="delete"
          className="destroy"
          onClick={() => destroyTodo(todo.id)}
        />
      </div>
      <input type="text" className="edit" defaultValue="Todo 1" />
    </li>
  );
};

export default function App() {
  const [todos, setTodos] = useState(data);
  const [newTodo, setNewTodo] = useState("");

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodos(newTodos);
  };
  const activeTodos = todos.filter((todo) => {
    return todo.completed;
  });

  const [filter, setFilter] = useState("All");
  const setActiveFilter = () => {
    setFilter("Active");
  };
  const setAllFilter = () => {
    setFilter("All");
  };
  const setCompletedFilter = () => {
    setFilter("Completed");
  };

  const clearCompeted = () => {
    const completed = todos.filter((todo) => !todo.completed);
    setTodos(completed);
  };
  const destroyTodo = (id) => {
    const filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const changeNewTodo = (event) => {
    setNewTodo(event.target.value);
    console.log(newTodo);
  };
  const addTodo = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        { id: Date.now(), title: newTodo, completed: false },
      ]);
      setNewTodo("")
    }
  };
  const renderTodos = () => {
    return todos.map((todo) => {
      const showTodo =
        (todo.completed && filter === "Completed") ||
        (!todo.completed && filter === "Active") ||
        filter === "All";
      const notShow = { display: showTodo ? "block" : "none" };
      return (
        <Todo
          styleProps={notShow}
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          destroyTodo={destroyTodo}
        />
      );
    });
  };

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            onKeyPress={addTodo}
            onChange={changeNewTodo}
            value={newTodo}
            className="new-todo"
            placeholder="What needs to be done?"
          />
        </header>
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">{renderTodos()}</ul>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>{activeTodos.length}</strong> items left
          </span>
          <ul className="filters">
            <li>
              <a
                onClick={setAllFilter}
                data-todo="filter"
                data-filter='"all"'
                className="selected"
              >
                All
              </a>
            </li>
            <li>
              <a
                onClick={setActiveFilter}
                data-todo="filter"
                data-filter='"active"'
              >
                Active
              </a>
            </li>
            <li>
              <a
                onClick={setCompletedFilter}
                data-todo="filter"
                data-filter='"completed"'
              >
                Completed
              </a>
            </li>
          </ul>
          <button
            onClick={clearCompeted}
            data-todo="clear-completed"
            className="clear-completed"
          >
            Clear completed
          </button>
        </footer>
      </section>
    </div>
  );
}
