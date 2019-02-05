import React, {Component, Fragment} from "react";
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

export default Main;