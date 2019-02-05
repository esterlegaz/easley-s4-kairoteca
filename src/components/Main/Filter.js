import React, {Component} from "react";

class Filter extends Component {
  render() {
    return (
        <label htmlFor="filter">
            <input id="filter" type="text" placeholder="Buscar" onKeyUp={this.props.getFilter}/>
        </label>
    );
  }
}

export default Filter;