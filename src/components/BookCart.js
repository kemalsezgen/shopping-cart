import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { BookContext } from "../App";

const BookCart = () => {
  const context = useContext(BookContext);

  const totalAmount = context.state.cart.reduce(
    (total, book) => (total = total + book.price * book.count),
    0
  ).toFixed(2);

  return (
    <div>
      <h2>
        <Link to="/">Book List</Link> <span>My Cart</span>
      </h2>

      <h3>Total: {totalAmount}</h3>

      {context.state.cart.map((book) => (
        <div className="book" key={book.di}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <p>Total: {(book.price * book.count).toFixed(2)}</p>
            <p>You have {book.count} of this book in your cart.</p>
            <button onClick={() => context.decreaseBook(book.id)}>-</button>
            <button onClick={() => context.removeFromCart(book.id)}>
              Take out
            </button>
            <button onClick={() => context.increaseBook(book.id)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCart;
