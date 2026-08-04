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