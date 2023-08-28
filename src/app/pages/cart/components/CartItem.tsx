import CartItemModel from '../../../models/cart/cart-item';

interface CartItemComponentProps {
  cartItem: CartItemModel;
  handleRemoveItem: Function;
  handleChangeQuantity: Function;
}

const CartItem = (props: CartItemComponentProps) => {
  const cartItem: CartItemModel = props.cartItem;
  const handleDeleteItem = (idProduct: number) => {
    props.handleRemoveItem(idProduct);
  };

  const updateQuantity = (idProduct: number, quantity: number) => {
    props.handleChangeQuantity(idProduct, quantity);
  };
  return (
    <>
      <tr className='cart-item'>
        <td className='product-image'>
          <a href='/' className='product-link'>
            <div className='product-img d-inline-flex'>
              <img src={cartItem.image} alt={cartItem.name} />
            </div>
          </a>
        </td>
        <td className='product-name'>
          <a href='/' className='product-link'>
            {cartItem.name}
          </a>
        </td>
        <td className='product-price'>${cartItem.finalPrice.toFixed(2)}</td>
        <td className='product-quantity'>
          <button
            data-index='/'
            className='btn-cart-minus'
            onClick={() => updateQuantity(cartItem.id, -1)}
          >
            -
          </button>
          <span id='prod-quantity-cartItem.id' className='quantity'>
            {cartItem.quantity}
          </span>
          <button
            data-index='$cartItem.id'
            className='btn-cart-plus'
            onClick={() => updateQuantity(cartItem.id, 1)}
          >
            +
          </button>
        </td>
        <td id='product-subtotal-cartItem.id' className='product-subtotal'>
          ${cartItem.subTotal.toFixed(2)}
        </td>
        <td className='product-remove'>
          <button className='product-remove-link' onClick={() => handleDeleteItem(cartItem.id)}>
            <i className='icon icon-small icon-trash'></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
