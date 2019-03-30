import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

// withRouter pour naviguer sur la même page a l'aide de la méthode this.props.history.push
// withRouter s'utilise sur le composant enfant du container

export default withRouter(
  class Pagination extends Component {
    getPreviousPage = () => {
      this.props.history.push(
        `/${Number(this.props.searchParams.offset) - 25}/10`
      );
    };

    getNextPage = () => {
      this.props.searchParams.offset
        ? this.props.history.push(
            `/${Number(this.props.searchParams.offset) + 25}/10`
          )
        : this.props.history.push(`/${25}/10`);
    };
    render() {
      // console.log(this.props);
      return (
        <Fragment>
          <div className="pagination">
            {this.props.searchParams.offset < 25 ||
            !this.props.searchParams.offset ? (
              ""
            ) : (
              <button className="btn btn-prev" onClick={this.getPreviousPage}>
                Prev
              </button>
            )}
            <button className="btn btn-next" onClick={this.getNextPage}>
              Next
            </button>
          </div>
        </Fragment>
      );
    }
  }
);
