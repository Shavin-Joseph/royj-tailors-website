// src/pages/OurCraftPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AppointmentModal from '../components/AppointmentModal';
import { FaWhatsapp, FaCut, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 3rem 4rem 6rem 4rem;
  max-width: 1100px;
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
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentSection = styled(motion.div)`
  background: #FFFFFF;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 2.5rem;
  box-shadow: var(--shadow-sm);

  h2 {
    font-family: 'DM Serif Display', sans-serif;
    font-size: 2rem;
    color: var(--primary-blue);
    margin: 0 0 1rem 0;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.6rem;
  }

  p {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 1rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;

  .icon {
    font-size: 1.8rem;
    color: var(--primary-blue);
    margin-bottom: 0.6rem;
  }
  h3 {
    font-size: 1.15rem;
    color: var(--text-main);
    margin: 0 0 0.4rem 0;
  }
  p {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.5;
    margin: 0;
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: 3.5rem;
`;

const WhatsAppCTA = styled.a`
  background: #25D366;
  color: #FFFFFF;
  border: none;
  padding: 1.1rem 2.2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.3);

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-2px);
  }
`;

const OurCraftPage = () => {
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);
  const whatsappNumber = '94775532642';

  return (
    <>
      <Helmet>
        <title>About Royj Tailors | Custom Tailoring in Wattala</title>
        <meta name="description" content="Learn about Royj Tailors in Wattala. We specialize in custom dark green cargo trousers, shirts, shorts, and school uniforms with perfect fit guarantee." />
      </Helmet>

      <PageContainer>
        <HeaderSection>
          <Badge>About Royj Tailors</Badge>
          <PageTitle>Quality Tailoring for Men & Children</PageTitle>
          <Subtitle>
            Based in Wattala, Sri Lanka, we craft custom-fit clothing designed for comfort, durability, and everyday wear.
          </Subtitle>
        </HeaderSection>

        <ContentSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2>Why Choose Royj Tailors?</h2>
          <p>
            We take pride in making clothing that fits you properly. Unlike standard store clothes that are often too loose or tight, our tailors cut every trouser, cargo pant, shirt, and school uniform to match your exact waist and length requirements.
          </p>
          <p>
            Our signature product is our <strong>Dark Green Utility Cargo Trousers</strong>, crafted with durable cotton twill fabric, side flap pockets, back flap pockets, and reinforced stitching built to last.
          </p>
        </ContentSection>

        <ContentSection initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2>Our Main Specializations</h2>
          <FeatureGrid>
            <FeatureCard>
              <FaCut className="icon" />
              <h3>Utility Cargo Pants</h3>
              <p>Custom dark green & khaki cargo trousers with side and back flap pockets cut to your waist and leg length.</p>
            </FeatureCard>
            <FeatureCard>
              <FaShieldAlt className="icon" />
              <h3>School Uniforms</h3>
              <p>Neat, durable school shirts, shorts, trousers, and skirts for boys and girls of all school ages.</p>
            </FeatureCard>
            <FeatureCard>
              <FaCheckCircle className="icon" />
              <h3>Custom Shirts & Shorts</h3>
              <p>Comfortable long/short sleeve cotton shirts and casual shorts tailored for work and weekend wear.</p>
            </FeatureCard>
          </FeatureGrid>
        </ContentSection>

        <CTAWrapper>
          <WhatsAppCTA href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={{ fontSize: '1.3rem' }} /> Ask a Question on WhatsApp
          </WhatsAppCTA>
        </CTAWrapper>
      </PageContainer>

      <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </>
  );
};

export default OurCraftPage;