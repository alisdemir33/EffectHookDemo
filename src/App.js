import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/store/auth-context'


function App() {
  const ctx = useContext(AuthContext);
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
  /* const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem('setLoggedIn','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('setLoggedIn');
    setIsLoggedIn(false);
  }; */

  return (
    /*   <AuthContext.Provider value={ {isLoggedInCtx:isLoggedIn}}> */
    <React.Fragment>
      <MainHeader  />
      <main>
        {!ctx.isLoggedInCtx && <Login/>}
        {ctx.isLoggedInCtx && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
