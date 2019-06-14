# Anime Galaxy

## A haven for everything Anime

Anime Galaxy is a MERN (MongoDB, Express, React, Node.js) stack web application built for serious Anime Fans. Currently the Home Page pulls from Jikan's API (https://api.jikan.moe/v3) and renders random anime cards to the fron page consisting of the Anime's image_url, Title, and short synopsis when the user clicks on the 3 dots icon on the Anime Card. There is also a Favorite Anime page that is pulling from an database I built using MongoDB / Express and Node.js. The deployed link to the database is https://fav-anime-db.herokuapp.com/api/favAnime . In this page user can click the Plus button available at all times on the navigation bar, which popps up with a form using Material-ui that allows the user to add a new Favorite anime to the database. All cards in the Favorite page will allow the user to delete and update the specific card of their choosing.

## BackEnd

## SCRIPTS

npm start === node index.js
npm run seed === heroku run node db/seed.js

### Used Languages MongoDB/Express/Node.js

The url for the FavAnime page is https://fav-anime-db.herokuapp.com/api/favAnime.
I have built full CRUD fuctionality for the favorite anime Database the Routs are as follows:

### GET REQUEST

To make a get request use this route "/" in your HTTP request which is the same as https://fav-anime-db.herokuapp.com/api/favAnime

### POST REQUEST

To Create a new FavAnime use this route "/newFavAnime"

### PUT REQUEST

To Update a an existing FavAnime use this route "/update/:title" the :title in the route is refering to the parameters you want to search by, in this case it is searching by the title of the anime. Here is a link to find out more URL parameters in React-router https://tylermcginnis.com/react-router-url-parameters/

### DELETE REQUEST

To delete an Exisiting FavAnime use this Route "/delete/:title" the :title again is refering to the parameters you want to search by, look back at the PUT REQUEST for more info on Parameters with React-router.

# FRONT END

## SCRIPS

npm start === react-scripts start
npm build === react-scripts build
npm test === react-scripts test
npm eject === react-scripts eject
