import React, { Component } from "react";
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import Main from "./components/Layout/Main";
import Form from "./components/Main/Form";
import Footer from "./components/Layout/Footer";
import ViewOrEdit from "./components/Detail/ViewOrEdit";
import api from "./api";
import "./App.scss";

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
      bookItemId: '',
      deleteAnimation: '',
      editBook: true,
      newBook: {
        title: '',
        author: '',
        ISBN: '',
        type: '',
        tags: [],
        status: '',
        id: ''
      },
    };

    this.paintList = this.paintList.bind(this);
    this.getFilter = this.getFilter.bind(this);
    this.filterBookList = this.filterBookList.bind(this);
    this.getTags = this.getTags.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.toggleDeletePopup = this.toggleDeletePopup.bind(this);
    this.handleChip = this.handleChip.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createBook = this.createBook.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.goBackApp = this.goBackApp.bind(this);
    this.changeMe = this.changeMe.bind(this);
    this.showEditBook = this.showEditBook.bind(this);
    this.colorTags = this.colorTags.bind(this);
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
    const { popId } = this.state;
    const result = await api.deleteBook(popId);
    this.setState({
      deleteAnimation: '',
      popId: ''
    })
    return result;
  }

  confirmDelete() {
    this.setState({
      deleteAnimation: 'delete__book',
      deletePopup: !this.state.deletePopup,
    })
    setTimeout(this.deleteBook, 2000)
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
    this.setState((prevState) => {
      const { newBook } = prevState;
      const addBook = { ...newBook, tags: chips }
      return { newBook: addBook }
    });
  }

  handleChange(e) {
    const field = e.currentTarget.getAttribute('data-field');
    const currentValue = e.currentTarget.value;
    this.setState((prevState) => {
      const { newBook } = prevState;
      const addBook = { ...newBook, [field]: currentValue }
      return { newBook: addBook }
    });
  }

  createBook() {
    const { newBook } = this.state;
    if (newBook.title !== '' && newBook.author !== '' && newBook.ISBN !== '' && newBook.type !== '' && newBook.status !== '' && newBook.tags.length !== 0) {
      api.createBook(newBook);
      this.goBackApp();
      this.paintList();
      this.setState({
        newBook: {
          title: '',
          author: '',
          ISBN: '',
          type: '',
          tags: [],
          status: ''
        },
      });
    } else {
      alert('No ha rellenado todos los campos obligatorios')
    }
  }

  goBackApp() {
    this.props.history.push('/');
    this.setState({
      editBook: true,
      newBook: {
        title: '',
        author: '',
        ISBN: '',
        type: '',
        tags: [],
        status: ''
      }
    })
  }

  changeMe(e) {
    const bookId = parseInt(e.currentTarget.getAttribute('data-update'));
    const dataTitle = e.currentTarget.getAttribute('data-title');
    const dataAuthor = e.currentTarget.getAttribute('data-author');
    const dataISBN = e.currentTarget.getAttribute('data-isbn');
    const dataType = e.currentTarget.getAttribute('data-type');
    const dataStatus = e.currentTarget.getAttribute('data-status');
    const dataTags = e.currentTarget.getAttribute('data-tags').split(',');
    this.setState((prevState) => {
      const { newBook } = prevState;
      const editBook = { ...newBook, id: bookId, title: dataTitle, author: dataAuthor, ISBN: dataISBN, type: dataType, status: dataStatus, tags: dataTags}
      return { newBook: editBook }
    });
    this.setState({
      editBook: !this.state.editBook
    });
  }

  async updateBook() {
    this.paintList();
    this.goBackApp();
    const { newBook } = this.state;
    await api.updateBook(newBook);
    this.setState({
      editBook: !this.state.editBook,
      newBook: {
        title: '',
        author: '',
        ISBN: '',
        type: '',
        tags: [],
        status: ''
      }
    });
  }

  colorTags(selectedTag) {
    if (selectedTag === 'javascript') {
      return 'javascript';
    } else if (selectedTag === 'react') {
      return 'react';
    } else if (selectedTag === 'Agile') {
      return 'agile'
    } else if (selectedTag === 'Vue') {
      return 'vue'
    } else {
      return ''
    }
  }

  showEditBook(e) {
    const getId = e.currentTarget.getAttribute('data-update');
    this.props.history.push(`/book/${getId}`);
    this.setState({
      editBook: false
    });
    const bookId = parseInt(e.currentTarget.getAttribute('data-update'));
    const dataTitle = e.currentTarget.getAttribute('data-title');
    const dataAuthor = e.currentTarget.getAttribute('data-author');
    const dataISBN = e.currentTarget.getAttribute('data-isbn');
    const dataType = e.currentTarget.getAttribute('data-type');
    const dataStatus = e.currentTarget.getAttribute('data-status');
    const dataTags = e.currentTarget.getAttribute('data-tags').split(',');
    this.setState((prevState) => {
      const { newBook } = prevState;
      const editBook = { ...newBook, id: bookId, title: dataTitle, author: dataAuthor, ISBN: dataISBN, type: dataType, status: dataStatus, tags: dataTags }
      return { newBook: editBook }
    });
  }

  render() {
    const { bookItemId, deleteAnimation, popId, deletePopup, haveBooks, bookList, chipData, newBook } = this.state;
    return (
      <div className="App">
        <Header goBackApp={this.goBackApp}/>

        <Switch>
          <Route exact path="/" render={props => (
            <Main showEditBook={this.showEditBook} bookItemId={bookItemId} deleteAnimation={deleteAnimation} popId={popId} toggleDeletePopup={this.toggleDeletePopup} deletePopup={deletePopup} deleteBook={this.confirmDelete} getFilter={this.getFilter} bookList={this.filterBookList()} haveBooks={haveBooks} colorTags={this.colorTags} match={props.match} />
          )} />

          <Route path="/book/:id" render={props => <ViewOrEdit match={props.match} bookList={bookList} editBook={this.state.editBook} changeMe={this.changeMe} goBackApp={this.goBackApp} handleChange={this.handleChange} newBook={this.state.newBook} handleChip={this.handleChip} arrayTags={chipData} createBook={this.createBook} updateBook={this.updateBook} colorTags={this.colorTags} />} />

          <Route path="/add" render={() => (<Form suggestions={bookList} arrayTags={chipData} handleChange={this.handleChange} handleChip={this.handleChip} createBook={this.createBook} newBook={newBook} goBackApp={this.goBackApp} />)} />
        </Switch>

        <Footer />
      </div>
    )
  }
}

export default withRouter(App);