import { useFormik } from 'formik';
import axios from "axios";
import $ from "jquery";
import { useNavigate } from "react-router-dom";
import React from 'react'

export default function Login({getUserData}) {
 



const navigate = useNavigate();


  async function login(values) {
    try {
      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/auth/signin",
        values
      );

      if (data.message == "success") {
        localStorage.setItem('tkn' , data.token);
        getUserData();
       
        $(".succMessage").fadeIn(1000, function () {
              setTimeout(() => {
          navigate('/home')
                
              }, 1000);
        });
      
      }
    }
    catch(err){
      $(".errMessage").fadeIn(700, function () {
        setTimeout(() => {
          $(".errMessage").fadeOut(700);
        }, 3000);
      });
    }
    }
 
 
  let user = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: user,

    onSubmit: function (values) {
      login(values);
    },

    validate: function (values) {
      let errors = {};
      if (!values.email.includes("@") || !values.email.includes(".com")) {
        errors.email = "Email must contain @ and .com";
      }

      if (values.password.length < 6 || values.password.length > 20) {
        errors.password =
          "password must be more than  6 characters and less than or equal 20 characters";
      }
      return errors;
    },
  });
  return (
    <>
      <div className="container">
        <h1 className="text-primary">Login</h1>

        <div
          style={{ display: "none" }}
          className="alert errMessage alert-warning text-center fs-5"
        >
          Wrong Password Or Email
        </div>
        <div
          style={{ display: "none" }}
          className="alert succMessage alert-success text-center fs-5"
        >
           <i className="fa-solid fa-circle-check text-primary fs-3 me-2 "></i>You Logedin Successfully welcome back! 
        </div>

        <form onSubmit={formik.handleSubmit}>
         
          <label htmlFor="email">Email</label>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            id="email"
            className="form-control my-1"
            placeholder="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="alert alert-danger text-center text-primary">
              {" "}
              {formik.errors.email}{" "}
            </div>
          ) : (
            ""
          )}
         
          <label htmlFor="password">Password</label>
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            id="password"
            className="form-control my-1"
            placeholder="password"
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="alert alert-danger text-center text-primary">
              {" "}
              {formik.errors.password}{" "}
            </div>
          ) : (
            ""
          )}


          <button type="submit" className="btn btn-outline-primary my-3">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
