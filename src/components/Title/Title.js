import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="navbar">
      {/* <audio src="" type=""/> */}
      {/* https://www.youtuberepeater.com/watch?v=s7L2PVdrb_8&name=Official+Opening+Credits+Game+of+Thrones+HBO */}
      <h1 className="header">
        When you play the Game of Thrones, you win or you die.
      </h1>
      <input
        type="image"
        className="myImage"
        src="https://i.imgur.com/0d1jvWF.jpg"
      />
    </div>
  );
};

export default Title;
