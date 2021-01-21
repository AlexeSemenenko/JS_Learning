import React, {useContext} from "react"
import {ToDoListContext} from "./App";

export default function ListItem(props) {
    const context = useContext(ToDoListContext)

    const labelStyles = ['todolist__label']

    if (props.item.done) {
        labelStyles.push('decoration-done')
    }

    return (
        <li>
            <form>
                <input className="todolist__checkbox" type="checkbox" id={props.item.id}
                       onChange={() => context.changeDone(props.item.id)}/>
                <label className={labelStyles.join(' ')} htmlFor={props.item.id}>
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
