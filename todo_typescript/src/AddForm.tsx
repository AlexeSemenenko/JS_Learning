import React from "react"
import {AddFormProps} from "./Types"

export const AddForm: React.FC<AddFormProps> = (props) => {
    return (
        <div className="add-form">
            <form>
                <label>
                    <textarea className="add-form__input-field" rows={3} placeholder="List item"
                              name="add-form__input-field" onChange={props.changeText} value={props.text}/>
                </label>

                <input type="button" className="add-form__save-button button" value="Save"
                       onClick={props.saveItem} disabled={props.editing}/>

                <input type="button" className="add-form__edit-button button" value="Edit"
                       onClick={props.saveEditableItem} disabled={!props.editing}/>
            </form>
        </div>
    )
}
