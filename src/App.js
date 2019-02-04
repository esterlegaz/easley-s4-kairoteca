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
      haveBooks: false,
      query: ''
    };

    this.paintList = this.paintList.bind(this);
    this.getFilter = this.getFilter.bind(this);
    this.filterBookList = this.filterBookList.bind(this);
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

  getFilter(e) {
    const query = e.currentTarget.value;
    this.setState({
      query: query
    })
  }

  filterBookList(){
    const {bookList, query} = this.state;
    const tag = query;
      return bookList.filter(item => item.tags.toString().indexOf(tag)>=0);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <label htmlFor="filter">
        <input id="filter" type="text" placeholder="Buscar" onKeyUp={this.getFilter}/>
        </label>
        <Main bookList={this.filterBookList()} haveBooks={this.state.haveBooks} handleLoan={this.handleLoan} />
        <Footer />
      </div>
    )
  }
}

export default App;