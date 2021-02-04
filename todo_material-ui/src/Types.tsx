import React from "react";

export type TodoType = {
    id: string
    done: boolean
    data: string
}

export type ListItemProps = {
    id: string
    data: string
    done: boolean
    index: number
    moveToDo: (dragIndex: number, hoverIndex: number) => void
}

export type ToDoListContextType = {
    deleteItem: (id: string) => void
    changeDone: (id: string) => void
    editItem: (id: string) => void
    todos: TodoType[]
    setTodos: (todos: TodoType[]) => void
    editing: boolean
    editingText: string
    changeEditingText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    editItemEnter: (event: React.KeyboardEvent<HTMLDivElement>) => void
    target: string
    addNewItem: () => void
}

export const ItemTypes = {
    TODO_ITEM: 'todo_item',
}

export type DragItemType = {
    index: number
    id: string
    type: string
}
