import React, { useEffect, useState } from 'react'
import { Navigate, Route, useNavigate } from 'react-router-dom'
import { DashboardPage } from './Dashboard';

function LoginPage() {
 
 const [isLoggedIn, setIsLoggedIn] = useState(null);
 const [value, setValue] = useState({
  email: '',
  password: ''
 });
 
const admin = {
  email: 'admin@mail.ru',
  password: 'admin123'
}
 const logIn = () => {
  if(JSON.stringify(value) === JSON.stringify(admin))
  setIsLoggedIn(true);
};

const handleChange = (event) => {
  setValue({
    ...value,
    [event.target.name]:event.target.value
  });
}

const navigate = useNavigate()

useEffect(() => {
  if(isLoggedIn){
    navigate('/dashboard')
  }
},[isLoggedIn])

const logOut = () => {
    setIsLoggedIn(false)
}




  return (
    <div className='App-header'>
          <h1>this is a login page</h1>
          <input name="email" type='email' placeholder='email or username' value={value.email} onChange={handleChange}/>
          <input name="password" type='password' placeholder='password' value={value.password} onChange={handleChange}/>
                  
          {isLoggedIn ? (
          <button onClick={logOut}>Logout</button>
          ) : (
          <button onClick={logIn}>Login</button>
          )}
    </div>
  )
}

export default LoginPage;