import PRODUCT_STATUS from './product-status';

export interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  discount?: number;
  status: PRODUCT_STATUS;
}
