'use client';
import React, { useState } from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    // Increment function that updates the quantity
    function increment() {
        if (quantity < 20) {
            setQuantity(prevQuantity => prevQuantity + 1);  
        }
    }

    // Decrement function that updates the quantity
    function decrement() {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);  
        }
    }

    function handleSubmission(event) {
    event.preventDefault();

    const item = {
        name,
        quantity,
        category
    };

    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
    }

    return (
        <div className="p-6 bg-blue-50 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Adjust Quantity</h2>
            <p className="text-xl text-blue-600 mb-6">Quantity: <span className="font-bold">{quantity}</span></p>
            {/* button to decrement and increment the quantity */}
            <div className="flex justify-between">
                <button
                    onClick={decrement}
                    disabled={quantity <= 1}
                    className="px-6 py-2 bg-blue-300 text-blue-800 rounded-lg disabled:opacity-50 hover:bg-blue-400 transition duration-300"
                >
                    Decrement
                </button>
                <button
                    onClick={increment}
                    disabled={quantity >= 20}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600 transition duration-300"
                >
                    Increment
                </button>
            </div>
           
           {/* forms */}
            <form onSubmit={handleSubmission} className="mt-6 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-blue-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="category" className="block text-blue-700 font-medium mb-2">Category</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Submit
                </button>
            </form>

        </div>
    );
}
