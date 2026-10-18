import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiArrowUpRight, FiScissors, FiTruck, FiSliders, FiPlus, FiArrowDown } from 'react-icons/fi';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductImage from '../components/ProductImage';
import BespokeCustomizer from '../components/BespokeCustomizer';
import AppointmentModal from '../components/AppointmentModal';
import FitQuizModal from '../components/FitQuizModal';
import Reveal from '../components/Reveal';

const faqs = [
  ['How do I place an order?', 'Choose a piece, select a color and add your size or measurements. Review your enquiry, then send it on WhatsApp. Our studio will confirm the fabric, final price and delivery details with you.'],
  ['Can I have something made to my measurements?', 'Yes. Choose custom measurements on any product, or book a fitting at our Wattala studio. If you are unsure about a measurement, speak to us before placing your order.'],
  ['Do you make school uniforms?', 'We tailor shirts, shorts, trousers and skirts for school. Tell us the school requirements, your child’s measurements and any badge details when you enquire.'],
  ['How long will my order take?', 'Timing depends on the garment, fabric availability and our current workload. We will confirm the expected completion date and delivery charge on WhatsApp before you proceed.'],
];
export default function HomePage() {
  const [appointment, setAppointment] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const [back, setBack] = useState(false);
  return <>
    <><title>Royj Tailors | Everyday clothing, made for you</title><meta name="description" content="Discover custom cargo trousers, shirts, shorts and school uniforms at Royj Tailors, Wattala. Explore the collection, personalize your fit and enquire on WhatsApp." /></>
    <section className="hero container">
      <Reveal className="hero-copy">
        <span className="eyebrow"><span className="tiny-line" /> THE EVERYDAY, RECONSIDERED</span>
        <h1>Made for you.<br /><em>Worn your way.</em></h1>
        <p>Not just the right size. The right feeling.<br className="desktop-break" /> Thoughtfully tailored essentials, from your weekday routine to your weekend plans.</p>
        <div className="hero-actions"><Link className="button" to="/shop">Explore the collection <FiArrowUpRight /></Link><a className="text-link" href="#customizer-tool">Make it yours <FiArrowRight /></a></div>
        <div className="hero-footnote"><FiScissors /><span>Individual measurements.<br /><strong>A personal touch in every stitch.</strong></span></div>
      </Reveal>
      <Reveal className="hero-editorial" delay={.12}>
        <div className="editorial-caption"><span>THE ROYJ EDIT</span><span>01 / EVERYDAY UTILITY</span></div>
        <div className="hero-product-stage">
          <div className="hero-vertical">PURPOSE IN EVERY POCKET</div>
          <ProductImage product={products[0]} back={back} eager className="hero-garment" />
          <span className="garment-annotation"><span />Cotton twill.<br />Built for your everyday.</span>
          <button className="view-switch" onClick={() => setBack(!back)} aria-label={back ? 'Show front view' : 'Show back view'}><FiSliders />{back ? 'Back view' : 'Front view'}<span>↔</span></button>
        </div>
        <Link className="hero-product-label" to={'/product/' + products[0].id}><span><small>THE SIGNATURE PIECE</small><strong>Utility cargo trousers</strong></span><span>{products[0].price}<FiArrowUpRight /></span></Link>
        <div className="editorial-stamp" aria-hidden="true"><FiScissors /><span>CUT TO<br />YOUR FIT</span></div>
      </Reveal>
    </section>
    <div className="service-strip"><div className="container"><span><FiScissors /> Made to your measurements</span><span><FiSliders /> Your color. Your fit.</span><span><FiTruck /> Delivery across Sri Lanka</span><a href="#collection">Discover your next everyday <FiArrowDown /></a></div></div>
    <section className="section container" id="collection">
      <Reveal className="section-heading"><div><span className="eyebrow">THE COLLECTION</span><h2>Good days start<br className="mobile-break" /> with <em>a good fit.</em></h2></div><Link className="text-link" to="/shop">View all pieces <FiArrowUpRight /></Link></Reveal>
      <div className="category-links">{[['trousers','01','Everyday trousers'],['shirts','02','The shirt edit'],['shorts','03','Off-duty essentials'],['uniforms','04','Ready for school']].map(([id, number, label]) => <Link to={'/shop?category=' + id} key={id}><span>{number}</span>{label}<FiArrowUpRight /></Link>)}</div>
      <div className="product-grid featured-grid">{[products[0], products[3], products[2], products[1]].map((product, index) => <Reveal key={product.id} delay={index * .04}><ProductCard product={product} /></Reveal>)}</div>
    </section>
    <section className="craft-note container">
      <Reveal className="craft-image"><ProductImage product={products[2]} /><span className="image-note">DETAILS THAT MAKE THE DIFFERENCE.</span></Reveal>
      <Reveal className="craft-copy"><span className="eyebrow">LESS OFF-THE-RACK. MORE YOU.</span><h2>Clothes should fit<br />your life. <em>And you.</em></h2><p>A little room where you need it. The length just right. Pockets that earn their place. At our Wattala studio, it’s these small things that make a piece feel like yours.</p><Link className="text-link" to="/our-craft">Meet the craft behind the clothes <FiArrowUpRight /></Link><div className="craft-signature">Thoughtfully cut. Carefully finished.</div></Reveal>
    </section>
    <section className="section container"><BespokeCustomizer /></section>
    <section className="how-section"><div className="container section">
      <Reveal className="section-heading"><div><span className="eyebrow">FROM AN IDEA TO YOUR EVERYDAY</span><h2>A better fit.<br /><em>A simpler process.</em></h2></div><button className="text-link" onClick={() => setQuiz(true)}>Find your starting size <FiArrowUpRight /></button></Reveal>
      <div className="steps-grid">{[
        ['01','Find your piece','Start with an everyday essential. Choose the color and fit that feel like you.'],
        ['02','Make it personal','Add your measurements or visit us for a fitting. We’ll help with the details.'],
        ['03','Let’s make it happen','Send your enquiry on WhatsApp. We’ll confirm the details before tailoring begins.'],
      ].map(([n,title,body]) => <Reveal key={n} className="step"><span>{n}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div>
    </div></section>
    <section className="section container faq-layout"><div><span className="eyebrow">A FEW THINGS TO KNOW</span><h2>Before the<br /><em>first stitch.</em></h2><p className="muted">A little guidance goes a long way.</p></div><div className="faqs">{faqs.map(([q,a]) => <details key={q}><summary>{q}<FiPlus /></summary><p>{a}</p></details>)}</div></section>
    <section className="studio-banner container"><div><span className="eyebrow">COME AS YOU ARE. LEAVE WITH A PLAN.</span><h2>Your next great fit<br />starts in <em>Wattala.</em></h2><p>Bring your ideas. We’ll take care of the measurements.</p><button className="button button-light" onClick={() => setAppointment(true)}>Book a studio fitting <FiArrowUpRight /></button></div><div className="studio-mark" aria-hidden="true"><FiScissors /><span>ROYJ<br /><small>THE TAILORING STUDIO</small></span></div></section>
    <AppointmentModal isOpen={appointment} onClose={() => setAppointment(false)} /><FitQuizModal isOpen={quiz} onClose={() => setQuiz(false)} />
  </>;
}
