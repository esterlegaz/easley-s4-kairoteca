import React, { Component } from "react";
import CardDetail from './Detail/CardDetail';

class List extends Component {
  render() {
    return (
      <div className="book__wrapper">
        <ul className="book__container">
          {this.props.bookList.map(item => {
            return (
              <li key={item.id} className="book__list">
                <CardDetail title={item.title} author={item.author} tags={item.tags} status={item.status} handleLoan={this.props.handleLoan}/>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default List;