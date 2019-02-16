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
    return (
      <div className="icons__wrapper">
        <button className="card__detail--icons icons__edit" data-edit={this.props.id} onClick={this.props.showEditBook}></button>
        <button className="card__detail--icons icons__delete" data-bookitem={this.props.bookItemId} data-popid={this.props.id} onClick={this.props.toggleDeletePopup}></button>
        {this.showDeletePopup(this.props.deletePopup, this.props.id, this.props.popId)}
      </div>
    )
  }
}

Icons.propTypes = {
  toggleDeletePopup: PropTypes.func.isRequired,
  deletePopup: PropTypes.bool.isRequired,
  deleteBook: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Icons;