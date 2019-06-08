const mongoose = require("../db/connections");
const Schema = mongoose.Schema;

const FavAnimeModel = new Schema({
  name: String,
  image_url: String,
  rate: Number
});

module.exports = mongoose.model("FavAnimeModel", FavAnimeModel);
