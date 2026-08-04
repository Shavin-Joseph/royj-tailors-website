// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

const HeroContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 6rem 1.5rem 3rem 1.5rem;
    text-align: center;
  }
`;

const TextContent = styled(motion.div)`
  flex-basis: 50%;
  padding-right: 4rem;
  z-index: 2;

  @media (max-width: 900px) {
    flex-basis: auto;
    padding-right: 0;
    margin-bottom: 3rem;
  }
`;

const Headline = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: 5.5rem;
  color: #1A1A1A;
  margin: 0 0 1.5rem 0;
  line-height: 1.05;

  @media (max-width: 900px) {
    font-size: 3rem;
  }
`;

const Subheadline = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  max-width: 450px;
  margin: 0 0 2.5rem 0;
  
  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ImageWrapper = styled.div`
  flex-basis: 50%;
  position: relative;
  height: 100vh;
  width: 100%;
  
  @media (max-width: 900px) {
    flex-basis: auto;
    height: 40vh;
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const TiltContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1500px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 75vh;
  filter: drop-shadow(0px 25px 25px rgba(0, 0, 0, 0.1));
  
  @media (max-width: 900px) {
    max-height: 35vh;
  }
`;

const HomePage = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentProductIndex + 1) % products.length;
      setCurrentProductIndex(nextIndex);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentProductIndex]);

  const currentProduct = products[currentProductIndex];

  return (
    <>
      <Helmet>
        <title>Royj Tailors | Custom Tailored Menswear in Sri Lanka</title>
        <meta name="description" content="Discover custom tailored shirts and trousers from Royj Tailors in Sri Lanka. Experience perfect fit and premium quality. Order online today." />
      </Helmet>
    
      <HeroContainer>
        <TextContent>
          <Headline>{t('heroTitle')}</Headline>
          <Subheadline>{t('heroSubtitle')}</Subheadline>
        </TextContent>
        <ImageWrapper>
          <AnimatePresence mode="wait">
            <TiltContainer
              key={currentProduct.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              <Tilt
                glareEnable={true} glareMaxOpacity={0.05} glarePosition="all"
                tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.02}
              >
                <ProductImage src={currentProduct.image} alt={currentProduct.name} />
              </Tilt>
            </TiltContainer>
          </AnimatePresence>
        </ImageWrapper>
      </HeroContainer>
    </>
  );
};

export default HomePage;