import React, { Component } from "react";
import swal from "sweetalert2";
import "./FavoriteCharacter.css";

import CharacterList from "../CharacterList/CharacterList";

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
    swal({
      position: "top-end",
      type: "success",
      title: "Hodor",
      showConfirmButton: false,
      timer: 250
    });
    this.setState({
      characterList: [...this.state.characterList, this.state.input],
      input: ""
    });
  }

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      swal({
        position: "top-end",
        type: "success",
        title: "Hodor",
        showConfirmButton: false,
        timer: 250
      });
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
            onKeyDown={this.handleKeyDown}
          />
          <button onClick={this.handleAddTask} className="add-btn">
            Add
          </button>
        </div>

        {list}
      </div>
    );
  }
}
