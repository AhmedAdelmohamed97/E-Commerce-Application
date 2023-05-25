import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container-flued footer mt-5 pt-2 pb-2">
        <h2 className="ms-2">Get the FreshCart App</h2>
        <p className="ms-3">
          we will send you a link , open it on your phone to download the app
        </p>

        <div className="field d-flex align-items-center justify-content-evenly my-4 ">
          <div className="in w-75 ">
            <input
              type="text"
              placeholder="Email"
              className="form-control ms-3"
            />
          </div>
          <div className="sub w-25">
            <button className="btn btn-success ms-5 ps-5 pe-5">
              share App Link
            </button>
          </div>
        </div>

        <div className="container-flued d-flex justify-content-between align-items-center border-top border-bottom border-2 border-dark mt-3 ">

        <div className="leftPart my-4">
          <ul className="d-flex align-items-center">
            <li className="list-unstyled ms-3">
              <h6>Payment Parteners</h6>
            </li>
            <li className="list-unstyled ms-3 text">
              <i className="text-primary fa fa-brands fa-paypal"></i>
            </li>
            <li className="list-unstyled ms-3 text">
              <i className="text-primary fa fa-brands fa-cc-amazon-pay "></i>
            </li>
            <li className="list-unstyled ms-3 text">
              <i className="text-primary fa fa-brands  fa-cc-mastercard"></i>
            </li>
          </ul>
        </div>

        <div className="rightPart my-4">
          <ul className="d-flex align-items-center list-unstyled ">
            <li><h6>Get Delivaries with freshCart</h6></li>
            <li>
              <button className="btn btn-dark text-white ms-2 ">
              <i className="me-2 fa fa-brands fa-app-store"></i>
              Available on<br/>Apple Play
              </button>
            </li>
            <li>
              <button className="btn btn-dark text-white ms-2 me-4">
              <i className="me-2 fa fa-brands fa-google-play"></i>
              Available on<br/>Google Play
              </button>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </>
  );
}
