import React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {ToDoContainer} from "./ToDoContainer";

export const App: React.FC = () => {
    return (
        <div className="grid">
            <Header/>
            <ToDoContainer/>
            <Footer/>
        </div>
    );
}
