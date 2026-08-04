// src/components/FitQuizModal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FaRulerCombined, FaCheckCircle } from 'react-icons/fa';

const QuizContainer = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--text-main);
  padding: 0.2rem;
`;

const QuizHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  
  h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 2rem;
    color: var(--primary-blue);
    margin: 0 0 0.4rem 0;
  }
  p {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin: 0;
  }
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  .dot {
    width: 35px;
    height: 4px;
    border-radius: 2px;
    background: ${props => props.active ? 'var(--primary-blue)' : '#E2E8F0'};
    transition: all 0.3s ease;
  }
`;

const QuestionBox = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.1rem;
    color: var(--text-main);
    margin-bottom: 1rem;
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
`;

const OptionButton = styled.button`
  background: ${props => props.selected ? '#EFF6FF' : '#FFFFFF'};
  border: 2px solid ${props => props.selected ? 'var(--primary-blue)' : 'var(--border-color)'};
  color: ${props => props.selected ? 'var(--primary-blue)' : 'var(--text-main)'};
  border-radius: 10px;
  padding: 1rem 0.8rem;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    border-color: var(--primary-blue);
  }
`;

const ResultCard = styled.div`
  background: #EFF6FF;
  border: 2px solid var(--primary-blue);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  margin-top: 1rem;

  .size-tag {
    font-family: 'DM Serif Display', serif;
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--primary-blue);
    margin: 0.5rem 0;
  }
  .desc {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const CTAButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background: var(--primary-blue);
  color: #FFFFFF;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const FitQuizModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [height, setHeight] = useState('');
  const [frame, setFrame] = useState('');
  const [fit, setFit] = useState('');

  const calculateResult = () => {
    if (frame === 'slender') return { size: 'Size M / Waist 30-32', fitName: 'Slim Fit Cut' };
    if (frame === 'athletic') return { size: 'Size L / Waist 32-34', fitName: 'Regular Fit Cut' };
    if (frame === 'full') return { size: 'Size XL / Waist 36-38', fitName: 'Comfort Fit Cut' };
    return { size: 'Size M / Waist 32', fitName: 'Standard Fit' };
  };

  const resetQuiz = () => {
    setStep(1);
    setHeight('');
    setFrame('');
    setFit('');
  };

  const handleClose = () => {
    resetQuiz();
    onClose();
  };

  const result = calculateResult();

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <QuizContainer>
        <QuizHeader>
          <h2><FaRulerCombined style={{ fontSize: '1.4rem', verticalAlign: 'middle', marginRight: '6px' }} /> Quick Size Helper</h2>
          <p>Answer 3 simple questions to find your recommended size</p>
        </QuizHeader>

        {step <= 3 && (
          <StepIndicator>
            <div className="dot" style={{ background: step >= 1 ? 'var(--primary-blue)' : '#E2E8F0' }} />
            <div className="dot" style={{ background: step >= 2 ? 'var(--primary-blue)' : '#E2E8F0' }} />
            <div className="dot" style={{ background: step >= 3 ? 'var(--primary-blue)' : '#E2E8F0' }} />
          </StepIndicator>
        )}

        {step === 1 && (
          <QuestionBox>
            <h3>1. What is your approximate height?</h3>
            <OptionsGrid>
              <OptionButton selected={height === 'short'} onClick={() => { setHeight('short'); setStep(2); }}>
                Under 5'8"
              </OptionButton>
              <OptionButton selected={height === 'average'} onClick={() => { setHeight('average'); setStep(2); }}>
                5'8" - 6'0"
              </OptionButton>
              <OptionButton selected={height === 'tall'} onClick={() => { setHeight('tall'); setStep(2); }}>
                Over 6'0"
              </OptionButton>
            </OptionsGrid>
          </QuestionBox>
        )}

        {step === 2 && (
          <QuestionBox>
            <h3>2. What is your body build?</h3>
            <OptionsGrid>
              <OptionButton selected={frame === 'slender'} onClick={() => { setFrame('slender'); setStep(3); }}>
                Lean / Slim
              </OptionButton>
              <OptionButton selected={frame === 'average'} onClick={() => { setFrame('average'); setStep(3); }}>
                Average Build
              </OptionButton>
              <OptionButton selected={frame === 'athletic'} onClick={() => { setFrame('athletic'); setStep(3); }}>
                Athletic / Broad
              </OptionButton>
              <OptionButton selected={frame === 'full'} onClick={() => { setFrame('full'); setStep(3); }}>
                Fuller Build
              </OptionButton>
            </OptionsGrid>
          </QuestionBox>
        )}

        {step === 3 && (
          <QuestionBox>
            <h3>3. How do you like your clothes to fit?</h3>
            <OptionsGrid>
              <OptionButton selected={fit === 'slim'} onClick={() => { setFit('slim'); setStep(4); }}>
                Slim Fit
              </OptionButton>
              <OptionButton selected={fit === 'regular'} onClick={() => { setFit('regular'); setStep(4); }}>
                Regular Fit
              </OptionButton>
              <OptionButton selected={fit === 'relaxed'} onClick={() => { setFit('relaxed'); setStep(4); }}>
                Loose / Comfortable Fit
              </OptionButton>
            </OptionsGrid>
          </QuestionBox>
        )}

        {step === 4 && (
          <div>
            <ResultCard>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                Your Recommended Size
              </div>
              <div className="size-tag">{result.size}</div>
              <div style={{ color: 'var(--primary-blue)', fontWeight: '700', marginBottom: '0.5rem' }}>
                Fit Type: {result.fitName}
              </div>
              <div className="desc">
                Select this size when placing your WhatsApp order, or enter your exact waist and length inches!
              </div>
            </ResultCard>

            <CTAButton onClick={handleClose}>
              <FaCheckCircle /> Done & Return to Shop
            </CTAButton>
          </div>
        )}
      </QuizContainer>
    </Modal>
  );
};

export default FitQuizModal;
