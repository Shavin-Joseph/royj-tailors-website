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
  const { language, t } = useLanguage();

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