import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Home from "./components/HomePage";
import AnimeDetail from "./components/AnimeDetail";
import FavAnime from "./components/FavAnime";
import NavBar from "./components/NavBar";
import AnimeShop from "./components/animeShop";
import AnimeGames from "./components/animeGames";
import Axios from "axios";

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
      animeId: null,
      newFavAnime: {
        title: "",
        image_url: "",
        synopsis: "",
        score: ""
      },
      redirect: false,
      favAnimeList: []
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

  handleFavAnimeFetch = () => {
    Axios.get(favAnimeUrl)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleClicked = id => {
    this.setState({ animeId: id });
  };

  handleAnimeCreate = anime => {
    Axios.post(`${favAnimeUrl}/newFavAnime`, anime)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };

  // handleFavAnimeList = array => {
  //   this.setState({ favAnimeList: array });
  //   console.log(this.state.favAnimeList);
  // };

  render() {
    return (
      <div className="app">
        <nav>
          <NavBar onAnimeCreate={this.handleAnimeCreate} />
        </nav>

        <ul className="sidenav" id="mobile-demo">
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
                favAnimeList={this.handleFavAnimeList}
              />
            )}
          />
          <Route path="/animeShop" render={props => <AnimeShop />} />
          <Route path="/animeGames" render={props => <AnimeGames />} />
        </Switch>
      </div>
    );
  }
}

export default App;
