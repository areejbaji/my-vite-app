// import React, { useRef } from 'react';
// import data from './data/womenProducts.json';
// import './WomenPage.css'; // optional for styling

// const WomenPage = () => {
//   const suitRef = useRef(null);
//   const frockRef = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="hero"
//         style={{
//           backgroundImage: `url("assets/herowo.webp")`,
//         }}
//       >
//         Women Collection
//       </div>

      
//       <div className="categories">
//   <div onClick={() => scrollToSection(suitRef)}>
//     <img src="/assets/womenc.webp" alt="Suit" />
//     <p>Suit</p>
//   </div>
//   <div onClick={() => scrollToSection(frockRef)}>
//     <img src="/assets/frockc.jpg" alt="Frock" />
//     <p>Frock</p>
//   </div>
// </div>

//       <div className="product-section" ref={suitRef}>
//          <h2>Suit Collection</h2>
//          <div className="product-grid">
//            {data.suits.map((item) => (
//            <div key={item.id} className="product-card">
//              <img src={item.image} alt={item.name} />
//               <h4>{item.name}</h4>
//              <p>₨ {item.price}</p>
//             </div>
//            ))}
//           </div>
//         </div>

//     <div className="product-section" ref={suitRef}>
//       <h2>Frock Collection</h2>
//         <div className="product-grid">
//            {data.frocks.map((item) => (
//            <div key={item.id} className="product-card">
//               <img src={item.image} alt={item.name} />
//                <h4>{item.name}</h4>
//                <p>₨ {item.price}</p>
//                </div>
//               ))}
//              </div>
//           </div>
//     </div>
//   );
// };

// export default WomenPage;
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import data from './data/womenProducts.json';
import './WomenPage.css';

const WomenPage = () => {
  const suitRef = useRef(null);
  const frockRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <div
        className="hero"
        style={{ backgroundImage: `url("/assets/herowo.webp")` }}
      >
        Women Collection
      </div>

      {/* Categories */}
       <h2 className="category-title">Categories</h2>
      <div className="categories">

        <div onClick={() => scrollToSection(suitRef)}>
          <img src="/assets/womenc.webp" alt="Suit" />
          <p>Suit</p>
        </div>
        <div onClick={() => scrollToSection(frockRef)}>
          <img src="/assets/frockc.jpg" alt="Frock" />
          <p>Frock</p>
        </div>
      </div>

      {/* Suits */}
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

      {/* Frocks */}
      <div className="product-section" ref={frockRef}>
        <h2>Frock Collection</h2>
        <div className="product-grid">
          {data.frocks.map((item) => (
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

export default WomenPage;

