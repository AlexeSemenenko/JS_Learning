import React from "react"
import PropTypes from "prop-types"

function AddForm(props) {
    return (
        <div className="add-form">
            <form>
                <label>
                    <textarea className="add-form__input-field" rows="3" placeholder="List item"
                              name="add-form__input-field" onChange={props.onChange} value={props.text}/>
                </label>

                <input type="button" className="add-form__save-button button" value="Save" onClick={props.onSave}/>

                <input type="button" className="add-form__edit-button button" value="Edit" disabled={true}/>
            </form>
        </div>
    )
}

AddForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
}

export default AddForm