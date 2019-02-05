import React, { Component } from "react";
import Header from './components/Layout/Header';
import Main from "./components/Layout/Main";
import Footer from "./components/Layout/Footer";
import api from "./api";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      haveBooks: false,
      query: '',
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

  filterBookList() {
    const {bookList, query} = this.state;
      return bookList.filter(book =>{
        const tags = book.tags.filter(tag => tag.toUpperCase().includes(query.toUpperCase()));
        const title = book.title.toUpperCase().includes(query.toUpperCase());
        return tags.length > 0 || title;
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main getFilter={this.getFilter} bookList={this.filterBookList()} haveBooks={this.state.haveBooks} handleLoan={this.handleLoan} />
        <Footer />
      </div>
    )
  }
}

export default App;