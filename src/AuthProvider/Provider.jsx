import React, { useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,signInWithPopup
} from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { createContext } from 'react';
export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};


const Provider = ({children}) => {
    const [user,setUser]=useState(null);

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

  const LogIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
   const logOut = () => {
    return signOut(auth);
  };

    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
    const AuthData = {

        user,
        setUser,
        createUser,
        LogIn,
        logOut,
        signInWithGoogle,
        updateUser

    }

      return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default Provider;