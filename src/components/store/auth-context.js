import React, { useState,useEffect } from 'react';

const AuthContext = React.createContext(
    {
        isLoggedInCtx:false,
        onLogout:  () =>{},//for intellisense only
        onLogin:  (email,password) =>{}//for intellisense only
    }
);

export const AuthContextProvider = (props) =>{

    const[isLoggedInState,setIsLoggedInState] = useState(false);

    useEffect( () => {
        console.log('LOGIN EFFECT RUNNING');
        const isLoggedInFromLocalStorage= localStorage.getItem('setLoggedIn')
        if(isLoggedInFromLocalStorage==="1"){
            setIsLoggedInState(true);
        } 
      
        },[]);
     

    const loginHandler = () => {   
        localStorage.setItem('setLoggedIn','1');     
        setIsLoggedInState(true);        
    }

    const logoutHandler = () =>{
        localStorage.removeItem('setLoggedIn');
        setIsLoggedInState(false);
    }

    return <AuthContext.Provider value={{
    isLoggedInCtx : isLoggedInState,
    onLogin:loginHandler,
    onLogout:logoutHandler}}>
        {props.children}
    </AuthContext.Provider>

}

export default AuthContext;