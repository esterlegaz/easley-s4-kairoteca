import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import List from './List';

class Main extends Component {
  render() {
    return (
        <Fragment>
            <List bookList={this.props.bookList} haveBooks={this.props.haveBooks} handleLoan={this.props.handleLoan}/>
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