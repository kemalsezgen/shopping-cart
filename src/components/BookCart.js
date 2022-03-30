import React from "react";
import { Link } from "react-router-dom";

const BookCart = () => {
  return (
    <div>
      <h2>
        <Link to="/">Book List</Link> <span>My Cart</span>
      </h2>

      <h3>Total: 25.99</h3>
      <div className="book">
        <img
          src="https://cdn.bkmkitap.com/gencler-icin-fotograflarla-nutuk-9497658-14-O.jpg"
          alt="Nutuk"
        />
        <div>
          <h4>Nutuk</h4>
          <p>Author: Atatürk</p>
          <p>Price: 25.99</p>
          <p>Total: 19.99</p>
          <p>You have 3 of this book in your cart.</p>
          <button>-</button>
          <button>Take out</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default BookCart;
