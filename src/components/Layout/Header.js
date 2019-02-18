import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const {goBackApp} = this.props;
    return (
      <Fragment>
        <header className="header" onClick={goBackApp}>kairoteca</header>
      </Fragment>
    )
  }
}

Header.propTypes = {
  goBackApp: PropTypes.func.isRequired
}

export default Header;