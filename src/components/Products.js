import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h2>
        <span>Book List</span>
        <Link to="/bookCart">My Cart</Link>
      </h2>
      <div className="book">
        <img
          src="https://cdn.bkmkitap.com/gencler-icin-fotograflarla-nutuk-9497658-14-O.jpg"
          alt="Nutuk"
        />
      </div>
      <div>
          <h4>Nutuk</h4>
          <p>Author: Mustafa Kemal Atatürk</p>
          <p>Fiyat: 25.99</p>
          <button>Add to the cart</button>
        </div>
    </div>
  );
};

export default Products;
