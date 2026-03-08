import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login" >Login</Link>
      <Link to="/register" >Register</Link>
      <Link to="/cart" >Cart</Link>
      <Link to="/order" >Orders</Link>
      <Link to="/profile">Profile </Link>
      <Link to="/wishlist" >Wishlist</Link>
    </>
  )
}

export default Navbar
