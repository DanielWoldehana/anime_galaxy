import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src={anime.image_url} alt={anime.title} />
                </div>
                <div className="card-content">
                  <Link to="/animeInfo">
                    <span className="card-title">{anime.title}</span>
                  </Link>
                  <p>{anime.synopsis}</p>
                  <Link
                    to="favAnime"
                    className="btn-floating halfway-fab waves-effect waves-light red"
                  >
                    <i className="material-icons">+</i>
                  </Link>
                </div>
              </div>
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
