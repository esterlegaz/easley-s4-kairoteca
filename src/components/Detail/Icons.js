import React, { Component } from "react";
import PropTypes from "prop-types";

class Icons extends Component {
  render() {
    return (
      <div className="icons__wrapper">
        <button className="card_detail_icons icons__edit"></button>
        <button className="card_detail_icons icons__delete" onClick={this.props.deleteBook} data-id={this.props.id}></button>
      </div>
    )
  }
}

Icons.propTypes = {
  deleteBook: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default Icons;