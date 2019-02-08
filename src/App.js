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
      deletePopup: false
    };

    this.paintList = this.paintList.bind(this);
    this.getFilter = this.getFilter.bind(this);
    this.filterBookList = this.filterBookList.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.toggleDeletePopup = this.toggleDeletePopup.bind(this);
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

  async deleteBook(e){
    const bookId = parseInt(e.currentTarget.getAttribute('data-id'));
    console.log(bookId);
    const result = await api.deleteBook(bookId);
    console.log(result);
    this.paintList();
    this.toggleDeletePopup();
  }

  toggleDeletePopup() {
    this.setState({
      deletePopup: !this.state.deletePopup
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main toggleDeletePopup={this.toggleDeletePopup} deletePopup={this.state.deletePopup} deleteBook={this.deleteBook} getFilter={this.getFilter} bookList={this.filterBookList()} haveBooks={this.state.haveBooks} handleLoan={this.handleLoan} />
        <Footer />
      </div>
    )
  }
}

export default App;