import React, {useState} from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {AddForm} from "./AddForm";
import {ToDoList} from "./ToDoList";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TodoType} from "./Types";
import {ToDoListContext} from "./Context";

export const App: React.FC = () => {
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

    return (
        <div className="grid">
            <Header/>

            <DndProvider backend={HTML5Backend}>
                <ToDoListContext.Provider value={{deleteItem, changeDone, editItem, todos, setTodos}}>
                    <ToDoList/>
                </ToDoListContext.Provider>
            </DndProvider>

            <AddForm text={text} editing={editing} saveItem={saveItem}
                     changeText={changeText} saveEditableItem={saveEditableItem}/>

            <Footer/>
        </div>
    );
}
