import React, { Component } from "react";
import PropTypes from "prop-types";

class DeletePopup extends Component {
  render() {
    const { id, deleteBook, toggleDeletePopup } = this.props;

    return (
      <div className="delete__popup">
        <div className="delete__popup--content">
          <div className="delete__pop-up--title">¿Seguro que quieres eliminar este libro?</div>
          <div className="delete__pop-up--btn-container">
            <button className="delete__pop-up--btn" data-id={id} onClick={deleteBook}>Sí</button>
            <button className="delete__pop-up--btn" onClick={toggleDeletePopup}>No</button>
          </div>
        </div>
      </div>
    )
  }
}

DeletePopup.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  toggleDeletePopup: PropTypes.func.isRequired
};

export default DeletePopup;

