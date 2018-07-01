import React, { Component } from "react";
import axios from "axios";
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
    axios.get(`http://localhost:3001/api/books`).then(res => {
      this.setState({ books: res.data });
      console.log(res.data);
    });
  }

  favoriteBook = book => {
    axios.post("http://localhost:3001/api/books", book).then(res => {
      this.setState({ favorites: res.data });
      console.log(res);
    });
  };

  deleteBook = book => {
    axios
      .delete(`http://localhost:3001/api/books${book}`)
      .then(res => this.setState({ favorites: res.data }))
      .catch(e => console.log(e));
  };

  updateBook = (id, title)=> {
    axios.put(`/api/characters/${id}`, { title }).then(res => {
      this.setState({
        books: res.data
      });
    });
  }

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
