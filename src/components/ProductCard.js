import React from 'react';
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
