import React from "react"
import {useStyles} from "./Styles"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

export const Header: React.FC = () => {
    const classes = useStyles()

    return (
        <Box p={0} className={classes.header}>
            <Typography className={classes.header__info}>ToDo List</Typography>
        </Box>
    )
}
