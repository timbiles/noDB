import React, { Component } from "react";
import axios from "axios";
import "./BookList.css";

import Book from "../Book/Book";
import FavoriteCharacter from "../FavoriteCharacter/FavoriteCharacter";

export default class BookList extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      favorites: []
    };
  }

  componentDidMount() {
    axios.get("/api/books").then(res => {
      this.setState({ books: res.data });
      console.log(res.data);
    });
  }

  favoriteBook = book => {
    let { favorites } = this.state;
    if (JSON.stringify(favorites).includes(JSON.stringify(book))) {
      alert("This book is already in your favorites list!");
    } else {
      axios
        .post("/api/books", book)
        .then(res => this.setState({ favorites: res.data }));
      // console.log(res);
    }
  };

  deleteBook = book => {
    axios
      .delete(`/api/books/${book}`)
      .then(res => this.setState({ favorites: res.data }))
      .catch(e => console.log(e));
  };

  updateBook = (isbn, books) => {
    axios.put(`/api/books${isbn}`, { books }).then(res => {
      this.setState({
        books: res.data
      });
    });
  };

  render() {
    const { books, favorites } = this.state;

    return (
      <div>
        <div className="bookList main">
          {books.map(book => (
            <Book
              key={book.name}
              name={book.name}
              numberOfPages={book.numberOfPages}
              image={book.image}
              isbn={book.isbn}
              favorite={() => this.favoriteBook(book)}
              updateBook={this.updateBook}
            />
          ))}
        </div>
        <div>
          <h2 className="fav-title">Favorites</h2>
        </div>
        <div className="bookList fav">
          {favorites.map((book, index) => (
            <Book
              key={index}
              name={book.name}
              numberOfPages={book.numberOfPages}
              image={book.image}
              deleteBook={this.deleteBook}
            />
          ))}
        </div>
        <h2 className="fav-title">Favorite Character</h2>
        <div className="character-input">
          <FavoriteCharacter />
        </div>
        <div />
      </div>
    );
  }
}
