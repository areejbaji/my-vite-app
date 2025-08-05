
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetailPage.css';

const sizeRanges = {
  XS: { length: [30, 32], waist: [24, 26], hip: [34, 36] },
  S: { length: [33, 35], waist: [27, 29], hip: [35, 37] },
  M: { length: [36, 38], waist: [30, 32], hip: [38, 40] },
  L: { length: [39, 41], waist: [33, 35], hip: [41, 43] },
  XL: {length: [42, 44], waist: [36, 38], hip: [44, 46] },
};

const ProductDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState("");
  const [measurements, setMeasurements] = useState({ chest: "", waist: "", hip: "" });

  if (!state) {
    return <p>Product not found.</p>;
  }

  const { name, price, description, image } = state;

  const handleMeasurementChange = (type, value, min, max) => {
    if (value === "" || (value >= min && value <= max)) {
      setMeasurements((prev) => ({ ...prev, [type]: value }));
    }
  };

  const renderMeasurementInput = (label, type) => {
    if (!selectedSize) return null;
    const [min, max] = sizeRanges[selectedSize][type];

    return (
      <div className="measurement-group">
        <label>{label} ({min}″ - {max}″)</label>
        <input
          type="number"
          value={measurements[type]}
          onChange={(e) => handleMeasurementChange(type, e.target.value, min, max)}
          placeholder={`Enter ${label.toLowerCase()}`}
          min={min}
          max={max}
        />
      </div>
    );
  };

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>

      <div className="detail-container">
        {/* Left Image */}
        <div className="detail-left">
          <img src={image} alt={name} className="detail-img" />
        </div>

        {/* Right Info */}
        <div className="detail-right">
          <h2>{name}</h2>
          <p className="price">₨ {price}</p>
          <p>{description}</p>

          <div className="size-section">
            <h3>Select Size:</h3>
            <div className="size-buttons">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setMeasurements({ length: "", waist: "", hip: "" });
                  }}
                  className={selectedSize === size ? "selected" : ""}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Customize Section */}
          {selectedSize && (
            <div className="customize-section">
              <h3>Customize Your Dress</h3>
              {renderMeasurementInput("length", "length")}
              {renderMeasurementInput("Waist", "waist")}
              {renderMeasurementInput("Hip", "hip")}
            </div>
          )}

          {/* Add to Cart */}
          <div className="cart-section">
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
