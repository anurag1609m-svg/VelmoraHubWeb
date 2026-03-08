import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Cart from '../Pages/Cart';

import Wishlist from '../Pages/Wishlist';
import Order from '../Pages/Order';
import Profile from '../Pages/Profile';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
    </>
  )
}

export default App