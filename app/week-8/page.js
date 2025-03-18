"use client";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    // Clean up the item name to use as ingredient
    const cleanName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");
    
    setSelectedItemName(cleanName);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-pink-700 py-2 border-b-4 border-pink-300">
          ✨ My Shopping List ✨
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          
          <div className="flex-1 md:mt-0 mt-6">
            <div className="sticky top-6">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}