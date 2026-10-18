<<<<<<< HEAD
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
=======
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const PageContainer = styled.div`
  padding: 8rem 4rem 4rem 4rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 2rem 1.5rem;
  }
`;

const PageTitle = styled(motion.h1)`
  font-family: 'DM Serif Display', serif;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const ContentSection = styled(motion.div)`
  margin-bottom: 3rem;

  h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 2rem;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
  }
`;

const OurCraftPage = () => {
  const { language, t } = useLanguage();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <>
      <Helmet>
        <title>{t('ourCraftTitle')} | Royj Tailors</title>
        <meta name="description" content="Learn about the dedication to quality, premium materials, and meticulous process that defines every garment at Royj Tailors." />
      </Helmet>
      <PageContainer>
        <PageTitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {t('ourCraftTitle')}
        </PageTitle>

        <ContentSection variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>{language === 'si' ? 'අපගේ දැක්ම' : 'Our Philosophy'}</h2>
          <p>
            {language === 'si'
              ? 'Royj Tailors හි අප විශ්වාස කරන්නේ ඇඳුම් යනු හුදෙක් රෙදි කොටසක් පමණක් නොව, එය ඔබගේ පෞද්ගලික විලාසිතාවේ ප්‍රකාශනයක් බවයි. අපගේ ප්‍රධාන අරමුණ වන්නේ සාම්ප්‍රදායික ටේලරිං ක්‍රම ශිල්ප සහ නවීන මෝස්තර එකමුතු කරමින් වසර ගණනාවක් පැළඳිය හැකි උසස්ම තත්වයේ ඇඳුම් නිර්මාණය කිරීමයි.'
              : "At Royj Tailors, we believe that clothing is more than just fabric; it's a statement of personal style and an investment in quality. Our philosophy is rooted in the timeless traditions of tailoring, where every stitch is deliberate and every detail matters. We don't chase fleeting trends. Instead, we create distinguished, durable garments designed to be worn and cherished for years."}
          </p>
        </ContentSection>

        <ContentSection variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>{language === 'si' ? 'නිර්මාණ ක්‍රියාවලිය' : 'The Process'}</h2>
          <p>
            {language === 'si'
              ? 'පළමු සාකච්ඡාවේ සිට අවසාන මැනීම් දක්වා, අපගේ ක්‍රියාවලිය ඔබ සමඟ සිදු කෙරේ. අපගේ ප්‍රවීණ ටේලර්වරුන් විසින් ඔබගේ මිනුම් වලට ගැලපෙන පරිදි ඉතා නිවැරදිව සහ සියුම් ලෙස සෑම ඇඳුමක්ම කපා මසා නිම කරයි.'
              : 'From the initial consultation to the final fitting, our process is a partnership with you. We begin by understanding your needs, selecting only the finest fabrics sourced for their texture and durability. Our master tailors then draft a unique pattern, cutting and sewing each piece with a level of precision that modern mass production simply cannot replicate.'}
          </p>
        </ContentSection>
      </PageContainer>
    </>
  );
};

export default OurCraftPage;
>>>>>>> bbd6728eab04548842ae8036b6e641589e8eaba9
