import React from "react"
import {Header} from "./Header"
import {Footer} from "./Footer"
import {ToDoContainer} from "./ToDoContainer"
import {ThemeProvider} from "@material-ui/core/styles"
import {theme} from "./Styles"

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="grid">
                <Header/>
                <ToDoContainer/>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}
