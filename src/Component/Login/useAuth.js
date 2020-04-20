import React, { createContext, useContext, useState, useEffect } from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Route, Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
    }
export const useAuth = ()=> useContext(AuthContext);
const getUser = (user)=>{
    const {displayName, email, photoURL} = user;
    return {Name:displayName, Email:email, photoURL}
}


export const PrivateRoute =({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }



const Auth = ( () => {
    const [user, setUser] = useState(null);

    // 
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .then( response =>{
            const signInUser = getUser(response.user);
            setUser(signInUser)
            return response.user;
        })
        .catch( error => {
            setUser(null);
            return error.massage;
        })
    }

    const signOut = () => {
        return firebase.auth().signOut()
        .then( () => {
            setUser(null);
        })
        .catch(function(error) {
            // An error happened.
        });
    }

    useEffect( () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              const currentUser = getUser(user)
              setUser(currentUser);
            } else {
              // No user is signed in.
            }
          });
    }, [])


    return {
        user,
        signInWithGoogle,
        signOut
    }
})

export default Auth;