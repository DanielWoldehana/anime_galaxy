import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
// import { Redirect } from "react-router";
// import AnimeDetail from "./AnimeDetail";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedAnime: []
    };
  }

  render() {
    let showAnime = this.props.allAnime.map((anime, index) => {
      console.log(anime.image_url.width);
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
                <Link
                  to="/animeDetail"
                  onClick={() => this.props.clickedAnime(anime.mal_id)}
                  className="animeTitle"
                >
                  {anime.title}
                </Link>
                <i className="material-icons right">more_vert</i>
              </span>
              <p className="cardLinks">
                <a href={anime.url}>More info..</a>
                <a href="#">+ Fav</a>
              </p>
            </div>
            <div className="card-reveal teal">
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
        <div className="animeGalaxy">{showAnime}</div>
      </div>
    );
  }
}

export default Home;
