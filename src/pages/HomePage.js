// src/pages/HomePage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import BespokeCustomizer from '../components/BespokeCustomizer';
import FitQuizModal from '../components/FitQuizModal';
import AppointmentModal from '../components/AppointmentModal';
import { FaWhatsapp, FaCut, FaCalendarAlt } from 'react-icons/fa';

const HeroContainer = styled.div`
  min-height: 85vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 4rem;
  background: linear-gradient(130deg, #FFFFFF 0%, #F1F5F9 100%);
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
    text-align: center;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
  max-width: 620px;
  z-index: 2;

  @media (max-width: 960px) {
    max-width: 100%;
    margin-bottom: 3rem;
  }
`;

const CategoryBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #EFF6FF;
  border: 1px solid var(--primary-blue);
  color: var(--primary-blue);
  padding: 0.45rem 1.2rem;
  border-radius: 30px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.2rem;
`;

const Headline = styled.h1`
  font-family: 'DM Serif Display', sans-serif;
  font-size: 4.2rem;
  font-weight: 700;
  color: var(--text-main);
  margin: 0 0 1.2rem 0;
  line-height: 1.08;

  span.highlight {
    color: var(--primary-blue);
  }

  @media (max-width: 960px) {
    font-size: 2.8rem;
  }
`;

const Subheadline = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0 0 2.2rem 0;
  max-width: 540px;

  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const HeroCTAWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const WhatsAppPrimaryCTA = styled.a`
  background: #25D366;
  color: #FFFFFF;
  border: none;
  padding: 1.1rem 2.2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
    box-shadow: 0 12px 25px rgba(37, 211, 102, 0.4);
  }
`;

const SecondaryCTA = styled.a`
  background: #FFFFFF;
  color: var(--text-main);
  border: 2px solid var(--primary-blue);
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: #EFF6FF;
    transform: translateY(-2px);
  }
`;

const HeroImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CargoHeroCard = styled.div`
  background: #FFFFFF;
  border: 2px solid var(--primary-blue);
  border-radius: 24px;
  padding: 2rem;
  width: 440px;
  box-shadow: var(--shadow-md);
  text-align: center;
  position: relative;

  @media (max-width: 640px) {
    width: 310px;
    padding: 1.2rem;
  }
`;

const ToggleViewButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const ToggleBtn = styled.button`
  background: ${props => props.active ? 'var(--primary-blue)' : '#F1F5F9'};
  color: ${props => props.active ? '#FFFFFF' : 'var(--text-main)'};
  border: none;
  padding: 0.45rem 1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const HeroCargoImg = styled.img`
  max-width: 100%;
  height: 320px;
  object-fit: contain;
  filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.1));

  @media (max-width: 640px) {
    height: 220px;
  }
`;

const FeatureTagRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  span {
    background: #F1F5F9;
    color: var(--primary-blue);
    font-size: 0.78rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 12px;
  }
