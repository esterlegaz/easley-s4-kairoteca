import React, { Component } from "react";
import PropTypes from "prop-types";
import CardDetail from './../Detail/CardDetail';
import {Link} from 'react-router-dom';

class List extends Component {
  render() {
    if (this.props.haveBooks && this.props.bookList.length > 0) {
      return (
        <div className="book__wrapper">
          <ul className="book__container">
            {this.props.bookList.map(item => {
              return (
                <li key={item.id} className="book__list">
                  <Link to={`./book/${item.id}`} className="book__list-link">
                    <CardDetail deleteBook={this.props.deleteBook} item={item} handleLoan={this.props.handleLoan} />
                  </Link>
                </li> 
              )
            })}
          </ul>
        </div>
      );
    } else {
      return <p className="book__no-data">No hay datos</p>
    }
  }
}

List.propTypes = {
  haveBooks: PropTypes.bool.isRequired,
  handleLoan: PropTypes.func.isRequired,
  bookList: PropTypes.array.isRequired
};

export default List;