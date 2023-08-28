import Cart from '../../models/cart/cart';
import CartItem from '../../models/cart/cart-item';

export let cart: Cart = new Cart([]);

export const handleAddToCart = (cartItem: CartItem): void => {
  cart.addItem(cartItem);
};
