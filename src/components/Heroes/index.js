import React, { Component, Fragment } from "react";
import "./style.css";

export default class Heroes extends Component {
  render() {
    const { name, thumbnail, i } = this.props;
    return (
      <Fragment>
        <div className="heroes-list-card-img">
          <img src={thumbnail} alt={name} />
        </div>
        <div className="heroes-list-card-name">
          <div className="heroes-list-card-name-text">{name}</div>
        </div>
      </Fragment>
    );
  }
}
