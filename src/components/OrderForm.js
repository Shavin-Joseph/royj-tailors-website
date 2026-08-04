// src/components/OrderForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ShirtMeasurementGuide from './ShirtMeasurementGuide';
import TrousersMeasurementGuide from './TrousersMeasurementGuide';
import { FaWhatsapp, FaCheck } from 'react-icons/fa';

const FormContainer = styled.form`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--text-main);
  padding: 0.2rem;
`;

const Title = styled.h2`
  font-family: 'DM Serif Display', sans-serif;
  font-size: 2rem;
  color: var(--primary-blue);
  text-align: center;
  margin: 0 0 0.4rem 0;
`;

const Subtitle = styled.p`
  text-align: center;
  color: var(--text-muted);
  font-size: 0.95rem;
  margin: 0 0 1.5rem 0;
`;

const FieldGroup = styled.div`
  margin-bottom: 1.3rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  font-size: 0.88rem;
  color: var(--text-main);
  margin-bottom: 0.4rem;
`;

const HelperText = styled.span`
  font-weight: normal;
  font-size: 0.8rem;
  color: var(--text-light);
  margin-left: 6px;
`;

const Input = styled.input`
  width: 100%;
  background: #FFFFFF;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: var(--text-main);
  font-size: 0.95rem;
  outline: none;
  font-family: inherit;

  &:focus {
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  background: #FFFFFF;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: var(--text-main);
  font-size: 0.95rem;
  outline: none;
  font-family: inherit;

  &:focus {
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1);
  }
`;

const RadioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const RadioCard = styled.label`
  background: ${props => props.active ? '#EFF6FF' : '#FFFFFF'};
  border: 2px solid ${props => props.active ? 'var(--primary-blue)' : 'var(--border-color)'};
  border-radius: 8px;
  padding: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 0.9rem;
  color: ${props => props.active ? 'var(--primary-blue)' : 'var(--text-main)'};
  transition: all 0.2s ease;

  input {
    display: none;
  }
`;

const CustomFieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background: #25D366;
  color: #FFFFFF;
  border: none;
  padding: 1.1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.25s ease;
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.3);

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-2px);
  }
