"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  // Function to sort items
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-pink-50 shadow-lg rounded-lg border-2 border-pink-300 mt-6">
    <div className="flex justify-between mb-4 items-center border-b-2 border-pink-200 pb-3">
      <h2 className="text-2xl font-bold text-pink-700">Shopping List</h2>
      <div className="flex gap-2">
        <button
          className={`px-3 py-1.5 rounded-full text-sm font-medium shadow-sm transition-all ${
            sortBy === "name" 
              ? "bg-pink-500 text-white" 
              : "bg-white text-pink-600 border border-pink-300 hover:bg-pink-100"
          }`}
          onClick={() => setSortBy("name")}
        >
          Sort by Name
        </button>
        <button
          className={`px-3 py-1.5 rounded-full text-sm font-medium shadow-sm transition-all ${
            sortBy === "category" 
              ? "bg-pink-500 text-white" 
              : "bg-white text-pink-600 border border-pink-300 hover:bg-pink-100"
          }`}
          onClick={() => setSortBy("category")}
        >
          Sort by Category
        </button>
      </div>
    </div>
    
    {sortedItems.length === 0 ? (
      <p className="text-pink-600 italic text-center py-8">
        Your shopping list is empty ✨
      </p>
    ) : (
      <ul className="space-y-1">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    )}
  </div>
  );
}