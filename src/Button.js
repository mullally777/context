import React from "react"
import {Consumer} from "./themeContext"

function Button() {
    return(
        <Consumer>
            
            {context => (
                <button className={`${context.theme}-theme`} onClick={context.toggle}>Включить {context.theme === "dark" ? "светлую" : "темную"} тему</button>
            )}
            
        </Consumer>
    )
}

export default Button