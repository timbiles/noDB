import React, { Component } from "react";
import "./HodorBtn.css";

export default class HodorBtn extends Component {
  constructor() {
    super();

    this.state = {
      text: "Hodor ",
      list: []
    };
  }

  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.text]
    });
  };

  render() {
    const { list } = this.state;
    let mappedElem = list.map((e, i) => {
      return <div>{e}</div>;
    });
    return (
      <div>
        <div>
          <input
            type="image"
            className="hodor"
            src="http://unleashedreality.com/wp-content/uploads/2016/05/hodor.jpg"
            alt="Hodor"
            onClick={this.handleClick}
          />
        </div>
        <br />
        <div class="hodor-list">{mappedElem}</div>
      </div>
    );
  }
}
