import React, {Component} from "react";

class Form extends Component {
  render() {
    return (
        <form action="/signup" method="post">
        <label className="form__label" htmlFor="title">Título</label>
        <input className="form__input" id="title" type="text" placeholder="Escribe el título"/>
        <label className="form__label" htmlFor="author">Autor</label>
        <input className="form__input" id="author" type="text" placeholder="Escribe el autor"/>
        <label className="form__label" htmlFor="ISBN">ISBN</label>
        <input className="form__input" id="ISBN" type="text" placeholder="Escribe el ISBN"/>
        <label className="form__label" htmlFor="type">Elige</label>
        <select className="form__select" id="type">
          <option>Digital></option>/option>
          <option>Físico</option>
        </select>
        <label className="form__label" htmlFor="tags">Tags</label>
        <input className="form__input" id="tags" type="text" placeholder="Escribe el título"/>
        </form>
    );
  }
}

export default Form;