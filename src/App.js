import logo from './logo.svg';
import React from "react"
import './App.css';
import Header from "./Header"
import Button from "./Button"
import {Provider} from "./themeContext"

function App() {
  return (
    <div>
      <Provider>
        <Header />
        <Button />
      </Provider>
    </div>
  )
}

export default App;
