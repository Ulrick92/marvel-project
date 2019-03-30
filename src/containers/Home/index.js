import React, { Component, Fragment } from "react";
import axios from "axios";
import Heroes from "../../components/Heroes";
import Pagination from "../../components/Pagination";
import "./style.css";

const ITEMS_PER_PAGE = 25;

export default class Home extends Component {
  state = {
    heroes: [],
    params: {
      offset: 0,
      limit: ITEMS_PER_PAGE
    },
    copyright: "",
    mounted: false
  };
  renderHeroes = () => {
    const { heroes } = this.state;
    const characters = heroes.map((heroe, i) => (
      <li className="heroes-list-card" key={heroe.id}>
        <Heroes
          i={i}
          name={heroe.name}
          thumbnail={`${heroe.thumbnail.path}/portrait_xlarge.${
            heroe.thumbnail.extension
          }`}
        />
      </li>
    ));
    return characters;
  };
  render() {
    const { mounted } = this.state;
    // console.log("Props ", this.props);
    // console.log("Props ", this.props.match.params.offset);
    return mounted ? (
      <Fragment>
        <div className="trombinoscope">
          <Pagination searchParams={this.state.params} />
          <ul className="heroes-list">{this.renderHeroes()}</ul>
          <Pagination searchParams={this.state.params} />
        </div>
      </Fragment>
    ) : (
      <Fragment>
        <div className="loading">Loading...</div>
      </Fragment>
    );
  }
  componentDidMount() {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?apikey=f7c8105afcefcef9bb285687ff296fbf",
        {
          params: {
            limit: ITEMS_PER_PAGE,
            offset: this.props.match.params.offset
          }
        }
      )
      .then(response => {
        // console.log("Result =>", response.data.data.results);
        this.setState({
          heroes: response.data.data.results,
          params: {
            offset: this.props.match.params.offset
          },
          mounted: true
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
