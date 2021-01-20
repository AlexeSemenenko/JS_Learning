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

    onChangeDone(e) {
        this.setState(state => {
            let array = state.todos.slice()

            array = array.map(item => {
                if (item.id === e.target.id) {
                    item.done = !item.done
                }
                return item
            })

            return {array}
        })
    }

    render() {
        return (
            <div className="grid">
                <Header/>
                <ToDoList todos={this.state.todos} onChangeItem={this.onChangeDone}/>
                <AddForm onChange={this.onChangeText} onSave={this.onSaveItem} text={this.state.text}/>
                <Footer/>
            </div>
        )
    }
}

export default App
