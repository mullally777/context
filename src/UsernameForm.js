import React from "react"
import {UserContextConsumer} from "./userContext"

class UsernameForm extends React.Component {
    state = {
        username: ""
    }

    handleChange = (e) => {
        this.setState({username: e.target.value})
    }

    render() {
        return (
            <div className="form">
                <input 
                    type="text"
                    name="username"
                    value={this.state.username}
                    className="username_input"
                    onChange={this.handleChange}
                >
                
                </input>

                <UserContextConsumer>
                    {context => (
                            <button className={`${context.theme}-theme`} onClick={context.switchTheme} onClick={() => context.changeUserName(this.state.username)}>Change</button>
                        )
                    }
                </UserContextConsumer>

                

            </div>
        )
        
    }
}

export default UsernameForm