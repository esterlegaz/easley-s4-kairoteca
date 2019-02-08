import React, { Component } from "react";
import PropTypes from "prop-types";
import DeletePopup from './DeletePopup';

class Icons extends Component {
  render() {
    return (
      <div className="icons__wrapper">
        <button className="card__detail--icons icons__edit" data-id={this.props.id} onClick={this.props.deleteBook}></button>
        <button className="card__detail--icons icons__delete" onClick={this.props.toggleDeletePopup}></button>
        {this.props.deletePopup ? 
          <DeletePopup id={this.props.id} deleteBook={this.props.deleteBook} toggleDeletePopup={this.props.toggleDeletePopup} />
          : null
        }
      </div>
    )
  }
}

Icons.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Icons;