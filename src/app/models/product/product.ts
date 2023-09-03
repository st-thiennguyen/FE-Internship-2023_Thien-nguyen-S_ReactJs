import { ProductStatus } from '../../shared/constants';

export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  status?: ProductStatus;
}

export class ProductModel implements IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  status?: ProductStatus;
  finalPrice: number;
  constructor({ id, name, image, price, discount, status }: IProduct) {
    this.id = id;
    this.name = name || '';
    this.image = image;
    this.price = price || 0;
    this.discount = discount || 0;
    this.status = status || ProductStatus.AVAILABLE;
    this.finalPrice = this.price - (this.price / 100) * this.discount;
  }
}
