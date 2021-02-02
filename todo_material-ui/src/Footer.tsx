import React from "react"
import Typography from "@material-ui/core/Typography"
import {useStyles} from "./Styles"

export const Footer: React.FC = () => {
    const classes = useStyles()

    return (
        <div className="footer">
            <Typography className={classes.footer__info}>created by Aleksei Semenenko || contact t.me/alexei_semenenko</Typography>
        </div>
    )
}
