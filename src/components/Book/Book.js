import React from "react";
import axios from "axios";
import "./Book.css";

const Book = props => {
  return (
    <div className="book-title">
      <h3>{props.name}</h3>
      <img className="image-cover" src={props.image} />
      <p>{props.numberOfPages}</p>
      {props.favorite ? <button onClick={props.favorite}>Fav</button> : null}
    </div>
  );
};

export default Book;
