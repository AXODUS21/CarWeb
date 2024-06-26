import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()

  const logout = () => {
    setCookies("access_token", "")
    window.localStorage.removeItem("userID")
    navigate("/auth")
    alert("You have been succesfully logged out")
  }

  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/upload-cars">Upload Car</Link>
        <Link to="/saved-cars">Saved Cars</Link>
        {
        !cookies.access_token ? (<Link to="/auth">Login / Register</Link>) :
         <button className='logoutbtn' onClick={logout}>Logout</button>
         }
        
    </div>
  )
}

export default Navbar