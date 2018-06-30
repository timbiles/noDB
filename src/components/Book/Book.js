import React, { Componenet } from "react";
// import './book.css'

const Book = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.numberOfPages}</p>
    </div>
  );
};

export default Book;
