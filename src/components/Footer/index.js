import React, { Component, Fragment } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-site">
          <a href="http://marvel.com" target="_blank">
            Data provided by Marvel. &copy; {new Date().getFullYear()} MARVEL
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
