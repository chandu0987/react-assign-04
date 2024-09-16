
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './Products';
import AddProduct from './AddProduct';
import ProductDetails from './ProductDetails';
import About from './About';
import './App.css';

function App() {

  return (
    <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products/:name" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
</div>

  );
}

export default App;

