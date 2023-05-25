import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";
import Myslider from "../Slick/SlickSlider";


export default function Home() {
  const [Products, setProducts] = useState(null);

  async function getProducts() {
    try {
      let { data } = await axios.get(
        "https://route-ecommerce.onrender.com/api/v1/products"
      );
      setProducts(data.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(function () {
    getProducts();
  }, []);



  return<>
     

      {Products ? (
        <div className="container">
          <div className="row gy-3">
          <Myslider/>
            {Products.map(function (pro, idx) {
              return (
                <div key={idx} className="col-md-2 ">
                  
                  <Link to={`/prodetails/${pro.id}`}>
                    <div className="card bg-primary h-100 border border-white rounded-3 my-2  position-relative">
                      <img
                        src={pro.imageCover}
                        className=" w-100 "
                        alt={pro.title}
                      />
                      <h5 className="text-center">
                        {pro.title.slice(0, pro.title.indexOf(" ", 10))}
                      </h5>
                      <h6 className="text-warning">{pro.category.name}</h6>
                      <h6>
                        price :{" "}
                        {pro.priceAfterDiscount ? (
                          <>
                            <span className="text-decoration-line-through">
                           
                              {pro.price}
                            </span>
                            <span className="ms-2 text-white">

                              {pro.priceAfterDiscount}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-white"> {pro.price}</span>
                          </>
                        )}
                      </h6>
                      <div className="rate position-absolute top-0 end-0 bg-danger p-1 text-center text-white rounded-2">
                        <i class="fa-solid fa-star text-warning"></i>
                        {pro.ratingsAverage}
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  ;
}
