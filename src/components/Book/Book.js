import React from "react";
import "./Book.css";

const Book = props => {
  const { name, image, isbn, numberOfPages, favorite, deleteBook } = props;

  return (
    <div className="book-title">
      <h3>{name}</h3>
      <img className="image-cover" src={image} alt="Book cover" />
      <p>Number of Pages: {numberOfPages}</p>
      {favorite && (
        <button className="fav-btn" onClick={favorite}>
          Fav
        </button>
      )}

      {deleteBook && (
        <button className="delete-btn" onClick={() => deleteBook(isbn)}>
          Delete
        </button>
      )}
    </div>
  );
};

export default Book;

/*
 SHORT CIRCUIT EVALUATION:
 &&=>
 VALUE ON LEFT IS TRUE, RETURN VALUE ON RIGHT
 VALUE ON LEFT IS FALSE, RETURN ITSELF

 ||=>
 VALUE ON LEFT IS FALSE, RETURN RIGHT VALUE;
 VALUE ON LEFT IS TRUE, RETURN ITSELF
*/
