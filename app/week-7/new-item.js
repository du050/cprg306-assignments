import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity || !category) {
      alert('Please fill in all fields.');
      return;
    }

    const id = Math.random().toString(36).substr(2, 9);
    const newItem = { id, name, quantity, category };
    onAddItem(newItem);

    // Clear input fields
    setName('');
    setQuantity('');
    setCategory('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white shadow-md rounded-lg p-6 max-w-full mx-auto flex space-x-4"
    >
      <div className="flex-1">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1">
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex-1">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button 
        type="submit" 
        className="w-auto bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition"
      >
        Add Item
      </button>
    </form>
  );
}
