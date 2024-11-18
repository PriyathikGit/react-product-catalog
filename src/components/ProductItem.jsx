import React from "react";

const ProductItem = ({ product, onViewDetails }) => {

  return (
    <div className="m-4 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <img src={product.image} alt={product.name} className="max-w-full md:w-[10rem]" />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button
        onClick={() => onViewDetails(product.id)}
        className="border p-4 bg-blue-700 text-white rounded-md">View Details</button>
    </div>
  );
};

export default ProductItem;
