import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

export default function Cart() {
  const { counter, price, products,removeCart , updateCount } = useContext(CartContext);


    function inctement(id , procount){
      updateCount(id , procount+1)
      
    }

    function dectement(id , procount){
      if(procount != 0){
        updateCount(id , procount-1)
      }else{
        removeCart()
      }
      
    }

  return (
    <>
      {products ? (
        <>
          <h1>Welcome to cart </h1>
          <h2>
            Total Price:<span className="text-primary">{price}</span>
          </h2>
          <h3>Total Products : {counter}</h3>
          <div className="container ">
            <div className="row">
              {products.map(function (pro, idx) {
                return (
                  <>
                    
                    <div style={{backgroundColor:'#eee'}} className="col-md-12 d-flex align-items-center justify-content-between rounded-4  gy-4">
                      <div
                        key={idx}
                        className="leftSide w-25  position-relative rounded-2 me-5"
                      >
                        <img
                          src={pro.product.imageCover}
                          className="w-100 rounded-3"
                          alt={pro.title}
                        />
                        <div style={{backgroundColor:'transparent'}} className=" description position-absolute d-flex align-items-center justify-content-between mb-2 bottom-0 start-0 end-0  rounded-3">
                          <button onClick={function(){inctement(pro.product.id , pro.count)}} className="btn btn-outline-success ms-2"> + </button>
                          <h6 className="text-primary text-center">
                          {pro.count}
                          </h6>
                          <button onClick={function(){dectement(pro.product.id , pro.count)}} className="btn btn-outline-danger me-2"> - </button>


                        </div>
                        <div className="rate position-absolute top-0 end-0 bg-danger p-1 m-1 text-center text-white rounded-2">
                          <i className="fa-solid fa-star text-warning"></i>
                          {pro.product.ratingsAverage}
                        </div>
                      </div>
                      <div className="rightSide w-75 ms-5">
                        <h3>{pro.product.title}</h3>
                        <h6>Brand Name : {pro.product.brand.name}</h6>
                        <h6>Category : {pro.product.category.name}</h6>
                        <h6>Price : {pro.price}</h6>
                        <h6>Price : {pro.product.id}</h6>

                     
                        <button onClick={function(){
                          removeCart(pro.product.id)
                        }} className="btn btn-outline-danger mt-3 w-50">
                        <i className="fa fa-solid fa-minus-circle me-2"></i>Remove Product</button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}

      <div className=""></div>
    </>
  );
}
