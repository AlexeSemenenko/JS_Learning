import React from "react"
import PropTypes from "prop-types"
import ListItem from "./ListItem";

function ToDoList(props) {
    return (
        <div className="todolist">
            <ul>
                {props.todos.map(item => {
                    return <ListItem item={item} key={item.id} onChangeDone={props.onChangeDone}
                                     onDelete={props.onDeleteItem} onEdit={props.onEditItem}/>
                })}
            </ul>
        </div>
    )
}

ToDoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeDone: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired,
    onEditItem: PropTypes.func.isRequired,
}

export default ToDoList