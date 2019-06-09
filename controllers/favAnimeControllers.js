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

router.post("/newFavAnime", (req, res) => {
  favAnimeModel
    .create(req.body)
    .then(ph => {
      res.json(ph);
      console.log(ph);
    })
    .catch(err => {
      console.error(err);
    });
});

router.put("/update/:title", (req, res) => {
  favAnimeModel
    .update({ title: req.params.title }, req.body)
    .then(ph => {
      res.json(ph);
      console.log(ph);
    })
    .catch(err => {
      console.error(err);
    });
});

router.delete("/delete/:title", (req, res) => {
  favAnimeModel
    .deleteMany({ title: req.params.title })
    .then(ph => {
      res.json(ph);
    })
    .catch(err => {
      console.error(err);
    });
});

module.exports = router;
