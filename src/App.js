import React, { Component } from "react";
import Header from './components/Layout/Header';
import Main from "./components/Layout/Main";
import Form from "./components/Main/Form";
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
      showPopup: false,
      chipData: [],
      deletePopup: false,
      popId: ''
    };

    this.paintList = this.paintList.bind(this);
    this.getFilter = this.getFilter.bind(this);
    this.filterBookList = this.filterBookList.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.getTags = this.getTags.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.toggleDeletePopup = this.toggleDeletePopup.bind(this);
  }

  componentDidMount() {
    this.paintList();
    this.getTags();
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
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
    const { bookList, query } = this.state;
    return bookList.filter(book => {
      const tags = book.tags.filter(tag => tag.toUpperCase().includes(query.toUpperCase()));
      const title = book.title.toUpperCase().includes(query.toUpperCase());
      return tags.length > 0 || title;
    })
  }

  getTags() {
    api.books()
      .then(books => {
        const tags = books.data.map(item => {
          return item.tags
        });

        const mergedTags = [...new Set([].concat.apply([], tags))];

        this.setState({
          chipData: mergedTags
        })
      })
  };

  createBook() {
    api.createBook()
      .then(createBook => {

      })
  }

  async deleteBook(e) {
    this.paintList();
    const bookId = parseInt(e.currentTarget.getAttribute('data-id'));
    const result = await api.deleteBook(bookId);
    this.setState({
      deletePopup: !this.state.deletePopup,
      popId: ''
    })
    return result;
  }

  toggleDeletePopup(e) {
    const newId = parseInt(e.currentTarget.getAttribute('data-popid'));
    this.setState({
      deletePopup: !this.state.deletePopup,
      popId: newId
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main popId={this.state.popId} toggleDeletePopup={this.toggleDeletePopup} deletePopup={this.state.deletePopup} deleteBook={this.deleteBook} getFilter={this.getFilter} bookList={this.filterBookList()} haveBooks={this.state.haveBooks} togglePopup={this.togglePopup} />

        {this.state.showPopup ?
          <Form togglePopup={this.togglePopup} suggestions={this.state.bookList} arrayTags={this.state.chipData} />
          : null
        }

        <Footer />
      </div>
    )
  }
}

export default App;