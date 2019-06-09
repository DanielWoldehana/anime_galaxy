import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import Home from "./components/HomePage";
import AnimeDetail from "./components/AnimeDetail";
import FavAnime from "./components/FavAnime";
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
      favAnime: []
    };
  }

  componentDidMount() {
    fetch(`${base_url}/search/anime?q=${randomTitle[random]}&page=1`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          allAnime: data.results
        });
      })
      // .then(updateDom)
      .catch(err => console.warn(err.message));

    fetch(favAnimeUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          favAnime: data
        });
      })
      .catch(err => console.warn(err.message));
  }

  render() {
    console.log(this.state.allAnime);
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                allAnime={this.state.allAnime}
                allFavAnime={this.state.favAnime}
              />
            )}
          />
          <Route
            path="/animeInfo"
            render={props => (
              <AnimeDetail
                allAnime={this.state.allAnime}
                allFavAnime={this.state.favAnime}
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
