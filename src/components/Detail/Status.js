import React, { Component } from "react"

class Status extends Component {
  render() {
    return (
      <div className="card__loan" onClick={this.props.handleLoan}>
      {this.props.loan}
      </div>
    )
  }
}

export default Status;