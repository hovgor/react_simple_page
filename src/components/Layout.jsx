import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { HomePage } from '../pages/Home'
import LoginPage from '../pages/Login'
import Register from '../pages/Register'

const setActive = ({isActive}) => isActive ? 'active-link' : '';


const Layout = () => {
  return (
    <>
        <header>
            <NavLink to='/' className={setActive} element={<HomePage />} />
            <NavLink to='/login' className={setActive} element={<LoginPage />} />
            <NavLink to='/register' className={setActive} element={<Register />} />
        </header>
        <Outlet />
        <footer>2022</footer>
    </>
  )
}

export {Layout}