import React, { Component, Fragment } from "react";
import axios from "axios";
import "./style.css";

const ITEMS_PER_PAGE = 25;

export default class Pagination extends Component {
  updatePage = () => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?apikey=f7c8105afcefcef9bb285687ff296fbf",
        {
          params: this.props.searchParams
        }
      )
      .then(response => {
        this.props.updateHeroesList(response.data.data.results);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  getPreviousPage = () => {
    if (this.props.searchParams.offset <= 0) {
      return;
    }
    // page 1: offset 0 éléments, page 2: offset 25 éléments
    const newOffsetValue = this.props.searchParams.offset - ITEMS_PER_PAGE;
    this.props.updateSearchParams({ offset: newOffsetValue }, this.updatePage);
  };

  getNextPage = () => {
    //   page 1: offset 0 éléments, page 2: offset 25 éléments
    const newOffsetValue = this.props.searchParams.offset + ITEMS_PER_PAGE;
    this.props.updateSearchParams({ offset: newOffsetValue }, this.updatePage);
  };
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <div className="pagination">
          {this.props.searchParams.offset <= 0 ? (
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
