import React, { Component } from "react";
import PropTypes from "prop-types";
import Status from './Status';
import Icons from './Icons';
import {Link} from 'react-router-dom';


class CardDetail extends Component {

  colorTags(selectedTag) { 
    if(selectedTag === 'javascript') {
      return 'javascript';
    } else if (selectedTag === 'react') {
      return 'react';
    } else if(selectedTag === 'Agile') {
      return 'agile'
    } else if(selectedTag === 'Vue') {
      return 'vue'
    } else if(selectedTag === 'programming') {
      return 'programming'
    } else if(selectedTag === 'OOP') {
      return 'oop'
    } else if(selectedTag === 'Design patterns') {
      return 'design-patterns'
    } else if(selectedTag === 'Reactive programing') {
      return 'reactive-programming'
    } else if(selectedTag === 'Web components') {
      return 'web-components'
    } else if(selectedTag === 'GIT') {
      return 'git'
    } else if(selectedTag === 'Testing') {
      return 'testing'
    } else if(selectedTag === 'SOLID') {
      return 'solid'
    } else {
      return ''
    }
  }

  render() {
    const {toggleDeletePopup, deletePopup, deleteBook, popId, item, bookItemId} = this.props;
    const { author, title, tags, status} = this.props.item;

    return (
      <div>
        <div className="book__information">
          <Status status={status} />
          <Icons bookItemId={bookItemId} popId={popId} toggleDeletePopup={toggleDeletePopup} deletePopup={deletePopup} id={item.id} deleteBook={deleteBook} />
        </div>
        <div className="book__detail">
          <Link to={`./book/${item.id}`} className="book__list-link">
            <h2 className="book__title"  data-titleid={item.id}>{title}</h2>
          </Link>
          <h3 className="book__author">{author}</h3>
          <ul className="book__tags--list">
            {tags.map((tag, index) => {
              return (
                <li className={`book__tags--item ${this.colorTags(tag)}`} key={index}>{tag}</li>
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