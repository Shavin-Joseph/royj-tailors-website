<<<<<<< HEAD
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
=======
// src/components/OrderForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ShirtMeasurementGuide from './ShirtMeasurementGuide';
import TrousersMeasurementGuide from './TrousersMeasurementGuide';
import { useLanguage } from '../context/LanguageContext';

const FormContainer = styled.form` font-family: 'Inter', sans-serif; `;
const Title = styled.h2` font-family: 'DM Serif Display', serif; text-align: center; margin-top: 0; `;
const FieldGroup = styled.div` margin-bottom: 1.5rem; `;
const Label = styled.label` display: block; margin-bottom: 0.5rem; font-weight: 600; `;
const Input = styled.input` width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; font-size: 1rem; box-sizing: border-box; `;
const Select = styled.select` width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; font-size: 1rem; box-sizing: border-box; `;
const RadioWrapper = styled.div` display: flex; gap: 1.5rem; margin-top: 0.5rem; `;
const SubmitButton = styled.button`
  width: 100%; text-decoration: none; font-weight: 600; padding: 1rem 2.5rem;
  font-size: 1rem; color: #FFFFFF; background-color: #25D366; border: none;
  border-radius: 5px; cursor: pointer; transition: all 0.3s ease; text-align: center;
  &:hover { filter: brightness(1.1); }
`;
const CustomFieldsWrapper = styled.div` display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; `;

const OrderForm = ({ product, phoneNumber, cargoConfig }) => {
  const { t } = useLanguage();

  const isShirt = product.type.includes('shirt');
  const isCargo = product.type === 'cargo-trousers';
  const isOffice = product.type === 'office-trousers';

  const initialColor = cargoConfig
    ? (cargoConfig.color === 'Custom Color' ? cargoConfig.customColorName || 'Custom Color' : cargoConfig.color)
    : '';

  const [orderType, setOrderType] = useState('standard');
  const [size, setSize] = useState(isShirt ? 'M' : '32');
  const [color, setColor] = useState(initialColor);
  const [customMeasurements, setCustomMeasurements] = useState({});

  const handleCustomChange = (e) => {
    setCustomMeasurements({ ...customMeasurements, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    let message = `Hi Royj Tailors,\nI would like to place an order for "${product.name}".\n\n`;
    message += `Product ID: ${product.id}\n`;
    message += `Price: ${product.price}\n`;
    message += `Color: ${color || (cargoConfig ? cargoConfig.color : 'Standard')}\n`;

    if (isCargo && cargoConfig) {
      message += `\n--- Customization Specifications ---\n`;
      message += `Fabric: ${cargoConfig.material}\n`;
      message += `Front Pockets: ${cargoConfig.frontPockets} (${cargoConfig.frontPocketShape})\n`;
      message += `Side Cargo Pockets: ${cargoConfig.sidePockets} (${cargoConfig.sidePocketShape})\n`;
      message += `Back Pockets: ${cargoConfig.backPockets} (${cargoConfig.backPocketShape})\n`;
      message += `Leg Fit: ${cargoConfig.fit}\n`;
      message += `Waistband: ${cargoConfig.waistband}\n`;
    } else if (isOffice && cargoConfig) {
      message += `\n--- Style Specifications ---\n`;
      message += `Fit Style: ${cargoConfig.fit}\n`;
      message += `Front Style: ${cargoConfig.pleat}\n`;
    } else if (isShirt && cargoConfig) {
      message += `\n--- Style Specifications ---\n`;
      message += `Fit Style: ${cargoConfig.fit}\n`;
    }

    message += `\n--- Size & Fit ---\n`;
    if (orderType === 'standard') {
      message += `Standard Size: ${size}\n`;
    } else {
      message += `Type: Custom Size Measurements\n`;
      product.measurements.forEach(measurement => {
        const key = measurement.toLowerCase().replace(/ /g, '');
        message += `${measurement}: ${customMeasurements[key] || ''} inches\n`;
      });
    }

    message += `\nPlease let me know the next steps. Thank you!`;
    return encodeURIComponent(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>{t('placeYourOrder')}</Title>
      
      <FieldGroup>
        <Label>{t('preferredColor')}</Label>
        <Input
          type="text"
          placeholder={t('colorPlaceholder')}
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </FieldGroup>

      <FieldGroup>
        <Label>{t('sizeType')}</Label>
        <RadioWrapper>
          <label>
            <input type="radio" value="standard" checked={orderType === 'standard'} onChange={() => setOrderType('standard')} /> {t('sizeStandard')}
          </label>
          <label>
            <input type="radio" value="custom" checked={orderType === 'custom'} onChange={() => setOrderType('custom')} /> {t('sizeCustom')}
          </label>
        </RadioWrapper>
      </FieldGroup>
      
      {orderType === 'standard' && (
        <FieldGroup>
          <Label>{t('selectStandardSize')}</Label>
          <Select value={size} onChange={(e) => setSize(e.target.value)}>
            {isShirt ? (
              <>
                <option value="S">Small (S)</option>
                <option value="M">Medium (M)</option>
                <option value="L">Large (L)</option>
                <option value="XL">Extra Large (XL)</option>
                <option value="XXL">XXL</option>
              </>
            ) : (
              <>
                <option value="30">Waist 30</option>
                <option value="32">Waist 32</option>
                <option value="34">Waist 34</option>
                <option value="36">Waist 36</option>
                <option value="38">Waist 38</option>
                <option value="40">Waist 40</option>
              </>
            )}
          </Select>
        </FieldGroup>
      )}

      {orderType === 'custom' && (
        <>
          <FieldGroup>
            <Label>{t('yourMeasurements')}</Label>
            <CustomFieldsWrapper>
              {product.measurements.map(measurement => (
                <Input
                  key={measurement}
                  type="number"
                  name={measurement.toLowerCase().replace(/ /g, '')}
                  placeholder={measurement}
                  onChange={handleCustomChange}
                  required
                />
              ))}
            </CustomFieldsWrapper>
          </FieldGroup>
          {isShirt ? <ShirtMeasurementGuide /> : <TrousersMeasurementGuide />}
        </>
      )}

      <SubmitButton type="submit">{t('proceedToWhatsApp')}</SubmitButton>
    </FormContainer>
  );
};

export default OrderForm;
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
