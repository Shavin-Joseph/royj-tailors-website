// src/pages/ContactPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import AppointmentModal from '../components/AppointmentModal';
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaDirections } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 3rem 4rem 6rem 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem 1.5rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const Badge = styled.span`
  display: inline-block;
  background: #EFF6FF;
  color: var(--primary-blue);
  border: 1px solid var(--primary-blue);
  padding: 0.4rem 1rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

const PageTitle = styled.h1`
  font-family: 'DM Serif Display', sans-serif;
  font-size: 3.5rem;
  color: var(--text-main);
  margin: 0 0 0.8rem 0;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3.5rem;
`;

const ContactCard = styled.div`
  background: #FFFFFF;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--primary-blue);
    box-shadow: var(--shadow-md);
  }

  .icon {
    font-size: 2.2rem;
    color: var(--primary-blue);
    margin-bottom: 1rem;
  }

  h3 {
    font-family: 'DM Serif Display', sans-serif;
    font-size: 1.5rem;
    color: var(--text-main);
    margin: 0 0 0.5rem 0;
  }

  p, a {
    color: var(--text-muted);
    font-size: 0.98rem;
    line-height: 1.6;
    margin: 0;
    text-decoration: none;
  }

  a:hover {
    color: var(--primary-blue);
    text-decoration: underline;
  }
`;

const MapBanner = styled.div`
  background: #FFFFFF;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: var(--shadow-sm);

  h2 {
    font-family: 'DM Serif Display', sans-serif;
    font-size: 2.2rem;
    color: var(--primary-blue);
    margin: 0 0 0.8rem 0;
  }

  p {
    color: var(--text-muted);
    font-size: 1.05rem;
    max-width: 550px;
    margin: 0 auto 2rem auto;
  }

  @media (max-width: 768px) {
    padding: 1.8rem;
    h2 { font-size: 1.8rem; }
  }
`;

const ActionButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const WhatsAppCTA = styled.a`
  background: #25D366;
  color: #FFFFFF;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.3);

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-2px);
  }
`;

const SecondaryCTA = styled.button`
  background: #FFFFFF;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  padding: 0.95rem 1.8rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s ease;

  &:hover {
    background: #EFF6FF;
    transform: translateY(-2px);
  }
`;

const ContactPage = () => {
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);
  const whatsappNumber = '94775532642';
  const address = 'No. 176/17A Alwistown, Hendala, Wattala, Sri Lanka';
  const mapLink = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

  return (
    <>
      <Helmet>
        <title>Contact Us | Royj Tailors Wattala</title>
        <meta name="description" content="Contact Royj Tailors in Wattala. Visit our shop address or message us on WhatsApp for custom cargo pants, shirts, shorts, and school uniforms." />
      </Helmet>

      <PageContainer>
        <HeaderSection>
          <Badge>Contact Information</Badge>
          <PageTitle>Contact Royj Tailors</PageTitle>
          <Subtitle>
            Have a question or want to order? Visit our Wattala shop or contact us directly on WhatsApp!
          </Subtitle>
        </HeaderSection>

        <ContactGrid>
          <ContactCard>
            <FaMapMarkerAlt className="icon" />
            <h3>Shop Address</h3>
            <p>{address}</p>
          </ContactCard>

          <ContactCard>
            <FaPhoneAlt className="icon" />
            <h3>Phone & WhatsApp</h3>
            <a href={`tel:${whatsappNumber}`}>+94 77 553 2642</a>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '4px' }}>
              Direct Tailor Line
            </div>
          </ContactCard>

          <ContactCard>
            <FaClock className="icon" />
            <h3>Opening Hours</h3>
            <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
            <p style={{ color: 'var(--primary-blue)', fontWeight: '700', marginTop: '4px' }}>
              Sunday: Open by Request
            </p>
          </ContactCard>
        </ContactGrid>

        <MapBanner>
          <h2>Get in Touch with Us</h2>
          <p>Order online via WhatsApp, book a fitting appointment, or get Google Maps directions to our Wattala shop.</p>
          
          <ActionButtonRow>
            <WhatsAppCTA href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ fontSize: '1.3rem' }} /> Message Us on WhatsApp
            </WhatsAppCTA>
            <SecondaryCTA onClick={() => setAppointmentOpen(true)}>
              <FaCalendarAlt /> Book Visit Window
            </SecondaryCTA>
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-color)',
                color: 'var(--text-main)',
                padding: '0.95rem 1.8rem',
                borderRadius: '10px',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FaDirections style={{ color: 'var(--primary-blue)' }} /> Google Maps Directions
            </a>
          </ActionButtonRow>
        </MapBanner>
      </PageContainer>

      <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </>
  );
};

export default ContactPage;