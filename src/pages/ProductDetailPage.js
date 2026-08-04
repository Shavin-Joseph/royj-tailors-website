// src/pages/ProductDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { products } from '../data/products';
import Modal from '../components/Modal';
import ShirtSizeChart from '../components/ShirtSizeChart';
import TrousersSizeChart from '../components/TrousersSizeChart';
import OrderForm from '../components/OrderForm';
import CargoCustomizer from '../components/CargoCustomizer';
import OfficeTrousersCustomizer from '../components/OfficeTrousersCustomizer';
import ShirtCustomizer from '../components/ShirtCustomizer';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const PageWrapper = styled.div`
  padding: 8rem 4rem 4rem 4rem;
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 6rem 1.5rem 2rem 1.5rem;
    gap: 2rem;
  }
`;

const ImageGallery = styled.div`
  flex: 1;
  position: sticky;
  top: 6rem;
  @media (max-width: 900px) {
    position: static;
    width: 100%;
  }
`;

const MainImageContainer = styled.div`
  position: relative;
  background-color: #f7f7f7;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
  transition: transform 0.3s ease;
`;

const ViewToggleWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  justify-content: center;
`;

const ViewToggleButton = styled.button`
  padding: 0.5rem 1.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 20px;
  border: 2px solid ${props => (props.$active ? '#1A1A1A' : '#E0E0E0')};
  background-color: ${props => (props.$active ? '#1A1A1A' : '#FFFFFF')};
  color: ${props => (props.$active ? '#FFFFFF' : '#1A1A1A')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1A1A1A;
  }
`;

const ProductInfo = styled.div`
  flex: 1.1;
`;

const ProductName = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: 3.2rem;
  margin: 0 0 0.5rem 0;
  color: #1a1a1a;
`;

const ProductPrice = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  color: #2e7d32;
  margin: 0 0 1.5rem 0;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: #444;
  margin-bottom: 2rem;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const OrderButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #1a1a1a;
  border: 2px solid #1a1a1a;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 220px;
  text-align: center;

  &:hover {
    background-color: #ffffff;
    color: #1a1a1a;
  }
`;

const SizeChartLink = styled.button`
  background: none;
  border: none;
  color: #555;
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.95rem;
  display: block;
`;

const ProductDetailPage = () => {
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [isSizeChartOpen, setSizeChartOpen] = useState(false);
  const [activeView, setActiveView] = useState('front');
  const { language, t } = useLanguage();

  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  // Custom config state
  const [customConfig, setCustomConfig] = useState(product?.defaultConfig || null);

  useEffect(() => {
    if (product) {
      setCustomConfig(product.defaultConfig || null);
    }
  }, [product]);

  if (!product) {
    return <PageWrapper><div>Product not found!</div></PageWrapper>;
  }

  const isShirt = product.type.includes('shirt');
  const isCargo = product.type === 'cargo-trousers';
  const isOffice = product.type === 'office-trousers';
  const yourPhoneNumber = '94775532642';

  const handleConfigChange = (newConfig) => {
    setCustomConfig(prev => ({ ...prev, ...newConfig }));
  };

  const handleResetConfig = () => {
    setCustomConfig(product.defaultConfig);
  };

  // Localized Name, Price & Description
  let nameKey = `product_${product.id.replace(/-/g, '_')}_name`;
  let descKey = `product_${product.id.replace(/-/g, '_')}_desc`;
  if (product.id.includes('white-shirt')) {
    nameKey = 'product_white_shirt_name';
    descKey = 'product_white_shirt_desc';
  } else if (product.id.includes('blue-oxford')) {
    nameKey = 'product_blue_shirt_name';
    descKey = 'product_blue_shirt_desc';
  } else if (product.id.includes('essential-gray') || product.id.includes('office-trousers')) {
    nameKey = 'product_office_trousers_name';
    descKey = 'product_office_trousers_desc';
  } else if (product.id.includes('cargo-trousers')) {
    nameKey = 'product_cargo_trousers_name';
    descKey = 'product_cargo_trousers_desc';
  }

  const productName = t(nameKey) || product.name;
  const productDesc = t(descKey) || product.description;

  let formattedPrice = product.price;
  if (product.price.includes('Price will available soon')) {
    formattedPrice = t('priceAvailableSoon');
  } else if (language === 'si') {
    formattedPrice = 'රු. 2,500 LKR';
  }

  // Determine displayed image based on color & view selection
  let currentImage = product.image;
  if (customConfig && customConfig.color) {
    if (isCargo && customConfig.color === 'Dark Green') {
      currentImage = activeView === 'back' && product.backImage ? product.backImage : product.image;
    } else if (product.colorImages && product.colorImages[customConfig.color]) {
      currentImage = product.colorImages[customConfig.color];
    }
  }

  return (
    <>
      <Helmet>
        <title>{`Buy ${productName} | Royj Tailors`}</title>
        <meta
          name="description"
          content={`Order ${productName} from Royj Tailors. ${productDesc.substring(0, 120)}...`}
        />
      </Helmet>

      <PageWrapper>
        <ImageGallery>
          <MainImageContainer>
            <MainImage src={currentImage} alt={productName} />
          </MainImageContainer>

          {isCargo && product.backImage && customConfig?.color === 'Dark Green' && (
            <ViewToggleWrapper>
              <ViewToggleButton
                $active={activeView === 'front'}
                onClick={() => setActiveView('front')}
              >
                {t('frontView')}
              </ViewToggleButton>
              <ViewToggleButton
                $active={activeView === 'back'}
                onClick={() => setActiveView('back')}
              >
                {t('backView')}
              </ViewToggleButton>
            </ViewToggleWrapper>
          )}
        </ImageGallery>

        <ProductInfo>
          <ProductName>{productName}</ProductName>
          <ProductPrice>{formattedPrice}</ProductPrice>
          <ProductDescription>{productDesc}</ProductDescription>

          {isShirt && customConfig && (
            <ShirtCustomizer
              config={customConfig}
              onChange={handleConfigChange}
            />
          )}

          {isCargo && customConfig && (
            <CargoCustomizer
              config={customConfig}
              onChange={handleConfigChange}
              onReset={handleResetConfig}
            />
          )}

          {isOffice && customConfig && (
            <OfficeTrousersCustomizer
              config={customConfig}
              onChange={handleConfigChange}
            />
          )}

          <ActionRow>
            <OrderButton onClick={() => setOrderModalOpen(true)}>
              {t('orderViaWhatsApp')}
            </OrderButton>
            <SizeChartLink onClick={() => setSizeChartOpen(true)}>
              {t('viewSizeChart')}
            </SizeChartLink>
          </ActionRow>
        </ProductInfo>
      </PageWrapper>

      <Modal isOpen={isSizeChartOpen} onClose={() => setSizeChartOpen(false)}>
        {isShirt ? <ShirtSizeChart /> : <TrousersSizeChart />}
      </Modal>

      <Modal isOpen={isOrderModalOpen} onClose={() => setOrderModalOpen(false)}>
        <OrderForm
          product={product}
          phoneNumber={yourPhoneNumber}
          cargoConfig={customConfig || undefined}
        />
      </Modal>
    </>
  );
};

export default ProductDetailPage;