import React, { Component } from "react"

class Status extends Component {
  render() {
    return (
      <div className="book__status" onClick={this.props.handleLoan}>
      {this.props.status}
      </div>
    )
  }
}

export default Status;