const initialState = {
  items: [
    {
      id: "1",
      title: "Todo 1",
      completed: false,
    },
    {
      id: "2",
      title: "Todo 2",
      completed: true,
    },
    {
      id: "3",
      title: "Todo 3",
      completed: false,
    },
  ],
  filter: "all",
};


function todos(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      state.items.push({
        id: uniqueId(),
        title: action.title,
        completed: false,
      });
      return state;
    case "DELETE_TODO":
      state.items = state.items.filter((todo) => {
        return todo.id !== action.id;
      });
      return state;
    case "FILTER_TODO":
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
}
const rootReducer = Redux.combineReducers({ todos });

