import React, { Component } from "react";
import PropTypes from "prop-types";

class Status extends Component {
  render() {
    return (
      <div className="book__status" onClick={this.props.handleLoan}>
      {this.props.status}
      </div>
    )
  }
}

Status.propTypes = {
  handleLoan: PropTypes.func.isRequired
};

export default Status;