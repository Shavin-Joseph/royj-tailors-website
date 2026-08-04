// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaCheckCircle, FaCut, FaTruck } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #FFFFFF;
  color: var(--text-main);
  padding: 4rem 4rem 2rem 4rem;
  border-top: 1px solid var(--border-color);
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-top: 4rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 1.5rem 1.5rem;
  }
`;

const BadgesRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2.5rem;
`;

const BadgeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1rem 1.2rem;

  .icon {
    font-size: 1.6rem;
    color: var(--primary-blue);
  }

  .text {
    h5 {
      margin: 0 0 2px 0;
      font-size: 0.95rem;
      color: var(--text-main);
      font-weight: 700;
    }
    p {
      margin: 0;
      font-size: 0.85rem;
      color: var(--text-light);
    }
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  h4 {
    font-family: 'DM Serif Display', serif;
    font-size: 1.4rem;
    color: var(--text-main);
    margin: 0 0 1.2rem 0;
  }
`;

const Logo = styled.h3`
  font-family: 'DM Serif Display', serif;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--primary-blue);
`;

const Description = styled.p`
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.95rem;
  max-width: 400px;
  margin-bottom: 1.5rem;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  li a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;
    &:hover {
      color: var(--primary-blue);
      padding-left: 4px;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  font-size: 0.95rem;
  color: var(--text-muted);

  p {
    margin: 0;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    line-height: 1.4;
  }

  a {
    color: var(--primary-blue);
    text-decoration: none;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
  font-size: 0.88rem;
  color: var(--text-light);
`;

const Footer = () => {
  const whatsappNumber = '94775532642';
  const telephoneNumber = '94775532642';
  const address = 'No. 176/17A Alwistown, Hendala, Wattala, Sri Lanka.';

  return (
    <FooterContainer>
      <BadgesRow>
        <BadgeCard>
          <FaCut className="icon" />
          <div className="text">
            <h5>Custom Measurements</h5>
            <p>Pick your standard size or enter exact inches</p>
          </div>
        </BadgeCard>
        <BadgeCard>
          <FaCheckCircle className="icon" />
          <div className="text">
            <h5>Quality Stitching</h5>
            <p>Durable cloth and strong double seams</p>
          </div>
        </BadgeCard>
        <BadgeCard>
          <FaTruck className="icon" />
          <div className="text">
            <h5>Islandwide Delivery</h5>
            <p>Order online & receive anywhere in Sri Lanka</p>
          </div>
        </BadgeCard>
      </BadgesRow>

      <FooterGrid>
        <FooterSection>
          <Logo>ROYJ TAILORS</Logo>
          <Description>
            We make custom trousers, dark green cargo pants, men's shirts, casual shorts, and children's school uniforms with perfect fit and fast WhatsApp ordering.
          </Description>
        </FooterSection>

        <FooterSection>
          <h4>Quick Links</h4>
          <LinksList>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/our-craft">About Our Tailoring</Link></li>
            <li><Link to="/contact">Wattala Studio Location</Link></li>
          </LinksList>
        </FooterSection>

        <FooterSection>
          <h4>Wattala Shop & Studio</h4>
          <ContactInfo>
            <p><FaMapMarkerAlt style={{ color: 'var(--primary-blue)', marginTop: '3px' }} /> {address}</p>
            <p><FaPhone style={{ color: 'var(--primary-blue)', marginTop: '3px' }} /> <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a></p>
            <p><FaWhatsapp style={{ color: 'var(--primary-emerald)', marginTop: '3px' }} /> <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">Message Us on WhatsApp</a></p>
            <p><FaClock style={{ color: 'var(--primary-blue)', marginTop: '3px' }} /> Mon - Sat: 9:00 AM - 7:00 PM</p>
          </ContactInfo>
        </FooterSection>
      </FooterGrid>

      <Copyright>
        &copy; {new Date().getFullYear()} Royj Tailors Wattala. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;