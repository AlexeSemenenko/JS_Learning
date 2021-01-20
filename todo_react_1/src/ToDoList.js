import React from "react"
import PropTypes from "prop-types"
import ListItem from "./ListItem";

function ToDoList(props) {
    return (
        <div className="todolist">
            <ul>
                {props.todos.map(item => {
                    return <ListItem item={item} key={item.id} onChangeItem={props.onChangeItem}/>
                })}
            </ul>
        </div>
    )
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeItem: PropTypes.func.isRequired,
}

export default ToDoList