import React from 'react'
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import CartContextProvider, { CartContext } from '../../Context/CartContext';

export default function Layout({userData ,logout}) {
  return <>
  
  
<CartContextProvider> <Navbar userData={userData} logout={logout} /> </CartContextProvider> 

  <Outlet/>

  <Footer/>
  
  </>
}
