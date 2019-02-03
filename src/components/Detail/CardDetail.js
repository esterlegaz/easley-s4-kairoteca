import React, { Component } from "react"
import Status from './Status';

class CardDetail extends Component {
  render() {
    return (
      <div>
        <Status loan={this.props.loan} handleLoan={this.props.handleLoan} />
        {/* Aquí se importarán las demás   */}
      </div>
    )
  }
}

export default CardDetail;