import PRODUCT_STATUS from './product-status';
import { ProductProps } from './product.interface';

class Product implements ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount: number;
  status: PRODUCT_STATUS;
  finalPrice: number;
  constructor({ id, name, image, price, discount, status }: ProductProps) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.discount = discount ?? 0;
    this.status = status;
    this.finalPrice = this.price - (this.price / 100) * this.discount;
  }
}

export default Product;
