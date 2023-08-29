import { GLOBAL_KEY } from '../../shared/constants';
import { CartItemModel } from './cart-item';

interface ICart {
  items: CartItemModel[];
  addItem(product: CartItemModel): void;
  updateItem(idProd: number, quantity: number): void;
  saveCart(): void;
  deleteItem(idProd: number): void;
  getTotal(): number;
  cartCount(): number;
}

export class CartModel implements ICart {
  items: CartItemModel[];

  constructor(items?: CartItemModel[]) {
    this.items = items ?? this.getCartDatabase();
  }

  getCart() {
    return this.items;
  }

  getCartDatabase(): CartItemModel[] {
    return JSON.parse(localStorage.getItem(GLOBAL_KEY.CART)!) || [];
  }

  addItem(item: CartItemModel): void {
    console.log(this.items, 'INput');

    const cartItem = this.items.find((prod) => prod.id === item.id);
    if (!cartItem) {
      this.items.push(item);
    } else {
      cartItem.quantity += item.quantity;
      cartItem.subTotal += item.finalPrice * item.quantity;
    }
    console.log(this.items, 'Out put');

    this.saveCart();
  }

  updateItem(idProd: number, quantity: number): void {
    let cartItem = this.items.find((item) => item.id === idProd);
    if (cartItem !== null) {
      cartItem!.quantity = quantity;
      cartItem!.subTotal = cartItem!.finalPrice * cartItem!.quantity;
    }
    if (cartItem?.quantity === 0) {
      this.deleteItem(idProd);
    }
    this.saveCart();
  }

  getSubTotalItem(cartItemId: number): number {
    const item = this.items.find((prod) => prod.id === cartItemId);
    return item?.subTotal || 0;
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
    return item?.quantity || 0;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => (total += item.quantity * item.finalPrice), 0);
  }

  cartCount(): number {
    return this.items.reduce((total, item) => (total += item.quantity), 0);
  }
}
