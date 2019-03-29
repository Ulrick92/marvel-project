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
  updateHeroesList = heroes => {
    this.setState({
      heroes: heroes
    });
  };
  updateSearchParams = (newParams, callbackFunction) => {
    this.setState(
      {
        params: {
          ...this.state.params,
          ...newParams
        }
      },
      callbackFunction
    );
  };
  render() {
    const { mounted } = this.state;

    return mounted ? (
      <Fragment>
        <div className="trombinoscope">
          <ul className="heroes-list">{this.renderHeroes()}</ul>
          <Pagination
            updateHeroesList={this.updateHeroesList}
            searchParams={this.state.params}
            updateSearchParams={this.updateSearchParams}
          />
        </div>
      </Fragment>
    ) : (
      <Fragment>Loading...</Fragment>
    );
  }
  componentDidMount() {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?apikey=f7c8105afcefcef9bb285687ff296fbf",
        {
          params: {
            limit: ITEMS_PER_PAGE
          }
        }
      )
      .then(response => {
        console.log(response.data);
        console.log("Result =>", response.data.data.results);
        this.setState({
          heroes: response.data.data.results,
          mounted: true
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
