import React, {useContext, useRef} from "react"
import {ToDoListContext} from "./Context"
import cn from "classnames"
import {DropTargetMonitor, useDrag, useDrop} from "react-dnd"
import {ListItemProps, DragItemType, ItemTypes} from "./Types"
import {XYCoord} from "dnd-core"
import IconButton from "@material-ui/core/IconButton"
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import {useStyles} from "./Styles"
import CheckBox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Typography from "@material-ui/core/Typography"

 const ListItem: React.FC<ListItemProps> = ({id, data, done, index, moveToDo}) => {
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

    const [, drag] = useDrag({
        item: {type: ItemTypes.TODO_ITEM, id, index},
    })

    drag(drop(ref))

    const classes = useStyles()

    let labelStyle: string = classes.todoList__checkbox
    if (done) {
        labelStyle = labelStyle + ' ' + classes.decorationDone
    }

    return (
        <li ref={ref}>
            <form>
                <FormControlLabel control={<CheckBox onChange={() => context.changeDone(id)} id={id} color={"primary"}/>}
                                  className={labelStyle}
                                  label={<Typography className={classes.todoList_label}>{data}</Typography>}/>

                <br/>

                <IconButton className={classes.todoList__button} onClick={() => context.editItem(id)}>
                    <EditIcon/>
                </IconButton>

                <IconButton className={cn(classes.todoList__button, classes.todoList__buttonDelete)}
                            onClick={() => context.deleteItem(id)}>
                    <DeleteIcon/>
                </IconButton>

                <br/>
            </form>
        </li>
    )
}

export default React.memo(ListItem)