import React, { Component } from "react";

class FavAnime extends Component {
  render() {
    let favAnime = this.props.allFavAnime.map(fav => {
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
