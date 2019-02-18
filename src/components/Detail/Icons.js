import React, { Component } from "react";
import PropTypes from "prop-types";
import DeletePopup from './DeletePopup';

class Icons extends Component {
  showDeletePopup(isVisible, bookId, popId) {
    if (isVisible === true && popId === bookId) {
      return (
        <DeletePopup id={bookId} deleteBook={this.props.deleteBook} toggleDeletePopup={this.props.toggleDeletePopup} />
      )
    }
    else {
      return null
    }
  }

  render() {
    const { showEditBook, id, popId, deletePopup, toggleDeletePopup, bookItemId } = this.props;
    const { author, title, ISBN, type, status } = this.props.item;
    return (
      <div className="icons__wrapper">
        <button className="card__detail--icons icons__edit" data-update={id} data-title={title} data-author={author} data-isbn={ISBN} data-type={type} data-status={status} data-edit={id} onClick={showEditBook} ></button>
        <button className="card__detail--icons icons__delete" data-bookitem={bookItemId} data-popid={id} onClick={toggleDeletePopup}></button>
        {this.showDeletePopup(deletePopup, id, popId)}
      </div>
    )
  }
}

Icons.propTypes = {
  toggleDeletePopup: PropTypes.func.isRequired,
  deletePopup: PropTypes.bool.isRequired,
  deleteBook: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  showEditBook: PropTypes.func.isRequired,
  bookItemId: PropTypes.string.isRequired,
};

export default Icons;