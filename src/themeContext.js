import React from "react"

const {Provider, Consumer} = React.createContext()

class themeContextProvider extends React.Component {
    state = {
        theme: "dark"
    }

    toggleTheme = () => {
        this.setState(prevState => {
            return {theme: prevState.theme === "dark" ? "light" : "dark"}
        })
    }

    render() {
        return(
            <Provider value={{
                theme: this.state.theme,
                toggle: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {themeContextProvider as Provider, Consumer}