let todos = [{todo: "clean up"}, {todo: "scan emails"}]

function getAll(){
    return {todos: todos};
}

function add(todo){
    todos.push(todo)
}

module.exports = {
    add: add,
    getAll: getAll,
}

