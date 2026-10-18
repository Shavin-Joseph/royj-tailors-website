<<<<<<< HEAD
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
=======
// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const FooterContainer = styled.footer`
  background-color: #f7f7f7;
  color: #333;
  padding: 3rem 4rem;
  border-top: 1px solid #e0e0e0;
  font-family: 'Inter', sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
`;

const Logo = styled.h3`
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  margin: 0 0 1rem 0;
  color: #1A1A1A;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;

const ContactInfo = styled.div`
  p {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 10px;
    
    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  a {
    color: #333;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
  font-size: 0.9rem;
  color: #888;
`;

const Footer = () => {
  const { t } = useLanguage();

  const yourWhatsappNumber = '94775532642';
  const yourTelephoneNumber = '94775532642';
  const yourAddress = 'No. 176/17A Alwistown, Hendala, Wattala.';
  const whatsappLink = `https://wa.me/${yourWhatsappNumber}`;

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <LogoIcon src="/royj-logo.png" alt="Royj Tailors" />
            Royj Tailors
          </Logo>
          <p>{t('footerTagline')}</p>
        </FooterSection>
        <FooterSection>
          <h4>{t('navContact')}</h4>
          <ContactInfo>
            <p><FaMapMarkerAlt /> {yourAddress}</p>
            <p><FaPhone /> <a href={`tel:${yourTelephoneNumber}`}>{yourTelephoneNumber}</a></p>
            <p><FaWhatsapp /> <a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      <Copyright>
        {t('copyrightText')}
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
