import React from "react"
import {Header} from "./Header"
import {ToDoContainer} from "./ToDoContainer"
import {ThemeProvider} from "@material-ui/core/styles"
import {theme} from "./Styles"
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
            </Grid>
        </ThemeProvider>
    );
}
