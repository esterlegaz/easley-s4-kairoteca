import React, { Component } from "react";
import PropTypes from "prop-types";
import Status from './Status';
import Icons from './Icons';
import ViewDetail from "./ViewDetail";
import {Link} from 'react-router-dom';


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
    const { author, title, tags, status} = this.props.item;

    return (
      <div>
        <div className="book__information">
          <Status status={status} />
          <Icons popId={this.props.popId} toggleDeletePopup={this.props.toggleDeletePopup} deletePopup={this.props.deletePopup} id={this.props.item.id} deleteBook={this.props.deleteBook} />
        </div>
        <div className="book__detail">
          <Link to={`./book/${this.props.item.id}`} className="book__list-link">
            <h2 className="book__title"  data-titleid={this.props.item.id}>{title}</h2>
          </Link>
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
  toggleDeletePopup: PropTypes.func.isRequired,
  deletePopup: PropTypes.bool.isRequired,
  deleteBook: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

export default CardDetail;