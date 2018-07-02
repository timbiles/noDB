import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import "./BookList.css";

import Book from "../Book/Book";
import FavoriteTitle from "../FavoritesTitle/FavoritesTitle";

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
      swal("This book is already in your favorites list!");
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
            />
          ))}
        </div>
        <div className="favorite-bar">
        <br/>
          <FavoriteTitle />
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
      </div>
    );
  }
}
