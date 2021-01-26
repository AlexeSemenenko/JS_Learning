import React, {useContext} from "react"
import {ToDoListContext} from "./App"
import cn from "classnames"
import {ItemTypes} from "./ItemTypes"
import {useDrag, useDrop} from "react-dnd";

export default function ListItem({id, data, done, findToDo, moveToDo}) {
    const context = useContext(ToDoListContext)

    const originalIndex = findToDo(id).index

    const [, drag] = useDrag({
        item: {type: ItemTypes.TODO_ITEM, id, originalIndex},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            const {id: droppedId, originalIndex} = monitor.getItem()
            const didDrop = monitor.didDrop()

            if (!didDrop) {
                moveToDo(droppedId, originalIndex)
            }
        }
    })

    const [, drop] = useDrop({
        accept: ItemTypes.TODO_ITEM,
        canDrop: () => false,
        hover({id: draggedId}) {
            if (draggedId !== id) {
                const {index: overIndex} = findToDo(id)
                moveToDo(draggedId, overIndex)
            }
        }

    })

    return (
        <li ref={node => drag(drop(node))}>
            <form>
                <input className="todolist__checkbox" type="checkbox" id={id}
                       onChange={() => context.changeDone(id)}/>
                <label className={cn('todolist__label', {'decoration-done': done})} htmlFor={id}>
                    {data}
                </label>
                <br/>
                <input type="button" className="todolist__edit-button button" value="Edit"
                       onClick={() => context.editItem(id)}/>
                <input type="button" className="todolist__delete-button button" value="Delete"
                       onClick={() => context.deleteItem(id)}/>
                <br/>
            </form>
        </li>
    )
}
