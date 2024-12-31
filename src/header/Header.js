import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  async function login() {
    navigate("login");
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="navM-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navM-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navM-link" to="/product">
                  Product
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-outline-success d-flex me-2 Headerlogin-btn"
              onClick={login}
            >
              Login
            </button>
          </div>
        </div>
      </nav>  
      


    </>
  );
}





