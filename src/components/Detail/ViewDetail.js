import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import PropTypes from "prop-types";

class ViewDetail extends Component {
  render() {
    const bookId = this.props.match.params.id;
    const { bookList, colorTags, goBackApp, changeMe } = this.props;

    if (bookList.length > 0 && bookId <= bookList.length) {
      const myBook = bookList[bookId - 1];
      const { author, title, tags, status, ISBN, type } = myBook;
      return (
        <Fragment>
          <div className="wrapper__title__viewDetail">
            <div className="titleIcon__container">
              <div className="left__arrow" onClick={goBackApp}></div>
              <div className="component__title">Detalle de {title}</div>
            </div>
            <div className="btn__container__viewDetail">
              <button className="form__btn" data-update={bookId} data-title={title} data-author={author} data-isbn={ISBN} data-type={type} data-status={status} data-tags={[tags]} onClick={changeMe} >Editar</button>
              <button className="form__btn form__btn--close" onClick={goBackApp} >Cerrar</button>
            </div>
          </div>
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
                        <li className={`list__tags--item ${colorTags(tag)}`} key={index}>{tag}</li>
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

ViewDetail.propTypes = {
  bookList: PropTypes.array.isRequired,
  colorTags: PropTypes.func.isRequired,
  goBackApp: PropTypes.func.isRequired,
  changeMe: PropTypes.func.isRequired
};

export default ViewDetail;

