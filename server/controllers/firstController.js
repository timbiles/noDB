const axios = require("axios");
const baseUrl = "http://www.omdbapi.com";
const { MOVIE_KEY } = process.env;
//i=tt3896198&

let shows = [];
let favorites = [];

const create = (req, res, next) => {
  // console.log("hit create");
  // console.log(MOVIE_KEY);
  // console.log(`${baseUrl}/?t=${req.query.t}&apikey=${MOVIE_KEY}`);
  //http://www.omdbapi.com/?t=breaking+bad&apikey=87ac7e25

  axios
    .get(`${baseUrl}/?t=${req.query.t}&apikey=${MOVIE_KEY}`)
    .then(resp => {
      // console.log(resp);
      shows = resp.data;
      res.status(200).json(shows);
    })
    .catch(e => {
      res.status(500).send(e);
      console.log(e);
    });
};

const getSearch = (req, res, next) => {
  res.status(200).send(shows);
};

const favList = (req, res, next) => {
  favorites.push(req.body.title);
  res.status(200).send(favorites);
};

const updateList = (req, res, next) => {
  const { imdbRating } = req.body;
  const updateRate = req.params.id;
  const showIndex = shows.findIndex(title => title.id == updateRate);
  let show = shows[showIndex];
  shows[showIndex] = {
    ...show,
    imdbRating: imdbRating
  };
  res.status(200).send(shows);
};

const deleteList = (req, res, next) => {
  favorites.splice(req.params.title, 1);
  res.status(200).send(favorites);
};

module.exports = {
  create,
  getSearch,
  favList,
  updateList,
  deleteList
};

// http://localhost:3001/api/firstController?t=breaking+bad&apikey=87ac7e25/
