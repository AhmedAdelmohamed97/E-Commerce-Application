import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { CartContext } from "../../Context/CartContext";

export default function ProductDetails() {
  const { addToCart , counter } = useContext(CartContext);

  const { id } = useParams();

  const [productDetails, setproductDetails] = useState(null);

  async function getProductDetails() {
    try {
      let { data } = await axios.get(
        `https://route-ecommerce.onrender.com/api/v1/products/${id}`
      );
      setproductDetails(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getProductDetails();
  }, []);

  return (
    <>
      {productDetails ? (
        <>
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center gy-2 mt-2">
              <div className="col-md-3">
                <div className="card rounded-3 border-0">
                  <img
                    src={productDetails.imageCover}
                    className="w-100 rounded-3 "
                    alt={productDetails.title}
                  />

                  <div className="rate position-absolute top-0 end-0 p-1 bg-danger rounded-3">
                    <i className="fa fa-solid fa-star text-warning me-1"></i>
                    <h6 className="d-inline">
                      {productDetails.ratingsAverage}
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <div className="description">
                  <h3 className="text-primary">{productDetails.title}</h3>
                  <h5>{productDetails.description}</h5>
                  <h6 className="text-primary">
                    price:{" "}
                    {productDetails.priceAfterDiscount ? (
                      <>
                        <span className="text-decoration-line-through text-dark">
                          {productDetails.price}
                        </span>
                        <span className="ms-2 text-dark">
                          {productDetails.priceAfterDiscount}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-dark">
                          {" "}
                          {productDetails.price}
                        </span>
                      </>
                    )}
                  </h6>

                  <h6 className="text-primary">
                    Available Quantity:{" "}
                    <span className="text-dark">{productDetails.quantity}</span>
                  </h6>
                </div>
                <button
                  onClick={function () {
                    addToCart(productDetails.id);
                  }}
                  className="AddBtn w-100 btn btn-outline-success mt-4"
                >
                  <i className="fa fa-solid fa-plus-circle me-2"></i>
                  Add to cart
                </button>

                <button style={{display : 'none'}}
                  onClick={function () {
                    addToCart(productDetails.id);
                  }}
                  className="w-100 removeBtn btn btn-outline-danger mt-4"
                >
                  <i className="fa fa-solid fa-minus-circle me-2"></i>
                  Remove to cart
                </button>

              </div>
            </div>
          </div>
          <div style={{display:'none' ,width : '500px',position:'absolute' , right:'10px' }} className="addedItem alert alert-success ms-3 mb-5  ">
            <i className="fa fa-solid fa-circle-check fa-beat-fade ms-3 me-3 text-danger fs-3"></i>
            <h6 className="text-dark fs-4">
              Your Product Successfully Added To Your Cart 
            </h6>
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
