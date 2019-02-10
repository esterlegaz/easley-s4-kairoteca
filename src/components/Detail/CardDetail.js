import React, { Component } from "react";
import PropTypes from "prop-types";
import Status from './Status';
import Icons from './Icons';
import ViewDetail from "./ViewDetail";

class CardDetail extends Component {

  showDetailPopup(isVisible, bookId, popId){
    if (isVisible === true && popId===bookId){
      return (
        <ViewDetail item={this.props.item} tag={this.tag} togglePopup={this.props.togglePopup} />
      )
    } else{
      return null
    }
  }
  render() {
    const { author, title, tags, status } = this.props.item;

    return (
      <div>
        <div className="book__information">
          <Status status={status} handleLoan={this.props.handleLoan} />
          <Icons id={this.props.item.id} deleteBook={this.props.deleteBook} />
        </div>
        <div className="book__detail">
          <h2 className="book__title" onClick={this.props.viewDetails} data-titleid={this.props.item.id}>{title}</h2>
          <h3 className="book__author">{author}</h3>
          <ul className="book__tags--list">
            {tags.map((tag, index) => {
              return (
                <li className="book__tags--item" key={index}>{tag}</li>
              )
            })}
          </ul>
        </div>
         {this.showDetailPopup(this.props.detailPopup, this.props.item.id, this.props.detailId)}
      </div>
    )
  }
}

CardDetail.propTypes = {
  handleLoan: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export default CardDetail;