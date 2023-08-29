import CartList from './components/CartList';
import CartHeader from './components/CartHeader';
import { CartItemModel } from '../../models';

interface CartComponentProps {
  cartList: CartItemModel[];
  handleChangeQuantity: Function;
  handleRemoveItem: Function;
  cartTotal: number;
}

const Cart = (props: CartComponentProps) => {
  const cartList: CartItemModel[] = props.cartList;

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
