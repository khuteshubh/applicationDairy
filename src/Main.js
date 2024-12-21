import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <div className="main">
      {/* Main Container */}
      <div className="main-container">
        <h1>All Farm Fresh Products At One Place...</h1>
        <div className="grid">
          <a href="/shop/milk" className="grid-item">
            <div className="category-img">
              <img src="https://pravarshaindustries.com/storage/subcategories/RoGa67tN2sfhnQNoXXKpQgZdZMkXJQWdwk8LEuiW.png" alt="Milk" />
            </div>
            <h2>Milk</h2>
          </a>
          <a href="/shop/ghee" className="grid-item">
            <div className="category-img">
              <img src="https://pravarshaindustries.com/storage/subcategories/Zqwvc1A4oZQSr3lLpMOlX8odAYtjXbOnyueUdcG1.png" alt="Ghee" />
            </div>
            <h2>Ghee</h2>
          </a>
          <a href="/shop/paneer" className="grid-item">
            <div className="category-img">
              <img src="https://pravarshaindustries.com/storage/subcategories/fSwtVeBVIXuSjbOx708FKP5mF3ehgCZVlS3wuUGJ.png" alt="Paneer" />
            </div>
            <h2>Paneer</h2>
          </a>
          <a href="/shop/curd" className="grid-item">
            <div className="category-img">
              <img src="https://pravarshaindustries.com/storage/subcategories/LosArkXiOtsKDygwuXk6lEHmsOMvlh3NME6WcRQy.png" alt="Curd" />
            </div>
            <h2>Curd</h2>
          </a>
          <a href="/shop/buttermilk" className="grid-item">
            <div className="category-img">
              <img src="https://pravarshaindustries.com/storage/subcategories/9oAAGs0MVsEGL5R3N4miPzPE9YR3Nhadwf9vvR5O.png" alt="Buttermilk" />
            </div>
            <h2>Buttermilk</h2>
          </a>
          <a href="/shop/combo-products" className="grid-item">
            <div className="category-img">
              <img src="https://pravarshaindustries.com/storage/subcategories/DcI6c6kqlRksHXcAE3kASEP9uUeZHF4pdguDMA1K.webp" alt="Combo Products" />
            </div>
            <h2>Combo Products</h2>
          </a>
        </div>
      </div>

      {/* Rows Section */}
      <div className="row">
        {Array(5).fill().map((_, index) => (
          <div key={index} className="col-xl-4">
            <div className="pd-card-background">
              <a href="https://pravarshaindustries.com/shop/milk/buffalo-toned-milk">
                <img
                  src="https://pravarshaindustries.com/storage/products/DXlyMp8QjknwdY06EWYxvs0BgpHM4f8khlXvtUVl.png"
                  className="product-img"
                  alt="Buffalo Toned Milk"
                />
              </a>
              <div className="product-details">
                <div>Buffalo Toned Milk</div>
                <p className="price">
                  <span>&#8377;35 / 500ml</span>
                </p>
                <div className="actions">
                  <span className="stock-status">In Stock</span>
                  <a href="https://pravarshaindustries.com/shop/milk/buffalo-toned-milk">
                    <img src="https://pravarshaindustries.com/img/plus-icon.png" alt="Add to Cart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
