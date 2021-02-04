import {ToDoListContextType} from "./Types"
import React from "react";

export const ToDoListDefaultContext: ToDoListContextType = {
    deleteItem: (id) => console.log('to delete: ' + id),
    changeDone: (id) => console.log('to change: ' + id),
    editItem: (id) => console.log('to edit: ' + id),
    todos: [],
    setTodos: (todos) => console.log('todos: ' + todos),
    editing: false,
    editingText: '',
    changeEditingText: (event: React.ChangeEvent<HTMLTextAreaElement>) => console.log(),
    editItemEnter: (event: React.KeyboardEvent<HTMLDivElement>) => console.log(),
    target: '',
    addNewItem: () => console.log(),
}
