// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const TopAnnouncement = styled.div`
  background: var(--primary-blue);
  color: #FFFFFF;
  font-size: 0.85rem;
  padding: 0.6rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;

  @media (max-width: 768px) {
    justify-content: center;
    span.hide-mobile {
      display: none;
    }
  }
`;

const ContactPill = styled.a`
  color: #FFFFFF;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  &:hover {
    color: #6EE7B7;
  }
`;

const NavContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.96)' : '#FFFFFF'};
  box-shadow: ${props => props.scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)'};
  border-bottom: 1px solid var(--border-color);
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    padding: 0.9rem 1.5rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'DM Serif Display', sans-serif;
  font-size: 2.1rem;
  color: var(--primary-blue);
  text-decoration: none;

  span.sub {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.7rem;
    letter-spacing: 1.5px;
    color: var(--text-light);
    display: block;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  
  @media (max-width: 960px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: ${props => props.active ? 'var(--primary-blue)' : 'var(--text-main)'};
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: ${props => props.active ? 'scaleX(1)' : 'scaleX(0)'};
    height: 2.5px;
    bottom: -6px;
    left: 0;
    background: var(--primary-blue);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover {
    color: var(--primary-blue);
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const WhatsAppNavCTA = styled.a`
  background: var(--primary-emerald);
  color: #FFFFFF;
  border: none;
  padding: 0.65rem 1.3rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s ease;

  &:hover {
    background: #047857;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
    font-size: 1.6rem;
    color: var(--primary-blue);
    cursor: pointer;
    z-index: 101;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
    z-index: 100;
  }
`;

const MobileNavLink = styled(Link)`
  color: var(--text-main);
  font-size: 1.8rem;
  text-decoration: none;
  font-family: 'DM Serif Display', serif;
  &:hover {
    color: var(--primary-blue);
  }
`;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const whatsappNumber = '94775532642';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TopAnnouncement>
        <span>✂ Custom Trousers, Cargo Pants, Shirts, Shorts & School Uniforms</span>
        <span className="hide-mobile">
          <ContactPill href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={{ fontSize: '1.1rem' }} /> WhatsApp Order: +94 77 553 2642
          </ContactPill>
        </span>
      </TopAnnouncement>

      <NavContainer scrolled={scrolled} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <Logo to="/" onClick={() => setMenuOpen(false)}>
          <div>
            ROYJ TAILORS
            <span className="sub">Custom Tailoring & Uniforms</span>
          </div>
        </Logo>
        
        {/* Desktop Links */}
        <NavLinks>
          <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>Home</NavLink>
          <NavLink to="/shop" active={location.pathname === '/shop' ? 1 : 0}>All Products</NavLink>
          <NavLink to="/our-craft" active={location.pathname === '/our-craft' ? 1 : 0}>About Us</NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>Contact & Studio</NavLink>
        </NavLinks>

        <WhatsAppNavCTA href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Royj Tailors, I want to ask about custom tailoring and WhatsApp order.")}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Order via WhatsApp
        </WhatsAppNavCTA>
        
        {/* Mobile Hamburger */}
        <MobileIcon onClick={() => setMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
      </NavContainer>
      
      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink to="/" onClick={() => setMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/shop" onClick={() => setMenuOpen(false)}>All Products</MobileNavLink>
            <MobileNavLink to="/our-craft" onClick={() => setMenuOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Studio</MobileNavLink>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                background: 'var(--primary-emerald)',
                color: '#FFFFFF',
                padding: '0.9rem 1.8rem',
                borderRadius: '8px',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FaWhatsapp style={{ fontSize: '1.3rem' }} /> WhatsApp Order Now
            </a>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;