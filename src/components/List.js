import React, { Component } from "react";
import CardDetail from './Detail/CardDetail';

class List extends Component {
  render() {
    if (this.props.haveBooks && this.props.bookList.length > 0) {
      return (
        <div className="book__wrapper">
          <ul className="book__container">
            {this.props.bookList.map(item => {
              return (
                <li key={item.id} className="book__list">
                  <CardDetail item={item} handleLoan={this.props.handleLoan}/>
                </li>
              )
            })}
          </ul>
        </div>
      );
    } else {
      return <p>No hay datos</p>
    }
    
  }
}

export default List;