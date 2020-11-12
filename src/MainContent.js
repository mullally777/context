import React from "react"
import {UserContextConsumer} from "./userContext"

function MainContent() {
    return (
        <UserContextConsumer>
            {context => (<h1>Hello, {context.username}</h1>)}
        </UserContextConsumer>
        
    )
}

export default MainContent