'use client';
import React, { useState } from 'react';

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

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

    return (
        <div className="p-6 bg-blue-50 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Adjust Quantity</h2>
            <p className="text-xl text-blue-600 mb-6">Quantity: <span className="font-bold">{quantity}</span></p>

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
        </div>
    );
}
