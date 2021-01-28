import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddForm from "./AddForm";
import ToDoList from "./ToDoList";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export const ToDoListContext = React.createContext()
export const AddFormContext = React.createContext()

function App() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')
    const [editing, setEditing] = useState(false)
    const [target, setTarget] = useState('')
    const [counter, setCounter] = useState(0)

    function changeText(e) {
        setText(e.target.value)
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

    function deleteItem(id) {
        let newTodos = todos.slice()

        newTodos = newTodos.filter(item => item.id !== id)

        setTodos(newTodos)
    }

    function changeDone(id) {
        let newTodos = todos.slice()

        newTodos = newTodos.map(item => {
            if (item.id === id) {
                item.done = !item.done
            }
            return item
        })

        setTodos(newTodos)
    }

    function editItem(id) {
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

          <AddFormContext.Provider value={{changeText, saveItem, text, editing, saveEditableItem}}>
              <AddForm/>
          </AddFormContext.Provider>

          <Footer/>
      </div>
    );
}

export default App;
