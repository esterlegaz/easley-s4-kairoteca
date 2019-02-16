import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Chips from 'react-chips';
import Chip from '@material-ui/core/Chip';

const types = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Digital',
    label: 'Digital',
  },
  {
    value: 'Físico',
    label: 'Físico',
  },
]

const state = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Disponible',
    label: 'Disponible',
  },
  {
    value: 'Prestado',
    label: 'Prestado',
  },
  {
    value: 'Pendiente',
    label: 'Pendiente',
  },
];

class Form extends Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }
  goBack(){
    this.props.history.push('/');
  }
  render() {
    const {handleChange, newBook, handleChip, arrayTags, createBook} = this.props;

    return (
      <Fragment>
          <form className="form__container" action="/signup" method="post">
            <FormControl className="form__textfield" variant="outlined" required>
              <InputLabel htmlFor="outlined-title">Título</InputLabel>
              <OutlinedInput id="outlined-title" className="form__input" label="Título" onKeyUp={handleChange} inputProps={{ "data-field": "title" }} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined" required>
              <InputLabel htmlFor="outlined-author">Autor</InputLabel>
              <OutlinedInput className="form__input" label="Autor" id="outlined-author" onKeyUp={handleChange} inputProps={{ "data-field": "author" }} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined" required>
              <InputLabel htmlFor="outlined-ISBN">ISBN</InputLabel>
              <OutlinedInput className="form__input" label="ISBN" id="outlined-ISBN" onKeyUp={handleChange} inputProps={{ "data-field": "ISBN" }} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined" required>
              <InputLabel htmlFor="type">Tipo</InputLabel>
              <Select className="form__input" native value={newBook.type} onChange={handleChange} input={
                <OutlinedInput className="form__input" name="type" id="type" inputProps={{ "data-field": "type" }} />}>
                {types.map(option => {
                  return (
                    <option value={option.value}>{option.label}</option>
                  )
                }
                )}
              </Select>
            </FormControl>

            <FormControl className="form__textfield" variant="outlined" required>
              {/* <label class="custom-label">Tags <span>*</span></label> */}
              <Chips className="form__input" label="tags"
                value={newBook.tags} onChange={handleChip} suggestions={arrayTags} id="outlined-tags" placeholder="Tags *"/>
            </FormControl>

            <FormControl className="form__textfield" variant="outlined" required>
              <InputLabel htmlFor="status">Estado</InputLabel>
              <Select className="form__input" native value={newBook.status} onChange={handleChange} input={
                <OutlinedInput name="status" id="status" inputProps={{ "data-field": "status" }} />}>
                {state.map(option => {
                  return (
                    <option value={option.value}>{option.label}</option>
                  )
                }
                )}
              </Select>
            </FormControl>
          </form>
          <div className="btn__container">
            <input type="submit" value="Enviar" className="form__btn" onClick={createBook} />
            <button className="form__btn form__btn--close" onClick={this.goBack} >Cerrar</button>
          </div>
    </Fragment>

    );
  }
}

Form.propTypes = {
  createBook: PropTypes.func.isRequired,
  newBook: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChip: PropTypes.func.isRequired,
  arrayTags: PropTypes.array.isRequired
};

export default withRouter(Form);