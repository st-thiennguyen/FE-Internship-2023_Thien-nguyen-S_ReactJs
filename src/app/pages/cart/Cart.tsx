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
      {cartList.length > 0 ? <CartList
        carts={cartList}
        cartTotal={props.cartTotal}
        handleRemoveItem={props.handleRemoveItem}
        handleChangeQuantity={props.handleChangeQuantity}
      /> : 
      <div className="">
        <div className="cart-empty-animation"></div>
        <p className="cart-empty-title text-center">Opps, Your cart is empty</p>
      </div>
      }
    </>
  );
};

export default Cart;
