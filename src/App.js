import React, { Component } from "react";
import "./App.css";

import Title from "./components/Title/Title";
import ImageIcon from "./components/ImageIcon/ImageIcon";
import BookList from "./components/BookList/BookList";
import Footer from "./components/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="parent">
        <Title />
        <div className="image-icon">
          <ImageIcon />
          <ImageIcon />
        </div>
        <BookList />
        <Footer />
      </div>
    );
  }
}
