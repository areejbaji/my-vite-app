
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import TermsAndConditions from './Footer/Termsandcondition';
import ShippingPolicy from './Footer/Shippingpolicy';
// import { FaQ } from 'react-icons/fa6';
import Footer from './Footer/Footer';

import ContactForm from './Footer/Contactus';
import Faq from './Footer/FAQ';
import WomenPage from './Women';
import ProductDetailPage from './ProductDetailPage';
import AboutUs from './AboutUs';
import Men from './Men';



const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/TermsandCondition" element={<TermsAndConditions/>} />
         <Route path="/ShippingPolicy" element={<ShippingPolicy/>} />
      <Route path='Faq' element={<Faq/>}/>
        <Route path='Contactus' element={<ContactForm/>}/>
        <Route path='women' element={<WomenPage />} />
        <Route path='Men' element={<Men />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
         <Route path='AboutUs' element={<AboutUs/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;