



import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="main">
      {/* Main Container */}
      {/* Other sections of the code remain unchanged */}

      <img
        src="https://ananda.in/wp-content/uploads/2022/04/banner4-min.webp"
        className="slideimage"
        loading="lazy"
        width="100%"
        height="605"
        alt=""
      ></img>


{/* New Farm Fresh Products Section */}
<div className="products-container text-center">
        <h1>All Farm Fresh Products At One Place...</h1>
        <div className="products-grid">
          <div className="product-item">
            <img src="https://pravarshaindustries.com/storage/subcategories/RoGa67tN2sfhnQNoXXKpQgZdZMkXJQWdwk8LEuiW.png" alt="Milk" />
            <p>Milk</p>
          </div>
          <div className="product-item">
            <img src="https://pravarshaindustries.com/storage/subcategories/RoGa67tN2sfhnQNoXXKpQgZdZMkXJQWdwk8LEuiW.png" alt="Ghee" />
            <p>Ghee</p>
          </div>
          <div className="product-item">
            <img src="https://pravarshaindustries.com/storage/subcategories/RoGa67tN2sfhnQNoXXKpQgZdZMkXJQWdwk8LEuiW.png" alt="Paneer" />
            <p>Paneer</p>
          </div>
          <div className="product-item">
            <img src="https://pravarshaindustries.com/storage/subcategories/RoGa67tN2sfhnQNoXXKpQgZdZMkXJQWdwk8LEuiW.png" alt="Curd" />
            <p>Curd</p>
          </div>
          <div className="product-item">
            <img src="https://pravarshaindustries.com/storage/subcategories/RoGa67tN2sfhnQNoXXKpQgZdZMkXJQWdwk8LEuiW.png" alt="Buttermilk" />
            <p>Buttermilk</p>
          </div>
          <div className="product-item">
            <img src="https://pravarshaindustries.com/storage/subcategories/RoGa67tN2sfhnQNoXXKpQgZdZMkXJQWdwk8LEuiW.png" alt="Combo Products" />
            <p>Combo Products</p>
          </div>
        </div>
      </div>





      <div className="row justify-content-center">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <div
              className="col-xl-2 col-lg-3 col-md-6 col-sm-12 product-card mx-3"
              key={index}
            >
              <Link to="/">
                <img
                  src="https://pravarshaindustries.com/storage/products/hUsQXJFK2k39OlQCfIdbVEtwpOtAZRbQ9uS68uB5.png"
                  className="img-fluid product-image"
                  alt="Farm Fresh Buffalo Milk"
                />
              </Link>
              <div className="product-details text-center">
                <div className="product-title">Farm Fresh Buffalo Milk</div>
                <p className="product-price text-xs mt-1">
                  <span className="line-through mr-2">&#8377;50</span>
                  <span>&#8377;47 / 500ml</span>
                </p>
                <div className="stock-container d-flex align-items-center justify-content-between mt-4">
                  <span className="in-stock-text pd-text-green text-sm md:text-lg">
                    In Stock
                  </span>
                  <Link to="/" className="add-button">
                    <img
                      alt="add to cart"
                      className="add-icon"
                      src="https://pravarshaindustries.com/img/plus-icon.png"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>

      

      {/* Footer Start */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Products</h2>
            <Link to="/shop/milk" className="footer-link">Milk</Link>
            <Link to="/shop/ghee" className="footer-link">Ghee</Link>
            <Link to="/shop/paneer" className="footer-link">Paneer</Link>
            <Link to="/shop/curd" className="footer-link">Curd</Link>
            <Link to="/shop/buttermilk" className="footer-link">Buttermilk</Link>
          </div>

          <div className="footer-section">
            <h2>Policy</h2>
            <Link to="https://pravarshaindustries.com/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="https://pravarshaindustries.com/terms-and-conditions" className="footer-link">Terms & Conditions</Link>
            <Link to="https://pravarshaindustries.com/cancellaton-and-refund" className="footer-link">Cancellation/Refund Policy</Link>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-contact">
            <h2>Contact Us</h2>
            <button
              className="footer-button"
              onClick={() => window.open("https://maps.google.com/?q=17.444403759632348,78.46287480803491")}
            >
              NANDGAON, TALUKA-SATARA, DISTRICT-SATARA, MAHARASHTRA
            </button>
            <Link to="mailto:support@pravarshaindustries.com" className="footer-link">support@sadguruindustries.com</Link>
            <div className="footer-phone">
              <button className="footer-button" onClick={() => window.open('tel:7702999900')}>7702999900</button> |
              <button className="footer-button" onClick={() => window.open('tel:7702666699')}>7702666699</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div>© Copyright 2024. All Rights Reserved.</div>
        </div>
      </div>

      <div className='foot-img'></div>
    </div>
  );
}
