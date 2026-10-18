// src/components/ShirtCustomizer.js
import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';

const CustomizerWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  font-family: 'Inter', sans-serif;
`;

const SectionTitle = styled.h3`
  font-family: 'DM Serif Display', serif;
  font-size: 1.35rem;
  color: #1a1a1a;
  margin-top: 0;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Group = styled.div`
  margin-bottom: 1.25rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const GroupLabel = styled.label`
  display: block;
  font-weight: 600;
  font-size: 0.95rem;
  color: #222;
  margin-bottom: 0.5rem;

  span.sub {
    font-weight: 400;
    color: #666;
    font-size: 0.85rem;
    margin-left: 0.5rem;
  }
`;

const SwatchGrid = styled.div`
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  align-items: center;
`;

const ColorSwatch = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.85rem;
  border-radius: 20px;
  border: 2px solid ${props => (props.$active ? '#1A1A1A' : '#E0E0E0')};
  background-color: ${props => (props.$active ? '#F8F9FA' : '#FFFFFF')};
  cursor: pointer;
  font-weight: ${props => (props.$active ? '600' : '400')};
  transition: all 0.2s ease;
  font-size: 0.88rem;

  &:hover {
    border-color: #1A1A1A;
  }
`;

const ColorDot = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => props.$color};
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const TextInput = styled.input`
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  box-sizing: border-box;
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.5rem;
  margin-top: 0.4rem;
`;

const CardOption = styled.div`
  border: 1.5px solid ${props => (props.$active ? '#1A1A1A' : '#E5E5E5')};
  background: ${props => (props.$active ? '#F4F4F4' : '#FFF')};
  padding: 0.55rem 0.75rem;
  border-radius: 8px;
  font-size: 0.85rem;
  text-align: center;
  font-weight: ${props => (props.$active ? '600' : '400')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1A1A1A;
  }
`;

const SummaryBox = styled.div`
  background-color: #f8f9fa;
  border-left: 4px solid #1a1a1a;
  padding: 0.85rem 1rem;
  margin-top: 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #333;
`;

const ShirtCustomizer = ({ config, onChange }) => {
  const { t } = useLanguage();

  const colorSwatches = [
    { key: 'White', name: t('color_White'), hex: '#FFFFFF' },
    { key: 'Light Blue', name: t('color_LightBlue'), hex: '#A0C4E2' },
    { key: 'Black', name: t('color_Black'), hex: '#111111' },
    { key: 'Custom Color', name: t('customColor'), hex: 'linear-gradient(135deg, #e66465, #9198e5)' }
  ];

  const fitOptions = [
    { key: 'Slim Fit', label: t('fit_Slim') },
    { key: 'Regular Fit', label: t('fit_Regular') },
    { key: 'Tailored Fit', label: t('fit_Tailored') }
  ];

  const getColorDisplay = (colorKey) => {
    if (colorKey === 'White') return t('color_White');
    if (colorKey === 'Light Blue') return t('color_LightBlue');
    if (colorKey === 'Black') return t('color_Black');
    if (colorKey === 'Custom Color') return config.customColorName || t('customColor');
    return colorKey;
  };

  return (
    <CustomizerWrapper>
      <SectionTitle>{t('selectColorAndFitTitle')}</SectionTitle>

      {/* COLOR SELECTION */}
      <Group>
        <GroupLabel>
          {t('shirtColorLabel')} <span>{getColorDisplay(config.color)}</span>
        </GroupLabel>
        <SwatchGrid>
          {colorSwatches.map(c => (
            <ColorSwatch
              key={c.key}
              type="button"
              $active={config.color === c.key}
              onClick={() => onChange({ color: c.key })}
            >
              <ColorDot
                $color={c.hex.includes('gradient') ? undefined : c.hex}
                style={c.hex.includes('gradient') ? { background: c.hex } : {}}
              />
              {c.name}
            </ColorSwatch>
          ))}
        </SwatchGrid>

        {config.color === 'Custom Color' && (
          <TextInput
            type="text"
            placeholder={t('typeShirtColorPlaceholder')}
            value={config.customColorName || ''}
            onChange={e => onChange({ customColorName: e.target.value })}
          />
        )}
      </Group>

      {/* FIT SELECTION */}
      <Group>
        <GroupLabel>{t('fitStyleLabel')}</GroupLabel>
        <OptionGrid>
          {fitOptions.map(f => (
            <CardOption
              key={f.key}
              $active={config.fit === f.key}
              onClick={() => onChange({ fit: f.key })}
            >
              {f.label}
            </CardOption>
          ))}
        </OptionGrid>
      </Group>

      <SummaryBox>
        <strong>{t('customSummaryTitle')}</strong>
        <br />• <strong>{t('shirtColorLabel')}</strong> {getColorDisplay(config.color)}
        <br />• <strong>{t('fitStyleLabel')}:</strong> {config.fit}
      </SummaryBox>
    </CustomizerWrapper>
  );
};

export default ShirtCustomizer;
