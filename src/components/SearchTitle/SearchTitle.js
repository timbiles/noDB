import React, { Component } from "react";
import axios from "axios";
import "./SearchTitle.css";

import Book from "../Book/Book";

export default class SearchTitle extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      favorites: []
      // favPage: boolean
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/books`).then(res => {
      this.setState({ books: res.data });
      console.log(res.data);
    });
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <h1>In the Game of Thrones, you win or die.</h1>

        {books.map(book => (
          <Book name={book.name} numberOfPages={book.numberOfPages} />
        ))}
        {/* <button onClick={this.handleClick}>Press me</button> */}
        <p />
      </div>
    );
  }
}
