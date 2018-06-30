import React from "react";
// import "FavBtn.css";

const FavBtn = props => {
  return <button className="fav-button" onClick={() => props.add()}>
  Favorite Button!
  </button>;
};

export default FavBtn;
