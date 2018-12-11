import React from "react";
import { Link } from "react-router-dom";

export default function({ product }) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>{product.name}</Link>
    </div>
  );
}
