import React, {useMemo, useState} from "react"
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import {ToDoListContext} from "./Context"
import {ToDoList} from "./ToDoList"
import {AddForm} from "./AddForm"
import {TodoType} from "./Types"
import Grid from "@material-ui/core/Grid"
import {Typography, Box} from "@material-ui/core"
import {useStyles} from "./Styles"

export let ToDoContainer: React.FC = () => {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [text, setText] = useState<string>('')
    const [editing, setEditing] = useState<boolean>(false)
    const [target, setTarget] = useState<string>('')
    const [counter, setCounter] = useState<number>(0)

    function changeText(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(event.target.value)
    }

    function saveItem() {
        if (text === '') {
            return
        }

        setTodos([...todos, {
            id: 'todo_item' + counter,
            done: false,
            data: text
        }])
        const k = counter + 1
        setCounter(k)
        setText('')
    }

    function deleteItem(id: string) {
        let newTodos = todos.slice()

        newTodos = newTodos.filter(item => item.id !== id)

        setTodos(newTodos)
    }

    function changeDone(id: string) {
        let newTodos = todos.slice()

        newTodos = newTodos.map(item => {
            if (item.id === id) {
                item.done = !item.done
            }
            return item
        })

        setTodos(newTodos)
    }

    function editItem(id: string) {
        let editable = ''
        const array = todos.slice()

        array.forEach(item =>{
            if (item.id === id) {
                editable = item.data
            }
        })

        setText(editable)
        setTarget(id)
        setEditing(true)
    }

    function saveEditableItem() {
        const newData = text
        let newTodos = todos.slice()

        newTodos = newTodos.map(item => {
            if (item.id === target) {
                item.data = newData
            }
            return item
        })

        setText('')
        setEditing(false)
        setTodos(newTodos)
        setTarget('')
    }

    function saveItemEnter(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter' && !editing) {
            event.preventDefault()
            saveItem()
        } else if (event.key === 'Enter' && editing) {
            event.preventDefault()
            saveEditableItem()
        }

    }

    const classes = useStyles()

    if (todos.length === 0) {
        return (
            <>
                <Grid item sm={6} xs={8} className={classes.emptyBox}>
                    <Box>
                        <Typography className={classes.emptyBox__text}>The to-do list is empty. It's time to add something!</Typography>
                    </Box>
                </Grid>

                <Grid item sm={3} xs={3}>
                    <AddForm text={text} editing={editing} saveItem={saveItem}
                             changeText={changeText} saveEditableItem={saveEditableItem} saveItemEnter={saveItemEnter}/>
                </Grid>
            </>
        )
    }

    return (
        <>
            <Grid item sm={6} xs={8}>
                <DndProvider backend={HTML5Backend}>
                    <ToDoListContext.Provider value={{deleteItem, changeDone, editItem, todos, setTodos}}>
                        <ToDoList/>
                    </ToDoListContext.Provider>
                </DndProvider>
            </Grid>

            <Grid item sm={3} xs={3}>
                <AddForm text={text} editing={editing} saveItem={saveItem}
                         changeText={changeText} saveEditableItem={saveEditableItem} saveItemEnter={saveItemEnter}/>
            </Grid>
        </>
    )
}