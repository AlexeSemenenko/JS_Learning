import React, {useState} from "react"
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"
import {ToDoListContext} from "./Context"
import {ToDoList} from "./ToDoList"
import {TodoType} from "./Types"
import Grid from "@material-ui/core/Grid"

export let ToDoContainer: React.FC = () => {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [text, setText] = useState<string>('')
    const [editing, setEditing] = useState<boolean>(false)
    const [target, setTarget] = useState<string>('')
    const [counter, setCounter] = useState<number>(0)
    const [editingText, setEditingText] = useState<string>('')

    function changeEditingText(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setEditingText(event.target.value)
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

    function saveEditableItem() {
        const newData = editingText

        if (newData === '') {
            deleteItem(target)
        } else {
            let newTodos = todos.slice()

            newTodos = newTodos.map(item => {
                if (item.id === target) {
                    item.data = newData
                }
                return item
            })

            setEditingText('')
            setEditing(false)
            setTodos(newTodos)
            setTarget('')
        }
    }

    function editItem(id: string) {
        if (editing) {
            saveEditableItem()
        } else {
            let editable = ''
            const array = todos.slice()

            array.forEach(item =>{
                if (item.id === id) {
                    editable = item.data
                }
            })

            setEditingText(editable)
            setTarget(id)
            setEditing(true)
        }
    }

    function editItemEnter(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.key === 'Enter' && editing) {
            event.preventDefault()
            saveEditableItem()
        }
    }

    function addNewItem() {
        setTodos([...todos, {
            id: 'todo_item' + counter,
            done: false,
            data: ''
        }])

        setEditing(true)
        setTarget('todo_item' + counter)

        const k = counter + 1
        setCounter(k)
    }

    return (
            <Grid item xs={12} md={6}>
                <DndProvider backend={HTML5Backend}>
                    <ToDoListContext.Provider value={{deleteItem, changeDone, editItem, todos,
                                                    setTodos, editing, editingText, changeEditingText,
                                                    editItemEnter, target, addNewItem}}>
                        <ToDoList/>
                    </ToDoListContext.Provider>
                </DndProvider>
            </Grid>
    )
}