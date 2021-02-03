import React from "react"
import {AddFormProps} from "./Types"
import Button from "@material-ui/core/Button"
import {useStyles} from "./Styles"
import cn from "classnames"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

export const AddForm: React.FC<AddFormProps> = (props) => {
    const classes = useStyles()

    return (
        <Box>
            <form>
                <TextField color="primary"
                           label={<Typography className={classes.addForm__label}>List item</Typography>}
                           value={props.text}
                           onChange={props.changeText}
                           className={classes.addForm__inputField}
                           onKeyDown={props.saveItemEnter}/>

                <Button
                    variant="contained"
                    className={cn(classes.button, classes.addForm__saveButton)}
                    onClick={props.saveItem}
                    disabled={props.editing}>
                    Save
                </Button>

                <Button
                    variant="contained"
                    className={cn(classes.button, classes.addForm__editButton) }
                    onClick={props.saveEditableItem}
                    disabled={!props.editing}>
                    Edit
                </Button>

            </form>
        </Box>
    )
}
