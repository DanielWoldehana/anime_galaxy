import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import ReactPlayer from "react-player";
// import { Redirect } from "react-router";
// import AnimeDetail from "./AnimeDetail";

const randomAnimeWallpapers = require("random-anime-wallpapers");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedAnime: [],
      mute: ""
    };
  }
  componentDidMount() {
    randomAnimeWallpapers().then(images => {
      console.log("images");
      console.log(images);
    });
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

    const styles = {
      container: {
        width: "100%",
        height: 300,
        border: "2px solid black",
        background:
          "url('https://cdn.guidingtech.com/imager/media/assets/215513/Best-Anime-Wallpapers-in-HD-and-4K-That-You-Must-Get-Now_4d470f76dc99e18ad75087b1b8410ea9.jpg?1549108742')",
        backgroundSize: "cover"
      }
    };

    const Vurl = [
      "https://www.youtube.com/embed/otxA7fpPMPc",
      "https://www.youtube.com/embed/zujKbCWbqx4",
      "https://youtu.be/fwF_GRcm3s4",
      "https://youtu.be/v7A_wIGklDg",
      "https://youtu.be/X_fkh5VeOvI",
      "https://youtu.be/zxLtVpAAm4w",
      "https://youtu.be/t7xHamn5inQ",
      "https://youtu.be/6ajTMeOORjM"
    ];
    let randomV = Math.floor(Math.random() * Vurl.length);

    return (
      <div>
        <ReactPlayer
          url={Vurl[randomV]}
          width="100vw"
          height="400px"
          playing
          volume="0.1"
          muted={this.state.mute}
          onPause
        />

        <div className="animeGalaxy">{showAnime}</div>
      </div>
    );
  }
}

export default Home;
