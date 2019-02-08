import React, { Component } from "react";
import PropTypes from "prop-types";
import Status from './Status';
import Icons from './Icons';

class CardDetail extends Component {
  render() {
    const { author, title, tags, status } = this.props.item;
    return (
      <div>
        <div className="book__information">
          <Status status={status} handleLoan={this.props.handleLoan} />
          <Icons toggleDeletePopup = {this.props.toggleDeletePopup} deletePopup={this.props.deletePopup} id={this.props.item.id} deleteBook={this.props.deleteBook} />
        </div>
        <div className="book__detail">
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
      </div>
    )
  }
}

CardDetail.propTypes = {
  handleLoan: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export default CardDetail;