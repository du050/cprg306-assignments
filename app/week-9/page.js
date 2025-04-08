import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
// import {ShoppingList} from './shopping-list';



const LandingPage = () => {

    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error(error);
        }
    }

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    }

    function isLogged() {
        if (user ===null)  {
            <div>
            <button onClick={handleSignIn}>Log in</button>
            </div>
        } else {
            <div>
                <h3>Welcome, {user.displayName}</h3>
                <button onClick={firebaseSignOut}>Log On</button>
                {/* <ShoppingList /> */}
            </div>
    }}

    return (
        <div>
            <h1>User Access</h1>
            isLogged()
           
        </div>
       
    )};

export default LandingPage;