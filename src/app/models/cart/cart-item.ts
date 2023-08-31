import { IProduct, ProductModel } from '../product/product';

interface ICartItem extends Omit<IProduct, 'status'> {
  quantity: number;
  subTotal: number;
  finalPrice: number;
}

export class CartItemModel implements ICartItem {
  subTotal: number;
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  quantity: number;
  finalPrice: number;
  constructor({ id, name, image, price, discount, finalPrice }: ProductModel, quantity: number) {
    this.id = id;
    this.name = name || '';
    this.image = image || '';
    this.price = price || 0;
    this.discount = discount || 0;
    this.quantity = quantity || 0;
    this.finalPrice = finalPrice || 0;
    this.subTotal = finalPrice * this.quantity;
  }
}
