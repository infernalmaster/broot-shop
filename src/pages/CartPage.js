import React from "react";
import { connect } from "react-redux";

function CartItem({ product, quantity }) {
  return (
    <div>
      {product.name} - {quantity}
    </div>
  );
}

class CartPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>

        {this.props.cartItems.map(item => (
          <CartItem
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
          />
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  cartItems: state.cart.items
});

const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  mapDispatch
)(CartPage);
