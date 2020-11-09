import logo from './logo.svg';
import React from "react"
import './App.css';
import Header from "./Header"
import Button from "./Button"
import {UserContextProvider} from "./userContext"

function App() {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <Button />
      </UserContextProvider>
    </div>
  )
}

export default App;
