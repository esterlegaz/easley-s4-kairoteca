import React, { Component } from "react"
import "./App.css"
import api from "./api"

class App extends Component {
  render() {
    api.books().then(console.log)
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    )
  }
}

export default App
