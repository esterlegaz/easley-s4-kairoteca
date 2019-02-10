import React, { Component } from "react";
import PropTypes from "prop-types";


class ViewDetail extends Component {
  render() {
    const {author, title, tags, status, ISBN, type, id} = this.props.item;
     return (
      <ul className="list__view-details">
        <li className="list__item--title">
          <h2 className="list__item--title">Título</h2>
          <div className="list__item--content" data-detailtitleid={id}>{title}</div>
        </li>
        <li className="list__item--title">
          <h2 className="list__item--title">Autor</h2>
          <div className="list__item--content">{author}</div>
        </li>
        <li className="list__item--title">
          <h2 className="list__item--title">ISBN</h2>
          <div className="list__item--content">{ISBN}</div>
        </li>
        <li>
          <h2 className="list__item--title">Tipo</h2>
          <div className="list__item--content">{type}</div>
        </li>
        <li className="list__item--title">
          <h2 className="list__item--title">Tags</h2>
          <div className="list__item--content">
            <ul className="list__tags--list">
              {tags.map((tag, index) => {
                return (
                  <li className="list__tags--item" key={index}>{tag}</li>
                )
              })}
            </ul>
          </div>
        </li>
        <li className="list__item--title">
          <h2 className="list__item--title">Estado</h2>
          <div className="list__item--content">{status}</div>
        </li>
      </ul>
    )
  }
};

ViewDetail.propTypes = {
  item: PropTypes.object.isRequired
};

export default ViewDetail;

