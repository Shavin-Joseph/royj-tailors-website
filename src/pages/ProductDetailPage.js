// src/pages/ProductDetailPage.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import Modal from '../components/Modal';
import ShirtSizeChart from '../components/ShirtSizeChart';
import TrousersSizeChart from '../components/TrousersSizeChart';
import OrderForm from '../components/OrderForm';
import FitQuizModal from '../components/FitQuizModal';
import { FaWhatsapp, FaRulerCombined, FaArrowLeft } from 'react-icons/fa';

const PageWrapper = styled.div`
  padding: 3rem 4rem 6rem 4rem;
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 960px) {
    padding: 2rem 1.5rem 4rem 1.5rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2rem;
  &:hover {
    color: var(--primary-blue);
  }
`;

const DetailLayout = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

const ImageGallery = styled.div`
  flex: 1.1;
`;

const MainImageCard = styled.div`
  width: 100%;
  background: #F8FAFC;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-sm);
`;

const ImageToggleBar = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const ToggleBtn = styled.button`
  background: ${props => props.active ? 'var(--primary-blue)' : '#FFFFFF'};
  color: ${props => props.active ? '#FFFFFF' : 'var(--text-main)'};
  border: 1px solid ${props => props.active ? 'var(--primary-blue)' : 'var(--border-color)'};
  padding: 0.45rem 1.1rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 440px;
  object-fit: contain;

  @media (max-width: 640px) {
    height: 280px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const Badge = styled.div`
  display: inline-block;
  background: #EFF6FF;
  color: var(--primary-blue);
  border: 1px solid var(--primary-blue);
  padding: 0.4rem 1rem;
  border-radius: 30px;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

const ProductName = styled.h1`
  font-family: 'DM Serif Display', sans-serif;
  font-size: 3.2rem;
  color: var(--text-main);
  margin: 0 0 0.6rem 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ProductPrice = styled.div`
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--primary-blue);
  margin: 0 0 1.2rem 0;
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 2rem;
`;

const SpecsGrid = styled.div`
  background: #F8FAFC;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.4rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SpecItem = styled.div`
  .label {
    font-size: 0.8rem;
    color: var(--text-light);
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 2px;
  }
  .val {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-main);
  }
`;

const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OrderButton = styled.button`
  background: #25D366;
  color: #FFFFFF;
  border: none;
  padding: 1.2rem 2.2rem;
  font-weight: 700;
  font-size: 1.05rem;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.25s ease;
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.3);

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-2px);
  }
`;

const OutlineLinkBtn = styled.button`
  background: #FFFFFF;
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary-blue);
    color: var(--primary-blue);
    background: #EFF6FF;
  }
`;

const ProductDetailPage = () => {
  const [selectedImgView, setSelectedImgView] = useState('front');
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [isSizeChartOpen, setSizeChartOpen] = useState(false);
  const [isQuizOpen, setQuizOpen] = useState(false);

  const { productId } = useParams();
  const product = products.find(p => p.id === productId) || products[0];
  const isShirt = product.type ? product.type.includes('shirt') : false;

  const displayImage = selectedImgView === 'back' && product.backImage ? product.backImage : product.image;

  return (
    <>
      <Helmet>
        <title>{`Order ${product.name} | Royj Tailors`}</title>
        <meta name="description" content={`Order the ${product.name} from Royj Tailors. Pick your exact waist and length measurements on WhatsApp.`} />
      </Helmet>

      <PageWrapper>
        <BackLink to="/shop"><FaArrowLeft /> Back to All Products</BackLink>
        <DetailLayout>
          <ImageGallery>
            <MainImageCard>
              {product.backImage && (
                <ImageToggleBar>
                  <ToggleBtn active={selectedImgView === 'front'} onClick={() => setSelectedImgView('front')}>
                    Front View
                  </ToggleBtn>
                  <ToggleBtn active={selectedImgView === 'back'} onClick={() => setSelectedImgView('back')}>
                    Back View
                  </ToggleBtn>
                </ImageToggleBar>
              )}
              <ProductImage src={displayImage} alt={product.name} />
            </MainImageCard>
          </ImageGallery>

          <ProductInfo>
            {product.badge && <Badge>{product.badge}</Badge>}
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <Description>{product.description}</Description>

            <SpecsGrid>
              <SpecItem>
                <div className="label">Fabric Material</div>
                <div className="val">{product.fabric}</div>
              </SpecItem>
              <SpecItem>
                <div className="label">Color Choices</div>
                <div className="val">{(product.colors || ['Dark Green', 'Navy', 'Black']).join(', ')}</div>
              </SpecItem>
              <SpecItem>
                <div className="label">Sizing Options</div>
                <div className="val">Standard Sizes or Custom Inches</div>
              </SpecItem>
              <SpecItem>
                <div className="label">Order Method</div>
                <div className="val">Direct WhatsApp Order</div>
              </SpecItem>
            </SpecsGrid>

            <ActionGroup>
              <OrderButton onClick={() => setOrderModalOpen(true)}>
                <FaWhatsapp style={{ fontSize: '1.3rem' }} /> Select Size & Order on WhatsApp
              </OrderButton>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <OutlineLinkBtn onClick={() => setSizeChartOpen(true)}>
                  View Size Chart
                </OutlineLinkBtn>
                <OutlineLinkBtn onClick={() => setQuizOpen(true)}>
                  <FaRulerCombined /> Quick Size Helper
                </OutlineLinkBtn>
              </div>
            </ActionGroup>
          </ProductInfo>
        </DetailLayout>
      </PageWrapper>

      <Modal isOpen={isSizeChartOpen} onClose={() => setSizeChartOpen(false)}>
        {isShirt ? <ShirtSizeChart /> : <TrousersSizeChart />}
      </Modal>

      <Modal isOpen={isOrderModalOpen} onClose={() => setOrderModalOpen(false)}>
        <OrderForm product={product} phoneNumber="94775532642" />
      </Modal>

      <FitQuizModal isOpen={isQuizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
};

export default ProductDetailPage;