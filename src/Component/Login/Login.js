import React from 'react';
import Auth from './useAuth'

const Login = () => {
    const auth = Auth();
    console.log(auth.user)
    const signInHandler = () =>{
        auth.signInWithGoogle()
        .then( result =>{
            window.location.pathname = "/";
        });
    }

    const signOutHandler = () =>{
        auth.signOut()
        .then( result =>{
            window.location.pathname = "/";
        });
    }
    return (
        <div style={{textAlign:'center'}}>
            <h1>This is Sign in and Sign out page</h1>
            {
                auth.user ? <button onClick={signOutHandler}>Sign Out</button> :
                <button onClick={signInHandler}>Sign In</button>
            }
        </div>
    );
};

export default Login;