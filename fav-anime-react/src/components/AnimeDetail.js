import React, { Component } from "react";
import ReactPlayer from "react-player";
const base_url = "https://api.jikan.moe/v3";

class AnimeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeDetail: []
    };
  }

  componentDidMount() {
    fetch(`${base_url}/anime/${this.props.animeId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ animeDetail: data });
        // console.log(data);
      })
      // .then(updateDom)
      .catch(err => console.warn(err.message));
  }

  render() {
    let anime = this.state.animeDetail;
    if (anime.trailer_url == null) {
      anime.trailer_url = `https://www.youtube.com/watch?v=FncYJYwJj8I`;
    }
    return (
      <div>
        <div>
          detail Page
          <h1>{anime.title}</h1>
          <ReactPlayer url={anime.trailer_url} onPause />
        </div>
      </div>
    );
  }
}

export default AnimeDetail;
