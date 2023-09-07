import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CartItemModel } from '../../../models';
import { removeItemCart, updateQuantityItemCart } from '../../../redux/action';

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

  const handleUpdateQuantityInput = () => {
    const quantityInput: number = parseInt(quantityRef.current!.value);
    if (quantityInput > 0 && quantityInput < 100) {
      dispatch(updateQuantityItemCart(cartItem.id, quantityInput));
    } else {
      alert('Quantity must be besthan 0 and smaller than 100');
    }
    setEditable(false);
  };

  const blurToQuantityInput = () => {
    handleUpdateQuantityInput();
  };

  const enterToQuantityInput = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleUpdateQuantityInput();
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
            <h4 className="product-name-under">{cartItem.name}</h4>
          </a>
        </td>
        <td className="product-name">
          <a href="/" className="product-link">
            {cartItem.name}
          </a>
        </td>
        <td className="product-price">${cartItem.finalPrice?.toFixed(2)}</td>
        <td className="product-quantity">
          <div className="product-quantity-wrapper d-flex flex-column item-center">
            {isEditable ? (
              <input
                ref={quantityRef}
                className="quantity"
                type="number"
                defaultValue={cartItem.quantity}
                autoFocus
                onBlur={blurToQuantityInput}
                onKeyDown={enterToQuantityInput}
              />
            ) : (
              <>
                <div className="product-quantity-action d-flex item-center">
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
                </div>
              </>
            )}
            <hr className="divided" />
            <button
              className="btn product-remove-link"
              onClick={handleDeleteItem}
            >
              Delete
            </button>
          </div>
        </td>
        <td className="product-subtotal">${cartItem.subTotal?.toFixed(2)}</td>
        <td className="product-remove">
          <button
            className="btn product-remove-link"
            onClick={handleDeleteItem}
          >
            <i className="icon icon-small icon-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
