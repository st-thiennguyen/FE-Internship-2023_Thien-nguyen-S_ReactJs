import React, { useEffect, useState } from 'react';
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import CartList from './components/CartList';
import CartHeader from './components/CartHeader';
import { cart } from '../../shared/services';
import CartItem from '../../models/cart/cart-item';

const Cart = () => {
  const cartList: CartItem[] = cart.items;

  const [carts, setCart] = useState(cartList);

  const handleChangeQuantity = (idProduct: number, quantity: number) => {
    cart.updateItem(idProduct, quantity);
    setCart([...cart.items]);
  };

  const handleRemoveItem = (idProduct: number) => {
    cart.deleteItem(idProduct);
    setCart([...cart.items]);
  };

  return (
    <>
      <Header />
      <CartHeader />
      <CartList
        carts={carts}
        cartTotal={cart.getTotal()}
        handleRemoveItem={handleRemoveItem}
        handleChangeQuantity={handleChangeQuantity}
      />
      <Footer />
    </>
  );
};

export default Cart;
