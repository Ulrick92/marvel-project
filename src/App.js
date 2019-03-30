import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Route exact path="/" component={Home} />
          <Route
            path="/:offset/:limit"
            render={props => (
              <Home key={props.match.params.offset} {...props} /> // key permet de rafraichir la page, pour relancer l'axios
            )}
          />
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
