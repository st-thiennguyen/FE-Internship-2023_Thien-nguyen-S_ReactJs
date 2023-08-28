import Product from '../product/product';
import CartItemProps from './cart-item.interface';

class CartItemModel implements CartItemProps {
  subTotal: number;
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  quantity: number;
  finalPrice: number;
  constructor({ id, name, image, price, discount, finalPrice }: Product, quantity: number) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity;
    this.finalPrice = finalPrice;
    this.subTotal = finalPrice * this.quantity;
  }
}

export default CartItemModel;
