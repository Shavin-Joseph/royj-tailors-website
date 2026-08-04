// src/components/AppointmentModal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUser, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Container = styled.form`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--text-main);
  padding: 0.2rem;
`;

const Title = styled.h2`
  font-family: 'DM Serif Display', serif;
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

const FormGroup = styled.div`
  margin-bottom: 1.2rem;

  label {
    display: block;
    font-weight: 700;
    font-size: 0.85rem;
    color: var(--text-main);
    margin-bottom: 0.4rem;
  }
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
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  background: #25D366;
  color: #FFFFFF;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.25s ease;

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-2px);
  }
`;

const AppointmentModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('Visit Wattala Studio');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (9am - 12pm)');

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNum = '94775532642';
    let msg = `*Appointment Request - Royj Tailors*\n\n`;
    msg += `Name: ${name}\n`;
    msg += `Phone: ${phone}\n`;
    msg += `Service: ${serviceType}\n`;
    msg += `Date: ${preferredDate}\n`;
    msg += `Time: ${preferredTime}\n\n`;
    msg += `Please confirm my appointment slot. Thank you.`;

    window.open(`https://wa.me/${whatsappNum}?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container onSubmit={handleSubmit}>
        <Title>Book Fitting Appointment</Title>
        <Subtitle>Visit our Wattala Shop or ask for home measurement</Subtitle>

        <FormGroup>
          <label><FaUser style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Your Name</label>
          <Input
            type="text"
            required
            placeholder="e.g. Perera"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label><FaPhone style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Phone / WhatsApp Number</label>
          <Input
            type="tel"
            required
            placeholder="e.g. 077 123 4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <label><FaMapMarkerAlt style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Service Needed</label>
          <Select value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
            <option value="Visit Wattala Studio">Visit Wattala Shop for Measurements</option>
            <option value="Home Measurement Visit">Home / Office Measurement Visit</option>
            <option value="School Uniform Measurement">Children's School Uniform Order</option>
          </Select>
        </FormGroup>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <FormGroup>
            <label><FaCalendarAlt style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Preferred Date</label>
            <Input
              type="date"
              required
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <label><FaClock style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Time Window</label>
            <Select value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)}>
              <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
              <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
              <option value="Evening (4pm - 7pm)">Evening (4pm - 7pm)</option>
            </Select>
          </FormGroup>
        </div>

        <SubmitButton type="submit">
          <FaWhatsapp style={{ fontSize: '1.2rem' }} /> Confirm on WhatsApp
        </SubmitButton>
      </Container>
    </Modal>
  );
};

export default AppointmentModal;
