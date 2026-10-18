import React, { useState } from 'react';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import { products } from '../data/products';
import { colorHex } from '../data/studio';
import GarmentPreview from './GarmentPreview';
import Modal from './Modal';
import OrderForm from './OrderForm';
export default function BespokeCustomizer() {
  const [product, setProduct] = useState(products[0]);
  const [color, setColor] = useState(products[0].colors[0]);
  const [fit, setFit] = useState('Regular');
  const [open, setOpen] = useState(false);
  const changeProduct = e => {
    const next = products.find(p => p.id === e.target.value);
    setProduct(next); setColor(next.colors[0]);
  };
  return <div id="customizer-tool" className="customizer">
    <div className="customizer-heading"><span className="eyebrow">A PIECE OF YOUR OWN</span><h2>Your style.<br /><em>Your finishing touches.</em></h2><p>Explore a color. Turn it around. Find the fit that feels like you.</p></div>
    <div className="customizer-layout"><GarmentPreview product={product} color={colorHex[color]} />
      <div className="customizer-controls">
        <div className="control-section"><label htmlFor="custom-product"><span>01</span> Start with your piece</label><select id="custom-product" value={product.id} onChange={changeProduct}>{products.map(p => <option key={p.id} value={p.id}>{p.shortName || p.name}</option>)}</select></div>
        <fieldset className="control-section"><legend><span>02</span> Choose your color</legend><p className="selected-color" aria-live="polite">{color}</p><div className="color-options">{product.colors.map(c => <button key={c} type="button" aria-label={c} aria-pressed={color === c} className={'swatch-button ' + (color === c ? 'selected' : '')} onClick={() => setColor(c)}><span style={{ background: colorHex[c] }}>{color === c && <FiCheck style={{ color: ['White','Light Blue','Soft Pink','Khaki Tan'].includes(c) ? '#252b25' : '#fff' }} />}</span></button>)}</div></fieldset>
        <fieldset className="control-section"><legend><span>03</span> Make yourself comfortable</legend><div className="fit-options">{['Slim','Regular','Relaxed'].map(f => <button key={f} type="button" aria-pressed={fit === f} onClick={() => setFit(f)}>{f}</button>)}</div><p className="field-hint">Your preferred cut. We’ll refine it with your measurements.</p></fieldset>
        <div className="customizer-total"><span>{product.priceValue == null ? 'Made to measure' : 'Starting from'}</span><strong>{product.price}</strong></div>
        <button className="button button-full" onClick={() => setOpen(true)}>Add your measurements <FiArrowUpRight /></button><p className="field-hint center">No payment now. Let’s get the details right first.</p>
      </div>
    </div>
    <Modal isOpen={open} onClose={() => setOpen(false)} title="Personalize your order"><OrderForm product={product} initialColor={color} initialFit={fit} /></Modal>
  </div>;
}
