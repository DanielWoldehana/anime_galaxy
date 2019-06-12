import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Axios from "axios";
const favAnimeUrl = "https://fav-anime-db.herokuapp.com/api/favAnime";

class FavAnime extends Component {
  constructor() {
    super();
    this.state = {
      deleteTitle: "",
      favAnime: []
    };
  }
  handleAnimeDelete = anime => {
    Axios.delete(`${favAnimeUrl}/delete/${anime}`)
      .then(res => {
        console.log(res);
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    let favAnime = this.props.allFavAnime.map(fav => {
      this.state.favAnime.push(fav.title);
      // this.props.favAnimeList(this.state.favAnime);
      console.log(fav);
      return (
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={fav.image_url} alt={fav.title} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {fav.title}
              <i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="#">This is a link</a>
            </p>
            <div className="buttonContainer">
              <Button
                variant="contained"
                color="secondary"
                className="deleteButton"
                onClick={() => this.handleAnimeDelete(fav.title)}
              >
                Delete
              </Button>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Card Title<i className="material-icons right">close</i>
            </span>
            <p>{fav.synopsis}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="animeGalaxy favAnime">{favAnime}</div>
      </div>
    );
  }
}

export default FavAnime;
