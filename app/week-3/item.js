import React from 'react';

const Item = ({ name, quantity, category }) => {
    return (
        <li className="flex justify-between items-center p-4 border-b border-blue-200 bg-blue-50 rounded-md shadow-md">
            <span className="font-semibold text-blue-800">{name}</span>
            <span className="text-blue-600 font-medium">{quantity}</span>
            <span className="text-gray-500 text-sm italic">{category}</span>
        </li>
    );
};

export default Item;
