import { GLOBAL_KEY } from '../../shared/constants/constants';
import CartItem from './cart-item';

interface ICart {
  items: CartItem[];
  addItem(product: CartItem): void;
  updateItem(idProd: number, quantity: number): void;
  saveCart(): void;
  deleteItem(idProd: number): void;
  getTotal(): number;
  cartCount(): number;
  getCart(): void;
}

class Cart implements ICart {
  items: CartItem[];
  constructor(items: CartItem[]) {
    this.items = items;
    this.getCart();
  }

  getCart(): void {
    const cart = JSON.parse(localStorage.getItem(GLOBAL_KEY.CART)!) || [];
    this.items = cart;
  }

  addItem(item: CartItem): void {
    const cartItem = this.items.find((prod) => prod.id === item.id);
    if (!cartItem) {
      this.items.push(item);
    } else {
      cartItem.quantity += item.quantity;
      cartItem.subTotal += item.finalPrice * item.quantity;
    }
    this.saveCart();
  }

  updateItem(idProd: number, quantity: number): void {
    let cartItem = this.items.find((item) => item.id === idProd);
    if (cartItem !== null) {
      cartItem!.quantity += quantity;
      cartItem!.subTotal = cartItem!.finalPrice * cartItem!.quantity;
    }
    if (cartItem?.quantity === 0) {
      this.deleteItem(idProd);
    }
    this.saveCart();
  }

  getSubTotalItem(cartItemId: number): number {
    const item = this.items.find((prod) => prod.id === cartItemId);
    return item ? item.subTotal : 0;
  }

  saveCart(): void {
    localStorage.setItem(GLOBAL_KEY.CART, JSON.stringify(this.items));
  }

  deleteItem(idProd: number): void {
    this.items = this.items.filter((prod) => prod.id !== idProd);
    this.saveCart();
  }

  getQuantityItem(cartItemId: number): number {
    const item = this.items.find((prod) => prod.id === cartItemId);
    return item ? item.quantity : 0;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => (total += item.quantity * item.finalPrice), 0);
  }

  cartCount(): number {
    return this.items.reduce((total, item) => (total += item.quantity), 0) ?? 0;
  }
}

export default Cart;
