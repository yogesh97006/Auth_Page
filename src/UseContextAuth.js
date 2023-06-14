import { createContext, useContext, useEffect, useState } from "react"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import { Auth } from "./Firebase"

const UseContextAuth=createContext()

export function Authication({children}){

    const [User,setUser]=useState('')

    function SignUp(Email,Password){
        return createUserWithEmailAndPassword(Auth,Email,Password)
  }
   
   function SignIn(Email,Password){
         return signInWithEmailAndPassword(Auth,Email,Password)
   }

   useEffect(()=>{
        const unSubscribe=onAuthStateChanged(Auth,(currentUser)=>{
              setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }
   },[])
    
    return(
        <UseContextAuth.Provider value={{User,SignUp,SignIn}}>
            {children}
        </UseContextAuth.Provider>
    )
}

export function useUserAuth(){
    return useContext(UseContextAuth)
}


