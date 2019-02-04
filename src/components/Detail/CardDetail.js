import React, { Component } from "react";
import Status from './Status';
import Icons from './Icons';

class CardDetail extends Component {
  render() {
    const {author, title, tags, status} = this.props.item;
    return (
      <div>
        <Status status={status} handleLoan={this.props.handleLoan} />
        <Icons />
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