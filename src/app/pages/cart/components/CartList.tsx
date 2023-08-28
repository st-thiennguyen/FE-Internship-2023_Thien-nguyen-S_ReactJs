import React from 'react';
import CartItem from './CartItem';
import CartItemModel from '../../../models/cart/cart-item';

const CartList = (props: any) => {
  return (
    <>
      <section className='section section-cart'>
        <div className='container'>
          <div id='shop-cart' className='cart-wrapper'>
            <table className='cart-table' id='cart-list'>
              <thead>
                <tr className='table-header'>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.carts &&
                  props.carts.map((cartItem: CartItemModel) => {
                    return (
                      <CartItem
                        cartItem={cartItem}
                        key={cartItem.id}
                        handleRemoveItem={props.handleRemoveItem}
                        handleChangeQuantity={props.handleChangeQuantity}
                      />
                    );
                  })}
              </tbody>
            </table>
            <div className='cart-total d-flex justify-between item-center'>
              <a href='index.html' className='btn btn-primary'>
                Back to home
              </a>
              <div className='d-flex justify-end item-center'>
                <p className='total-price'>
                  Total :{' '}
                  <span className='price' id='cart-total-price'>
                    ${props.cartTotal.toFixed(2)}
                  </span>
                </p>
                <a href='/' className='cart-checkout btn btn-primary'>
                  Proceed checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartList;
