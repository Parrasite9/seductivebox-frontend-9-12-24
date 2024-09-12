import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductCatalog from './components/ProductCatalog';
import Checkout from './components/Checkout';
import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/quiz" element={<Questionnaire />} />
      </Routes>
    </Router>
  );
}

export default App;
