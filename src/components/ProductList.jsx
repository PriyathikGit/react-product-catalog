import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onViewDetails, isInCart, removeCart }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start mt-4 mb-4 md:flex-wrap ">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
          // not in current in cart
          isInCart={!isInCart}
          removeCart={removeCart}
        />
      ))}
    </div>
  );
};

export default ProductList;