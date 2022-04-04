import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BookContext } from "../App";

const Products = () => {
  const context = useContext(BookContext);

  return (
    <div>
      <h2>
        <span>Book List</span>
        <Link to="/bookCart">My Cart</Link>
      </h2>
      {context.state.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img
            src={book.image}
            alt={book.name}
          />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <button onClick={() => context.addToCart(book)}>Add to the cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
