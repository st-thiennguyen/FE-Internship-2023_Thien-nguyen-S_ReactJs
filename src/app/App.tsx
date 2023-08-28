import React, { useState } from 'react';
import Home from './pages/home/Home';
import '../stylesheet/scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import { cart, handleAddToCart } from './shared/services';
import CartItemModel from './models/cart/cart-item';

function App() {
  const [cartCount, setCartCount] = useState(cart.cartCount());

  const addToCart = (cartItem: CartItemModel) => {
    handleAddToCart(cartItem);
    setCartCount(cart.cartCount());
  };


  return (
    <>
      <Header cartCount={cartCount} />
        <Routes>
          <Route path='/' element={<Home handleAddToCart={addToCart} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
