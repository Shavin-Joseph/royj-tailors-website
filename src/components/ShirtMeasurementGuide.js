// src/components/ShirtMeasurementGuide.js
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

const ShirtMeasurementGuide = () => {
  return (
    <GuideContainer>
      <Title>Shirt Measurement Guide</Title>
      <StepsList>
        <li><strong>Collar:</strong> Measure around the base of your neck where the shirt collar sits.</li>
        <li><strong>Chest:</strong> Wrap tape under armpits around the fullest part of your chest.</li>
        <li><strong>Shoulder:</strong> Measure across upper back from shoulder point to shoulder point.</li>
        <li><strong>Sleeve Length:</strong> Measure from shoulder seam down along arm to wrist.</li>
      </StepsList>
    </GuideContainer>
  );
};

export default ShirtMeasurementGuide;