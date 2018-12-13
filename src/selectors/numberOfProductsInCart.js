export default function numberOfProductsInCart(cart) {
  return cart.products.reduce((prev, product) => prev + product.quantity, 0);
}
