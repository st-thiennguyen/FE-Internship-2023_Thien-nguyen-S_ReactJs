import React from 'react';

import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import CartItemModel from '../../../models/cart/cart-item';

interface CartListComponentProps {
  carts: CartItemModel[];
  cartTotal: number;
  handleRemoveItem: Function;
  handleChangeQuantity: Function;
}

const CartList = (props: CartListComponentProps) => {
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
                  props.carts?.map((cartItem: CartItemModel) => {
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
              <Link to={'/'} className='btn btn-primary'>
                Back to home
              </Link>
              <div className='d-flex justify-end item-center'>
                <p className='total-price'>
                  Total :{' '}
                  <span className='price' id='cart-total-price'>
                    ${props.cartTotal?.toFixed(2)}
                  </span>
                </p>
                {props.carts?.length > 0 && (
                  <a href='/' className='cart-checkout btn btn-primary'>
                    Proceed checkout
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartList;
