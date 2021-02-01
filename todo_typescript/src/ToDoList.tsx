import React, {useCallback, useContext} from "react"
import {ListItem} from "./ListItem"
import {ToDoListContext} from "./Context"
import update from "immutability-helper"

export const ToDoList: React.FC = () => {
    const context = useContext(ToDoListContext)

    const moveToDo = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            const dragToDo = context.todos[dragIndex]

            context.setTodos(
                update((context.todos), {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragToDo],
                    ],
                }),
            )
        },
        [context.todos]
    )

    return (
        <div className="todolist">
            <ul>
                {context.todos.map((item, i) => {
                    return <ListItem id={item.id} data={item.data} done={item.done}
                                     key={item.id} index={i} moveToDo={moveToDo}/>
                })}
            </ul>
        </div>
    )
}
