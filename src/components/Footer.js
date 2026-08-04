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