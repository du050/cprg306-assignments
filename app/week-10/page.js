"use client";
import React, { useState } from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';


const LandingPage = () => {
    const { user, gitHubSignIn, firebaseSignOut, error } = useUserAuth();
    const [authError, setAuthError] = useState(null);

    const handleSignIn = async () => {
        try {
            setAuthError(null);
            await gitHubSignIn();
        } catch (err) {
            console.error("Sign In Error:", err);
            setAuthError(err.message);
        }
    }

    const handleSignOut = async () => {
        try {
            setAuthError(null);
            await firebaseSignOut();
        } catch (err) {
            console.error("Sign Out Error:", err);
            setAuthError(err.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-cyan-800">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">User Authentication</h1>
                
                {authError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <span className="block sm:inline">{authError}</span>
                    </div>
                )}

                {user === null ? (
                    <button 
                        onClick={handleSignIn}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Sign In with GitHub
                    </button>
                ) : (
                    <div className="text-center">
                        <h3 className="text-xl mb-4">Welcome, {user.displayName}</h3>
                       <Link href="/week-10/shopping-list" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
                       <p>Go to Shopping</p>
                       </Link>
                        <button 
                            onClick={handleSignOut}
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LandingPage;