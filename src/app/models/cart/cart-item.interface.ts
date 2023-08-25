import { ProductProps } from '../product/product.interface';

interface CartItemProps extends Omit<ProductProps, 'status'> {
  quantity: number;
  subTotal: number;
  finalPrice: number;
}

export default CartItemProps;
