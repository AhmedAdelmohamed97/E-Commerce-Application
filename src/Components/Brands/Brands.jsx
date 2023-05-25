import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingScreen from "./../LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";

export default function Brands() {
  const [Brands, setBrands] = useState(null);

  async function getBrands() {
    try {
      const { data } = await axios.get(
        "https://route-ecommerce.onrender.com/api/v1/brands"
      );
      setBrands(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(function () {
    getBrands();
  }, []);

  return (
    <>
      {Brands ? (
        <>
          <div className="container">
            <div className="row d-flex align-items-center gy-3 ">
              <div className="col-md-3 ">
                <div className="card border-0">
                  <h3 className="text-primary">Our Barands</h3>
                  <p>
                    You can see our brands and each brand includes the products
                    inside it
                  </p>
                </div>
              </div>

              {Brands.map(function (brand, idx) {
                return (
                  <div key={idx} className="col-md-3 ">
                    <Link to={`/brandproducts/${brand._id}`}>
                      
                      <div className="card border-0">
                        <img
                          src={brand.image}
                          className="w-100"
                          alt={brand.name}
                        />
                        <h6 className="text-center text-primary fs-3">
                          {brand.name}
                        </h6>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
