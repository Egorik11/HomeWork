let actions = {
    addTodo: function(title){
        return {type: "ADD_TODO", title}
    },
    deleteTodo: function(id){
        return {type: "DELETE_TODO", id}
    },
    filterTodos: function(filter){
        return {type: "FILTER_TODO", filter}
    }
}