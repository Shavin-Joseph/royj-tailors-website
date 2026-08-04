// src/components/MeasurementGuide.js
import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const GuideImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 300px;
`;

const Instructions = styled.div`
  flex: 1;
  
  h4 {
    margin-top: 0;
    font-family: 'DM Serif Display', serif;
  }

  ul {
    padding-left: 20px;
    font-size: 0.9rem;
    color: #555;
  }
`;

const MeasurementGuide = () => {
  return (
    <GuideContainer>
      <ImageWrapper>
        <GuideImage src="/measurement-guide.png" alt="How to measure a shirt" />
      </ImageWrapper>
      <Instructions>
        <h4>How to Measure</h4>
        <ul>
          <li><strong>Collar:</strong> Measure around the base of your neck.</li>
          <li><strong>Chest:</strong> Measure around the fullest part of your chest, under the armpits.</li>
          <li><strong>Shoulder:</strong> Measure from one shoulder tip to the other across your back.</li>
          <li><strong>Sleeve:</strong> Measure from the shoulder tip down to your wrist.</li>
        </ul>
      </Instructions>
    </GuideContainer>
  );
};

export default MeasurementGuide;