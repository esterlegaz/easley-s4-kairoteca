import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import List from './../Main/List';
import Filter from './../Main/Filter';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Filter getFilter={this.props.getFilter} />
        <div className="main__addbook--container">
          <Link to={'./add'}><button className="main__addbook--btn">Añadir libro</button></Link>
        </div>
        <List popId={this.props.popId} toggleDeletePopup={this.props.toggleDeletePopup} deletePopup={this.props.deletePopup} deleteBook={this.props.deleteBook} bookList={this.props.bookList} haveBooks={this.props.haveBooks} />
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