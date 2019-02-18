import React, { Component } from "react";
import PropTypes from "prop-types";

class Status extends Component {
  render() {
    const { status } = this.props;

    return (
      <div className="book__status">
        {status}
      </div>
    )
  }
}

Status.propTypes = {
  status: PropTypes.string.isRequired
};

export default Status;