import React from "react"
import Typography from "@material-ui/core/Typography"
import {useStyles} from "./Styles"
import Box from "@material-ui/core/Box"

export const Footer: React.FC = () => {
    const classes = useStyles()

    return (
        <Box className={classes.footer}>
            <Typography className={classes.footer__info}>created by Aleksei Semenenko || contact t.me/alexei_semenenko</Typography>
        </Box>
    )
}
