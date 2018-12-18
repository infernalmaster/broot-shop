export default function totalPrice(cart, products) {
  const price = cart.items.reduce((prev, { product, quantity }) => {
    return prev + product.price * quantity;
  }, 0);

  return Number(price).toFixed(2);
}
