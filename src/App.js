import React, { Component } from "react";
import "./App.css";

import Title from "./components/Title/Title";
import BookList from "./components/BookList/BookList";

export default class App extends Component {
  render() {
    return (
      <div className="parent">
        <Title />
        <BookList />
      </div>
    );
  }
}
