import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export function CartItem({ product, quantity, addOne, removeOne, remove }) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>{product.name}</Link>{" "}
      <button onClick={removeOne}>-1</button>
      {quantity}
      <button onClick={addOne}>+1</button> <button onClick={remove}>x</button>
    </div>
  );
}

const mapState = state => ({});

const mapDispatch = ({ cart }, { quantity, product }) => ({
  addOne: () => cart.setQuantity(product.id, quantity + 1),
  removeOne: () => cart.setQuantity(product.id, quantity - 1),
  remove: () => cart.removeProduct(product.id)
});

export default connect(
  mapState,
  mapDispatch
)(CartItem);
