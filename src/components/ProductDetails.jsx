import React from "react";

const ProductDetails = ({ product, onBack }) => {
  return (
    <>
      <button onClick={onBack} className="border border-black p-2 ml-6 mt-4 rounded-md">Back to Products</button>
      <div className=" flex flex-col items-center gap-2 mt-4">
        <img src={product.image} alt={product.name} className="md:max-w-[20rem]"/>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="border p-4 bg-blue-700 text-white rounded-md">Price: ${product.price.toFixed(2)}</p>
      </div>
    </>
  );
};

export default ProductDetails;
