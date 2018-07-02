import React from "react";
import "./Book.css";

const Book = props => {
  return (
    <div className="book-title">
      <h3>{props.name}</h3>
      <img className="image-cover" src={props.image} alt="Snowy background"/>
      <p>Number of Pages: {props.numberOfPages}</p>
      {props.favorite ? <button className="fav-btn" onClick={props.favorite}>Fav</button> : null}
      {/* {props.updateBook ? <button onClick={()=> props.updateBook(isbn)}>Update</button> : null}       */}
      {props.delete ? <button className="delete-btn" onClick={()=> props.delete(props.isbn)}>Delete</button> : null}          
    </div>
  );
};

export default Book;
