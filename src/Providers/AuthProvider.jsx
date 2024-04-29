import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext=createContext(null)
const googleProvider=new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    //console.log(user)

    const createUser =(email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setUser(null)
        return signOut(auth)
    }

    const updateUserProfile = (name,image) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image
        })
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
    
      const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
      }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false)
        });
        return ()=> {
            unSubscribe();
        }
    }, []);

    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        githubLogin,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;