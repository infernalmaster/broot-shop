export default function totalPrice(cart, products) {
  return cart.items.reduce((prev, { product, quantity }) => {
    return prev + product.price * quantity;
  }, 0);
}
