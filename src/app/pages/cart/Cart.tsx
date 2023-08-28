import CartList from './components/CartList';
import CartHeader from './components/CartHeader';
import CartItem from '../../models/cart/cart-item';
import CartItemModel from '../../models/cart/cart-item';

interface CartComponentProps {
  cartList: CartItemModel[];
  handleChangeQuantity: Function;
  handleRemoveItem: Function;
  cartTotal: number;
}

const Cart = (props: CartComponentProps) => {
  const cartList: CartItem[] = props.cartList;

  return (
    <>
      <CartHeader />
      <CartList
        carts={cartList}
        cartTotal={props.cartTotal}
        handleRemoveItem={props.handleRemoveItem}
        handleChangeQuantity={props.handleChangeQuantity}
      />
    </>
  );
};

export default Cart;
