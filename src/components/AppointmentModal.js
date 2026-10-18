import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Modal from './Modal';
import InquiryReview from './InquiryReview';
import { studioDateTime, availableTimes } from '../data/appointments';

function AppointmentForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Studio fitting');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const today = studioDateTime();
  const slots = date ? availableTimes(date) : [];
  const submit = e => {
    e.preventDefault();
    if (!name.trim() || !/^[+0-9 ()-]+$/.test(phone) || phone.replace(/\D/g, '').length < 9 || phone.replace(/\D/g, '').length > 15) { setError('Please enter your name and a valid phone number.'); return; }
    if (!availableTimes(date).some(slot => slot.value === time)) { setError('Please select an available date and time window.'); return; }
    setError('');
    setMessage(['Fitting request · Royj Tailors', '', 'Name: ' + name.trim(), 'Phone: ' + phone.trim(), 'Service: ' + service, 'Preferred date: ' + date, 'Time: ' + time + ' (Sri Lanka time)', '', 'Please confirm availability for this appointment.'].join('\n'));
  };
  if (message) return <InquiryReview message={message} onBack={() => setMessage('')} title="Your fitting request." />;
  return <form className="tailor-form" onSubmit={submit}><span className="eyebrow">A PERSONAL APPOINTMENT</span><h2>Let’s find your fit.</h2><p className="muted">Visit our Wattala studio. Bring your ideas and a little time.</p>
    <label htmlFor="appointment-name">Your name<input id="appointment-name" autoComplete="name" required maxLength={80} pattern=".*\S.*" value={name} onChange={e => setName(e.target.value)} /></label>
    <label htmlFor="appointment-phone">Phone / WhatsApp number<input id="appointment-phone" type="tel" autoComplete="tel" required maxLength={22} placeholder="+94 77 123 4567" value={phone} onChange={e => setPhone(e.target.value)} /></label>
    <label htmlFor="appointment-service">What can we help with?<select id="appointment-service" value={service} onChange={e => setService(e.target.value)}><option>Studio fitting</option><option>School uniform fitting</option><option>Home / office measurement enquiry</option></select></label>
    <div className="form-grid"><label htmlFor="appointment-date">Preferred date<input id="appointment-date" type="date" required min={today.date} value={date} onChange={e => { setDate(e.target.value); setTime(''); setError(''); }} /></label>
      <label htmlFor="appointment-time">Time window<select id="appointment-time" required disabled={!date || slots.length === 0} value={time} onChange={e => setTime(e.target.value)}><option value="">Choose a time</option>{slots.map(slot => <option key={slot.value}>{slot.value}</option>)}</select></label></div>
    {date && slots.length === 0 && <p role="status" className="form-error">No remaining time windows. Please choose a future date.</p>}
    <p className="field-hint">All times are in Sri Lanka time. Sunday and home visits are by request; availability will be confirmed by our studio.</p>
    {error && <p role="alert" className="form-error">{error}</p>}
    <button type="submit" className="button button-full" disabled={Boolean(date && slots.length === 0)}>Review fitting request <FiArrowRight /></button>
  </form>;
}
export default function AppointmentModal({ isOpen, onClose }) {
  return <Modal isOpen={isOpen} onClose={onClose} title="Book a fitting"><AppointmentForm /></Modal>;
}
