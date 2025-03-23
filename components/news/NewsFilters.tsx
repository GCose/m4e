import type React from "react";

import { useState } from "react";

interface NewsFiltersProps {
  categories: string[];
  onFilterChange: (filters: { category: string; searchTerm: string }) => void;
}

const NewsFilters = ({ categories, onFilterChange }: NewsFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilterChange({ category, searchTerm });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onFilterChange({ category: selectedCategory, searchTerm: e.target.value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Search</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search news..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`block w-full text-left px-3 py-2 rounded-md ${
              selectedCategory === "all"
                ? "bg-red-100 text-red-700 font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Categories
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`block w-full text-left px-3 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-red-100 text-red-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFilters;
