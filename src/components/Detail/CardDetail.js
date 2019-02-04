import React, { Component } from "react"
import Status from './Status';

class CardDetail extends Component {
  render() {
    return (
      <div>
        <Status status={this.props.status} handleLoan={this.props.handleLoan} />
        <h2 className="book__title">{this.props.title}</h2>
        <h3 className="book__author">{this.props.author}</h3>
        <ul className="book__tags--list">
          {this.props.tags.map((tag, tagId) => {
            return (
              <li className="book__tags--item" key={tagId}>{tag}</li>
            )
          })}
        </ul>

      </div>
    )
  }
}

export default CardDetail;