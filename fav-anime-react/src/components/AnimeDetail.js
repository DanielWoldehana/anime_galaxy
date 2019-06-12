import React, { Component } from "react";
import ReactPlayer from "react-player";

const Anime = require("animepill-api");
const client = new Anime();

client
  .getEpisodes("bleach")
  .then(eps => eps[3].getEpisode())
  .then(vids => console.log(vids));

client
  .search("bleach")
  .then(res => {
    return res.find(x => x.type === "TV").getEpisodes();
  })
  .then(eps => console.log(eps));

const base_url = "https://api.jikan.moe/v3";
const width = 640;
const height = 360;

class AnimeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeDetail: [],
      noVideo: ""
    };
  }

  componentDidMount() {
    fetch(`${base_url}/anime/${this.props.animeId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ animeDetail: data });
        console.log(data);
      })
      // .then(updateDom)
      .catch(err => console.warn(err.message));

    fetch(`${base_url}/anime/genre`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      // .then(updateDom)
      .catch(err => console.warn(err.message));
  }

  render() {
    let anime = this.state.animeDetail;
    if (anime.trailer_url == null) {
      anime.trailer_url = `https://www.youtube.com/watch?v=FncYJYwJj8I`;
    }
    if (window.innerWidth <= 600) {
      width = 320;
      height = 180;
    }
    console.log(window.innerWidth);
    return (
      <div className="mainDetail-container">
        <div className="animeDetail-container">
          detail Page
          <h3>{anime.title}</h3>
          <h1>{this.state.noVideo}</h1>
          <ReactPlayer
            url={anime.trailer_url}
            width={width + "px"}
            height={height + "px"}
            onPause
          />
        </div>
      </div>
    );
  }
}

export default AnimeDetail;
