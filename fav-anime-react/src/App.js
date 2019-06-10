import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Home from "./components/HomePage";
import AnimeDetail from "./components/AnimeDetail";
import FavAnime from "./components/FavAnime";
import NavBar from "./components/NavBar";

import "./App.css";

const base_url = "https://api.jikan.moe/v3";
const favAnimeUrl = "https://fav-anime-db.herokuapp.com/api/favAnime";
const randomTitle = [
  "naruto",
  "one piece",
  "gintama",
  "made_in_abyss",
  "dragon_ball_super",
  "Fullmetal_Alchemist",
  "Hunter_x_Hunter",
  "cowboy_bebop",
  "black_clover",
  "one_punch_man"
];
let random = Math.floor(Math.random() * randomTitle.length);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnime: [],
      favAnime: [],
      animeId: null
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(`${base_url}/search/anime?q=${randomTitle[random]}&page=1`),
      fetch(favAnimeUrl)
    ])

      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        // set state in here
        this.setState({
          allAnime: res1.results
        });
        this.setState({
          favAnime: res2
        });
      });
  }

  handleClicked = id => {
    this.setState({ animeId: id });
    // console.log(id);
    // console.log(this.state.animeId);
  };

  render() {
    // console.log(this.state);

    return (
      <div className="app">
        <nav>
          <NavBar />
          {/* <div class="nav-wrapper">
            <Link to="/" className="brand-logo">
              Anime Galaxy
            </Link>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favAnime">FavAnime</Link>
              </li>
              <li>
                <Link to="/unknown" href="collapsible.html">
                  Others
                </Link>
              </li>
            </ul>
          </div> */}
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>

        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                allAnime={this.state.allAnime}
                allFavAnime={this.state.favAnime}
                clickedAnime={this.handleClicked}
              />
            )}
          />
          s
          <Route
            path="/animeDetail"
            render={props => (
              <AnimeDetail
                allAnime={this.state.allAnime}
                allFavAnime={this.state.favAnime}
                animeId={this.state.animeId}
              />
            )}
          />
          <Route
            path="/favAnime"
            render={props => (
              <FavAnime
                allAnime={this.state.allAnime}
                allFavAnime={this.state.favAnime}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
