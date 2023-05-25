import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function Navbar({ userData, logout }) {
  const navigate = useNavigate();

  const { counter } = useContext(CartContext);

  function userLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            E-Commerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/brands">
                  Brands
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                  <div className="d-inline p-1 ms-1 position-relative">
                    <i className="fa fa-solid fa-cart-shopping text-primary text-center ">
                    <span style={{width: '20px' , height:'20px', backgroundColor:'red', fontSize:'12px' }} className="rounded-circle position-absolute top-0 start-100 translate-middle  text-center mt-2 p-1 text-white ">
                      {counter}
                    </span>
                    </i>
                    
                  </div>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {userData ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active btn btn-primary  me-2"
                      aria-current="page"
                      to="/profile"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={userLogout}
                      style={{ cursor: "pointer" }}
                      className="nav-link active  btn btn-danger me-2"
                    >
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/signup"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
