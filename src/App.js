import React, { Component } from "react";
import "./App.css";
import api from "./api";
import List from "./components/List";

class App extends Component {
  render() {
    api.books().then(console.log)
    return (
      <div className="App">
        <List />
      </div>
    )
  }
}

export default App;