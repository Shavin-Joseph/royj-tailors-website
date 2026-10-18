import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiScissors } from 'react-icons/fi';
import { studio, whatsappUrl } from '../data/studio';
export default function Footer() {
  return <footer className="footer"><div className="container">
    <div className="footer-top"><div><span className="eyebrow">A little more personal.</span><h2>Good clothes.<br /><em>Better conversations.</em></h2></div><a className="text-link" href={whatsappUrl()} target="_blank" rel="noreferrer">Let’s talk tailoring <FiArrowUpRight /></a></div>
    <div className="footer-grid">
      <div><Link className="brand" to="/"><FiScissors /><span>ROYJ<span className="brand-sub">TAILORS · WATTALA</span></span></Link><p>Everyday pieces. Individual fit.<br />Made with care in Sri Lanka.</p></div>
      <div><h3>Explore</h3><Link to="/shop">The collection</Link><Link to="/our-craft">Our craft</Link><Link to="/shop?saved=true">Your saved pieces</Link></div>
      <div><h3>Find us</h3><p>{studio.address}</p><Link to="/contact">Plan your visit <FiArrowUpRight /></Link></div>
      <div><h3>Say hello</h3><a href={'tel:+' + studio.phone}>{studio.displayPhone}</a><p>{studio.hours}<br />Sunday by request</p></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Royj Tailors. All rights reserved.</span><span>Cut with purpose. Made for you.</span></div>
  </div></footer>;
}
