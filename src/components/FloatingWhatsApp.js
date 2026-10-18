import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappUrl } from '../data/studio';
import { useLocation } from 'react-router-dom';
export default function FloatingWhatsApp() {
  const { pathname } = useLocation();
  return <a className={'floating-whatsapp ' + (pathname.startsWith('/product/') ? 'product-float' : '')} href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Chat with Royj Tailors on WhatsApp"><FaWhatsapp /><span>Let’s talk</span></a>;
}
