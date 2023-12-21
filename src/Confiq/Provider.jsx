import { createContext, useEffect, useState } from "react";
import { auth } from "./firebaseConfiq";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext =createContext()
const Provider = ({children}) => {
    const [user,setUser] =useState(null)
const [isLoading,setIsLoading] =useState(true)

const createUser =(email,password)=>{
    setIsLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
}

const login = (email,password)=>{
setIsLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}

 // sining with google
 const googleAuth = new GoogleAuthProvider()
 // google
 const Googlesingin = () => {
     setIsLoading(true)
     return signInWithPopup(auth, googleAuth)
 }


const logout =()=>{
    setIsLoading(true)
    return signOut (auth)
}

useEffect(()=>{
    const subscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setIsLoading(false)
    });
    return ()=>{
        return subscribe
    }
},[])
    const values ={
        createUser,
        login,
        user,
        isLoading,
        logout,
        Googlesingin

    }
    return(
          <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )}
export default Provider;
