const express = require("express");
const router = express.Router();
const favAnimeModel = require("../models/favAnime");

router.get("/", (req, res) => {
  favAnimeModel
    .find({})
    .then(ph => {
      res.json(ph);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
