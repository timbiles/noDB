import React, { Component } from "react";
import axios from "axios";
// import Noty from "noty";
import "./BookList.css";

import Book from "../Book/Book";

export default class SearchTitle extends Component {
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
      .delete(`/api/books${book}`)
      .then(res => this.setState({ favorites: res.data }))
      .catch(e => console.log(e));
  };

  // updateBook = (id, title) => {
  //   axios.put(`http://localhost:3001/api/books${id}`, { title }).then(res => {
  //     this.setState({
  //       books: res.data
  //     });
  //   });
  // };

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
              favorite={() => this.favoriteBook(book)}
              // updateBook={this.updateBook}
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
              delete={this.deleteBook}
            />
          ))}
        </div>
      </div>
    );
  }
}
