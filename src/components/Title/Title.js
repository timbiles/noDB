import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="navbar">
      {/* <audio controls autoplay> 
      <source src="https://www.youtube.com/watch?v=pS-gbqbVd8c"/> 
      </audio> */}
      <input
        type="image"
        className="myImage"
        src="https://s7776.pcdn.co/wp-content/uploads/2015/06/game-of-thrones-night-king-white-walker-1200x640.jpg"
        alt="The Knight King"
      />
      <h1 className="header">
        When you play the Game of Thrones, you win or you die.
      </h1>
      <input
        type="image"
        className="myImage"
        src="https://media1.popsugar-assets.com/files/thumbor/2VLr0tUUS0Yi62arQFv87bpqXx0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/08/09/904/n/1922283/0f141506598b73b291b091.43594297_edit_img_cover_file_43858141_1502310679/i/How-Tell-Daenerys-Dragons-Apart-Game-Thrones.jpg"
        alt="Dragon"
        
      />
    </div>
  );
};

export default Title;

// https://i.imgur.com/0d1jvWF.jpg
