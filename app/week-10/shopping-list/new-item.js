import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [formError, setFormError] = useState('');

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
    <div className="max-w-md mx-auto p-6 bg-pink-50 shadow-lg rounded-lg border-2 border-pink-300  text-black">
      <h2 className="text-2xl font-bold mb-4 text-pink-700 border-b-2 border-pink-200 pb-2">
        Add New Item
      </h2>
      
      <form onSubmit={handleSubmit}>
        {formError && (
          <div className="bg-red-100 text-red-700 p-2 rounded-lg mb-4 text-sm">
            {formError}
          </div>
        )}
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-pink-700 mb-1">
            Item Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            placeholder="Enter item name"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-pink-700 mb-1">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        
        <div className="mb-4 ">
          <label htmlFor="category" className="block text-sm font-medium text-pink-700 mb-1">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 shadow-sm"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
