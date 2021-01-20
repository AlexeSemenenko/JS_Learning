import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ToDoList from "./ToDoList";
import AddForm from "./AddForm";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            text: '',
        }
        this.onChangeText = this.onChangeText.bind(this)
        this.onSaveItem = this.onSaveItem.bind(this)
        this.onChangeDone = this.onChangeDone.bind(this)
        this.onDeleteItem = this.onDeleteItem.bind(this)
    }

    onChangeText(e) {
        this.setState({text: e.target.value})
    }

    onSaveItem(e) {
        e.preventDefault()

        if (this.state.text === '') {
            return
        }
        const newItem = {
            id: this.state.text.toString(),
            done: false,
            info: this.state.text
        }
        this.setState(state => ({
            todos: state.todos.concat(newItem),
            text: ''
        }))
    }

    onChangeDone(id) {
        let array = this.state.todos.slice()

        array = array.map(item => {
            if (item.id === id) {
                item.done = !item.done
            }
            return item
        })

        this.setState({todos: array})
    }

    onDeleteItem(id) {
        let array = this.state.todos.slice()

        array = array.filter(item => item.id !== id)

        this.setState({todos: array})
    }

    render() {
        return (
            <div className="grid">
                <Header/>
                <ToDoList todos={this.state.todos} onChangeItem={this.onChangeDone} onDeleteItem={this.onDeleteItem}/>
                <AddForm onChange={this.onChangeText} onSave={this.onSaveItem} text={this.state.text}/>
                <Footer/>
            </div>
        )
    }
}

export default App
