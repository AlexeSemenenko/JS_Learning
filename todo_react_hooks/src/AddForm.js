import React, {useContext} from "react"
import {AddFormContext} from "./App";

function AddForm() {
    const context = useContext(AddFormContext)

    return (
        <div className="add-form">
            <form>
                <label>
                    <textarea className="add-form__input-field" rows="3" placeholder="List item"
                              name="add-form__input-field" onChange={context.changeText} value={context.text}/>
                </label>

                <input type="button" className="add-form__save-button button" value="Save"
                       onClick={context.saveItem} disabled={context.editing}/>

                <input type="button" className="add-form__edit-button button" value="Edit"
                       onClick={context.saveEditableItem} disabled={!context.editing}/>
            </form>
        </div>
    )
}

export default AddForm