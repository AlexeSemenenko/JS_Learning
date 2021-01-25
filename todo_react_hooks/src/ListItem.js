import React, {useContext} from "react"
import {ToDoListContext} from "./App"
import cn from "classnames"

export default function ListItem(props) {
    const context = useContext(ToDoListContext)

    return (
        <li>
            <form>
                <input className="todolist__checkbox" type="checkbox" id={props.item.id}
                       onChange={() => context.changeDone(props.item.id)}/>
                <label className={cn('todolist__label', {'decoration-done': props.item.done})} htmlFor={props.item.id}>
                    {props.item.data}
                </label>
                <br/>
                <input type="button" className="todolist__edit-button button" value="Edit"
                       onClick={() => context.editItem(props.item.id)}/>
                <input type="button" className="todolist__delete-button button" value="Delete"
                       onClick={() => context.deleteItem(props.item.id)}/>
                <br/>
            </form>
        </li>
    )
}
