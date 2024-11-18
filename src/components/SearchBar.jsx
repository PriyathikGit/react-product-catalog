import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
   <div className="flex justify-center m-6">
     <input
      type="text"
      placeholder="Search products..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full border border-slate-500 md:max-w-[50rem] px-2"
    />
   </div>
  );
};

export default SearchBar;
