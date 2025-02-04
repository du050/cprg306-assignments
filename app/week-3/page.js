import React from 'react';
import ItemList from './item-list';

const Page = () => {
    return (
        <main className="flex flex-col items-center p-6 bg-blue-50 min-h-screen">
            <h1 className="text-4xl font-bold text-blue-800 mb-6">Shopping List</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg sm:max-w-xl w-full">
                <ItemList />
            </div>
        </main>
    );
};

export default Page;
