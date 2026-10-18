import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiHeart } from 'react-icons/fi';
import { useStore } from './StoreContext';
import ProductImage from './ProductImage';
import { colorHex } from '../data/studio';
export default function ProductCard({ product }) {
  const { saved, toggleSaved } = useStore();
  const isSaved = saved.includes(product.id);
  return <article className="product-card">
    <div className="product-card-visual">
      <Link to={'/product/' + product.id} aria-label={'View ' + product.name}><ProductImage product={product} /></Link>
      <span className="product-badge">{product.badge}</span>
      <button className={'icon-button save-button ' + (isSaved ? 'is-saved' : '')} aria-label={(isSaved ? 'Unsave ' : 'Save ') + product.name} aria-pressed={isSaved} onClick={() => toggleSaved(product.id)}><FiHeart /></button>
    </div>
    <div className="product-card-caption"><span className="eyebrow">{product.category === 'uniforms' ? 'For their everyday' : 'Made to your measurements'}</span>
      <h3><Link to={'/product/' + product.id}>{product.shortName || product.name}</Link></h3>
      <div className="product-card-bottom"><span>{product.price}</span><div className="mini-swatches" aria-label={product.colors.length + ' color options'}>{product.colors.slice(0, 4).map(color => <span key={color} title={color} style={{ background: colorHex[color] }} />)}</div><Link to={'/product/' + product.id} className="icon-button" aria-label={'Explore ' + product.name}><FiArrowUpRight /></Link></div>
    </div>
  </article>;
}
=======
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const CardWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-top: 125%; // Creates a 4:5 aspect ratio
  position: relative;
  background-color: #f7f7f7;
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #1A1A1A;
  color: #FFFFFF;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 2;
`;

const InfoContainer = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  font-family: 'DM Serif Display', serif;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
`;

const ProductPrice = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: #2e7d32;
`;

const ProductCard = ({ product }) => {
  const { language, t } = useLanguage();

  // Determine localized product name
  let nameKey = `product_${product.id.replace(/-/g, '_')}_name`;
  if (product.id.includes('white-shirt')) nameKey = 'product_white_shirt_name';
  if (product.id.includes('blue-oxford')) nameKey = 'product_blue_shirt_name';
  if (product.id.includes('essential-gray') || product.id.includes('office-trousers')) nameKey = 'product_office_trousers_name';
  if (product.id.includes('cargo-trousers')) nameKey = 'product_cargo_trousers_name';

  const productName = t(nameKey) || product.name;

  // Localized price
  let formattedPrice = product.price;
  if (product.price.includes('Price will available soon')) {
    formattedPrice = t('priceAvailableSoon');
  } else if (language === 'si') {
    formattedPrice = 'රු. 2,500 LKR';
  }

  return (
    <CardWrapper to={`/product/${product.id}`}>
      <ImageContainer>
        <ProductImage src={product.image} alt={productName} />
        {product.type === 'cargo-trousers' && <Badge>{t('customizableBadge')}</Badge>}
      </ImageContainer>
      <InfoContainer>
        <ProductName>{productName}</ProductName>
        <ProductPrice>{formattedPrice}</ProductPrice>
      </InfoContainer>
    </CardWrapper>
  );
};

export default ProductCard;
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
