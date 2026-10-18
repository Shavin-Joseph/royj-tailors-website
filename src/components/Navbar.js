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
