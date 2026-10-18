import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiScissors, FiLayers, FiCheck } from 'react-icons/fi';
import { products } from '../data/products';
import ProductImage from '../components/ProductImage';
import AppointmentModal from '../components/AppointmentModal';
import Reveal from '../components/Reveal';
export default function OurCraftPage() {
  const [open, setOpen] = useState(false);
  return <div className="container craft-page">
    <><title>Our craft | Royj Tailors, Wattala</title><meta name="description" content="Get to know the care behind Royj Tailors. Everyday menswear and school uniforms, cut to your measurements in Wattala, Sri Lanka." /></>
    <div className="page-heading"><span className="eyebrow">THE CARE BEHIND WHAT YOU WEAR</span><h1>Small details.<br /><em>A personal difference.</em></h1><p>Rooted in Wattala. Made around you.</p></div>
    <div className="craft-story"><Reveal className="craft-story-image"><ProductImage product={products[0]} back /><span className="image-note">THOUGHTFUL FROM EVERY ANGLE.</span></Reveal><Reveal><span className="eyebrow">OUR APPROACH</span><h2>Everyday clothing.<br /><em>Individual attention.</em></h2><p>We believe your everyday clothes deserve care. The trousers you reach for on a Monday. The shirt that goes from work to dinner. The uniform that needs to keep up with a school day.</p><p>At Royj Tailors, we work with you on the measurements, fabric and small details that make a garment feel right. Our collection is a starting point. The fit is personal.</p><button className="button" onClick={() => setOpen(true)}>Come in for a fitting <FiArrowUpRight /></button></Reveal></div>
    <section className="section"><div className="section-heading"><div><span className="eyebrow">HOW WE THINK ABOUT CLOTHES</span><h2>Considered.<em> In every stitch.</em></h2></div></div><div className="values-grid">{[[FiScissors,'Cut around you','Waist, length, shoulder, sleeve. We pay attention to the measurements that make a difference.'],[FiLayers,'Fabric with a purpose','Cotton twill for utility. Breathable cotton for shirts. We help you choose for the way you live.'],[FiCheck,'Useful by design','Practical pockets, considered seams and a comfortable cut. Details that earn their place.']].map(([Icon,title,body]) => <Reveal key={title}><Icon /><h3>{title}</h3><p>{body}</p></Reveal>)}</div></section>
    <div className="fit-banner"><div><span className="eyebrow">FIND YOUR EVERYDAY</span><h2>Something that feels like you.</h2><p>Explore trousers, shirts, shorts and school uniforms.</p></div><Link className="button" to="/shop">Explore the collection <FiArrowUpRight /></Link></div>
    <AppointmentModal isOpen={open} onClose={() => setOpen(false)} />
  </div>;
}
