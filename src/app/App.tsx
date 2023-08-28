import React, { useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import '../stylesheet/scss/style.scss';

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Header from './shared/layout/Header';
import Footer from './shared/layout/Footer';
import CartItemModel from './models/cart/cart-item';
import CartModel from './models/cart/cart';

function App() {
  const cart = new CartModel([]);

  const [cartList, setCartList] = useState(cart.items);

  const [cartCount, setCartCount] = useState(cart.cartCount());

  const { pathname } = useLocation();

  const addToCart = (cartItem: CartItemModel) => {
    cart.addItem(cartItem);
    setCartCount(cart.cartCount());
    setCartList([...cart.items]);
  };

  const handleChangeQuantity = (idProduct: number, quantity: number) => {
    cart.updateItem(idProduct, quantity);
    setCartList([...cart.items]);
  };

  const handleRemoveItem = (idProduct: number) => {
    cart.deleteItem(idProduct);
    setCartList([...cart.items]);
  };

  const count: number = cartList.reduce((total, item) => (total += item.quantity), 0) ?? 0;

  useEffect(() => {
    setCartCount(count);
  }, [count]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const routes = [
    { path: '/', element: <Home handleAddToCart={addToCart} /> },
    {
      path: '/cart',
      element: (
        <Cart
          cartTotal={cart.getTotal()}
          cartList={cartList}
          handleChangeQuantity={handleChangeQuantity}
          handleRemoveItem={handleRemoveItem}
        />
      )
    }
  ];

  return (
    <>
      <Header cartCount={cartCount} />
      <Routes>
        {routes.length > 0 && routes.map((route) => {
          return <Route path={route.path} element={route.element} key={route.path}/>
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
