import React, { Component } from "react";
import PropTypes from "prop-types";
import Status from './Status';
import Icons from './Icons';
import {Link} from 'react-router-dom';


class CardDetail extends Component {

  render() {
    const {toggleDeletePopup, deletePopup, deleteBook, popId, item, bookItemId, showEditBook} = this.props;
    const { author, title, tags, status} = this.props.item;

    return (
      <div>
        <div className="book__information">
          <Status status={status} />
          <Icons showEditBook={showEditBook} bookItemId={bookItemId} popId={popId} toggleDeletePopup={toggleDeletePopup} deletePopup={deletePopup} id={item.id} deleteBook={deleteBook} />
        </div>
        <div className="book__detail">
          <Link to={`./book/${item.id}`} className="book__list-link">
            <h2 className="book__title" data-titleid={item.id}>{title}</h2>
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