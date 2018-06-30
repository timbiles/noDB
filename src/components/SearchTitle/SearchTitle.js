import React, { Component } from "react";
import axios from "axios";
import FavBtn from "../FavBtn/FavBtn";
import "./SearchTitle.css";

export default class SearchTitle extends Component {
  constructor() {
    super();

    this.state = {
      userInput: [],
      favoriteShow: []
    };

    //binding not needed with use of arrow functions
  }

  componentDidMount() {
    this.newSearch();
  }

  newSearch = () => {
    axios
      .get(`/api/firstController?t=seinfeld`)
      .then(res => {
        this.setState({ userInput: res.data });
      })
      .catch(() => this.newSearch());
  };

  addFav = () => {
    let { userInput, favoriteShow } = this.state;
    axios
      .post("/api/firstController", { userInput })
      .then(res => this.setState({ favoriteShow: res.data }));
  };

  render() {
    const { useInput, favoriteShow } = this.state;
    return (
      <div>
        <div className="show-title">Search Tv Shows!!</div>
        <input className="show-search" />
        <button className="search-btn" onClick={() => this.newSearch()}>
          Search for your show!
        </button>
        <FavBtn add={this.addFavorite} />
      </div>
    );
  }
}
