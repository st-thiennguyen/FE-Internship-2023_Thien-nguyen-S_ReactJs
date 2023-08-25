import CartItem from './cart-item';

export default interface CartProps {
  items: CartItem[];
  addItem(product: CartItem): void;
  updateItem(idProd: number, quantity: number): void;
  saveCart(): void;
  deleteItem(idProd: number): void;
  getTotal(): number;
  cartCount(): number;
  getCart(): void;
}
