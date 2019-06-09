import React, { Component } from "react";

class FavAnime extends Component {
  render() {
    let favAnime = this.props.allFavAnime.map(fav => {
      console.log(fav);
      return (
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <img src={fav.image_url} alt={fav.title} />
              </div>
              <div className="card-content">
                <span className="card-title">{fav.title}</span>

                <p>{fav.synopsis}</p>
                <a
                  to="favAnime"
                  className="btn-floating halfway-fab waves-effect waves-light red"
                >
                  <i className="material-icons">+</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1>Fav Anime List</h1>
        {favAnime}
      </div>
    );
  }
}

export default FavAnime;
