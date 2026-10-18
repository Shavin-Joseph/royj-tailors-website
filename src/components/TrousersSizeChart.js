// src/components/TrousersSizeChart.js
import React from 'react';
import styled from 'styled-components';
import { useLanguage } from '../context/LanguageContext';

const ChartContainer = styled.div` font-family: 'Inter', sans-serif; `;
const Title = styled.h2` font-family: 'DM Serif Display', serif; text-align: center; margin-top: 0; `;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  th, td { border: 1px solid #ddd; padding: 12px; text-align: center; }
  th { background-color: #f7f7f7; font-weight: 600; }
`;

const sizes = [
  { size: '30', waist: '30"', inseam: '32"' },
  { size: '32', waist: '32"', inseam: '32"' },
  { size: '34', waist: '34"', inseam: '32"' },
  { size: '36', waist: '36"', inseam: '34"' },
  { size: '38', waist: '38"', inseam: '34"' },
  { size: '40', waist: '40"', inseam: '34"' },
];

const TrousersSizeChart = () => {
  const { t } = useLanguage();

  return (
    <ChartContainer>
      <Title>{t('trousersSizeTitle')}</Title>
      <Table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Waist</th>
            <th>Inseam (Leg Length)</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((s) => (
            <tr key={s.size}>
              <td>{s.size}</td>
              <td>{s.waist}</td>
              <td>{s.inseam}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ChartContainer>
  );
};

export default TrousersSizeChart;