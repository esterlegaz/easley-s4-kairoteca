import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import List from './../Main/List';
import Filter from './../Main/Filter';

class Main extends Component {
  render() {
    return (
        <Fragment>
            <Filter getFilter={this.props.getFilter} />
            <List deleteBook={this.props.deleteBook} bookList={this.props.bookList} haveBooks={this.props.haveBooks} handleLoan={this.props.handleLoan} showPopup={this.props.showPopup} togglePopup={this.props.togglePopup} viewDetails={this.props.viewDetails} detaiId={this.props.detailId} detailPopup={this.props.detailPopup}/>
        </Fragment>
    );
  }
}

Main.propTypes = {
  haveBooks: PropTypes.bool.isRequired,
  handleLoan: PropTypes.func.isRequired,
  bookList: PropTypes.array.isRequired
};

export default Main;