export default function totalPrice(cart, products) {
  return cart.products.reduce((prev, { productId, quantity }) => {
    const product = products.find(p => p.id === productId);

    return prev + product.price * quantity;
  }, 0);
}
