enum ProductStatus {
  AVAILABLE = 'Available',
  OUT_OF_STOCK = 'Out of Stock'
}
enum StorageKey {
  CART = 'cart',
  PRODUCT = 'products',
  USER = 'user'
}

const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export {
  ProductStatus, StorageKey, EmailRegex
};

