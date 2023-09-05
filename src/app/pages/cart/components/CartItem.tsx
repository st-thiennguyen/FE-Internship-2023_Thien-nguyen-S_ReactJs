import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CartItemModel } from '../../../models';
import { removeItemCart, updateQuantityItemCart } from '../../../redux/actions';

interface CartItemComponentProps {
  cartItem: CartItemModel;
}

const CartItem = (props: CartItemComponentProps) => {
  const cartItem: CartItemModel = props.cartItem;

  const [isEditable, setEditable] = useState(false);

  const quantityRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(removeItemCart(cartItem.id));
  };

  const handleUpdateQuantity = (quantity: number) => {
    dispatch(updateQuantityItemCart(cartItem.id, quantity));
  };

  const blurToQuantityInput = () => {
    const quantityInput: number = Number(quantityRef.current?.value);
    if (quantityInput > 0) {
      dispatch(updateQuantityItemCart(cartItem.id, quantityInput));
    }
    setEditable(false);
  };

  const enterToQuantityInput = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const quantityInput: number = Number(quantityRef.current?.value);
      if (quantityInput > 0) {
        dispatch(updateQuantityItemCart(cartItem.id, quantityInput));
      }
      setEditable(false);
    }
  };

  return (
    <>
      <tr className="cart-item">
        <td className="product-image">
          <a href="/" className="product-link">
            <div className="product-img d-inline-flex">
              <img src={cartItem.image} alt={cartItem.name} />
            </div>
          </a>
        </td>
        <td className="product-name">
          <a href="/" className="product-link">
            {cartItem.name}
          </a>
        </td>
        <td className="product-price">${cartItem.finalPrice?.toFixed(2)}</td>
        <td className="product-quantity">
          {isEditable ? (
            <input
              ref={quantityRef}
              className="quantity"
              type="number"
              autoFocus
              onBlur={blurToQuantityInput}
              onKeyDown={enterToQuantityInput}
            />
          ) : (
            <>
              <button
                className="btn-cart-minus"
                onClick={() => handleUpdateQuantity(cartItem.quantity - 1)}
              >
                -
              </button>
              <span
                className="quantity"
                onDoubleClick={() => setEditable(true)}
              >
                {cartItem.quantity}
              </span>
              <button
                className="btn-cart-plus"
                onClick={() => handleUpdateQuantity(cartItem.quantity + 1)}
              >
                +
              </button>
            </>
          )}
        </td>
        <td className="product-subtotal">${cartItem.subTotal?.toFixed(2)}</td>
        <td className="product-remove">
          <button className="product-remove-link" onClick={handleDeleteItem}>
            <i className="icon icon-small icon-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
