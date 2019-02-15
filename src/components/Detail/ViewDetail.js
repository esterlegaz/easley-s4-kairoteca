import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

class ViewDetail extends Component {
  render() {
    const { bookList } = this.props;
    const bookId = this.props.match.params.id;

    if (bookList.length > 0 && bookId <= bookList.length) {
      const myBook = bookList[bookId - 1];
      const { author, title, tags, status, ISBN, type } = myBook;

      return (
        <Fragment>
          <div className="detail__wrapper">
            <ul className="list__view-details">
              <li className="list__item">
                <InputLabel id="list__item--title" htmlFor="standard-read-only-input">Título</InputLabel>
                <TextField className="list__item--content" id="standard-read-only-input" defaultValue={title} margin="normal" InputProps={{
                  readOnly: true,
                }} />
              </li>
              <li className="list__item">
                <InputLabel id="list__item--title" htmlFor="standard-read-only-input">Autor</InputLabel>
                <TextField className="list__item--content" id="standard-read-only-input" defaultValue={author} margin="normal" InputProps={{
                  readOnly: true,
                }} />
              </li>
              <li className="list__item">
                <InputLabel id="list__item--title" htmlFor="standard-read-only-input">ISBN</InputLabel>
                <TextField className="list__item--content" id="standard-read-only-input" defaultValue={ISBN} margin="normal" InputProps={{
                  readOnly: true,
                }} />
              </li>
              <li className="list__item">
                <InputLabel id="list__item--title" htmlFor="standard-read-only-input">Tipo</InputLabel>
                <TextField className="list__item--content" id="standard-read-only-input" defaultValue={type} margin="normal" InputProps={{
                  readOnly: true,
                }} />
              </li>
              <li className="list__item">
                <h2 id="list__item--title">Tags</h2>
                <div className="list__item--content-tags">
                  <ul className="list__tags--list">
                    {tags.map((tag, index) => {
                      return (
                        <li className="list__tags--item" key={index}>{tag}</li>
                      )
                    })}
                  </ul>
                </div>
              </li>
              <li className="list__item">
                <InputLabel id="list__item--title" htmlFor="standard-read-only-input">Estado</InputLabel>
                <TextField className="list__item--content" id="standard-read-only-input" defaultValue={status} margin="normal" InputProps={{
                  readOnly: true,
                }} />
              </li>
            </ul>
            <Link className="link__close form__btn" to="/">Cerrar</Link>
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <p className="book__no-data">Sin datos</p>
          <Link className="link__close" to="/">Atrás</Link>
        </Fragment>
      );
    }
  };
}

export default ViewDetail;

