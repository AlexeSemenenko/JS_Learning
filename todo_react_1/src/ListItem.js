import React from "react"
import PropTypes from "prop-types"

function ListItem(props) {
    const labelStyles = ['todolist__label']

    if (props.item.done) {
        labelStyles.push('decoration-done')
    }
    return (
        <li>
            <form>
                <input className="todolist__checkbox" type="checkbox" id={props.item.id} onChange={props.onChangeItem}/>
                <label className={labelStyles.join(' ')} htmlFor={props.item.id}>
                    {props.item.info}
                </label>
                <br/>
                <input type="submit" className="todolist__edit-button button" value="Edit"/>
                <input type="submit" className="todolist__delete-button button" value="Delete"/>
                <br/>
            </form>
        </li>
    )
}

ListItem.propTypes = {
    item: PropTypes.object.isRequired,
    onChangeItem: PropTypes.func.isRequired,
}

export default ListItem