import { PRODUCT_STATUS } from '../../shared/constants';

export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  status: PRODUCT_STATUS;
}

export class ProductModel implements IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  status: PRODUCT_STATUS;
  finalPrice: number;
  constructor({ id, name, image, price, discount, status }: IProduct) {
    this.id = id;
    this.name = name || '';
    this.image = image || '';
    this.price = price || 0;
    this.discount = discount ?? 0;
    this.status = status || PRODUCT_STATUS.AVAILABLE;
    this.finalPrice = this.price - (this.price / 100) * this.discount;
  }
}
