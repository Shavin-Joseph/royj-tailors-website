import React from 'react';
import styled from 'styled-components';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const PageContainer = styled.div`
  padding: 8rem 4rem 4rem 4rem;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 2rem 1.5rem;
  }
`;

const PageTitle = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const ShopPage = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t('metaShopTitle')}</title>
        <meta name="description" content={t('metaShopDesc')} />
      </Helmet>

      <PageContainer>
        <PageTitle>{t('allProductsTitle')}</PageTitle>
        <ProductGrid>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </PageContainer>
    </>
  );
};

export default ShopPage;