`;

const CategoryGridSection = styled.div`
  padding: 4rem 4rem 2rem 4rem;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.8rem;
    color: var(--text-main);
    margin: 0 0 0.5rem 0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: var(--text-muted);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.8rem;
  max-width: 1200px;
  margin: 0 auto 4rem auto;
  padding: 0 4rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const StepCard = styled.div`
  background: #FFFFFF;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);

  .num {
    background: #EFF6FF;
    color: var(--primary-blue);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    margin: 0 0 0.5rem 0;
    color: var(--text-main);
  }

  p {
    color: var(--text-muted);
    font-size: 0.92rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const BannerCTASection = styled.div`
  background: var(--primary-blue);
  color: #FFFFFF;
  border-radius: 20px;
  margin: 5rem 4rem;
  padding: 4rem;
  text-align: center;

  h2 {
    font-size: 2.8rem;
    color: #FFFFFF;
    margin: 0 0 1rem 0;
  }

  p {
    color: #CBD5E1;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }

  @media (max-width: 768px) {
    margin: 3rem 1.5rem;
    padding: 2.5rem 1.5rem;

    h2 { font-size: 2rem; }
  }
`;

const HomePage = () => {
  const [cargoView, setCargoView] = useState('front');
  const [isQuizOpen, setQuizOpen] = useState(false);
  const [isAppointmentOpen, setAppointmentOpen] = useState(false);
  const whatsappNumber = '94775532642';

  const cargoProduct = products[0];

  return (
    <>
      <Helmet>
        <title>Royj Tailors | Custom Cargo Pants, Shirts, Shorts & School Uniforms</title>
        <meta name="description" content="Order custom dark green cargo trousers, men's shirts, casual shorts & children's school uniforms with custom measurements on WhatsApp." />
      </Helmet>

      {/* Hero Section */}
      <HeroContainer>
        <TextContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CategoryBadge>✂ Custom Tailoring & Uniforms</CategoryBadge>
          <Headline>
            Custom Dark Green <span className="highlight">Cargo Pants</span>, Shirts & School Uniforms
          </Headline>
          <Subheadline>
            Select your exact waist and length measurements before placing your order directly on WhatsApp. Guaranteed perfect fit for men and children!
          </Subheadline>
          <HeroCTAWrapper>
            <WhatsAppPrimaryCTA href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Royj Tailors, I want to order the Dark Green Cargo Trousers with custom measurements.")}`} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp style={{ fontSize: '1.4rem' }} /> Order Cargo Pants on WhatsApp
            </WhatsAppPrimaryCTA>
            <SecondaryCTA href="#customizer-tool">
              <FaCut /> Easy Size Selector
            </SecondaryCTA>
          </HeroCTAWrapper>
        </TextContent>

        {/* Featured Cargo Trousers Card */}
        <HeroImageWrapper>
          <CargoHeroCard>
            <ToggleViewButtons>
              <ToggleBtn active={cargoView === 'front'} onClick={() => setCargoView('front')}>
                Front View
              </ToggleBtn>
              <ToggleBtn active={cargoView === 'back'} onClick={() => setCargoView('back')}>
                Back View
              </ToggleBtn>
            </ToggleViewButtons>

            <HeroCargoImg
              src={cargoView === 'front' ? '/cargo-trousers-front.jpg' : '/cargo-trousers-back.jpg'}
              alt="Dark Green Cargo Trousers"
            />

            <div style={{ marginTop: '0.8rem' }}>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '1.4rem', color: 'var(--text-main)' }}>
                {cargoProduct.name}
              </h3>
              <div style={{ color: 'var(--primary-blue)', fontWeight: '800', fontSize: '1.3rem' }}>
                {cargoProduct.price}
              </div>
              <FeatureTagRow>
                <span>Side Flap Pockets</span>
                <span>Back Flap Pockets</span>
                <span>Custom Waist & Inseam</span>
              </FeatureTagRow>
            </div>
          </CargoHeroCard>
        </HeroImageWrapper>
      </HeroContainer>

      {/* Main Categories Section */}
      <CategoryGridSection>
        <SectionHeader>
          <h2>Our Products</h2>
          <p>Click any product to choose your measurements and place your order on WhatsApp.</p>
        </SectionHeader>

        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </CategoryGridSection>

      {/* Easy Customizer Section */}
      <div style={{ padding: '2rem 0' }}>
        <BespokeCustomizer />
      </div>

      {/* 4 Simple Steps to Order */}
      <SectionHeader>
        <h2>How to Order in 4 Easy Steps</h2>
        <p>Simple and straightforward process for all custom orders.</p>
      </SectionHeader>

      <StepsGrid>
        <StepCard>
          <div className="num">1</div>
          <h3>Choose Product</h3>
          <p>Pick Cargo Pants, Shirts, Shorts, or School Uniforms.</p>
        </StepCard>
        <StepCard>
          <div className="num">2</div>
          <h3>Select Sizes</h3>
          <p>Pick a standard size or type your exact waist and length inches.</p>
        </StepCard>
        <StepCard>
          <div className="num">3</div>
          <h3>Order on WhatsApp</h3>
          <p>Click the button to send your specs to our tailor studio instantly.</p>
        </StepCard>
        <StepCard>
          <div className="num">4</div>
          <h3>Fast Delivery</h3>
          <p>We tailor your clothes and deliver directly to your doorstep in Sri Lanka.</p>
        </StepCard>
      </StepsGrid>

      {/* WhatsApp Banner CTA */}
      <BannerCTASection>
        <h2>Ready to Place Your Order?</h2>
        <p>Have questions about sizes, fabrics, or school uniforms? Chat with our master tailor on WhatsApp right now!</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <WhatsAppPrimaryCTA href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp style={{ fontSize: '1.4rem' }} /> Start WhatsApp Chat
          </WhatsAppPrimaryCTA>
          <button
            onClick={() => setAppointmentOpen(true)}
            style={{
              background: '#FFFFFF',
              color: 'var(--primary-blue)',
              border: 'none',
              padding: '1.1rem 2rem',
              borderRadius: '10px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            <FaCalendarAlt /> Book Visit at Wattala Shop
          </button>
        </div>
      </BannerCTASection>

      <FitQuizModal isOpen={isQuizOpen} onClose={() => setQuizOpen(false)} />
      <AppointmentModal isOpen={isAppointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </>
  );
};

export default HomePage;