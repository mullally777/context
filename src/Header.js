import React from "react"
import {UserContextConsumer} from "./userContext"

function Header() {
    return(

        <UserContextConsumer>
           {context => (
               <header className={`${context.theme}-theme`}>{context.theme === "dark" ? "Темная" : "Светлая"} тема</header>
           )} 
        </UserContextConsumer>
    )
}

export default Header