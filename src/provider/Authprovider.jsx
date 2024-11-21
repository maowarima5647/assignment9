import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config'
import { fetchSignInMethodsForEmail, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Authcontext = createContext();
const auth = getAuth(app);
const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
  //  console.log(user)
    const creatNewUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
const userlogin =(email,pasword) =>{
return signInWithEmailAndPassword (auth,email,pasword)
}
    const logout = () =>{
        return signOut(auth)
    }
    const updateuser  = (updatedData) =>{
      return updateProfile(auth.currentUser,updatedData)
    }
    const authinfo = {
        user,
        setUser,
        creatNewUser,
        logout,
        userlogin,
        updateuser,
    };
    useEffect(() =>{
const usesubscribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
} )
return() =>{
    usesubscribe()
}
    },[])
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;