// import React from 'react'
// import { Link } from 'react-router-dom';
// import data from './data/womenProducts.json';
// import "./Men.css"
// import './WomenPage.css';

// const Men = () => {
//     const suitRef = useRef(null);
//       const kurtaRef = useRef(null);
    
//       const scrollToSection = (ref) => {
//         ref.current.scrollIntoView({ behavior: 'smooth' });
//       };
    
//   return (
//     <div>
      
//       {/* Hero Section */}
//       <section className="hero-container">
//         <div className="hero-content">
//           <h1>Welcome to Our  Men’s Collection</h1>
//           <p>Discover the latest trends and style with our handpicked collection</p>
//           <button className="hero-btn">Shop Now</button>
//         </div>
//       </section>

//       Categories
//       <div className="categories">
//         <div onClick={() => scrollToSection(suitRef)}>
//           <img src="/assets/mensuit1.webp" alt="Suit" />
//           <p>Suit</p>
//         </div>
//         <div onClick={() => scrollToSection(kurtaRef)}>
//           <img src="/assets/kurta1.webp" alt="Frock" />
//           <p>Kurta</p>
//         </div>
//       </div>
     
//       <div className="product-section" ref={suitRef}>
//               <h2>Suit Collection</h2>
//               <div className="product-grid">
//                 {data.suits.map((item) => (
//                   <Link to={`/product/${item.id}`} key={item.id} state={item}>
//                     <div className="product-card">
//                       <img src={item.image} alt={item.name} />
//                       <h4>{item.name}</h4>
//                       <p>₨ {item.price}</p>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//             <div className="product-section" ref={kurtaRef}>
//         <h2>Frock Collection</h2>
//         <div className="product-grid">
//           {data.kurtas.map((item) => (
//             <Link to={`/product/${item.id}`} key={item.id} state={item}>
//               <div className="product-card">
//                 <img src={item.image} alt={item.name} />
//                 <h4>{item.name}</h4>
//                 <p>₨ {item.price}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//             </div>

//   )
// }

// export default Men
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import data from './data/mensProducts.json';
import "./Men.css";
import './WomenPage.css';

const Men = () => {
  const suitRef = useRef(null);
  const kurtaRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
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
                <img src={item.image} alt={item.name} />
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
                <img src={item.image} alt={item.name} />
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
