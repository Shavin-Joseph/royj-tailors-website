<<<<<<< HEAD
import React, { useState } from 'react';
import { FiArrowUpRight, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { studio, whatsappUrl } from '../data/studio';
import AppointmentModal from '../components/AppointmentModal';
export default function ContactPage() {
  const [open, setOpen] = useState(false);
  const mapLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(studio.address);
  return <div className="container contact-page">
    <><title>Visit the studio | Royj Tailors, Wattala</title><meta name="description" content="Visit Royj Tailors at No. 176/17A Alwistown, Hendala, Wattala. Request a fitting, call +94 77 553 2642 or enquire on WhatsApp." /></>
    <div className="page-heading"><span className="eyebrow">GOOD CLOTHES BEGIN WITH A CONVERSATION</span><h1>Come in.<br /><em>Make yourself comfortable.</em></h1><p>Tell us what you have in mind. We’ll work on the fit together.</p></div>
    <div className="contact-layout"><div className="studio-card"><span className="eyebrow">THE WATTALA STUDIO</span><h2>A place for<br /><em>your next great fit.</em></h2><div className="studio-address"><FiMapPin /><p>{studio.address}</p></div><a className="button button-light" href={mapLink} target="_blank" rel="noreferrer">Get directions <FiArrowUpRight /></a><div className="studio-card-rule" /><p className="studio-card-note">Bring a favorite garment, an idea, or just yourself.<br />We’ll help with the rest.</p></div>
      <div className="contact-details"><div className="contact-row"><FiPhone /><div><h3>A direct line to your tailor.</h3><a href={'tel:+' + studio.phone}>{studio.displayPhone}</a><a className="text-link" href={whatsappUrl()} target="_blank" rel="noreferrer"><FaWhatsapp /> Start a WhatsApp conversation <FiArrowUpRight /></a></div></div>
      <div className="contact-row"><FiClock /><div><h3>Make a little time for a good fit.</h3><p>{studio.hours}<br />Sunday visits by request.</p><p className="field-hint">Please confirm your visit with us before travelling.</p></div></div>
      <div className="contact-booking"><span className="eyebrow">WE’LL SAVE SOME TIME FOR YOU</span><h3>Your fitting starts here.</h3><p>Choose a preferred date and time. We’ll confirm your appointment personally on WhatsApp.</p><button className="button" onClick={() => setOpen(true)}>Request a fitting <FiArrowUpRight /></button></div>
    </div></div>
    <AppointmentModal isOpen={open} onClose={() => setOpen(false)} />
  </div>;
}
=======
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
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
