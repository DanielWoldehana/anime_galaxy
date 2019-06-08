const mongoose = require("./connections");
const FavAnimeModel = require("../models/favAnime");

const AnimeData = require("./favAnime.json");

FavAnimeModel.deleteMany({}).then(() => {
  FavAnimeModel.create(AnimeData).then(newData => {
    console.log(newData);
  });
});
