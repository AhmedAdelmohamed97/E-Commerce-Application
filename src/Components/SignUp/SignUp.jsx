import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  async function registerNewUser(obj) {
    try {
      let { data } = await axios.post(
        "https://route-ecommerce.onrender.com/api/v1/auth/signup",
        obj
      );

      if (data.message == "success") {
        $(".succMessage").fadeIn(1000, function () {
          navigate('/login')
        });
      }
    }
    
    
    catch (err) {
      $(".errMessage").fadeIn(700, function () {
        setTimeout(() => {
          $(".errMessage").fadeOut(700);
        }, 3000);
      });
    }
  }

  let user = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  const formik = useFormik({
    initialValues: user,

    onSubmit: function (values) {
      registerNewUser(values);
    },

    validate: function (values) {
      let errors = {};

      if (values.name.length < 3 || values.name.length > 20) {
        errors.name =
          "Name must be more than or equal 3 characters and less than or equal 20 characters";
      }

      if (!values.email.includes("@") || !values.email.includes(".com")) {
        errors.email = "Email must contain @ and .com";
      }

      if (values.phone.match(/^(002)?01[0125][0-9]{8}$/) == null) {
        errors.phone = "You Must Enter A valid Mobile Phone Number!";
      }
      if (values.password.length < 6 || values.password.length > 20) {
        errors.password =
          "password must be more than  6 characters and less than or equal 20 characters";
      }
      if (values.rePassword != values.password) {
        errors.rePassword = "password not matched";
      }

      return errors;
    },
  });
  return (
    <>
      <div className="container">
        <h1 className="text-primary">Registration Form</h1>

        <div
          style={{ display: "none" }}
          className="alert errMessage alert-warning text-center fs-5"
        >
          Email already in Use
        </div>
        <div
          style={{ display: "none" }}
          className="alert succMessage alert-success text-center fs-5"
        >
          You Registered Successfully  <i className="fa-solid fa-circle-check text-primary fs-3"></i>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            id="name"
            className="form-control my-1"
            placeholder="Name"
          />
          {formik.errors.name && formik.touched.name ? (
            <div className="alert alert-danger text-center text-primary">
              {" "}
              {formik.errors.name}{" "}
            </div>
          ) : (
            ""
          )}

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
          <label htmlFor="phone">Phone</label>
          <input
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            id="phone"
            className="form-control my-1"
            placeholder="phone"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div className="alert alert-danger text-center text-primary">
              {" "}
              {formik.errors.phone}{" "}
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

          <label htmlFor="rePassword">RePassword</label>
          <input
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            id="rePassword"
            className="form-control my-1"
            placeholder="RePassword"
          />
          {formik.errors.rePassword && formik.touched.rePassword ? (
            <div className="alert alert-danger text-center text-primary">
              {" "}
              {formik.errors.rePassword}{" "}
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
