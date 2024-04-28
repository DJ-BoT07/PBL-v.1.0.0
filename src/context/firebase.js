import { initializeApp } from "firebase/app";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAhiVhYmg09PmtgHWdARSbcCNor5b2moBo",
  authDomain: "ml-int-95812.firebaseapp.com",
  projectId: "ml-int-95812",
  storageBucket: "ml-int-95812.appspot.com",
  messagingSenderId: "224724771417",
  appId: "1:224724771417:web:5748d47e51a56a13104748"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
export const useFirebase = () => useContext(FirebaseContext);

export  const FirebaseProvider = (props) => {
  const [user, setUser] = useState(firebaseAuth.currentUser); // Initialize user state with current user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user); // Update user state when authentication state changes
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from the auth state listener
  }, []);

  const signupUserWithEmailandPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signinUserwithEmailandPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithRedirect(firebaseAuth, googleProvider);
  };

  const isLoggedIn = user !== null; // Check if user is logged in

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailandPassword,
        signinUserwithEmailandPassword,
        signInWithGoogle,
        isLoggedIn
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
