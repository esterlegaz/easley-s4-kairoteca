import React, { Component } from "react";
import Header from './components/Header';
import Main from "./components/Main";
import Footer from "./components/Footer";
import api from "./api";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      haveBooks: false
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
          bookList: books,
          haveBooks: true
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main bookList={this.state.bookList} haveBooks={this.state.haveBooks} handleLoan={this.handleLoan} />
        <Footer />
      </div>
    )
  }
}

export default App;