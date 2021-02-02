import React from "react"
import {useStyles} from "./Styles"
import Typography from "@material-ui/core/Typography"

export const Header: React.FC = () => {
    const classes = useStyles()

    return (
        <div className="header">
            <Typography className={classes.header__info}>ToDo List</Typography>
        </div>
    )
}
