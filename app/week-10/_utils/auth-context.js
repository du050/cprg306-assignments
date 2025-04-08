"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
 
  const gitHubSignIn = async () => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setError(null);
      return result;
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
      setError(error);
      throw error;
    }
  };

  const getCurrentUserId = () => {
    return user ? user.uid : null;
  };
 
  const firebaseSignOut = async () => {
    try {
      await signOut(auth);
      setError(null);
    } catch (error) {
      console.error("Sign Out Error:", error);
      setError(error);
      throw error;
    }
  };
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
 
  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut, getCurrentUserId, error }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useUserAuth = () => {
  return useContext(AuthContext);
};