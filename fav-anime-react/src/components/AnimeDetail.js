import React, { Component } from "react";

const base_url = "https://api.jikan.moe/v3";

class AnimeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(`${base_url}/anime/${5114}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      // .then(updateDom)
      .catch(err => console.warn(err.message));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1> This is Anime Detail</h1>
      </div>
    );
  }
}

export default AnimeDetail;
