import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onViewDetails }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around mt-4 mb-4 flex-wrap">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};

export default ProductList;