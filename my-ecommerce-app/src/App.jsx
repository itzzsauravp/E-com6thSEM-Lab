import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart';
import Auth from './pages/Auth';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        setFeaturedProducts(response.data.slice(0, 4)); // Get first 4 products as featured
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="App">
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home featuredProducts={featuredProducts} addToCart={addToCart} />} />
        <Route path="/products" element={<AllProducts addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/auth" element={<Auth setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;