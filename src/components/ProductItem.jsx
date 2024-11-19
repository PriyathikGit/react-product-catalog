import React from "react";

const ProductItem = ({ product, onViewDetails, isInCart, removeCart }) => {
  
  return (
    <div
      // className="m-4 flex flex-col items-center hover:-translate-y-2 md:transition-transform duration-300 ease-in-out flex-[0_0_30%]"
      className={isInCart ?
        "m-4 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 ease-in-out flex-[0_0_30%]" :
        "p-4 flex flex-row items-center justify-between w-full border border-black rounded-md"
      }
    >
      <img src={product.image} alt={product.name}
        className={isInCart ? "max-w-full md:w-[10rem]" : "max-w-[5rem]"} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      {
        isInCart ? (<button
          onClick={() => onViewDetails(product.id)}
          className="border p-4 bg-blue-700 text-white rounded-md">
          View Details
        </button>) :
         null
      }
      {!isInCart &&
        <button
          onClick={() => removeCart(product.uniqueId)}
          className="p-2 bg-red-500 text-white rounded-md
        ">remove</button>
      }
    </div>
  );
};

export default ProductItem;
