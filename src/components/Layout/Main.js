import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import List from './../Main/List';
import Filter from './../Main/Filter';

class Main extends Component {
  render() {
    return (
        <Fragment>
            <Filter getFilter={this.props.getFilter} />
<<<<<<< HEAD
            <button onClick={this.props.togglePopup}> Añadir libro </button>
            <List bookList={this.props.bookList} haveBooks={this.props.haveBooks} handleLoan={this.props.handleLoan}/>
        </Fragment>   
=======
            <List popId={this.props.popId} toggleDeletePopup={this.props.toggleDeletePopup} deletePopup={this.props.deletePopup} deleteBook={this.props.deleteBook} bookList={this.props.bookList} haveBooks={this.props.haveBooks} handleLoan={this.props.handleLoan}/>
        </Fragment>
>>>>>>> 70ba1b72c7d1f4b38c693e4c5885d320487b9944
    );
  }
}

Main.propTypes = {
  getFilter: PropTypes.func.isRequired,
  toggleDeletePopup: PropTypes.func.isRequired,
  deletePopup: PropTypes.bool.isRequired,
  deleteBook: PropTypes.func.isRequired,
  haveBooks: PropTypes.bool.isRequired,
  handleLoan: PropTypes.func.isRequired,
  bookList: PropTypes.array.isRequired
};

export default Main;