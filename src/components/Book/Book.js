import React from "react";
import "./Book.css";

const Book = props => {
  return (
    <div className="book-title">
      <h3>{props.name}</h3>
      <img className="image-cover" src={props.image} alt="Snowy background"/>
      <p>Number of Pages: {props.numberOfPages}</p>
      {props.favorite ? <button className="fav-btn" onClick={props.favorite}>Fav</button> : null}
      {/* {props.updateBook ? <button onClick={props.updateBook}>Update</button> : null}       */}
      {props.delete ? <button className="delete-btn" onClick={props.delete}>Delete</button> : null}  
      {props.unfavorite ? <button className="fav-btn" onClick={props.unfavorite}>Awful</button> : null}          
    </div>
  );
};

export default Book;
