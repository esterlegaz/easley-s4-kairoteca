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
      chipData: []
    };

    this.paintList = this.paintList.bind(this);
    this.getFilter = this.getFilter.bind(this);
    this.filterBookList = this.filterBookList.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.getTags = this.getTags.bind(this);
  }

  componentDidMount() {
    this.paintList();
  }

  handleLoan() {
    console.log('Funciono');
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
      .then(coso => {
        const books = coso.data.map(item => {
          return item.tags
        });
        this.setState({
          chipData: books
        })
      })
    // if (tag !== '')
    // getTags = [...getTags, tag]

    // const books = this.state.bookList.map((book) => {
//aqui recorre cada objeto 
// va a los tags los recorre y los guarda
//pasa al siguiente objeto recorre los tags, mira si son diferentes y si si, los añade, si no, no los añade
//asi con todos y lo guarda en un array final

  //     const tags = book.tags.map(tag => {
  //     return tag
  //   })

  //   this.setState({
  //     chipData: tags
  //   })

  // })
};

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.getTags}>SUPUTAMADRE</button>
        <Main getFilter={this.getFilter} bookList={this.filterBookList()} haveBooks={this.state.haveBooks} handleLoan={this.handleLoan} togglePopup={this.togglePopup} />

        {this.state.showPopup ?
          <Form togglePopup={this.togglePopup} suggestions={this.state.bookList} />
          : null
        }

        <Footer />
      </div>
    )
  }
}

export default App;