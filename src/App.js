import React, { Component } from "react";
import "./App.css";

import SearchTitle from "./components/SearchTitle/SearchTitle";

export default class App extends Component {
  render() {
    return (
      <div className="parent">
        <SearchTitle />
      </div>
    );
  }
}
