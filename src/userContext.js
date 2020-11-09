import React from "react"

const {Provider, Consumer} = React.createContext()

class UserContextProvider extends React.Component {
    state = {
        username: "TIMKA",
        theme: "dark"
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {theme: prevState.theme === "dark" ? "light" : "dark"}
        })
    }

    changeUserName = (newUserName) => {
        this.setState({username: newUserName})
    }

    render() {
        return (
            <Provider value={{
                username: this.state.username,
                theme: this.state.theme,
                changeUserName: this.changeUserName,
                switchTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}
