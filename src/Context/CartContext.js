import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import $ from "jquery";
export const CartContext = createContext();

export default function CartContextProvider({ children }) {

  const [counter, setcounter] = useState(0);
  const [price, setprice] = useState(0);
  const [products, setproducts] = useState(null);

  async function addToCart(proId) {
    try {
      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/cart",
        {
          productId: proId,
        },
        {
          headers: { token: localStorage.getItem("tkn") },
        }
      );
      console.log(data);

      if (data.status == "success") {
        $(".addedItem").css("display", "flex");
        $(".addedItem").css("align-items", "center");
        $(".addedItem").fadeIn(700, function () {
          setTimeout(() => {
            $(".addedItem").fadeOut(700);
          }, 3000);
        });

        $(".AddBtn").fadeOut(100, function () {
          $(".removeBtn").fadeIn(150, function () {});
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getCartDetails() {
    try {
      let { data } = await axios.get(
        "https://route-ecommerce.onrender.com/api/v1/cart",
        {
          headers: { "token": localStorage.getItem("tkn") },
        }
      );
      
      console.log(data);
      console.log(data.numOfCartItems);

        if(data.status == "success"){
          setcounter(data.numOfCartItems);
          setprice(data.data.totalCartPrice);
          setproducts(data.data.products);
        }

    } catch (error) {
      console.log(error);
    }
  }



  async function removeCart(id){

   try {
    let {data} = await axios.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,{
      headers :{'token' : localStorage.getItem('tkn')}
    })

    if(data.status == 'success'){
      setcounter(data.numOfCartItems);
      setprice(data.data.totalCartPrice);
      setproducts(data.data.products);
    }
    
   } catch (error) {
    console.log(error);
   }
  }

  async function updateCount(id , procount){
    try {
      
    let {data} = await axios.put(`https://route-ecommerce.onrender.com/api/v1/cart/${id}`,
    {count : procount},{
      headers : {'token' : localStorage.getItem('tkn')}
    })

    if(data.status ="success"){
      setcounter(data.numOfCartItems)
      setproducts(data.data.products)
      setprice(data.data.totalCartPrice)
    }

    } catch (error) {
      console.log(error);     
    }
  } 

  
  useEffect(function(){
    getCartDetails();
  },[])



  return (
    <>
      <CartContext.Provider value={{ addToCart,counter,price,products,removeCart , updateCount }}>
        {children}
      </CartContext.Provider>
      
    </>
  );
}
