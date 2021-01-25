import React from "react"
import PropTypes from "prop-types"
import cn from  "classnames"

function ListItem(props) {
    return (
        <li>
            <form>
                <input className="todolist__checkbox" type="checkbox" id={props.item.id}
                       onChange={() => props.onChangeDone(props.item.id)}/>
                <label className={cn('todolist__label', {'decoration-done': props.item.done})} htmlFor={props.item.id}>
                    {props.item.info}
                </label>
                <br/>
                <input type="button" className="todolist__edit-button button" value="Edit"
                       onClick={props.onEdit.bind(null, props.item.id)}/>
                <input type="button" className="todolist__delete-button button" value="Delete"
                       onClick={props.onDelete.bind(null, props.item.id)}/>
                <br/>
            </form>
        </li>
    )
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onChangeDone: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
}

export default ListItem