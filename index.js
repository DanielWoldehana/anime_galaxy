const express = require("express");
const parser = require("body-parser");
const favAnimeController = require("./controllers/favAnimeControllers");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use("/api/favAnime", favAnimeController);

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log("Naruto is running on port ✅ " + app.get("port"));
});
