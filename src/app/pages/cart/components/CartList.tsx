import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import cartEmptyAnim from '../../../../assets/animation/cart-emty.json';
import { CartItemModel } from '../../../models';
import CartItem from './CartItem';

interface CartListComponentProps {
  carts: CartItemModel[];
  cartTotal: number;
  handleRemoveItem: Function;
  handleChangeQuantity: Function;
}

const CartList = (props: CartListComponentProps) => {
  const animationRef = useRef<any>(null);

  const lengthCart = props.carts.length > 0;

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: animationRef.current,
      animationData: cartEmptyAnim,
      loop: true,
      autoplay: true,
    });
    return () => animation.destroy();
  }, [lengthCart]);

  return (
    <>
      <section className="section section-cart">
        <div className="container">
          <div id="shop-cart" className="cart-wrapper">
            {props.carts?.length > 0 ? (
              <table className="cart-table" id="cart-list">
                <thead>
                  <tr className="table-header">
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
            ) : (
              <div className="cart-empty text-center">
                <div className="cart-empty-animate" ref={animationRef}></div>
                <p className="cart-empty-title">
                  Opps, You dont have any item in cart !
                </p>
              </div>
            )}
            <div className="cart-total d-flex justify-between item-center">
              <Link to={'/'} className="btn btn-primary">
                Back to home
              </Link>
              <div className="d-flex justify-end item-center">
                <p className="total-price">
                  Total :{' '}
                  <span className="price" id="cart-total-price">
                    ${props.cartTotal?.toFixed(2)}
                  </span>
                </p>
                {props.carts?.length > 0 && (
                  <a href="/" className="cart-checkout btn btn-primary">
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
