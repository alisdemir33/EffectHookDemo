import React, {useContext} from "react";
import AuthContext from "../store/auth-context";
import classes from "./Navigation.module.css";

const Navigation = (props) => {  
   const ctx = useContext(AuthContext);
  return (
   
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedInCtx && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedInCtx && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedInCtx && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
       
  );
};

export default Navigation;
