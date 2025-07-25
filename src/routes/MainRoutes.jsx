import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import Register from '../pages/Register'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import PageNotFound from '../pages/PageNotFound'
import About from '../pages/About'
import Product from '../pages/Product'

const MainRoutes = () => {
  return (
  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/knowus" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/cart" element={<Cart/>}/>
<Route path="*" element={<PageNotFound/>}/>
    </Routes>


  )
}

export default MainRoutes
