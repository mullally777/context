import React from "react"
import {Consumer} from "./themeContext"

function Header() {
    return(

        <Consumer>
           {context => (
               <header className={`${context.theme}-theme`}>{context.theme === "dark" ? "Темная" : "Светлая"} тема</header>
           )} 
        </Consumer>
    )
}

export default Header