import React, { Component } from "react";
import ReactPlayer from "react-player";

let genres = [];
let air = "";

const base_url = "https://api.jikan.moe/v3";
const width = 640;
const height = 360;
// const width = 320;
// const height = 180;

class AnimeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeDetail: [],
      noVideo: "",
      airing: ""
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

    if (anime.airing == true) {
      air = "Airing";
    } else {
      air = "Finished Airing";
    }
    genres = anime.genres;
    console.log(window.innerWidth);

    // let allGenres = genres.map(genre => {

    // })
    return (
      <div className="mainDetail-container">
        <h3 className="animeDetailTitle">{anime.title}</h3>
        <div className="animeDetail-container">
          <div className="sideContent">
            <img src={anime.image_url} alt={anime.title} />
            <h5>Japense Title</h5>
            <h6>{anime.title_japanese}</h6>
            <h5>Status</h5>
            <h6>{air} </h6>
            <h5>Score</h5>
            <h6>{anime.score}</h6>
            <h6>Scored By: {anime.scored_by} fans</h6>
            <h5>Rating</h5>
            <h6>{anime.status}</h6>
            <h5>Popularity</h5>
            <h6>{anime.popularity}</h6>
            <h5>Status</h5>
            <h6>{anime.status}</h6>
            <h5>Rank</h5>
            <h6>{anime.rank}</h6>
            <h5>Find out More..</h5>
            <a href={anime.url} alt={anime.title}>
              <h6>Click here</h6>
            </a>
          </div>
          <div className="videoContainer">
            <ReactPlayer
              url={anime.trailer_url}
              width={width + "px"}
              height={height + "px"}
              playing
            />
            <h4>Synopsis</h4>
            <p className="animeDetail-P">{anime.synopsis}</p>
            <br />
            <h4>BackGround</h4>
            <p>{anime.background}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimeDetail;
