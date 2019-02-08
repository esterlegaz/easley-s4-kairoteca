import React, { Component } from "react";

class DeletePopup extends Component {
    render() {
        return (
            <div className="delete__popup">
                <div className="delete__popup--content">
                    <div>¿Seguro que quieres eliminar este libro?</div>
                    <button data-id={this.props.id} onClick={this.props.deleteBook}>Sí</button>
                    <button onClick={this.props.toggleDeletePopup}>No</button>
                </div>
            </div>
        )
    }
}

export default DeletePopup;

