import React, { useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import '../stylesheet/scss/style.scss';

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import { CartItemModel, CartModel } from './models';
import { Header, Footer } from './shared/layout';
import { GLOBAL_KEY } from './shared/constants';

function App() {
  const [cartList, setCartList] = useState<CartItemModel[]>(
    () => JSON.parse(localStorage.getItem(GLOBAL_KEY.CART)!) || []
  );
  const cart = new CartModel([...cartList]);

  const { pathname } = useLocation();

  const addToCart = (cartItem: CartItemModel) => {
    cart.addItem(cartItem);
    setCartList([...cart.getCart()]);
  };

  const handleChangeQuantity = (idProduct: number, quantity: number) => {
    cart.updateItem(idProduct, quantity);
    setCartList([...cart.getCart()]);
  };

  const handleRemoveItem = (idProduct: number) => {
    cart.deleteItem(idProduct);
    setCartList([...cart.getCart()]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const routes = [
    { path: '/', element: <Home handleAddToCart={addToCart} /> },
    {
      path: '/cart',
      element: (
        <Cart
          cartTotal={new CartModel().getTotal()}
          cartList={cartList}
          handleChangeQuantity={handleChangeQuantity}
          handleRemoveItem={handleRemoveItem}
        />
      )
    }
  ];

  return (
    <>
      <Header cartCount={new CartModel().cartCount()} />
      <Routes>
        {routes.length > 0 &&
          routes.map((route) => {
            return <Route path={route.path} element={route.element} key={route.path} />;
          })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
