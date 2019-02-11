import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Main from "./components/Layout/Main";
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
      deletePopup: false,
      popId: ''
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
    const { bookList, query } = this.state;
    return bookList.filter(book => {
      const tags = book.tags.filter(tag => tag.toUpperCase().includes(query.toUpperCase()));
      const title = book.title.toUpperCase().includes(query.toUpperCase());
      return tags.length > 0 || title;
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
        <Switch>
          <Route exact path="/" render={() => (
            <Main popId={this.state.popId} toggleDeletePopup={this.toggleDeletePopup} deletePopup={this.state.deletePopup} deleteBook={this.deleteBook} getFilter={this.getFilter} bookList={this.filterBookList()} haveBooks={this.state.haveBooks} handleLoan={this.handleLoan} />
          )} />
          <Route path="/book/:id" render={props => <ViewDetail match={props.match} bookList={this.state.bookList} />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;