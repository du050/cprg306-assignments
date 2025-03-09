// Add "use client" directive at the top of the file
"use client";

// Import components and items data
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './item.json';
import { useState } from 'react';

export default function Page() {
  // Initialize state with items data
  const [items, setItems] = useState(itemsData);

  // Event handler for adding a new item
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      {/* Pass the event handler and items to the components */}
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
