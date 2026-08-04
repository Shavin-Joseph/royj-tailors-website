// src/components/TrousersMeasurementGuide.js
import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
  margin-top: 1.2rem;
  background: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 1.2rem;
  color: var(--text-main);
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const Title = styled.h4`
  margin: 0 0 0.8rem 0;
  font-family: 'DM Serif Display', serif;
  font-size: 1.2rem;
  color: var(--primary-blue);
`;

const StepsList = styled.ul`
  padding-left: 1.2rem;
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;

  li {
    margin-bottom: 0.4rem;
    strong {
      color: var(--text-main);
    }
  }
`;

const TrousersMeasurementGuide = () => {
  return (
    <GuideContainer>
      <Title>Trousers & Cargo Pants Measurement Guide</Title>
      <StepsList>
        <li><strong>Waist:</strong> Measure around your natural waistline where you wear pants.</li>
        <li><strong>Inseam (Leg Length):</strong> Measure inner leg from crotch seam down to top of shoe heel.</li>
        <li><strong>Hips / Seat:</strong> Measure around the fullest part of your hips/seat.</li>
        <li><strong>Thigh:</strong> Measure around upper thigh for comfortable seat fit.</li>
      </StepsList>
    </GuideContainer>
  );
};

export default TrousersMeasurementGuide;