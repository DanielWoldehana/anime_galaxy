const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL);
} else {
  mongoose.connect("mongodb://localhost/favAnimeDB", {
    useNewUrlParser: true
  });
}

mongoose.Promise = Promise;

module.exports = mongoose;

heroku config:set DB_URL="mongodb+srv://danielwoldehana:'ilovemongodb22'@cluster0-z4o0m.mongodb.net/test?retryWrites=true&w=majority"