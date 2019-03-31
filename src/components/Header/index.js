import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Image from "../../images/marvel-logo.png";
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="header-site">
          <div className="logo">
            <Link to="/">
              <img src={Image} alt="Marve Logo" />
            </Link>
          </div>
        </header>
      </Fragment>
    );
  }
}
