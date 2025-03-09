import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a random id for the item
    const id = Math.random().toString(36).substr(2, 9);

    // Create the new item object
    const newItem = {
      id,
      name,
      quantity,
      category,
    };

    // Call the onAddItem function passed as prop
    onAddItem(newItem);

    // Clear the form
    setName('');
    setQuantity('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}
