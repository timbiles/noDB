import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div>
      <div className="title-name">
        <h4>No Database - A project by Tim Biles</h4>
      </div>
      <div className="navbar">
        {/* <audio>
          <source src="https://www.youtube.com/watch?v=pS-gbqbVd8c" />
        </audio> */}

        <h1 className="header">
          When you play the Game of Thrones, you win or you die.
        </h1>
        <input
          type="image"
          className="myImage"
          src="https://media1.popsugar-assets.com/files/thumbor/2VLr0tUUS0Yi62arQFv87bpqXx0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/08/09/904/n/1922283/0f141506598b73b291b091.43594297_edit_img_cover_file_43858141_1502310679/i/How-Tell-Daenerys-Dragons-Apart-Game-Thrones.jpg"
          alt="Dragon"
        />
        <input
          type="image"
          className="myImage"
          src="http://static1.uk.businessinsider.com/image/57460e11dd0895f57a8b4798-1783-891/screen%20shot%202016-05-25%20at%203.59.56%20pm.png"
          alt="Hodor doorstop"
        />
        <input
          type="image"
          className="myImage"
          src="https://i.imgur.com/0d1jvWF.jpg"
          alt="Walter White Walker"
        />
      </div>
    </div>
  );
};

export default Title;

// https://i.imgur.com/0d1jvWF.jpg
