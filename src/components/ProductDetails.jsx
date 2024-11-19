import React from "react";

const ProductDetails = ({ product, onBack,cart }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center pt-12 md:pt-0">{product.name}</h1>
      <button onClick={onBack} className="border border-black p-2 ml-6 mt-4 rounded-md">Back to Products</button>
      <div className=" flex flex-col items-center gap-2 mt-4">
        <img src={product.image} alt={product.name} className="md:max-w-[20rem]" />
        <p>{product.description}</p>
        <button
          onClick={() => cart(product)}
          className="border p-4 bg-blue-700 text-white rounded-md"
        >Buy: ${product.price.toFixed(2)}</button>
      </div>
    </>
  );
};

export default ProductDetails;
