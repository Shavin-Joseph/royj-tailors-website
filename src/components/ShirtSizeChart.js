// src/components/ShirtSizeChart.js
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
  { size: 'S', collar: '14.5"', chest: '38"', shoulder: '17.5"', sleeve: '33"' },
  { size: 'M', collar: '15.5"', chest: '41"', shoulder: '18.5"', sleeve: '34"' },
  { size: 'L', collar: '16.5"', chest: '44"', shoulder: '19.5"', sleeve: '35"' },
  { size: 'XL', collar: '17.5"', chest: '47"', shoulder: '20.5"', sleeve: '36"' },
];

const ShirtSizeChart = () => {
  const { t } = useLanguage();

  return (
    <ChartContainer>
      <Title>{t('shirtSizeTitle')}</Title>
      <Table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Collar</th>
            <th>Chest</th>
            <th>Shoulder</th>
            <th>Sleeve Length</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((s) => (
            <tr key={s.size}>
              <td>{s.size}</td>
              <td>{s.collar}</td>
              <td>{s.chest}</td>
              <td>{s.shoulder}</td>
              <td>{s.sleeve}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ChartContainer>
  );
};

export default ShirtSizeChart;