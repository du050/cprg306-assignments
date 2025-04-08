"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import shoppingListService from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";



export default function Page() {
  const { user, getCurrentUserId } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = async (newItem) => {
    const userId = getCurrentUserId();
    if (!userId) {
      console.error("User not authenticated");
      return;
    }
    
    try {
      const addedItem = await shoppingListService.addItem(userId, newItem);
      newItem.id = addedItem.id;
      setItems([...items, newItem]);
    } catch (error) {
      console.error("Failed to add item", error);
    }
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name.split(",")[0].trim().replace(/[^\w\s]/gi, "");
    setSelectedItemName(cleanName);
  };

  useEffect(() => {
    const loadItems = async () => {
      const userId = getCurrentUserId();
      if (!userId) return;
      try {
        const items = await shoppingListService.getItems(userId);
        setItems(items);
      } catch (error) {
        console.error("Failed to load items", error);
      }
    };

    loadItems();
  }, [user]); // Ensure user is available before fetching items

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
