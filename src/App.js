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
      showPopup: false
    };

    this.paintList = this.paintList.bind(this);
    this.getFilter = this.getFilter.bind(this);
    this.filterBookList = this.filterBookList.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.viewDetails = this.viewDetails.bind(this);
  }

  componentDidMount() {
    this.paintList();
  }

  handleLoan() {
    console.log('Funciono');
  }

  togglePopup(){
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  async viewDetails(e){
    this.togglePopup();
    const titleId = parseInt(e.currentTarget.getAttribute('title-id'));
    const result = await api.bookById(titleId);
    return result;
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
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main deleteBook={this.deleteBook} getFilter={this.getFilter} bookList={this.filterBookList()} haveBooks={this.state.haveBooks} handleLoan={this.handleLoan} showPopup={this.state.showPopup} togglePopup={this.togglePopup} viewDetails={this.viewDetails}/>
        <Footer />
      </div>
    )
  }
}

export default App;