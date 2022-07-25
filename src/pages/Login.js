import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { DashboardPage } from './Dashboard';

function LoginPage() {
 
 const [isLoggedIn, setisLoggedIn] = useState(null);
 
 
 const logIn = () => {
  setisLoggedIn(true);
};

const logOut = () => {
  
}




  return (
    <div className='App-header'>
          <h1>this is a login page</h1>
          <input type='text' placeholder='email or username' />
          <input type='password' placeholder='password' />
                  
          {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
          ) : (
          <button onClick={logIn}>Login</button>
          )}
    </div>
  )
}

export default LoginPage;