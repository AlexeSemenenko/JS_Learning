import React, {useCallback, useContext} from "react"
import ListItem from "./ListItem"
import {ToDoListContext} from "./Context"
import update from "immutability-helper"
import Box from "@material-ui/core/Box"
import {useStyles} from "./Styles"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from '@material-ui/icons/Add'
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Typography from "@material-ui/core/Typography"

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

    const classes = useStyles()

    return (
        <Box className={classes.todoList}>
            <ul>
                {context.todos.map((item, i) => {
                    return <ListItem id={item.id} data={item.data} done={item.done}
                                     key={item.id} index={i} moveToDo={moveToDo}/>
                })}
            </ul>

            <FormControlLabel control={<IconButton className={classes.todoList__addButton} onClick={context.addNewItem}>
                                            <AddIcon/>
                                        </IconButton>}
                              className={classes.todoList__addButton}
                              label={<Typography className={classes.todoList_label}>List Item</Typography>}/>
        </Box>
    )
}
