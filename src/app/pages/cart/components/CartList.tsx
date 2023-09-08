import lottie from 'lottie-web';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import cartEmptyAnim from '../../../../assets/animation/cart-emty.json';
import { CartItemModel } from '../../../models';
import { removeItemCart } from '../../../redux/action';
import Modal from '../../../shared/components/Modal';
import CartItem from './CartItem';
import PopUpDelete from './PopUpDelete';

const CartList = () => {
  const animationRef = useRef<any>(null);

  const dispatch = useDispatch();

  const cartList = useSelector((state: any) => state.cart.items);

  const [openModal, setOpenModal] = useState(false);

  const [idItem, setIdItem] = useState<number>();

  const toggleModal = (idItem: number) => {
    setOpenModal(!openModal);
    setIdItem(idItem);
  };

  const handleDeleteItem = () => {
    if (idItem) {
      dispatch(removeItemCart(idItem));
      setOpenModal(!openModal);
    }
  };

  const cartTotal = useMemo(() => {
    return cartList.reduce(
      (total: number, item: CartItemModel) => (total += item.subTotal),
      0,
    );
  }, [cartList]);

  const lengthCart = cartList.length > 0;

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
            {cartList?.length > 0 ? (
              <table className="cart-table">
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
                  {cartList &&
                    cartList?.map((cartItem: CartItemModel) => {
                      return (
                        <CartItem
                          toggleModal={toggleModal}
                          cartItem={cartItem}
                          key={cartItem.id}
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
              {cartList?.length > 0 && (
                <div className="d-flex justify-end item-center cart-checkout">
                  <p className="total-price">
                    Total :{' '}
                    <span className="price" id="cart-total-price">
                      ${cartTotal?.toFixed(2)}
                    </span>
                  </p>

                  <a href="/" className="cart-checkout btn btn-primary">
                    Proceed checkout
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <PopUpDelete
            onCancel={() => setOpenModal(false)}
            onExcute={handleDeleteItem}
          />
        </Modal>
      </section>
    </>
  );
};

export default CartList;
