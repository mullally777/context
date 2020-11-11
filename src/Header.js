import React from "react"
import {UserContextConsumer} from "./userContext"

function Header() {
    return(

        <UserContextConsumer>
           {context => (
               <header className={`${context.theme}-theme`}>
                   <div>{context.theme === "dark" ? "Темная" : "Светлая"} тема</div>
                    <div>{context.username}</div>
                </header>
           )} 
        </UserContextConsumer>
    )
}

export default Header