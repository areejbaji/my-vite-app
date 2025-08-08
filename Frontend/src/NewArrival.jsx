import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./newArrival.css"; // CSS
import data from "./data/newArrival.json"; // JSON
// import "./Frontend/ProductDetails.css";
// import ShopBySabCategries from "./Banner"; // ✅ Add this import

const NewArrivals = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data); // Local product data
  }, []);

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <>
      <section className="new-arrival">
        <h2>New Arrivals</h2>
        <p>Stay ahead of trends with our latest collections</p>
        <div className="arrival-list">
          {products.map((product) => (
            <div key={product.id} className="arrival-item">
              <div
                onClick={() => handleProductClick(product)}
                style={{ cursor: "pointer" }}
              >
                <img src={product.image} alt={product.name} />
                <p>
                  {product.name}
                  <br />
                  Ready-to-wear
                  <br />
                  <span className="price">Rs {product.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </>
  );
};

export default NewArrivals;