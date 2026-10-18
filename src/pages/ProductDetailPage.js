import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowUpRight, FiHeart, FiCheck, FiScissors, FiTruck, FiPlus } from 'react-icons/fi';
import { products } from '../data/products';
import { colorHex } from '../data/studio';
import { useStore } from '../components/StoreContext';
import ProductImage from '../components/ProductImage';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import SizeChart from '../components/SizeChart';
import OrderForm from '../components/OrderForm';
import FitQuizModal from '../components/FitQuizModal';
import NotFoundPage from './NotFoundPage';

function ProductDetail({ product }) {
  const [back, setBack] = useState(false);
  const [color, setColor] = useState(product.colors[0]);
  const [dialog, setDialog] = useState('');
  const { saved, toggleSaved } = useStore();
  const isSaved = saved.includes(product.id);
  return <div className="container detail-page">
    <><title>{product.name + ' | Royj Tailors'}</title><meta name="description" content={product.description} /></>
    <Link className="back-link" to="/shop"><FiArrowLeft /> Back to the collection</Link>
    <div className="detail-layout"><div className="detail-gallery"><div className="detail-photo"><ProductImage product={product} back={back} eager /><span className="product-badge">{product.badge}</span><button className={'icon-button save-button ' + (isSaved ? 'is-saved' : '')} aria-label={isSaved ? 'Unsave this piece' : 'Save this piece'} aria-pressed={isSaved} onClick={() => toggleSaved(product.id)}><FiHeart /></button></div>
      {product.backImage && <div className="segmented gallery-switch"><button aria-pressed={!back} onClick={() => setBack(false)}>Front view</button><button aria-pressed={back} onClick={() => setBack(true)}>Back view</button></div>}
      <p className="field-hint">{product.imageNote || 'Images show the reference style. Your selected color and final details are confirmed by the studio.'}</p>
    </div><div className="detail-info">
      <span className="eyebrow">THE ROYJ COLLECTION / {product.category}</span><h1>{product.shortName || product.name}</h1>
      <div className="detail-price">{product.price}<span>{product.priceValue == null ? 'Request a quotation · tailored to you' : 'Starting price · tailored to you'}</span></div><p className="detail-description">{product.description}</p>
      {product.companionId && <p><Link className="text-link" to={'/product/' + product.companionId}>{product.companionLabel} <FiArrowUpRight /></Link></p>}
      <fieldset className="detail-colors"><legend>Choose a color <span>{color}</span></legend><div className="color-options">{product.colors.map(c => <button key={c} className={'swatch-button ' + (color === c ? 'selected' : '')} aria-label={c} aria-pressed={color === c} onClick={() => setColor(c)}><span style={{ background: colorHex[c] }}>{color === c && <FiCheck style={{ color: ['White','Light Blue','Soft Pink','Khaki Tan'].includes(c) ? '#252b25' : '#fff' }} />}</span></button>)}</div><p className="field-hint">Color selection is added to your enquiry. Photos show the reference color.</p></fieldset>
      <button className="button button-full detail-order" onClick={() => setDialog('order')}>Choose your size & enquire <FiArrowUpRight /></button>
      <div className="detail-size-actions"><button className="text-button" onClick={() => setDialog('chart')}>Size & measurement guide</button>{product.category !== 'uniforms' && <button className="text-button" onClick={() => setDialog('fit')}>Find my fit <FiArrowUpRight /></button>}</div>
      <div className="detail-perks"><span><FiScissors /> Custom measurements available</span><span><FiTruck /> Islandwide delivery · cost confirmed on enquiry</span></div>
      <div className="faqs detail-faqs"><details open><summary>Fabric & details <FiPlus /></summary><p>{product.fabric}. {product.description}</p></details><details><summary>Ordering & delivery <FiPlus /></summary><p>Review your size and color, then send your enquiry on WhatsApp. We’ll confirm availability, the final price, tailoring time and delivery cost before your order is placed.</p></details><details><summary>Caring for your piece <FiPlus /></summary><p>Follow the care instructions supplied with your garment. Ask our studio for advice on washing, drying and pressing your chosen fabric.</p></details></div>
    </div></div>
    <section className="related-section"><div className="section-heading"><div><span className="eyebrow">A LITTLE MORE INSPIRATION</span><h2>Make it <em>an everyday.</em></h2></div><Link to="/shop" className="text-link">All pieces <FiArrowUpRight /></Link></div><div className="product-grid related-grid">{products.filter(p => p.id !== product.id).slice(0,3).map(p => <ProductCard key={p.id} product={p} />)}</div></section>
    <div className="mobile-order-bar"><span>{product.price}<small>Made to your fit</small></span><button className="button" onClick={() => setDialog('order')}>Choose your size <FiArrowUpRight /></button></div>
    <Modal isOpen={dialog === 'order'} onClose={() => setDialog('')} title={'Order ' + product.name}><OrderForm product={product} initialColor={color} /></Modal>
    <Modal isOpen={dialog === 'chart'} onClose={() => setDialog('')} title="Size and measurement guide"><SizeChart product={product} /></Modal>
    <FitQuizModal isOpen={dialog === 'fit'} onClose={() => setDialog('')} />
  </div>;
}
export default function ProductDetailPage() {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  return product ? <ProductDetail key={product.id} product={product} /> : <NotFoundPage product />;
}