`;

const OrderForm = ({ product, phoneNumber }) => {
  const isUniform = product.category === 'uniforms';
  const isTrouser = product.category === 'trousers' || product.id.includes('cargo');
  const isShorts = product.category === 'shorts';
  
  const [orderType, setOrderType] = useState('standard');
  const [color, setColor] = useState(product.colors ? product.colors[0] : 'Dark Forest Green');
  const [standardSize, setStandardSize] = useState(isTrouser || isShorts ? '32 Waist' : isUniform ? '7-8 Years' : 'M');
  const [customMeasurements, setCustomMeasurements] = useState({});
  const [notes, setNotes] = useState('');

  const handleCustomChange = (e) => {
    setCustomMeasurements({ ...customMeasurements, [e.target.name]: e.target.value });
  };

  const generateWhatsAppMessage = () => {
    let msg = `*New Order Inquiry - Royj Tailors*\n\n`;
    msg += `Item Name: ${product.name}\n`;
    msg += `Price: ${product.price}\n`;
    msg += `Color/Cloth Choice: ${color}\n\n`;

    if (orderType === 'standard') {
      msg += `Selected Size: Standard (${standardSize})\n`;
    } else {
      msg += `Selected Size: Custom Measurements (Inches)\n`;
      msg += `---------------------------------\n`;
      (product.measurements || ['Waist', 'Inseam', 'Hips']).forEach(measurement => {
        const key = measurement.toLowerCase().replace(/[^a-z0-9]/g, '');
        msg += `${measurement}: ${customMeasurements[key] || 'Pending'} inches\n`;
      });
    }

    if (notes.trim()) {
      msg += `\nSpecial Notes: ${notes.trim()}\n`;
    }

    msg += `\nPlease confirm availability and delivery time. Thank you!`;
    return encodeURIComponent(msg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/${phoneNumber || '94775532642'}?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>Select Your Size & Order</Title>
      <Subtitle>Ordering: <strong style={{ color: 'var(--primary-blue)' }}>{product.name}</strong></Subtitle>

      {/* Color Selection */}
      <FieldGroup>
        <Label>1. Choose Color / Cloth</Label>
        <Select value={color} onChange={(e) => setColor(e.target.value)}>
          {(product.colors || ['Dark Forest Green', 'Black', 'Khaki', 'Navy Blue', 'White']).map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </Select>
      </FieldGroup>

      {/* Sizing Method */}
      <FieldGroup>
        <Label>2. How do you want to choose measurements?</Label>
        <RadioGrid>
          <RadioCard active={orderType === 'standard'}>
            <input
              type="radio"
              value="standard"
              checked={orderType === 'standard'}
              onChange={() => setOrderType('standard')}
            />
            {orderType === 'standard' && <FaCheck />} Standard Size
          </RadioCard>
          <RadioCard active={orderType === 'custom'}>
            <input
              type="radio"
              value="custom"
              checked={orderType === 'custom'}
              onChange={() => setOrderType('custom')}
            />
            {orderType === 'custom' && <FaCheck />} Enter Exact Inches
          </RadioCard>
        </RadioGrid>
      </FieldGroup>

      {/* Standard Size Selector */}
      {orderType === 'standard' && (
        <FieldGroup>
          <Label>Select Standard Size</Label>
          <Select value={standardSize} onChange={(e) => setStandardSize(e.target.value)}>
            {isTrouser || isShorts ? (
              <>
                <option value="28 Waist">Waist 28 Inches</option>
                <option value="30 Waist">Waist 30 Inches</option>
                <option value="32 Waist">Waist 32 Inches</option>
                <option value="34 Waist">Waist 34 Inches</option>
                <option value="36 Waist">Waist 36 Inches</option>
                <option value="38 Waist">Waist 38 Inches</option>
                <option value="40 Waist">Waist 40 Inches</option>
              </>
            ) : isUniform ? (
              <>
                <option value="5-6 Years">5 - 6 Years (Grade 1)</option>
                <option value="7-8 Years">7 - 8 Years (Grade 2-3)</option>
                <option value="9-10 Years">9 - 10 Years (Grade 4-5)</option>
                <option value="11-12 Years">11 - 12 Years (Grade 6-7)</option>
                <option value="13-14 Years">13 - 14 Years (Grade 8-9)</option>
                <option value="15+ Years">15+ Years (Senior)</option>
              </>
            ) : (
              <>
                <option value="S">Small (Chest 38", Collar 15")</option>
                <option value="M">Medium (Chest 40", Collar 15.5")</option>
                <option value="L">Large (Chest 42", Collar 16")</option>
                <option value="XL">XL (Chest 44", Collar 16.5")</option>
                <option value="XXL">XXL (Chest 46", Collar 17")</option>
              </>
            )}
          </Select>
        </FieldGroup>
      )}

      {/* Custom Inches Selector */}
      {orderType === 'custom' && (
        <>
          <FieldGroup>
            <Label>Enter Your Custom Measurements (Inches)</Label>
            <CustomFieldsWrapper>
              {(product.measurements || ['Waist', 'Inseam', 'Hips']).map(m => (
                <div key={m}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '3px' }}>{m}</div>
                  <Input
                    type="number"
                    step="0.5"
                    name={m.toLowerCase().replace(/[^a-z0-9]/g, '')}
                    placeholder={`e.g. 32"`}
                    onChange={handleCustomChange}
                    required
                  />
                </div>
              ))}
            </CustomFieldsWrapper>
          </FieldGroup>
          {!isUniform && (isTrouser || isShorts ? <TrousersMeasurementGuide /> : <ShirtMeasurementGuide />)}
        </>
      )}

      {/* Special Notes */}
      <FieldGroup>
        <Label>3. Special Instructions <HelperText>(Optional)</HelperText></Label>
        <Input
          type="text"
          placeholder="e.g., Add extra cargo pockets, double stitching, school badge"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </FieldGroup>

      <SubmitButton type="submit">
        <FaWhatsapp style={{ fontSize: '1.3rem' }} /> Order Now on WhatsApp
      </SubmitButton>
    </FormContainer>
  );
};

export default OrderForm;