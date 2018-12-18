import React from "react";
import { connect } from "react-redux";
import CartItem from "./../components/CartItem";

import numberOfProductsInCartSelector from "../selectors/numberOfProductsInCart";
import totalPriceSelector from "../selectors/totalPrice";

class CartPage extends React.Component {
  render() {
    const { cartItems, productsQuantity, totalPrice } = this.props;
    return (
      <div>
        <h1>Cart</h1>

        {cartItems.map(item => (
          <CartItem
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
        <br />
        <div>
          В корзині {productsQuantity} продуктів на суму {totalPrice} грн
        </div>
      </div>
    );
  }
}

const mapState = ({ cart }) => ({
  cartItems: cart.items,
  productsQuantity: numberOfProductsInCartSelector(cart),
  totalPrice: totalPriceSelector(cart)
});

export default connect(mapState)(CartPage);
