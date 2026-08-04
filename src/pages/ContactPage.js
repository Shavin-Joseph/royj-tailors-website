// src/pages/ContactPage.js
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const PageContainer = styled.div`
  padding: 8rem 4rem 4rem 4rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 4rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  text-align: center;
`;

const ContactItem = styled.div`
  .icon {
    font-size: 2.5rem;
    color: #1A1A1A;
    margin-bottom: 1rem;
  }
  h3 {
    font-family: 'DM Serif Display', serif;
    margin-bottom: 0.5rem;
  }
  a, p {
    color: #333;
    text-decoration: none;
    font-size: 1.1rem;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const ContactPage = () => {
  const { t } = useLanguage();

  const yourWhatsappNumber = '94775532642';
  const yourTelephoneNumber = '94775532642';
  const yourAddress = 'No. 176/17A Alwistown, Hendala, Wattala.';
  const whatsappLink = `https://wa.me/${yourWhatsappNumber}`;

  return (
    <>
      <Helmet>
        <title>{t('contactTitle')} | Royj Tailors</title>
        <meta name="description" content="Get in touch with Royj Tailors. Find our address, phone number, and WhatsApp contact for inquiries and orders." />
      </Helmet>
      <PageContainer>
        <PageTitle>{t('contactTitle')}</PageTitle>
        <Subtitle>{t('contactSubtitle')}</Subtitle>
        
        <ContactGrid>
          <ContactItem>
            <FaMapMarkerAlt className="icon" />
            <h3>{t('contactShopHeading')}</h3>
            <p>{yourAddress}</p>
          </ContactItem>
          <ContactItem>
            <FaPhone className="icon" />
            <h3>Phone</h3>
            <a href={`tel:${yourTelephoneNumber}`}>{yourTelephoneNumber}</a>
          </ContactItem>
          <ContactItem>
            <FaWhatsapp className="icon" />
            <h3>WhatsApp</h3>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </ContactItem>
        </ContactGrid>
      </PageContainer>
    </>
  );
};

export default ContactPage;