
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import data from './data/mensProducts.json';
import "./Men.css";
import './WomenPage.css';
import { useNavigate } from 'react-router-dom';

const Men = () => {
  const suitRef = useRef(null);
  const kurtaRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const navigate = useNavigate();
  return (
    <div>
      {/* Hero Section */}
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <section className="hero-container">
        <div className="hero-content">
          <h1>Welcome to Our Men’s Collection</h1>
          <p>Discover the latest trends and style with our handpicked collection</p>
          <button className="hero-btn">Shop Now</button>
        </div>
      </section>

      {/* Categories */}
      <h2 className="category-title">Categories</h2>
      <div className="categories">
        <div onClick={() => scrollToSection(suitRef)}>
          <img src="/assets/mensuit1.webp" alt="Suit" />
          <p>Suit</p>
        </div>
        <div onClick={() => scrollToSection(kurtaRef)}>
          <img src="/assets/kurta1.webp" alt="Kurta" />
          <p>Kurta</p>
        </div>
      </div>

      {/* Suit Collection */}
      <div className="product-section" ref={suitRef}>
        <h2>Suit Collection</h2>
        <div className="product-grid">
          {data.suits.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} state={item}>
              <div className="product-card">
                             <img
  src={item.image || (Array.isArray(item.images) && item.images[0])}
  alt={item.name}
/>

                <h4>{item.name}</h4>
                <p>₨ {item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Kurta Collection */}
      <div className="product-section" ref={kurtaRef}>
        <h2>Kurta Collection</h2>
        <div className="product-grid">
          {data.kurtas.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id} state={item}>
              <div className="product-card">
                {/* <img src={item.image} alt={item.name} /> */}
                <img
                src={item.image || (item.images && item.images[0])}
                             alt={item.name}/>
                <h4>{item.name}</h4>
                <p>₨ {item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Men;
