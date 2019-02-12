import React, {Component} from "react";


class Edit extends Component {
  render() {
    return (
    
    // FALTA IMPORTAR TODO LO QUE SE USA ACÁ, LO TOMAMOS DE FORM

    
    //     <div className="form__container">
    //     <div className="form__popup">
    //       <form action="/signup" method="post">
    //         <FormControl className="form__textfield" variant="outlined">
    //           <InputLabel htmlFor="outlined-title">Título</InputLabel>
    //           <OutlinedInput className="form__input" label="Título" id="outlined-title" onKeyUp={this.handleChange('title')}/>
    //         </FormControl>

    //         <FormControl className="form__textfield" variant="outlined">
    //           <InputLabel htmlFor="outlined-author">Autor</InputLabel>
    //           <OutlinedInput className="form__input" label="Autor" id="outlined-author" onKeyUp={this.handleChange('author')} />
    //         </FormControl>

    //         <FormControl className="form__textfield" variant="outlined">
    //           <InputLabel htmlFor="outlined-ISBN">ISBN</InputLabel>
    //           <OutlinedInput className="form__input" label="ISBN" id="outlined-ISBN" onKeyUp={this.handleChange('ISBN')} />
    //         </FormControl>

    //         <FormControl className="form__textfield" variant="outlined">
    //           <InputLabel htmlFor="type">Tipo</InputLabel>
    //           <Select className="form__input" native value={this.state.newBook.type} onChange={this.handleChange('type')} input={
    //             <OutlinedInput className="form__input" name="type" id="type" />}>
    //             {types.map(option => {
    //               return (
    //                 <option value={option.value}>{option.label}</option>
    //               )
    //             }
    //             )}
    //           </Select>
    //         </FormControl>

    //         <FormControl className="form__textfield" variant="outlined">
    //             <p>Tags</p>
    //           <Chips className="form__input" label="tags"
    //           value={this.state.newBook.tags} onChange={this.handleChip} suggestions={this.props.arrayTags} id="outlined-tags"/>
    //         </FormControl>

    //         <FormControl className="form__textfield" variant="outlined">
    //           <InputLabel htmlFor="status">Estado</InputLabel>
    //           <Select className="form__input" native value={this.state.newBook.status} onChange={this.handleChange('status')} input={
    //             <OutlinedInput name="status" id="type" />}>
    //             {state.map(option => {
    //               return (
    //                 <option value={option.value}>{option.label}</option>
    //               )
    //             }
    //             )}
    //           </Select>
    //         </FormControl>
    //       </form>
    //       <button className="form__close--btn" onClick={this.props.togglePopup}>Cerrar</button>
    //     </div>
    //   </div>
    );
  }
}

export default Edit;