import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function BrandProducts() {

    
  const { id } = useParams();

  const [brandpros, setbrandpros] = useState(null);

 async function getProducts(){
    try {
        let {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/products' , {params : {'brand' : id } });

        setbrandpros(data.data)
    } 
    
    catch (error) {
        console.log(error);
    }
 }

  useEffect(function () {
    getProducts();
  }, []);

  return (
    <>
{brandpros?<div className="container">
        <div className="row">

            {brandpros.length!=0? <> {brandpros.map(function(brand , idx){ return  <div key={idx} className="col-md-3 my-3">
                <Link to={`/prodetails/${brand.id}`}>
                <div className="card h-100 gy-3 border-0 ">
                  <img src={brand.imageCover} alt={brand.title} />
                  <h5 className="text-primary">{brand.title}</h5>
                  <h6 className="text-dark">Price :<span className="text-warning">{brand.price}</span> </h6>
                  <h6 className="text-dark">after Discount :<span className="text-danger">{brand.priceAfterDiscount}</span> </h6>
                </div>
                </Link>
              </div>
                })}</> : <h2 className="text-primary text-center p-2 m-2"> Currently There Is No Products Available In this Brand Right Now Get Back soon</h2>}
               

        </div>
      </div> : <LoadingScreen/> }


      
    </>
  );
}
