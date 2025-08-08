

import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './ProductDetailPage.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/cartSlice';
import data from './data/mensProducts.json'; // fallback data

const sizeRanges = {
  XS: { length: [30, 32], waist: [24, 26], hip: [34, 36] },
  S: { length: [33, 35], waist: [27, 29], hip: [35, 37] },
  M: { length: [36, 38], waist: [30, 32], hip: [38, 40] },
  L: { length: [39, 41], waist: [33, 35], hip: [41, 43] },
  XL: { length: [42, 44], waist: [36, 38], hip: [44, 46] },
};

const ProductDetailPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  let product = state;
  if (!product) {
    product =
      data.suits.find(item => String(item.id) === id) ||
      data.kurtas.find(item => String(item.id) === id);
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  const { name, price, description, image, images } = product;

  
  const normalizePath = (img) =>
    img.startsWith('/') ? img : `/${img}`;

  const mainImages = Array.isArray(images) && images.length > 0
    ? images.map(normalizePath)
    : image
      ? [normalizePath(image)]
      : [];

  const [selectedImage, setSelectedImage] = useState(mainImages[0] || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [measurements, setMeasurements] = useState({ length: "", waist: "", hip: "" });

  
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


  const handleAddToCart = () => {
    const cartItem = {
      id: Date.now(),
      name,
      price,
      image: selectedImage,
      size: selectedSize,
      measurements
    };
    dispatch(addToCart(cartItem));
    alert("Item added to cart!");
  };

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>

      <div className="detail-container">
      
        <div className="detail-left">
          <div className="thumbnail-column">
            {mainImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${name} thumbnail ${index + 1}`}
                className={`thumbnail-image ${selectedImage === img ? 'active' : ''}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          <div className="main-content">
            <div className="main-image-container">
              <img src={selectedImage} alt="Main Product" className="main-image" />
            </div>
          </div>
        </div>

        <div className="detail-right">
          <h2>{name}</h2>
          <p className="price">₨ {price}</p>
          <p>{description}</p>

          <div className="size-section">
            <h3>Select Size:</h3>
            <div className="size-buttons">
              {Object.keys(sizeRanges).map((size) => (
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

        
          {selectedSize && (
            <div className="customize-section">
              <h3>Customize Your Dress</h3>
              {renderMeasurementInput("Length", "length")}
              {renderMeasurementInput("Waist", "waist")}
              {renderMeasurementInput("Hip", "hip")}
            </div>
          )}

          <div className="cart-section">
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

