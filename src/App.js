import React, { createContext, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BookCart from "./components/BookCart";
import Products from "./components/Products";

import { bookData } from "./bookData";

export const BookContext = createContext();

function App() {
  const [state, setState] = useState({
    bookList: bookData,
    cart: [],
  });

  const addToCart = book => setState({
    ...state,
    cart: state.cart.find(cartItem => cartItem.id === book.id) 
    ? state.cart.map(cartItem => cartItem.id === book.id ? {...cartItem, count: cartItem.count + 1} : cartItem)
    : [...state.cart, {...book, count: 1 }]
  })

  return (
    <BookContext.Provider value={{ state, addToCart}}>
      <Router>
        <div className="App">
          <h2>Buy a book.</h2>

          <Routes>
            <Route path="/bookCart" element={<BookCart />} />
            <Route path="/" element={<Products />} />
          </Routes>
        </div>
      </Router>
    </BookContext.Provider>
  );
}

export default App;
