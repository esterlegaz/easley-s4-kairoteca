import React, { Component } from "react";
import PropTypes from "prop-types";

class Status extends Component {
  render() {
    return (
      <div className="book__status">
      {this.props.status}
      </div>
    )
  }
}

Status.propTypes = {
  status: PropTypes.string.isRequired
};

export default Status;