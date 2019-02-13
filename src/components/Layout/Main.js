import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import List from './../Main/List';
import Filter from './../Main/Filter';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Filter getFilter={this.props.getFilter} />
        <div className="prueba delete__book">prueba</div>
        <div className="main__addbook--container">
          <button className="main__addbook--btn" onClick={this.props.togglePopup}>Añadir libro</button>
        </div>
        <List popId={this.props.popId} toggleDeletePopup={this.props.toggleDeletePopup}  deleteBook={this.props.deleteBook} bookList={this.props.bookList} haveBooks={this.props.haveBooks} statePopUp={this.props.statePopUp}/>
      </Fragment>
    );
  }
}

Main.propTypes = {
  getFilter: PropTypes.func.isRequired,
  toggleDeletePopup: PropTypes.func.isRequired,
  deletePopup: PropTypes.bool.isRequired,
  deleteBook: PropTypes.func.isRequired,
  haveBooks: PropTypes.bool.isRequired,
  bookList: PropTypes.array.isRequired
};

export default Main;