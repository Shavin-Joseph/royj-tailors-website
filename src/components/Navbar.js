<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiArrowUpRight, FiMenu, FiHeart, FiScissors } from 'react-icons/fi';
import Modal from './Modal';
import AppointmentModal from './AppointmentModal';
import { useStore } from './StoreContext';
const links = [['/', 'Home'], ['/shop', 'The collection'], ['/our-craft', 'Our craft'], ['/contact', 'Visit the studio']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [appointment, setAppointment] = useState(false);
  const location = useLocation();
  const { saved } = useStore();
  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 960px)');
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, []);
  return <>
    <div className="announcement"><span>Thoughtfully tailored in Wattala, Sri Lanka</span><span className="announcement-extra">Your measurements. Your everyday.</span></div>
    <header className="site-header"><nav className="container nav" aria-label="Main navigation">
      <Link className="brand" to="/" aria-label="Royj Tailors home"><FiScissors /><span>ROYJ<span className="brand-sub">TAILORS · WATTALA</span></span></Link>
      <div className="desktop-links">{links.map(([path, text]) => <NavLink key={path} to={path} end={path === '/'}>{text}</NavLink>)}</div>
      <div className="nav-actions">
        <Link className="icon-button saved-link" to="/shop?saved=true" aria-label={'Saved pieces (' + saved.length + ')'}><FiHeart />{saved.length > 0 && <span>{saved.length}</span>}</Link>
        <button className="button nav-appointment" onClick={() => setAppointment(true)}>Book a fitting <FiArrowUpRight /></button>
        <button className="icon-button menu-toggle" onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation"><FiMenu /></button>
      </div>
    </nav></header>
    <Modal isOpen={open} onClose={() => setOpen(false)} title="Main navigation" className="mobile-nav-dialog">
      <div id="mobile-navigation"><span className="eyebrow">Royj Tailors · Wattala</span>
        <div className="mobile-links">{links.map(([path, text], index) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}><span>0{index + 1}</span>{text}<FiArrowUpRight /></NavLink>)}</div>
        <button className="button" onClick={() => { setOpen(false); setAppointment(true); }}>Book a fitting <FiArrowUpRight /></button>
        <p className="muted mobile-nav-note">Good clothes begin with a conversation.</p>
      </div>
    </Modal>
    <AppointmentModal isOpen={appointment} onClose={() => setAppointment(false)} />
  </>;
}
=======
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const NavContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: transparent;
  box-sizing: border-box;

  @media (max-width: 900px) {
    padding: 1.5rem 1.5rem;
  }
`;

const Logo = styled(Link)`
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  color: #1a1a1a;
  text-decoration: none;
  z-index: 101;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoIcon = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  position: relative;
  text-decoration: none;
  color: #1a1a1a;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #1a1a1a;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const LanguageToggleBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #1a1a1a;
  color: #ffffff;
  border: 1.5px solid #1a1a1a;
  padding: 0.45rem 1rem;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  z-index: 101;

  &:hover {
    background: #ffffff;
    color: #1a1a1a;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 101;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  @media (max-width: 900px) {
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
    background-color: #ffffff;
    z-index: 100;
  }
`;

const MobileNavLink = styled(Link)`
  color: #1a1a1a;
  font-size: 2rem;
  text-decoration: none;
  font-family: 'DM Serif Display', serif;
`;

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <>
      <NavContainer
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Logo to="/" onClick={() => setMenuOpen(false)}>
          <LogoIcon src="/royj-logo.png" alt="Royj Tailors" />
          Royj Tailors
        </Logo>

        <RightControls>
          {/* Desktop Links */}
          <NavLinks>
            <NavLink to="/shop">{t('navShop')}</NavLink>
            <NavLink to="/our-craft">{t('navOurCraft')}</NavLink>
            <NavLink to="/contact">{t('navContact')}</NavLink>
          </NavLinks>

          {/* Language Switcher Toggle */}
          <LanguageToggleBtn onClick={toggleLanguage}>
            <FaGlobe /> {language === 'en' ? 'සිංහල' : 'English'}
          </LanguageToggleBtn>

          {/* Hamburger Icon */}
          <MobileIcon onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </RightControls>
      </NavContainer>

      {/* Mobile Menu Pop-up */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink to="/shop" onClick={() => setMenuOpen(false)}>
              {t('navShop')}
            </MobileNavLink>
            <MobileNavLink to="/our-craft" onClick={() => setMenuOpen(false)}>
              {t('navOurCraft')}
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setMenuOpen(false)}>
              {t('navContact')}
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
