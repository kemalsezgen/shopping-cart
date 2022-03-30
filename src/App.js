import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import BookCart from "./components/BookCart";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Buy a book.</h2>

        <Routes>
          <Route path="/bookCart" element={<BookCart/>} /> 
          <Route path="/" element={<Products/>} /> 
        </Routes>

      </div>
    </Router>
  );
}

export default App;
