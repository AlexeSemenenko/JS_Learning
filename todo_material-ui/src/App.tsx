import React from "react"
import {Header} from "./Header"
import {Footer} from "./Footer"
import {ToDoContainer} from "./ToDoContainer"
import {ThemeProvider} from "@material-ui/core/styles"
import {theme, useStyles} from "./Styles"
import Grid from "@material-ui/core/Grid"

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Grid item xs={12}>
                    <Header/>
                </Grid>

                <Grid item sm={3}/>

                <ToDoContainer/>

                {/*<Grid item xs={12}>*/}
                {/*    <Footer/>*/}
                {/*</Grid>*/}
            </Grid>
        </ThemeProvider>
    );
}
