import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import AnimeDetail from "./AnimeDetail";
import icon from "../images/menu.png";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allAnime: []
    };
  }

  render() {
    let showAnime = this.props.allAnime.map((anime, index) => {
      return (
        <div key={anime.mal_id}>
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src={anime.image_url}
                alt={anime.title}
              />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                <Link to="/animeDetail">{anime.title}</Link>
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href={anime.url}>More info..</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {anime.title}
                <i className="material-icons right">close</i>
              </span>
              <p>{anime.synopsis}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2>This is the Home Page</h2>
        <div className="kemicofa-row">{showAnime}</div>
      </div>
    );
  }
}

export default Home;
