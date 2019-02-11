import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Chips from 'react-chips';

const types = [
  {
    value: 'digital',
    label: 'digital',
  },
  {
    value: 'físico',
    label: 'físico',
  },
]

const state = [
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
]

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: [],
      newBook:{
        title:'',
        author:'',
        ISBN:'',
        type:'',
        tags:[],
        status:''
      },
    }
    this.titleRef = React.createRef();
    this.authorRef = React.createRef();
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
    this.handleChangeISBN = this.handleChangeISBN.bind(this);
  }

  handleChip = chips => {
    this.setState({ chips });
  }

  handleChange = field => event => {
    const {newBook} = this.state;
    const addBook = {...newBook, [field]: event.currentTarget.value}
    this.setState({
       newBook: addBook
    })
  }


  handleChangeTitle(e){
    const {newBook} = this.state;
    const addBook = {...newBook, title: e.currentTarget.value}
    this.setState({
      newBook: addBook
    })
  }

  handleChangeAuthor(e){
    const {newBook} = this.state;
    const addBook = {...newBook, author: e.currentTarget.value}
    this.setState({
      newBook: addBook
    })
  }

  handleChangeISBN(e){
    const {newBook} = this.state;
    const addBook = {...newBook, ISBN: e.currentTarget.value}
    this.setState({
      newBook: addBook
    })
  }

  render() {
    return (
      <div className="form__container">
        <div className="popup">
          <form action="/signup" method="post">
            <FormControl className="form__textfield" variant="outlined">
              <InputLabel ref={this.titleRef} htmlFor="outlined-title">Título</InputLabel>
              <OutlinedInput label="Título" id="outlined-title" onKeyUp={this.handleChange('title')} labelWidth={this.titleRef ? this.titleRef.offsetWidth : 0} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <InputLabel ref={this.titleRef} htmlFor="outlined-author">Autor</InputLabel>
              <OutlinedInput label="Autor" id="outlined-author" onKeyUp={this.handleChange('author')} labelWidth={this.authorRef ? this.authorRef.offsetWidth : 0} />
            </FormControl>

            <FormControl className="form__textfield" variant="outlined">
              <InputLabel ref={this.ISBNRef} htmlFor="outlined-ISBN">ISBN</InputLabel>
              <OutlinedInput label="ISBN" id="outlined-ISBN" onKeyUp={this.handleChangeISBN} labelWidth={this.ISBNRef ? this.ISBNRef.offsetWidth : 0} />
            </FormControl>
            
            <TextField id="outlined-select-types" select label="Tipo" className="form__textfield" /*value={this.state.currency} onChange={this.handleChange('currency')} */ margin="normal" variant="outlined">
              {types.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div>
              <Chips value={this.state.chips} onChange={this.handleChip} suggestions={this.props.arrayTags} />
            </div>

            <TextField id="outlined-select-state" select label="Estado" className="form__textfield" /*value={this.state.currency} onChange={this.handleChange('currency')} */ margin="normal" variant="outlined">
              {state.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

          </form>
          <button className="close" onClick={this.props.togglePopup}> Cerrar </button>
        </div>
      </div>
    );
  }
}

export default Form;