import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Main from "./components/Layout/Main";
import Form from "./components/Main/Form";
import Footer from "./components/Layout/Footer";
import api from "./api";
import "./App.scss";
import ViewDetail from "./components/Detail/ViewDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      haveBooks: false,
      query: '',
      chipData: [],
      deletePopup: false,
      popId: '',
      bookItemId:'',
      deleteAnimation: '',
      newBook: {
        title: '',
        author: '',
        ISBN: '',
        type: '',
        tags: [],
        status: ''
      },
    };

    this.paintList = this.paintList.bind(this);
    this.getFilter = this.getFilter.bind(this);
    this.filterBookList = this.filterBookList.bind(this);
    this.getTags = this.getTags.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.toggleDeletePopup = this.toggleDeletePopup.bind(this);
    this.handleChip = this.handleChip.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createBook = this.createBook.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentDidMount() {
    this.paintList();
    this.getTags();
  }

  paintList() {
    api.books()
      .then(data => {
        const books = data.data.map(item => {
          return item
        });
        this.setState({
          bookList: books,
          haveBooks: true,
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

  async deleteBook() {
    this.paintList();
    const {popId} = this.state;
    const result = await api.deleteBook(popId);
    this.setState({    
      deleteAnimation: '',
      popId: ''
    })
    return result;
  }

  confirmDelete(){
    this.setState({
      deleteAnimation: 'delete__book',
      deletePopup: !this.state.deletePopup,
    })
    setTimeout(this.deleteBook, 4000)
  }

  toggleDeletePopup(e) {
    const newId = parseInt(e.currentTarget.getAttribute('data-popid'));
    const bookId = e.currentTarget.getAttribute('data-bookitem');
    this.setState({
      deletePopup: !this.state.deletePopup,
      popId: newId,
      bookItemId: bookId,
    });
  }

  handleChip = chips => {
    const { newBook } = this.state;
    const addBook = { ...newBook, tags: chips }
    this.setState({ newBook: addBook })
  }

  handleChange = field => event => {
    this.setState((prevState) => {
      const { newBook } = prevState;
      const addBook = { ...newBook, [field]: event.currentTarget.value }
      return {newBook: addBook}
    })
  }

  createBook() {
    const { newBook } = this.state;
    api.createBook(newBook);
    this.paintList();
  }

  render() {
    const {bookItemId, deleteAnimation, popId, deletePopup, haveBooks, bookList, chipData, newBook} = this.state;
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" render={() => (
            <Main bookItemId={bookItemId} deleteAnimation={deleteAnimation} popId={popId} toggleDeletePopup={this.toggleDeletePopup} deletePopup={deletePopup} deleteBook={this.confirmDelete} getFilter={this.getFilter} bookList={this.filterBookList()} haveBooks={haveBooks} />
          )} />

          <Route path="/book/:id" render={props => <ViewDetail match={props.match} bookList={bookList} />} />
          
          <Route path="/add" render={() => (<Form suggestions={bookList} arrayTags={chipData} handleChange={this.handleChange} handleChip={this.handleChip} createBook={this.createBook} newBook={newBook} />)} />
        </Switch>

        <Footer />
      </div>
    )
  }
}

export default App;