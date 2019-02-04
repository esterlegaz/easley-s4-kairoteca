import React, { Component } from "react"
import "./App.scss";
import api from "./api";
import List from "./components/List";
import CardDetail from './components/Detail/CardDetail';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loan: 'prueba',
      bookList: []
    };

    this.paintList = this.paintList.bind(this);
  }

  componentDidMount() {
    this.paintList();
  }

  handleLoan() {
    console.log('Funciono');
  }

  paintList() {
    api.books()
      .then(data => {
        const books = data.data.map(item => {
          return item
        });
        this.setState({
          bookList: books
        })
      })
  }


  render() {

    return (
      <div className="App">
        <Header/>
        <List bookList={this.state.bookList} loan={this.state.loan} handleLoan={this.handleLoan}/>
      </div>
    )
  }
}

export default App;