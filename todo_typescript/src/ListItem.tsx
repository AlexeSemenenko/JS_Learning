import React, {useContext, useRef} from "react"
import {ToDoListContext} from "./Context"
import cn from "classnames"
import {DropTargetMonitor, useDrag, useDrop} from "react-dnd"
import {ListItemProps, DragItemType, ItemTypes} from "./Types"
import {XYCoord} from "dnd-core";

export const ListItem: React.FC<ListItemProps> = ({id, data, done, index, moveToDo}) => {
    const context = useContext(ToDoListContext)

    const ref = useRef<HTMLLIElement>(null)

    const [, drop] = useDrop({
        accept: ItemTypes.TODO_ITEM,
        hover(item: DragItemType, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return
            }

            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveToDo(dragIndex, hoverIndex)

            item.index = hoverIndex
        },
    })

    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.TODO_ITEM, id, index},
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    drag(drop(ref))

    return (
        <li ref={ref}>
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
