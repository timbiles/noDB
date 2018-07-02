import React, { Component } from "react";
import "./FavoriteCharacter.css";

import CharacterList from "./CharacterList/CharacterList";

export default class FavoriteCharacter extends Component {
  constructor() {
    super();

    this.state = {
      characterList: [],
      input: ""
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddTask() {
    this.setState({
      characterList: [...this.state.characterList, this.state.input],
      input: ""
    });
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.setState({
        characterList: [...this.state.characterList, this.state.input],
        input: ""
      });
    }
  };

  render() {
    let list = this.state.characterList.map((element, index) => {
      return <CharacterList key={index} task={element} />;
    });

    return (
      <div>
        <div>
          <input
            className="fav-character"
            value={this.state.input}
            size={40}
            placeholder="Tell us your favorite Character!"
            onChange={e => this.handleInputChange(e.target.value)}
            onKeyDown={this.handleKeyPress}
          />
          <button onClick={this.handleAddTask} className="add-btn">
            Add
          </button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}
