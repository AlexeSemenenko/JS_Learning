import {ToDoListContextType} from "./Types"

export const ToDoListDefaultContext: ToDoListContextType = {
    deleteItem: (id) => console.log('to delete: ' + id),
    changeDone: (id) => console.log('to change: ' + id),
    editItem: (id) => console.log('to edit: ' + id),
    todos: [],
    setTodos: (todos) => console.log('todos: ' + todos)
}
