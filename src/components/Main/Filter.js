import React, {Component} from "react";

class Filter extends Component {
  render() {
    return (
        <div className="mdc-text-field mdc-text-field--outlined">
            <input type="text" id="filter" placeholder="Buscar" onKeyUp={this.props.getFilter} className="mdc-text-field__input"/>
                <div className="mdc-notched-outline">
                    <div className="mdc-notched-outline__leading"></div>
                    <div className="mdc-notched-outline__notch">
                        <label htmlFor="filter" className="mdc-floating-label"></label>
                    </div>
                    <div className="mdc-notched-outline__trailing"></div>
                </div>
        </div>
    );
  }
}

export default Filter;