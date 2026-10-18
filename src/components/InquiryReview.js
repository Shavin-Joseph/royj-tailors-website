import React, { useEffect, useRef } from 'react';
import { FiArrowLeft, FiArrowUpRight } from 'react-icons/fi';
import { whatsappUrl } from '../data/studio';
export default function InquiryReview({ message, onBack, title = 'Your enquiry, ready to send.' }) {
  const heading = useRef(null);
  useEffect(() => { heading.current?.focus(); }, []);
  return <div className="inquiry-review">
    <span className="eyebrow">One last look</span><h2 ref={heading} tabIndex={-1}>{title}</h2>
    <p className="muted">Check the details below, then open WhatsApp to send them to our studio. Your request is confirmed only after we reply.</p>
    <pre>{message}</pre><a className="button button-full" href={whatsappUrl(message)} target="_blank" rel="noreferrer">Open WhatsApp <FiArrowUpRight /></a>
    <button className="text-button" type="button" onClick={onBack}><FiArrowLeft /> Edit details</button>
  </div>;
}
