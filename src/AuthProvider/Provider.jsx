import React, { useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,sendPasswordResetEmail
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
     const [loading, setLoading] = useState(true);

    const createUser = (email,password)=>{
         setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };

  const LogIn = (email,password)=>{
     setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
   const logOut = () => {
    return signOut(auth);
  };
const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
       setLoading(false);
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
        updateUser,resetPassword,loading

    }

      return <AuthContext value={AuthData}>{children}</AuthContext>;
};

export default Provider;