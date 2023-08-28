import React, { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import '../stylesheet/scss/style.scss';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import CartItemModel from './models/cart/cart-item';
import CartModel from './models/cart/cart';

function App() {
  const cart = new CartModel([]);

  const [cartList, setCartList] = useState(cart.items);

  const [cartCount, setCartCount] = useState(cart.cartCount());

  const addToCart = (cartItem: CartItemModel) => {
    cart.addItem(cartItem);
    setCartCount(cart.cartCount());
  };

  const handleChangeQuantity = (idProduct: number, quantity: number) => {
    cart.updateItem(idProduct, quantity);
  };

  const handleRemoveItem = (idProduct: number) => {
    cart.deleteItem(idProduct);
  };

  const count: number = cartList.reduce((total, item) => (total += item.quantity), 0) ?? 0;

  useEffect(() => {
    setCartCount(count);
    setCartList([...cart.items]);
  }, [cart.items, count]);

  return (
    <>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path='/' element={<Home handleAddToCart={addToCart} />} />
        <Route
          path='/cart'
          element={
            <Cart
              cartTotal={cart.getTotal()}
              cartList={cartList}
              handleChangeQuantity={handleChangeQuantity}
              handleRemoveItem={handleRemoveItem}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
