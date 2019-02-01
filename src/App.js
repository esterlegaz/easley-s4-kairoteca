import React, { Component } from "react"
import "./App.css"
import api from "./api"
import Tags from './components/Detail/Tags';

class App extends Component {
  render() {
    api.books().then(console.log)
    return (
      <div className="App">
        <Tags />
      </div>
    )
  }
}

export default App;