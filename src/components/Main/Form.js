import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Form extends Component {
  render() {
    return (
        <form action="/signup" method="post">
            <TextField id="outlined-title" label="Título" className='form__textfield' /* value={this.state.name}  onChange={this.handleChange("name")}*/ margin="normal" variant="outlined" />

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