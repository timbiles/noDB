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
      favorites: [],
      title: "Favorites",
      newTitle: "",
      newInput: "",
      editTitle: false
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

  // updateBook = (isbn, books) => {
  //   axios.put(`/api/books${isbn}`, { books }).then(res => {
  //     this.setState({
  //       books: res.data
  //     });
  //   });
  // };

  handleTitle = () => {
    this.setState({
      editTitle: !this.state.editTitle
    });
  };

  handleInput = val => {
    this.setState({
      newInput: val
    });
  };

  handleClick=()=> {
    let { newInput } = this.state;
    axios.put("/api/books/title", { newInput }).then(res => {
      this.setState({
        newTitle: res.data,
        editTitle: !this.state.editTitle,
        newInput: ""
      });
    });
  }

  handleKeyDown=(e)=>{
    if (e.keyCode === 13) {
      let { newInput } = this.state;
    axios.put("/api/books/title", { newInput }).then(res => {
      this.setState({
        newTitle: res.data,
        editTitle: !this.state.editTitle,
        newInput: ""
      });
    });
    }
  }

  render() {
    const { books, favorites, title, editTitle, newTitle } = this.state;

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
              // updateBook={this.updateBook}
            />
          ))}
        </div>
        <div className="fav-title">
          <div>
            {!editTitle ? (
              <h2 onClick={this.handleTitle}>{newTitle ? newTitle : title}</h2>
            ) : (
              <div>
                <input
                  placeholder="Rename Title"
                  onChange={e => this.handleInput(e.target.value)}
                  onKeyDown={this.handleKeyDown}
                />
                <button className="title-btn"onClick={this.handleClick}> Submit </button>
              </div>
            )}
          </div>
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
