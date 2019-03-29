import React, { Component, Fragment } from "react";
import Image from "../../images/marvel-logo.png";
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="header-site">
          <div className="logo">
            <img src={Image} alt="Marve Logo" />
          </div>
        </header>
      </Fragment>
    );
  }
}
