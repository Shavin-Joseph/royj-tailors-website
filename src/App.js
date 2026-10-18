<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { StoreProvider } from './components/StoreContext';
=======
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import OurCraftPage from './pages/OurCraftPage';
import ContactPage from './pages/ContactPage';
<<<<<<< HEAD
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function RouteEffects() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef(pathname);
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) { target.scrollIntoView(); return; }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (previousPath.current !== pathname) document.getElementById('main-content')?.focus({ preventScroll: true });
    previousPath.current = pathname;
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <MotionConfig reducedMotion="user"><StoreProvider>
      <GlobalStyle /><RouteEffects />
      <a className="skip-link" href="#main-content">Skip to content</a><Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} /><Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/our-craft" element={<OurCraftPage />} /><Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main><Footer /><FloatingWhatsApp />
    </StoreProvider></MotionConfig>
  </BrowserRouter>;
}
=======
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/our-craft" element={<OurCraftPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
