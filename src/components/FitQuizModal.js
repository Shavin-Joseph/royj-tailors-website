import React, { useState } from 'react';
import { FiArrowRight, FiRefreshCw } from 'react-icons/fi';
import Modal from './Modal';
import { recommendSize } from '../data/sizing';
function SizeHelper() {
  const [type, setType] = useState('trousers');
  const [unit, setUnit] = useState('in');
  const [measurement, setMeasurement] = useState('');
  const [result, setResult] = useState('');
  return <div className="tailor-form"><span className="eyebrow">A BETTER STARTING POINT</span><h2>Find your fit.</h2>
    {result ? <div className="fit-result" role="status"><span className="eyebrow">YOUR STARTING SIZE</span><h3>{result}</h3><p>{result === 'Custom measurements' ? 'Your measurement falls outside our standard range. Choose custom measurements when enquiring so we can tailor the fit to you.' : 'Based on your ' + (type === 'shirts' ? 'shirt chest' : 'waist') + ' measurement of ' + measurement + ' ' + unit + '. Confirm the remaining measurements with our studio.'}</p><p className="field-hint">A size guide, not a fit guarantee. Fabric and your preferred cut also affect the final fit.</p><button className="text-button" onClick={() => setResult('')}><FiRefreshCw /> Check another size</button></div> :
    <form onSubmit={e => { e.preventDefault(); setResult(recommendSize(type, measurement, unit)); }}>
      <p className="muted">Use a tape measure for a more useful starting size.</p>
      <label htmlFor="fit-garment">Your garment<select id="fit-garment" value={type} onChange={e => { setType(e.target.value); setMeasurement(''); }}><option value="trousers">Trousers or shorts</option><option value="shirts">Shirt</option></select></label>
      <p className="measurement-tip">{type === 'shirts' ? 'Use a shirt that fits well. Measure its chest flat from underarm to underarm, then double that number. Our chart lists the full garment chest.' : 'Measure around your waist where you normally wear trousers. Keep the tape level and comfortably snug.'}</p>
      <div className="form-grid"><label htmlFor="fit-measurement">{type === 'shirts' ? 'Full shirt chest' : 'Waist measurement'}<input id="fit-measurement" type="number" inputMode="decimal" min="1" max={unit === 'cm' ? 305 : 120} step="0.1" required value={measurement} onChange={e => setMeasurement(e.target.value)} /></label>
      <label htmlFor="fit-unit">Unit<select id="fit-unit" value={unit} onChange={e => { setUnit(e.target.value); setMeasurement(''); }}><option value="in">Inches</option><option value="cm">Centimetres</option></select></label></div>
      <button type="submit" className="button button-full">Find my starting size <FiArrowRight /></button>
      <p className="field-hint center">For school uniforms, arrange a fitting for your child.</p>
    </form>}
  </div>;
}
export default function FitQuizModal({ isOpen, onClose }) {
  return <Modal isOpen={isOpen} onClose={onClose} title="Find your fit"><SizeHelper /></Modal>;
}
