import React from "react";
import { connect } from "react-redux";

import ProductExtended from "../components/ProductExtended";

interface Props {
  loadOne: Function,
  match: any,
  product: any
}

class ProductPage extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.loadOne(this.props.match.params.id);
  }

  render() {
    return this.props.product ? (
      <ProductExtended product={this.props.product} />
    ) : (
        "loading"
      );
  }
}

const mapState = (state, props) => ({
  product: state.products.list.find(
    product => product.id === props.match.params.id
  )
});

const mapDispatch = ({ products: { loadOne } }) => ({
  loadOne
});

export default connect(
  mapState,
  mapDispatch
)(ProductPage);
