import React, { Component } from "react";
import PropTypes from "prop-types";
import CardDetail from './../Detail/CardDetail';

class List extends Component {
  applyClass(itemId){
    const {bookItemId, deleteAnimation} = this.props;
    if (itemId === bookItemId){
      return deleteAnimation;
    } else {
      return '';
    }
  }

  render() {
    const {toggleDeletePopup, deletePopup, deleteBook, haveBooks, bookList, popId, showEditBook} = this.props;

    if (haveBooks && bookList.length > 0) {
      return (
        <div className="book__wrapper">
          <ul className="book__container">
            {bookList.map(item => {
              const bookItemId = `book-${item.id}`;
              return (
                <li key={item.id} id={bookItemId} className={`book__list ${this.applyClass(bookItemId)}`}>
                  <CardDetail showEditBook={showEditBook} bookItemId={bookItemId} popId={popId} toggleDeletePopup={toggleDeletePopup} deletePopup={deletePopup} deleteBook={deleteBook} item={item} />
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