import React, { Component } from "react"
import "./App.scss";
import api from "./api";
import List from "./components/List";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };

    this.paintList = this.paintList.bind(this);
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
          bookList: books
        })
      })
  }


  render() {

    return (
      <div className="App">
        <List bookList={this.state.bookList} handleLoan={this.handleLoan}/>
      </div>
    )
  }
}

export default App;