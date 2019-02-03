import React, { Component } from "react"
import CardDetail from './components/Detail/CardDetail';
import "./App.scss"
import api from "./api"

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
        <CardDetail loan={this.state.loan} handleLoan={this.handleLoan} />
      </div>
    )
  }
}

export default App;