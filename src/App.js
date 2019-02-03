import React, { Component } from "react"
import "./App.scss";
import api from "./api";
import List from "./components/List";
import CardDetail from './components/Detail/CardDetail';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loan: 'prueba'
    };
  }

  handleLoan() {
    console.log('Funciono');
  }

  render() {
    api.books().then(console.log)
    return (
      <div className="App">
        <List />
        <CardDetail loan={this.state.loan} handleLoan={this.handleLoan} />
      </div>
    )
  }
}

export default App;