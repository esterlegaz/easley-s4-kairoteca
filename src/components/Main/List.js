import React, { Component } from "react";
import PropTypes from "prop-types";
import CardDetail from './../Detail/CardDetail';

class List extends Component {
  render() {
    if (this.props.haveBooks && this.props.bookList.length > 0) {
      return (
        <div className="book__wrapper">
          <ul className="book__container">
            {this.props.bookList.map(item => {
              return (
                <li key={item.id} className={`book__list ${this.props.deleteAnimation}`}>
                  <CardDetail popId={this.props.popId} toggleDeletePopup={this.props.toggleDeletePopup} deletePopup={this.props.deletePopup} deleteBook={this.props.deleteBook} item={item} />
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
  toggleDeletePopup: PropTypes.func.isRequired,
  deletePopup: PropTypes.bool.isRequired,
  deleteBook: PropTypes.func.isRequired,
  haveBooks: PropTypes.bool.isRequired,
  bookList: PropTypes.array.isRequired
};

export default List;