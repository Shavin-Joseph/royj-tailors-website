import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import ShirtMeasurementGuide from './ShirtMeasurementGuide';
import TrousersMeasurementGuide from './TrousersMeasurementGuide';
import InquiryReview from './InquiryReview';
import { sizeOptions, buildOrderMessage } from '../data/sizing';

export default function OrderForm({ product, initialColor, initialFit = 'Regular' }) {
  const options = sizeOptions(product);
  const [orderType, setOrderType] = useState('standard');
  const [color, setColor] = useState(initialColor || product.colors[0]);
  const [fit, setFit] = useState(initialFit);
  const [size, setSize] = useState(options[2] || options[0]);
  const [measurements, setMeasurements] = useState({});
  const [notes, setNotes] = useState('');
  const [message, setMessage] = useState('');
  if (message) return <InquiryReview message={message} onBack={() => setMessage('')} />;
  const submit = e => {
    e.preventDefault();
    setMessage(buildOrderMessage({ product, color, fit, orderType, size, measurements, notes }));
  };
  return <form onSubmit={submit} className="tailor-form">
    <span className="eyebrow">LET’S GET THE DETAILS RIGHT</span><h2>Make it yours.</h2><p className="muted">{product.name} · {product.price}</p>
    <div className="form-grid"><label htmlFor="order-color">Color<select id="order-color" value={color} onChange={e => setColor(e.target.value)}>{product.colors.map(c => <option key={c}>{c}</option>)}</select></label>
      <label htmlFor="order-fit">Preferred fit<select id="order-fit" value={fit} onChange={e => setFit(e.target.value)}>{['Slim','Regular','Relaxed'].map(f => <option key={f}>{f}</option>)}</select></label></div>
    <fieldset><legend>How would you like to size your piece?</legend><div className="radio-options">{[['standard','Standard size'],['custom','My measurements']].map(([id,label]) => <label key={id}><input type="radio" name="sizing" checked={orderType === id} value={id} onChange={() => setOrderType(id)} />{label}</label>)}</div></fieldset>
    {orderType === 'standard' ? <label htmlFor="order-size">{product.category === 'uniforms' ? 'Age range (a starting point)' : 'Standard size'}<select id="order-size" value={size} onChange={e => setSize(e.target.value)}>{options.map(s => <option key={s}>{s}</option>)}</select><span className="field-hint">{product.category === 'uniforms' ? 'We’ll confirm your child’s measurements and school requirements before tailoring.' : 'Length and any adjustments will be confirmed by the studio.'}</span></label> :
      <><div className="form-grid measurements">{product.measurements.map((m,index) => <label key={m} htmlFor={'measurement-' + index}>{m}{!m.includes('Age') && <span className="field-hint"> (inches)</span>}<input id={'measurement-' + index} type={m.includes('Age') ? 'text' : 'number'} inputMode={m.includes('Age') ? 'text' : 'decimal'} min={m.includes('Age') ? undefined : '1'} max={m.includes('Age') ? undefined : '120'} step={m.includes('Age') ? undefined : '0.1'} maxLength={60} pattern={m.includes('Age') ? '.*\\S.*' : undefined} required value={measurements[index] || ''} onChange={e => setMeasurements({ ...measurements, [index]: e.target.value })} /></label>)}</div>
      {product.category === 'shirts' ? <ShirtMeasurementGuide shortSleeve={product.type === 'shirt-short'} /> : product.category !== 'uniforms' ? <TrousersMeasurementGuide shorts={product.category === 'shorts'} /> : <p className="field-hint">Add the school name and any uniform requirements in your notes.</p>}</>}
    <label htmlFor="order-notes">Anything else? <span className="field-hint">optional</span><textarea id="order-notes" rows={3} maxLength={1000} placeholder="School requirements, preferred length, pocket details…" value={notes} onChange={e => setNotes(e.target.value)} /></label>
    <button className="button button-full" type="submit">Review your enquiry <FiArrowRight /></button><p className="field-hint center">You’ll review your message before opening WhatsApp.</p>
  </form>;
}
