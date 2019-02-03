import React, { Component } from "react"
import Status from './Status';

class CardDetail extends Component {
  render() {
    // console.log(this.props.tags)
    return (
      <div>
        <Status loan={this.props.loan} handleLoan={this.props.handleLoan} />
        <h2 className="book__title">{this.props.title}</h2>
        <h3 className="book__author">{this.props.author}</h3>
        <p>{this.props.tags}</p>
        {/* <ul className="book__tags--list">
          {this.props.tags.map((tag, index) => {
            return (
              <li className="book__tags--item" key={index}>{tag}</li>
            )
          })}
        </ul> */}

      </div>
    )
  }
}

export default CardDetail;