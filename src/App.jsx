import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import productsData from "../products.json";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [...new Set(productsData.map((p) => p.category))];
  const filteredProducts = productsData.filter(
    (product) =>
      (!searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!selectedCategory || product.category === selectedCategory)
  );

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center mt-4">Trending Products</h1>
      {selectedProduct ? (
        <ProductDetails
          product={productsData.find((p) => p.id === selectedProduct)}
          onBack={() => setSelectedProduct(null)}
        />
      ) : (
        <>
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
