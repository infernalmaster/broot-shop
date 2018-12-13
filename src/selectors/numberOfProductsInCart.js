export default function numberOfProductsInCart(cart) {
  return cart.items.reduce((prev, item) => prev + item.quantity, 0);
}
