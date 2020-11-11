import logo from './logo.svg';
import React from "react"
import './App.css';
import Header from "./Header"
import Button from "./Button"
import MainContent from "./MainContent"
import UsernameForm from "./UsernameForm"
import {UserContextProvider} from "./userContext"

function App() {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <MainContent />
        <UsernameForm />
        <Button />
      </UserContextProvider>
    </div>
  )
}

export default App;
