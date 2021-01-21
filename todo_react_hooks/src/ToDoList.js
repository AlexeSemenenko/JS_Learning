import React, {useContext} from "react"
import ListItem from "./ListItem";
import {ToDoListContext} from "./App";

export default function ToDoList() {
    const context = useContext(ToDoListContext)

    return (
        <div className="todolist">
            <ul>
                {context.todos.map(item => {
                    return <ListItem item={item} key={item.id}/>
                })}
            </ul>
        </div>
    )
}
