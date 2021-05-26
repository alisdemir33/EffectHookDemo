import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const setEmailState = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.payload, isValid: action.payload.includes('@') }
  }else if(action.type ==='INPUT_BLUR'){
    return { value:state.value, isValid :state.value.includes('@')}
  }
  else{
    return {value:'',isValid:false}
  }
}

const setPasswordState = (state, action) => {
  if (action.type === 'PASSWORD_INPUT') {
    return { value: action.payload, isValid: action.payload.trim().length > 6 }
  }else if(action.type ==='PASSWORD_BLUR'){
    return { value:state.value, isValid :state.value.trim().length > 6}
  }
  else{
    return {value:'',isValid:false}
  }
}

const Login = (props) => {
  /*  const [enteredEmail, setEnteredEmail] = useState('');
   const [emailIsValid, setEmailIsValid] = useState(); */
 /*  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(); */
  
  const [EmailState, dispatchEmail] = useReducer(setEmailState
    , { value: '', isValid: false });

  const [PasswordState, dispatchPassword] = useReducer(setPasswordState
      , { value: '', isValid: false });

  const [formIsValid, setFormIsValid] = useState(false); 

  const {isValid:isEmailValid} =EmailState;
  const {isValid:isPaswordValid} =PasswordState;

   useEffect( () =>{
     
    const timerFunction = setTimeout( () =>{
       console.log('CHECK IS VALID') ;
       setFormIsValid(
           PasswordState.value.trim().length > 6 && EmailState.value.includes('@')
     );
     } ,1000  )
    
     return () =>{
       console.log('clean up')
         clearTimeout(timerFunction);
     }
 
   },
   [isEmailValid,isPaswordValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: 'USER_INPUT', payload: event.target.value })

   /*  setFormIsValid(
      event.target.value.includes('@') && PasswordState.value.trim().length > 6
    ); */
  };

  const passwordChangeHandler = (event) => {
   // setEnteredPassword(event.target.value);
   dispatchPassword({type:'PASSWORD_INPUT', payload: event.target.value})
   
  /*  setFormIsValid(
      event.target.value.trim().length > 6 && EmailState.isValid
    ); */
  };

   const validateEmailHandler = () => {
     //setEmailIsValid(enteredEmail.includes('@'));
     dispatchEmail({type:'INPUT_BLUR', payload : EmailState.value})
   };

  const validatePasswordHandler = () => {
    dispatchPassword({type :'PASSWORD_BLUR'})
   // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(EmailState.value, PasswordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${EmailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={EmailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${PasswordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={PasswordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
