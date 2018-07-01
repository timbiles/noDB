const axios = require("axios");
const baseUrl = "https://anapioficeandfire.com/api/books";

// const books = require("../data/books.json");
let books = [];
let favorites = [];

const getBooks = (req, res, next) => {
  console.log("hit create");
  books = [];
  // res.status(200).send(books);
  axios
    .get(`${baseUrl}`)
    .then(resp => {
      // books = resp.data;
      resp.data.map(book => {
        let image = "";

        if (book.name === "A Game of Thrones") {
          image =
            "https://i.pinimg.com/originals/71/05/c1/7105c1a8165ae9040fa3e1d795dfbc40.jpg";
        }
        if (book.name === "A Clash of Kings") {
          image =
            "https://images-na.ssl-images-amazon.com/images/I/51QKXAcKUGL._SX302_BO1,204,203,200_.jpg";
        }
        if (book.name === "A Storm of Swords") {
          image =
            "https://images-na.ssl-images-amazon.com/images/I/91Q5CCXgZKL.jpg";
        }
        if (book.name === "The Hedge Knight") {
          image =
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hedgeknight.jpg/220px-Hedgeknight.jpg";
        }
        if (book.name === "A Feast for Crows") {
          image =
            "http://covers4.booksamillion.com/covers/bam/0/55/380/150/0553801503.jpg";
        }
        if (book.name === "The Sworn Sword") {
          image = "http://www.idoc.co/files/d24d10325f256e58c5-0.jpg";
        }
        if (book.name === "The Mystery Knight") {
          image =
            "https://img00.deviantart.net/ae44/i/2012/112/c/3/the_mystery_knight_cover_by_teews666-d4x5fl0.png";
        }
        if (book.name === "A Dance with Dragons") {
          image =
            "https://images-na.ssl-images-amazon.com/images/I/51f5%2BHsagGL._SX324_BO1,204,203,200_.jpg";
        }
        if (book.name === "The Princess and the Queen") {
          image =
            "https://pre00.deviantart.net/060a/th/pre/i/2013/338/6/f/the_princess_and_the_queen_book_cover_by_nateblunt-d6wqf76.jpg";
        }
        if (book.name === "The Rogue Prince") {
          image = "http://www.sftv.org/cw/rogues.JPG";
        }

        const newBook = {
          ...book,
          image
        };
        books.push(newBook);
      });
      res.status(200).send(books);
    })
    .catch(e => {
      res.status(500).send(e);
      console.log(e);
    });
};

const favList = (req, res, next) => {
  favorites.push(req.body);
  res.status(200).send(favorites);
};

const deleteList = (req, res, next) => {
  favorites.splice(req.params.title, 1);
  res.status(200).json(favorites);
};

// const updateList = (req, res, next)=>{
//   if(req.params.id !== typeof null) {
//     title = req.params.id;
//     return res.status(200).send(title)
//   }
//   res.status(200).send(title);
// }

//
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

module.exports = {
  getBooks,
  favList,
  deleteList
  // updateList
};
