import React from "react";

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex justify-end mr-4 text-center gap-2">
     <span className="text-lg">Choose Categories</span>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border border-slate-900 rounded-md"
      >
        <option value="">All</option>
        {categories.map((category, index) => (
          <option
            key={index}
            value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
