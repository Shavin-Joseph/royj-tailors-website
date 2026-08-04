// src/components/CargoCustomizer.js
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
  font-size: 1.4rem;
  color: #1a1a1a;
  margin-top: 0;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ResetButton = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 0.85rem;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #1a1a1a;
  }
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
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
`;

const ColorSwatch = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border-radius: 20px;
  border: 2px solid ${props => (props.$active ? '#1A1A1A' : '#E0E0E0')};
  background-color: ${props => (props.$active ? '#F8F9FA' : '#FFFFFF')};
  cursor: pointer;
  font-weight: ${props => (props.$active ? '600' : '400')};
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    border-color: #1A1A1A;
  }
`;

const ColorDot = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => props.$color};
  border: 1px solid rgba(0, 0, 0, 0.15);
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

const CounterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CountOption = styled.button`
  padding: 0.4rem 1rem;
  border: 1.5px solid ${props => (props.$active ? '#1A1A1A' : '#DDD')};
  background-color: ${props => (props.$active ? '#1A1A1A' : '#FFF')};
  color: ${props => (props.$active ? '#FFF' : '#333')};
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #1A1A1A;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.65rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  background-color: #fff;
  cursor: pointer;
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
  padding: 0.6rem 0.8rem;
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

const CargoCustomizer = ({ config, onChange, onReset }) => {
  const { t } = useLanguage();

  const colorSwatches = [
    { key: 'Dark Green', name: t('color_DarkGreen'), hex: '#1E352B' },
    { key: 'Gray', name: t('color_Gray'), hex: '#606466' },
    { key: 'Butter', name: t('color_Butter'), hex: '#EBD89F' },
    { key: 'Custom Color', name: t('customColor'), hex: 'linear-gradient(135deg, #e66465, #9198e5)' }
  ];

  const frontPocketShapes = [
    { key: 'Deep Slant Hand Pockets', label: t('shape_DeepSlant') },
    { key: 'Straight Slit Pockets', label: t('shape_StraightSlit') },
    { key: 'Zippered Front Pockets', label: t('shape_ZipperedFront') }
  ];

  const sidePocketShapes = [
    { key: 'Flap Box Pleat Pockets', label: t('shape_FlapBoxPleat') },
    { key: 'Zippered Utility Pockets', label: t('shape_ZipperedUtility') },
    { key: 'Slanted Bellow Pockets', label: t('shape_SlantedBellow') },
    { key: 'Minimalist Patch Pockets', label: t('shape_MinimalistPatch') }
  ];

  const backPocketShapes = [
    { key: 'Flap Box Pleat Pockets', label: t('shape_FlapBoxPleat') },
    { key: 'Hidden Welt Pockets', label: t('shape_HiddenWelt') },
    { key: 'Standard Patch Pockets', label: t('shape_StandardPatch') }
  ];

  const fitOptions = [
    { key: 'Straight Fit', label: t('fit_Straight') },
    { key: 'Slim Fit', label: t('fit_Slim') },
    { key: 'Relaxed Fit', label: t('fit_Relaxed') },
    { key: 'Elastic Jogger Hem', label: t('fit_Jogger') }
  ];

  const waistbandOptions = [
    { key: 'Belt Loops & Button', label: t('waist_BeltLoops') },
    { key: 'Elastic Drawstring', label: t('waist_ElasticDrawstring') },
    { key: 'Extended Tab Fastener', label: t('waist_ExtendedTab') }
  ];

  const materialOptions = [
    { key: 'Heavyweight Cotton Twill', label: t('mat_CottonTwill') },
    { key: 'Ripstop Twill', label: t('mat_RipstopTwill') },
    { key: 'Stretch Twill', label: t('mat_StretchTwill') }
  ];

  const getColorDisplay = (colorKey) => {
    if (colorKey === 'Dark Green') return t('color_DarkGreen');
    if (colorKey === 'Gray') return t('color_Gray');
    if (colorKey === 'Butter') return t('color_Butter');
    if (colorKey === 'Custom Color') return config.customColorName || t('customColor');
    return colorKey;
  };

  return (
    <CustomizerWrapper>
      <SectionTitle>
        {t('customizeCargoTitle')}
        <ResetButton onClick={onReset}>{t('resetDefaults')}</ResetButton>
      </SectionTitle>

      {/* 1. COLOR SELECTION */}
      <Group>
        <GroupLabel>
          {t('fabricColor')} <span>{getColorDisplay(config.color)}</span>
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
            placeholder={t('typeColorPlaceholder')}
            value={config.customColorName || ''}
            onChange={e => onChange({ customColorName: e.target.value })}
          />
        )}
      </Group>

      {/* 2. POCKET COUNTS & SHAPES */}
      <Group>
        <GroupLabel>{t('frontPockets')}</GroupLabel>
        <CounterContainer style={{ marginBottom: '0.5rem' }}>
          {[0, 2].map(count => (
            <CountOption
              key={count}
              type="button"
              $active={config.frontPockets === count}
              onClick={() => onChange({ frontPockets: count })}
            >
              {count} {t('pocketsCount')}
            </CountOption>
          ))}
        </CounterContainer>
        {config.frontPockets > 0 && (
          <Select
            value={config.frontPocketShape}
            onChange={e => onChange({ frontPocketShape: e.target.value })}
          >
            {frontPocketShapes.map(s => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </Select>
        )}
      </Group>

      <Group>
        <GroupLabel>
          {t('sidePockets')} <span className="sub">{t('thighSubText')}</span>
        </GroupLabel>
        <CounterContainer style={{ marginBottom: '0.5rem' }}>
          {[0, 2, 4].map(count => (
            <CountOption
              key={count}
              type="button"
              $active={config.sidePockets === count}
              onClick={() => onChange({ sidePockets: count })}
            >
              {count} {t('pocketsCount')}
            </CountOption>
          ))}
        </CounterContainer>
        {config.sidePockets > 0 && (
          <Select
            value={config.sidePocketShape}
            onChange={e => onChange({ sidePocketShape: e.target.value })}
          >
            {sidePocketShapes.map(s => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </Select>
        )}
      </Group>

      <Group>
        <GroupLabel>{t('backPockets')}</GroupLabel>
        <CounterContainer style={{ marginBottom: '0.5rem' }}>
          {[0, 1, 2].map(count => (
            <CountOption
              key={count}
              type="button"
              $active={config.backPockets === count}
              onClick={() => onChange({ backPockets: count })}
            >
              {count} {t('pocketsCount')}
            </CountOption>
          ))}
        </CounterContainer>
        {config.backPockets > 0 && (
          <Select
            value={config.backPocketShape}
            onChange={e => onChange({ backPocketShape: e.target.value })}
          >
            {backPocketShapes.map(s => (
              <option key={s.key} value={s.key}>{s.label}</option>
            ))}
          </Select>
        )}
      </Group>

      {/* 3. FIT, WAISTBAND & MATERIAL */}
      <Group>
        <GroupLabel>{t('legFitStyle')}</GroupLabel>
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

      <Group>
        <GroupLabel>{t('waistbandStyle')}</GroupLabel>
        <Select
          value={config.waistband}
          onChange={e => onChange({ waistband: e.target.value })}
        >
          {waistbandOptions.map(w => (
            <option key={w.key} value={w.key}>{w.label}</option>
          ))}
        </Select>
      </Group>

      <Group>
        <GroupLabel>{t('materialFabric')}</GroupLabel>
        <Select
          value={config.material}
          onChange={e => onChange({ material: e.target.value })}
        >
          {materialOptions.map(m => (
            <option key={m.key} value={m.key}>{m.label}</option>
          ))}
        </Select>
      </Group>

      {/* 4. SUMMARY BADGE */}
      <SummaryBox>
        <strong>{t('customSummaryTitle')}</strong>
        <br />• <strong>{t('fabricColor')}</strong> {getColorDisplay(config.color)}
        <br />• <strong>{t('pocketsCount')}:</strong> {config.frontPockets} {t('frontPockets')}, {config.sidePockets} {t('sidePockets')}, {config.backPockets} {t('backPockets')}
        <br />• <strong>{t('legFitStyle')}:</strong> {config.fit}
      </SummaryBox>
    </CustomizerWrapper>
  );
};

export default CargoCustomizer;
