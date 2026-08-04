// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CardWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  background: #FFFFFF;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-6px);
    border-color: var(--primary-blue);
    box-shadow: var(--shadow-hover);

    img {
      transform: scale(1.05);
    }
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid var(--primary-blue);
  color: var(--primary-blue);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-top: 90%;
  position: relative;
  background: #F8FAFC;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1rem;
  transition: transform 0.4s ease;
`;

const InfoContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

const ProductName = styled.h3`
  font-family: 'DM Serif Display', sans-serif;
  font-size: 1.35rem;
  margin: 0 0 0.4rem 0;
  color: var(--text-main);
  line-height: 1.25;
`;

const FabricDetail = styled.p`
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0 0 1rem 0;
  line-height: 1.4;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.8rem;
  border-top: 1px solid var(--border-color);
`;

const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--primary-blue);
  margin: 0;
`;

const ActionBadge = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--primary-emerald);
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ProductCard = ({ product }) => {
  return (
    <CardWrapper to={`/product/${product.id}`}>
      {product.badge && <Badge>{product.badge}</Badge>}
      
      <ImageContainer>
        <ProductImage src={product.image} alt={product.name} />
      </ImageContainer>

      <InfoContainer>
        <div>
          <ProductName>{product.name}</ProductName>
          <FabricDetail>{product.fabric}</FabricDetail>
        </div>
        
        <PriceRow>
          <ProductPrice>{product.price}</ProductPrice>
          <ActionBadge>
            Select Specs <FaArrowRight style={{ fontSize: '0.7rem' }} />
          </ActionBadge>
        </PriceRow>
      </InfoContainer>
    </CardWrapper>
  );
};

export default ProductCard;