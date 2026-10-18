import React, { useState } from 'react';
import { FiArrowUpRight, FiMapPin, FiPhone, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { studio, whatsappUrl } from '../data/studio';
import AppointmentModal from '../components/AppointmentModal';
export default function ContactPage() {
  const [open, setOpen] = useState(false);
  const mapLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(studio.address);
  return <div className="container contact-page">
    <><title>Visit the studio | Royj Tailors, Wattala</title><meta name="description" content="Visit Royj Tailors at No. 176/17A Alwistown, Hendala, Wattala. Request a fitting, call +94 77 553 2642 or enquire on WhatsApp." /></>
    <div className="page-heading"><span className="eyebrow">GOOD CLOTHES BEGIN WITH A CONVERSATION</span><h1>Come in.<br /><em>Make yourself comfortable.</em></h1><p>Tell us what you have in mind. We’ll work on the fit together.</p></div>
    <div className="contact-layout"><div className="studio-card"><span className="eyebrow">THE WATTALA STUDIO</span><h2>A place for<br /><em>your next great fit.</em></h2><div className="studio-address"><FiMapPin /><p>{studio.address}</p></div><a className="button button-light" href={mapLink} target="_blank" rel="noreferrer">Get directions <FiArrowUpRight /></a><div className="studio-card-rule" /><p className="studio-card-note">Bring a favorite garment, an idea, or just yourself.<br />We’ll help with the rest.</p></div>
      <div className="contact-details"><div className="contact-row"><FiPhone /><div><h3>A direct line to your tailor.</h3><a href={'tel:+' + studio.phone}>{studio.displayPhone}</a><a className="text-link" href={whatsappUrl()} target="_blank" rel="noreferrer"><FaWhatsapp /> Start a WhatsApp conversation <FiArrowUpRight /></a></div></div>
      <div className="contact-row"><FiClock /><div><h3>Make a little time for a good fit.</h3><p>{studio.hours}<br />Sunday visits by request.</p><p className="field-hint">Please confirm your visit with us before travelling.</p></div></div>
      <div className="contact-booking"><span className="eyebrow">WE’LL SAVE SOME TIME FOR YOU</span><h3>Your fitting starts here.</h3><p>Choose a preferred date and time. We’ll confirm your appointment personally on WhatsApp.</p><button className="button" onClick={() => setOpen(true)}>Request a fitting <FiArrowUpRight /></button></div>
    </div></div>
    <AppointmentModal isOpen={open} onClose={() => setOpen(false)} />
  </div>;
}
