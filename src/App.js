import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Main from "./components/Layout/Main";
import Edit from "./components/Main/Edit";
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
      showPopup: false,
      chipData: [],
      deletePopup: false,
      popId: '',
      newBook: {
        title: '',
        author: '',
        ISBN: '',
        type: '',
        tags: [],
        status: ''
      },
      editBook:{
        title:'',
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
    this.togglePopup = this.togglePopup.bind(this);
    this.getTags = this.getTags.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.toggleDeletePopup = this.toggleDeletePopup.bind(this);
    this.handleChip = this.handleChip.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createBook = this.createBook.bind(this);
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

  handleChip = chips => {
    const { newBook } = this.state;
    const addBook = { ...newBook, tags: chips }
    this.setState({ newBook: addBook })
  }

  handleChange = field => event => {
    const { newBook } = this.state;
    const addBook = { ...newBook, [field]: event.currentTarget.value }
    this.setState({
      newBook: addBook
    })
  }

  createBook(){
    const { newBook } = this.state;
    api.createBook(newBook);
    this.paintList();
    this.togglePopup();
  }

  async updateBook(e) {
    const bookId = parseInt(e.currentTarget.getAttribute('data-id'));
    const result = await api.updateBook(bookId);
    return result;
  }

  handleChangeEdit = field => event => {
    const { editBook } = this.state;
    const addBook = { ...editBook, [field]: event.currentTarget.value }
    this.setState({
      editBook: addBook
    })
  }

  handleChipEdit = chips => {
    const { editBook } = this.state;
    const addBook = { ...editBook, tags: chips }
    this.setState({ editBook: addBook })
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" render={() => (
            <Main popId={this.state.popId} toggleDeletePopup={this.toggleDeletePopup} deletePopup={this.state.deletePopup} deleteBook={this.deleteBook} getFilter={this.getFilter} bookList={this.filterBookList()} haveBooks={this.state.haveBooks} togglePopup={this.togglePopup} />
          )} />

          <Route path="/book/:id" render={props => <ViewDetail match={props.match} bookList={this.state.bookList} />} />
        </Switch>

        {this.state.showPopup ?
          <Form togglePopup={this.togglePopup} suggestions={this.state.bookList} arrayTags={this.state.chipData} handleChange={this.handleChange} handleChip={this.handleChip} createBook={this.createBook} newBook={this.state.newBook}/>
          : null
        }
        <Edit handleChipEdit={this.handleChipEdit} arrayTags={this.state.chipData} handleChangeEdit={this.handleChangeEdit} editBook={this.state.editBook}/>
        <Footer />
      </div>
    )
  }
}

export default App;