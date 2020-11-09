import React from "react"
import {Consumer} from "./themeContext"

function Header() {
    return(

        <Consumer>
           {context => (
               <header className={`${context.theme}-theme`}>
                   <div>{context.theme === "dark" ? "Темная" : "Светлая"} тема</div>
                   <div>TIMKA</div>
                </header>
           )} 
        </Consumer>
    )
}

export default Header