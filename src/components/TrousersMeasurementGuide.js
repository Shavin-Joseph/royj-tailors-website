// src/components/TrousersMeasurementGuide.js
import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';

const GuideContainer = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
  display: flex;
  gap: 2rem;
  @media (max-width: 640px) { flex-direction: column; }
`;
const ImageWrapper = styled.div` flex: 1; text-align: center; `;
const GuideImage = styled.img` max-width: 100%; height: auto; max-height: 300px; `;
const Instructions = styled.div`
  flex: 1;
  h4 { margin-top: 0; font-family: 'DM Serif Display', serif; }
  ul { padding-left: 20px; font-size: 0.9rem; color: #555; }
  li { margin-bottom: 0.5rem; }
`;

const TrousersMeasurementGuide = () => {
  const { t } = useLanguage();

  return (
    <GuideContainer>
      <ImageWrapper>
        <GuideImage src="/trousers-measurement-guide.png" alt="How to measure trousers" />
      </ImageWrapper>
      <Instructions>
        <h4>{t('howToMeasureTitle')}</h4>
        <ul>
          <li>{t('waistGuide')}</li>
          <li>{t('inseamGuide')}</li>
          <li>{t('outseamGuide')}</li>
          <li>{t('thighGuide')}</li>
        </ul>
      </Instructions>
    </GuideContainer>
  );
};

export default TrousersMeasurementGuide;