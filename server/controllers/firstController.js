const axios = require("axios");
const baseUrl = "https://anapioficeandfire.com/api/books";

let books = [];
let favorites = [];

const getBooks = (req, res, next) => {
  console.log("hit create");

  axios
    .get(`${baseUrl}`)
    .then(resp => {
      books = resp.data;
      res.status(200).send(books);
    })
    .catch(e => {
      res.status(500).send(e);
      console.log(e);
    });
};

// const favList = (req, res, next) => {
//   favorites.push(req.body.title);
//   res.status(200).send(favorites);
// };

// const updateList = (req, res, next) => {
//   const { imdbRating } = req.body;
//   const updateRate = req.params.id;
//   const showIndex = shows.findIndex(title => title.id == updateRate);
//   let show = shows[showIndex];
//   shows[showIndex] = {
//     ...show,
//     imdbRating: imdbRating
//   };
//   res.status(200).send(shows);
// };

// const deleteList = (req, res, next) => {
//   favorites.splice(req.params.title, 1);
//   res.status(200).send(favorites);
// };

module.exports = {
  getBooks,
  // getCharacters
  // favList,
  // updateList,
  // deleteList
};
