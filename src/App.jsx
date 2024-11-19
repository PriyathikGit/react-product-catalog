import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import productsData from "../products.json";
import CartPage from "./components/CartPage";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addToCart, setAddToCart] = useState([])
  const [openCart, setOpenCart] = useState(false)

  const categories = [...new Set(productsData.map((p) => p.category))];

  const filteredProducts = productsData.filter(
    (product) =>
      (!searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!selectedCategory || product.category === selectedCategory)
  );

  const handleAddToCart = (product) => {
    setAddToCart((prevCart) => [...prevCart, {
      ...product, uniqueId: product.uniqueId || `${product.id}-${Date.now()}`
    }])
  }

  const handleRemoveFromCart = (uniqueId) => {
    setAddToCart((prevCart) => prevCart.filter((p) => p.uniqueId !== uniqueId))
  }
  console.log(addToCart,"ProductAdded");
  
  return (
    <div className="h-full w-full">
      <div className="w-8 absolute right-0 mr-4 mt-2 hover:cursor-pointer"
        onClick={() => setOpenCart(true)}
      >
        <span
          className="absolute right-0 w-7 h-7 rounded-2xl bg-violet-600 text-white flex items-center justify-center">
          {addToCart.length}
        </span>
        <svg viewBox="0 0 24 24" fill="none" className="relative right-6 top-4" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </div>
      {openCart && (
        <CartPage
          setOpenCart={setOpenCart}
          products={addToCart}
          removeCart={handleRemoveFromCart}
        />
      )}

      {selectedProduct ? (
        <ProductDetails
          product={productsData.find((p) => p.id === selectedProduct)}
          onBack={() => setSelectedProduct(null)}
          cart={handleAddToCart}
        />
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center pt-4">Trending Products</h1>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <ProductList
            products={filteredProducts}
            onViewDetails={setSelectedProduct}
          />
        </>
      )}
    </div>
  );
}

export default App;
