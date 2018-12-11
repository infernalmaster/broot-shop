import React from "react";
import { Link } from "react-router-dom";

export default function({ category }) {
  return (
    <div>
      <Link to={`/categories/${category.id}`}>{category.name}</Link>
    </div>
  );
}
