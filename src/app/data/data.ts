import prd1 from '../../assets/images/product-01.png';
import prd2 from '../../assets/images/product-02.png';
import prd3 from '../../assets/images/product-03.png';
import prd4 from '../../assets/images/product-04.png';
import PRODUCT_STATUS from '../models/product/product-status';
import { ProductProps } from '../models/product/product.interface';

const data: ProductProps[] = [
  {
    id: 1,
    name: 'T-Shirt Summer Vibes',
    image: prd1,
    price: 119.99,
    discount: 30,
    status: PRODUCT_STATUS.AVAILABLE
  },
  {
    id: 2,
    name: 'Loose Knit 3/4 Sleeve',
    image: prd2,
    price: 119.99,
    status: PRODUCT_STATUS.AVAILABLE
  },
  {
    id: 3,
    name: 'Basic Slim Fit T-Shirt',
    image: prd3,
    price: 119.99,
    status: PRODUCT_STATUS.OUT_OF_STOCK
  },
  {
    id: 4,
    name: 'Loose Textured T-Shirt',
    image: prd4,
    price: 119.99,
    status: PRODUCT_STATUS.AVAILABLE
  }
];

export default data;
