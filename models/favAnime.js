const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const FavAnimeModel = new Schema({
  title: String,
  image_url: String,
  score: Number,
  synopsis: String
});

module.exports = mongoose.model("FavAnimeModel", FavAnimeModel);
