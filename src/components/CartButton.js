import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import numberOfProductsInCartSelector from "../selectors/numberOfProductsInCart";
import totalPriceSelector from "../selectors/totalPrice";

export function CartButton({ productsQuantity, totalPrice }) {
  return (
    <Link to="/cart">
      Кошик ({productsQuantity} продуктів на суму {totalPrice} грн)
    </Link>
  );
}

const mapState = state => ({
  productsQuantity: numberOfProductsInCartSelector(state.cart),
  totalPrice: totalPriceSelector(state.cart)
});

export default connect(mapState)(CartButton);
