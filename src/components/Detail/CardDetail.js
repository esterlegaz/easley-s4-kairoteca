import React, { Component } from "react"
import Status from './Status';

class CardDetail extends Component {
  render() {
    const {author, title, tags} = this.props.item;
    return (
      <div>
        <Status loan={this.props.loan} handleLoan={this.props.handleLoan} />
        <h2 className="book__title">{title}</h2>
        <h3 className="book__author">{author}</h3>
        <ul className="book__tags--list">
          {tags.map((tag, index) => {
            return (
              <li className="book__tags--item" key={index}>{tag}</li>
            )
          })}
        </ul>

      </div>
    )
  }
}

export default CardDetail;