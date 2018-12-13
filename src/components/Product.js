import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export function Product({ product, category, addProductToCart }) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>
        {product.name} ({category ? category.name : "без категорії"})
      </Link>

      <button onClick={addProductToCart}>в кошик</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addProductToCart: () => dispatch.cart.addProduct(ownProps.product)
});
export default connect(
  null,
  mapDispatchToProps
)(Product);
