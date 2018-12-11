import React from "react";

export default function({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      {product.description}
    </div>
  );
}
