import React, { useState,useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  
  useEffect( () => {
    console.log('LOGIN EFFECT RUNNING');
    const isLoggedInFromLocalStorage= localStorage.getItem('setLoggedIn')
    if(isLoggedInFromLocalStorage==="1"){
      setIsLoggedIn(true);
    } 
  
    },[])
 
  
 
 
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem('setLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('setLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={ {isLoggedInCtx:isLoggedIn}}>
      <MainHeader  onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
}

export default App;
