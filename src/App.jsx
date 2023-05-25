import React, { useEffect, useState } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Brands from './Components/Brands/Brands';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import BrandProducts from './Components/BarandProducts/BrandProducts';
import Profile from './Components/Profile/Profile';
import jwtDecode from 'jwt-decode';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Context/CartContext';




export default function App() {


  function Protected({children}){
      if(userData != null){
        return <>
        {children}
        </>
      }else {
        return<>
        <Navigate  to='/login' />
        </>
      }
    
  }


  
const [userData, setuserData] = useState(null)
  
  function getUserData(){
    const user = jwtDecode(localStorage.getItem('tkn'));
    setuserData(user)
  }


function logout(){
  localStorage.removeItem('tkn');
  setuserData(null);

}

  useEffect(function(){
    if(localStorage.getItem('tkn')!= null  && userData == null){
      getUserData();
    }
  },[])

const router =  createBrowserRouter([
  { path:'' , element:<CartContextProvider> <Layout userData={userData} logout={logout}/> </CartContextProvider>,children:[
    {path: '' , element: <CartContextProvider><Home/></CartContextProvider> },
    {path: '/home' , element: <CartContextProvider><Home/></CartContextProvider> },
    {path: '/brands' , element: <Brands/>},
    {path: '/cart' , element:<Protected><CartContextProvider><Cart/></CartContextProvider></Protected> },
    {path: '/Profile' , element:<Protected> <Profile userData={userData}/></Protected> },
    {path: '/brandproducts/:id' , element:  <BrandProducts/>},
    {path: '/prodetails/:id' , element: <Protected>  <CartContextProvider><ProductDetails/></CartContextProvider> </Protected> },
    {path: '/signup' , element: <SignUp/>},
    {path: '/login' , element: <Login getUserData={getUserData}/>},
    {path: '*' , element: <Notfound/>},

  ] }
])


return <>

<RouterProvider  router={router} />
  </>
}
