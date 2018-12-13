import React from "react";
import { connect } from "react-redux";

function getProductById(products, id) {
  return products.find(p => p.id === id);
}

function CartItem({ product, quantity }) {
  return (
    <div>
      {product.name} - {quantity}
    </div>
  );
}

class CartPage extends React.Component {
  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <h1>Cart</h1>

        {this.props.cartItems.map(item => (
          <CartItem
            key={item.productId}
            product={getProductById(this.props.products, item.productId)}
            quantity={item.quantity}
          />
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  cartItems: state.cart.products,
  products: state.products.list
});

const mapDispatch = dispatch => ({
  loadProducts: dispatch.products.loadAll
});

export default connect(
  mapState,
  mapDispatch
)(CartPage);
