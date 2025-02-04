'use client';
import React, { useState } from 'react';

const itemStyle = {
    border: '1px solid #bbb',
    padding: '12px 16px',
    margin: '12px 0',
    borderRadius: '8px',
    backgroundColor: '#5A7996',
    color: '#fff',
    fontWeight: 'bold', 
    boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)', 
    transition: 'all 0.3s ease-in-out', 
};



const Item = ({ name, quantity, category }) => (
    <div style={itemStyle}>
        <h3>{name}</h3>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
    </div>
);

const ItemList = () => {
    const initialItems = [
        {
            name: "milk, 4 L 🥛",
            quantity: 1,
            category: "dairy",
        },
        {
            name: "bread 🍞",
            quantity: 2,
            category: "bakery",
        },
        {
            name: "eggs, dozen 🥚",
            quantity: 2,
            category: "dairy",
        },
        {
            name: "bananas 🍌",
            quantity: 6,
            category: "produce",
        },
        {
            name: "broccoli 🥦",
            quantity: 3,
            category: "produce",
        },
        {
            name: "chicken breasts, 1 kg 🍗",
            quantity: 1,
            category: "meat",
        },
        {
            name: "pasta sauce 🍝",
            quantity: 3,
            category: "canned goods",
        },
        {
            name: "spaghetti, 454 g 🍝",
            quantity: 2,
            category: "dry goods",
        },
        {
            name: "toilet paper, 12 pack 🧻",
            quantity: 1,
            category: "household",
        },
        {
            name: "paper towels, 6 pack",
            quantity: 1,
            category: "household",
        },
        {
            name: "dish soap 🍽️",
            quantity: 1,
            category: "household",
        },
        {
            name: "hand soap 🧼",
            quantity: 4,
            category: "household",
        },
    ];

    const [items, setItems] = useState(initialItems);

    // Function to shuffle the items array
    const randomizeItems = () => {
        const shuffledItems = [...items].sort(() => Math.random() - 0.5);
        setItems(shuffledItems);
    };

    return (
        <div>
             {/* Button to randomize the data */}
             <button
                onClick={randomizeItems}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#5A7996',
                    color: '#fff',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    border: 'none',
                    marginBottom: '20px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#4a6882')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#5A7996')}
            >
                Randomize List
            </button>


            {items.map((item, index) => (
                <Item key={index} {...item} />
            ))}
        </div>
    );
};

export default ItemList;