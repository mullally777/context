import React from "react"
import {UserContextConsumer} from "./userContext"

function Button() {
    return(
        <UserContextConsumer>         
            {context => (
                <button className={`${context.theme}-theme`} onClick={context.switchTheme}>Включить {context.theme === "dark" ? "светлую" : "темную"} тему</button>
            )}
        </UserContextConsumer>
    )
}

export default Button