// src/pages/ShopPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import FitQuizModal from '../components/FitQuizModal';
import { FaSearch, FaRulerCombined } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 3rem 4rem 6rem 4rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem 1.5rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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
  font-size: 3.2rem;
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

const ControlsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

const TabButton = styled.button`
  background: ${props => props.active ? 'var(--primary-blue)' : '#FFFFFF'};
  color: ${props => props.active ? '#FFFFFF' : 'var(--text-main)'};
  border: 1px solid ${props => props.active ? 'var(--primary-blue)' : 'var(--border-color)'};
  padding: 0.65rem 1.3rem;
  border-radius: 30px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary-blue);
  }
`;

const SearchBox = styled.div`
  position: relative;
  min-width: 260px;

  input {
    width: 100%;
    background: #FFFFFF;
    border: 1px solid var(--border-color);
    border-radius: 30px;
    padding: 0.65rem 1rem 0.65rem 2.8rem;
    color: var(--text-main);
    font-size: 0.9rem;
    outline: none;
    font-family: inherit;

    &:focus {
      border-color: var(--primary-blue);
    }
  }

  .icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-light);
  }
`;

const FitQuizBanner = styled.div`
  background: #EFF6FF;
  border: 1px solid var(--primary-blue);
  border-radius: 14px;
  padding: 1.2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  color: var(--text-main);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const QuizBtn = styled.button`
  background: var(--primary-blue);
  color: #FFFFFF;
  border: none;
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isQuizOpen, setQuizOpen] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.fabric.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>All Products | Royj Tailors Custom Menswear & Uniforms</title>
        <meta name="description" content="Browse custom dark green cargo trousers, formal pants, shirts, casual shorts, and school uniforms. Order on WhatsApp with custom sizes." />
      </Helmet>

      <PageContainer>
        <HeaderSection>
          <Badge>Full Product Catalog</Badge>
          <PageTitle>All Tailored Products</PageTitle>
          <Subtitle>
            Select your favorite item, choose your size or enter your exact measurements, and place your order on WhatsApp!
          </Subtitle>
        </HeaderSection>

        <FitQuizBanner>
          <div>
            <strong style={{ color: 'var(--primary-blue)' }}>Not sure what size to pick?</strong>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Use our 3-second quick size helper to find your fit.</div>
          </div>
          <QuizBtn onClick={() => setQuizOpen(true)}>
            <FaRulerCombined /> Quick Size Helper
          </QuizBtn>
        </FitQuizBanner>

        <ControlsBar>
          <CategoryTabs>
            <TabButton active={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
              All Products ({products.length})
            </TabButton>
            <TabButton active={activeCategory === 'trousers'} onClick={() => setActiveCategory('trousers')}>
              Cargo Pants & Trousers
            </TabButton>
            <TabButton active={activeCategory === 'shirts'} onClick={() => setActiveCategory('shirts')}>
              Shirts
            </TabButton>
            <TabButton active={activeCategory === 'shorts'} onClick={() => setActiveCategory('shorts')}>
              Shorts
            </TabButton>
            <TabButton active={activeCategory === 'uniforms'} onClick={() => setActiveCategory('uniforms')}>
              School Uniforms
            </TabButton>
          </CategoryTabs>

          <SearchBox>
            <FaSearch className="icon" />
            <input
              type="text"
              placeholder="Search product name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBox>
        </ControlsBar>

        <ProductGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </PageContainer>

      <FitQuizModal isOpen={isQuizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
};

export default ShopPage;