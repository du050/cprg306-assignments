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
    <div style={styles.container}>
      {/* Pass the event handler and items to the components */}
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
};
