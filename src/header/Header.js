// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// export default function Header() {
//   useEffect(() => {
//     document.body.setAttribute("data-bs-spy", "scroll");
//     document.body.setAttribute("data-bs-target", "#navbarNav");
//     document.body.setAttribute("data-bs-offset", "50");
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           Navbar
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" href="#home">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#about">
//                 About Us
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#product">
//                 Product
//               </a>
//             </li>
//           </ul>
//           <button className="btn btn-outline-success me-2">
//             Login
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }









import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();

  async function login() {
    navigate("login");
  }

  async function aboutNavigate() {
    navigate("about");
    
  }

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Sadguru Digitalization</a>
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
                <Link className="navM-link"  onClick={aboutNavigate}>
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





