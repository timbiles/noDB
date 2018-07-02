import React, { Component } from "react";
import axios from "axios";
import "./FavoritesTitle.css";

export default class FavoritesTitle extends Component {
  constructor() {
    super();

    this.state = {
      title: "Favorites",
      newTitle: "",
      newInput: "",
      editTitle: false
    };
  }

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

  handleClick = () => {
    let { newInput } = this.state;
    axios.put("/api/books/title", { newInput }).then(res => {
      this.setState({
        newTitle: res.data,
        editTitle: !this.state.editTitle,
        newInput: ""
      });
    });
  };

  handleKeyDown = e => {
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
  };

  render() {
    const { editTitle, newTitle, title } = this.state;
    return (
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
              <button className="title-btn" onClick={this.handleClick}>
                {" "}
                Submit{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
